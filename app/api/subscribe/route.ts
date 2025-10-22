import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, consent } = await req.json();
    if (!email || !consent) return NextResponse.json({ ok: false }, { status: 400 });

    const apiKey = process.env.BREVO_API_KEY!;
    const listId = process.env.BREVO_LIST_ID!;

    const resp = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [Number(listId)],
        attributes: { consent: true, source: "landing" },
        updateEnabled: true
      })
    });

    if (!resp.ok) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
