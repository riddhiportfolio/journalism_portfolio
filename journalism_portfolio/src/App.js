import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>Riddhi Thakur</h1>
          <p>Journalist | Storyteller | Media Strategist</p>
        </div>
      </header>

      <main className="container">
        <section>
          <h2>About Me</h2>
          <p>
            Passionate journalist with a flair for investigative reporting, media outreach,
            and content creation. From student publications to Times Network,
            I’ve explored every medium to tell compelling stories.
          </p>
        </section>

        <section>
          <h2>Projects & Achievements</h2>
          <ul>
            <li>
              <h3>IIMUN (2020–2022)</h3>
              <p>Organized youth conferences; conducted interviews & led PR initiatives.</p>
            </li>
            <li>
              <h3>Papillon Communications (2023)</h3>
              <p>Executed PR campaigns, influencer tie-ups, and media outreach.</p>
            </li>
            <li>
              <h3>Times Network (2024)</h3>
              <p>Managed content and SEO for digital platforms like Zoom TV & Times Foodie.</p>
            </li>
            <li>
              <h3>The News Week – Newspaper & Magazine (2025)</h3>
              <p>Created entire editions, writing across genres and managing editorial flow.</p>
            </li>
            <li>
              <h3>Investigative Journalism & Field Reporting</h3>
              <p>First place in city-wide broadcast competition; covered local & international topics.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Reach out at <a href="mailto:riddhi@example.com">riddhi@example.com</a>
          </p>
        </section>
      </main>

      <footer className="footer">
        © 2025 Riddhi Thakur. All rights reserved.
      </footer>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
export default App;