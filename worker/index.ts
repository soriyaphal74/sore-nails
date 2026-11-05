// THE SMALL SERVER PART of the website, running on Cloudflare.
// Most of the site is plain files. This code only handles one thing:
// when a customer sends the booking form (POST /api/book), it sends the
// booking to the salon's Telegram using a Telegram bot.
//
// It needs two secrets, set in the Cloudflare dashboard (never in this file):
//   TELEGRAM_BOT_TOKEN  the bot's secret code from @BotFather
//   TELEGRAM_CHAT_ID    the salon owner's Telegram ID (from @userinfobot)

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}

// The form fields, and the longest answer we accept for each.
const FIELDS = {
  name: 80,
  phone: 30,
  service: 120,
  date: 20,
  time: 20,
  notes: 500,
} as const;

function json(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

async function handleBooking(request: Request, env: Env) {
  if (request.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return json({ ok: false, error: 'not-set-up' }, 503);
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'bad-request' }, 400);
  }

  // A hidden "website" box that people can't see. Robots fill it in, so we
  // quietly ignore those messages.
  if (typeof data.website === 'string' && data.website.trim() !== '') return json({ ok: true });

  const answers: Record<string, string> = {};
  for (const [field, max] of Object.entries(FIELDS)) {
    const value = typeof data[field] === 'string' ? (data[field] as string).trim() : '';
    if (value.length > max) return json({ ok: false, error: 'too-long' }, 400);
    answers[field] = value;
  }
  if (!answers.name || !answers.phone || !answers.service) {
    return json({ ok: false, error: 'missing' }, 400);
  }

  const lines = [
    '💅 New booking — SORÉ Nails',
    '',
    `👤 ${answers.name}`,
    `📞 ${answers.phone}`,
    `✨ ${answers.service}`,
    answers.date || answers.time ? `🗓 ${[answers.date, answers.time].filter(Boolean).join(' at ')}` : '',
    answers.notes ? `📝 ${answers.notes}` : '',
  ].filter((line, i) => line !== '' || i === 1);

  const telegram = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text: lines.join('\n') }),
  });
  if (!telegram.ok) {
    console.error('Telegram error', telegram.status, await telegram.text());
    return json({ ok: false, error: 'telegram' }, 502);
  }
  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/book') return handleBooking(request, env);
    // Everything else is a normal page or file.
    return env.ASSETS.fetch(request);
  },
};
