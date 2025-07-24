import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 border-b-4 border-blue-500 pb-2">
          About Career Helper 🧠💼
        </h1>

        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold">Career Helper</span> – your AI-powered companion
          in choosing the best path for your future! 🚀 Whether you're confused between fields,
          struggling to make a career switch, or just need a helpful suggestion — we've got you covered!
        </p>

        <p className="text-lg mb-6">
          This application uses intelligent questioning and a friendly interface to suggest the
          most suitable career options based on your interests, background, and goals.
        </p>

        {/* <p className="text-lg mb-6">
          💡 Built with ❤️ using <span className="font-semibold">Next.js</span>, <span className="font-semibold">Tailwind CSS</span>,
          and cutting-edge AI logic — all designed to give you clarity, confidence, and control over your future.
        </p> */}

        <div className="mt-8 text-sm text-gray-600">
          Developed with care by <strong>Noor Shaikh</strong> 🌟
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
// This is the About page of a Next.js application.