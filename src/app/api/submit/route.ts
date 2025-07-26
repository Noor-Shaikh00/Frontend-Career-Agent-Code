import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, age, phone } = body;

    console.log('Form data received:', name, age, phone);

    // Yahan WhatsApp ya DB logic aa sakta hai

    return NextResponse.json({ success: true, message: 'Form submitted!' });
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong.' },
      { status: 500 }
    );
  }
}
