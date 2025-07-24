import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { name, age, qualification, gender, phone } = body;

  const instanceId = 'instance133849';
  const token = 'troeknjq2qhgqxqkkell8f';
  const myNumber = '923303917931'; // Your own number (to receive lead)

  const userMessage = `👋 Assalamualaikum ${name}!\n\nAapka form receive hogaya hai ✅\n\n👤 Name: ${name}\n🎓 Qualification: ${qualification}\n📱 Phone: ${phone}\n\nJazakAllah for using our Career Helper! 🌟`;

  const ownerMessage = `📥 New Career Lead!\n\n👤 Name: ${name}\n🎂 Age: ${age}\n🎓 Qualification: ${qualification}\n🚻 Gender: ${gender}\n📱 Phone: ${phone}`;

  // Step 1: Send auto-response to user
  await fetch(`https://api.ultramsg.com/${instanceId}/messages/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
      to: `+92${phone}`,
      body: userMessage,
    }),
  });

  // Step 2: Notify yourself (admin)
  await fetch(`https://api.ultramsg.com/${instanceId}/messages/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
      to: `+${myNumber}`,
      body: ownerMessage,
    }),
  });

  return NextResponse.json({ success: true, message: 'Messages sent' });
}
