'use client';

import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    qualification: '',
    gender: '',
    phone: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('✅ Message Sent Successfully!');
      setFormData({ name: '', age: '', qualification: '', gender: '', phone: '' });
    } else {
      setStatus('❌ Failed to send message.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-purple-700">Career Suggestion Form</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} className="w-full border p-2 rounded" required />
        
        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border p-2 rounded" required>
          <option value="">Select Gender</option>
          <option value="Female">👩 Female</option>
          <option value="Male">👨 Male</option>
          <option value="Other">🌈 Other</option>
        </select>
        
        <input type="tel" name="phone" placeholder="Phone (92XXXXXXXXX)" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" required />
        
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
      {status && <p className="mt-3 text-center text-sm text-gray-700">{status}</p>}
    </div>
  );
}
