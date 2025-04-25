import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-gray-100 py-8 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Riddhi Thakur</h1>
          <p className="text-lg text-gray-600">Journalist | Storyteller | Media Strategist</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Passionate journalist with a flair for investigative reporting, media outreach, and content creation. From student publications to Times Network, I’ve explored every medium to tell compelling stories.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4">Projects & Achievements</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-semibold">IIMUN (2020–2022)</h3>
              <p>Organized youth conferences; conducted interviews & led PR initiatives.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Papillon Communications (2023)</h3>
              <p>Executed PR campaigns, influencer tie-ups, and media outreach.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Times Network (2024)</h3>
              <p>Managed content and SEO for digital platforms like Zoom TV & Times Foodie.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">The News Week – Newspaper & Magazine (2025)</h3>
              <p>Created entire editions, writing across genres and managing editorial flow.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Investigative Journalism & Field Reporting</h3>
              <p>First place in city-wide broadcast competition; covered local & international topics.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4">Contact</h2>
          <p className="text-gray-700">Reach out at <a className="text-indigo-600 underline" href="mailto:riddhi@example.com">riddhi@example.com</a></p>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © 2025 Riddhi Thakur. All rights reserved.
      </footer>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
