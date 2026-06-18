import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, service, phone } = body;

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!message || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Please add a few more details about what you need." },
      { status: 400 },
    );
  }

  // NOTE: this is a scaffold endpoint. In production, wire this up to an
  // email provider (Resend, SendGrid) or CRM webhook. For now it validates
  // the submission and acknowledges receipt.
  console.log("New contact submission:", { name, email, phone, service, message });

  return NextResponse.json({ success: true });
}
