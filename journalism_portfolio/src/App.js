import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Journalism Portfolio — Riddhi Thakur</h1>
        <blockquote>
          "Journalism is printing what someone else does not want printed: everything else is public relations." 
          <footer>— George Orwell</footer>
        </blockquote>
      </header>

      <section className="current-work-section">
        <h2>Currently Working With</h2>
        <div className="current-work-item">
          <h3>Youth Incorporated Magazine</h3>
          <p>Contributing writer and journalist covering youth perspectives, social issues, and contemporary topics that matter to the next generation.</p>
          <p>Specializing in editorial pieces, feature stories, and in-depth reporting that amplifies young voices and addresses pressing societal concerns.</p>
          <div className="work-highlights">
            <h4>Recent Contributions:</h4>
            <ul>
              <li>Editorial reporting on social justice issues</li>
              <li>Feature stories highlighting youth activism</li>
              <li>In-depth analysis of contemporary social trends</li>
              <li>Opinion pieces on policy matters affecting young people</li>
            </ul>
          </div>
          <div className="experience-links">
            <a href="https://youthincmag.com/author/riddhi-thakur" target="_blank" rel="noopener noreferrer">View Published Work</a>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <h2>Professional Experience</h2>
        
        <div className="experience-item">
          <h3>IIMUN (2020-2022)</h3>
          <p>Organized city-wide youth conferences, handling event logistics, public relations, and sponsorships.</p>
          <p>Conducted interviews during IIMUN conferences that highlighted youth perspectives on international diplomacy.</p>
          <div className="experience-links">
            <a href="https://drive.google.com/file/d/1VGfP05sZPq7T5dGRjjVteagX5Tx6oMDB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Letter of Recommendation</a>
            <a href="https://drive.google.com/drive/folders/1TMmu6pMt839OOqHwvsx8guOUDQR-O3zs?usp=sharing" target="_blank" rel="noopener noreferrer">Interview Samples</a>
          </div>
        </div>

        <div className="experience-item">
          <h3>Papillon Communications (2023)</h3>
          <p>Managed influencer partnerships and PR campaigns for lifestyle brands, securing features in top publications.</p>
          <div className="experience-links">
            <a href="https://drive.google.com/file/d/1cE-8qJOKtvLt_pTS8AHhugZ0AtmldlQh/view?usp=sharing" target="_blank" rel="noopener noreferrer">Experience Letter</a>
          </div>
        </div>

        <div className="experience-item">
          <h3>Times Network (2024)</h3>
          <p>Managed editorial content and SEO strategies for Zoom TV, Telly Talk, and Times Foodie digital platforms.</p>
          <div className="experience-links">
            <a href="https://drive.google.com/file/d/1NVnY1Vhds2aCQICWqvg9xPpWLGcVAvWD/view?usp=sharing" target="_blank" rel="noopener noreferrer">Letter of Recommendation</a>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2>Notable Projects</h2>
        
        <div className="project-item">
          <h3>Experimental Newspaper (2025)</h3>
          <p>Authored an entire front-page edition for the college newspaper, covering diverse topics from news to opinion pieces.</p>
          <a href="https://drive.google.com/file/d/1HcyIdNE9FuXxUUbjFKmWjCEFPWOzMeVL/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Newspaper</a>
        </div>

        <div className="project-item">
          <h3>Experimental Magazine (2025)</h3>
          <p>Conceptualized and edited a political magazine covering national trending topics.</p>
          <a href="https://drive.google.com/file/d/17lNbEwnzbylNGgcajqcrTI-W-d3cUcID/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Magazine</a>
        </div>

        <div className="project-item">
          <h3>Investigative Journalism Competition (2025)</h3>
          <p>Won first place in a competitive investigative journalism challenge against top media colleges in Mumbai.</p>
          <a href="https://drive.google.com/file/d/1ihwL7WklWQp_pfuyuRg6lo-n5w59y61I/view?usp=sharing" target="_blank" rel="noopener noreferrer">Watch Broadcast</a>
        </div>

        <div className="project-item">
          <h3>Field Reporting Project (2025)</h3>
          <p>Led a college field reporting team covering diverse topics from international news to sports.</p>
          <a href="https://drive.google.com/file/d/1ca2Ove0m7cnc5Du5Z-jKBvg7wlib4hBt/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Coverage</a>
        </div>
      </section>
    </div>
  );
};

export default App;