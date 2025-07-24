export default function Contact() {
  return (
    <main className="min-h-screen p-10 bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white">
      <h1 className="text-4xl font-extrabold mb-6">📞 Contact Us</h1>

      <p className="text-lg mb-6 text-gray-300">
        We did love to hear from you! Reach out for any career help, questions, or collaborations. 💼🤝
      </p>

      <div className="bg-white/10 p-6 rounded-2xl shadow-lg space-y-4 text-white backdrop-blur-md">
        <p>
          📧 <strong>Email:</strong>{' '}
          <a
            href="mailto:developernoorshaikh00@gmail.com"
            className="underline text-blue-300 hover:text-blue-400"
          >
            developernoorshaikh00@gmail.com
          </a>
        </p>

        <p>
          💬 <strong>WhatsApp:</strong>{' '}
          <a
            href="https://wa.me/923132272190?text=Hello%20Noor%20Shaikh%2C%20I%20need%20career%20guidance!"
            className="underline text-green-400 hover:text-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </p>

        <p>
          🌐 <strong>LinkedIn:</strong>{' '}
          <a
            href="https://linkedin.com/in/abdul-majeed-shaikh-904aa6278"
            className="underline text-blue-400 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/abdul-majeed-shaikh-904aa6278
          </a>
        </p>
      </div>
    </main>
  );
}
