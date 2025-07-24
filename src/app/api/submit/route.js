import { NextResponse } from 'next/server';

const ULTRAMSG_INSTANCE_ID = 'instance133849';
const ULTRAMSG_TOKEN = 'troeknjq2qhgqxqkkell8f';
const ULTRAMSG_BASE_URL = `https://api.ultramsg.com/${ULTRAMSG_INSTANCE_ID}/messages/chat`;
const OWNER_NUMBER = '923303917931';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, age, qualification, gender, phone } = body;

    const suggestionMessage = `🎓 Hello ${name}!\nBased on your qualification (${qualification}), we suggest you explore exciting career paths! 🚀\nStay tuned! 😊`;

    const leadMessage = `📥 New Lead Received:\n👤 Name: ${name}\n🎂 Age: ${age}\n🎓 Qualification: ${qualification}\n🚻 Gender: ${gender}\n📱 Phone: ${phone}`;

    // Message to User
    const userRes = await fetch(ULTRAMSG_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: ULTRAMSG_TOKEN,
        to: phone,
        body: suggestionMessage,
      }),
    });

    // Message to You (Owner)
    const ownerRes = await fetch(ULTRAMSG_BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: ULTRAMSG_TOKEN,
        to: OWNER_NUMBER,
        body: leadMessage,
      }),
    });

    if (!userRes.ok || !ownerRes.ok) {
      throw new Error('WhatsApp message sending failed.');
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('💥 Error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}