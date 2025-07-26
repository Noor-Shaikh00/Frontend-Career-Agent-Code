'use client';
import { useState } from 'react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    qualification: '',
    gender: '',
    phone: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending... 📤');

    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus('✅ Sent successfully on WhatsApp!');
    } else {
      setStatus('❌ Failed to send: ' + data.error);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Career Guidance Form 🎓</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input type="text" name="name" placeholder="👤 Name" onChange={handleChange} required />
        <input type="text" name="age" placeholder="🎂 Age" onChange={handleChange} required />
        <input type="text" name="qualification" placeholder="📚 Qualification" onChange={handleChange} required />
        <input type="text" name="gender" placeholder="🚻 Gender" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="📱 Phone (with country code)" onChange={handleChange} required />
        <button type="submit" style={{ padding: '10px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
          Send to WhatsApp 🚀
        </button>
      </form>
      <p style={{ marginTop: '15px', color: '#333' }}>{status}</p>
    </div>
  );
}

