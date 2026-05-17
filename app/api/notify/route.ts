import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const report = await request.json();
  const subject = `${report.type} Completed ~ Ticket:${report.ticket}`;
  const issues = (report.issues || []).map((issue: string) => `<p><strong>${issue}</strong></p>`).join('');
  const html = `<h2>${subject}</h2><p>A ${report.type} has been submitted for ${report.unit}.</p><h3>Issues Identified:</h3>${issues}<p>Ticket: <strong>${report.ticket}</strong></p>`;

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: true, mocked: true, message: 'No RESEND_API_KEY set. Email was mocked.', report });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const data = await resend.emails.send({
    from: process.env.FIRE_FORMS_FROM || 'FireForms <onboarding@resend.dev>',
    to: (process.env.FIRE_FORMS_TO || '').split(',').map((s) => s.trim()).filter(Boolean),
    subject,
    html,
  });

  return NextResponse.json({ ok: true, data });
}
