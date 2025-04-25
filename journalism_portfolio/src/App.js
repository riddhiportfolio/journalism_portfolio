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

      <section className="experience-section">
        <h2>Professional Experience</h2>
        
        <div className="experience-item">
          <h3>IIMUN (2020-2022)</h3>
          <p>Organized city-wide youth conferences, handling event logistics, public relations, and sponsorships.</p>
          <p>Conducted interviews during IIMUN conferences that highlighted youth perspectives on international diplomacy.</p>
          <div className="experience-links">
            <a href="https://drive.google.com/file/d/1VGfP05sZPq7T5dGRjjVteagX5Tx6oMDB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Letter of Recommendation</a>
            <a href="https://drive.google.com/file/d/1VGfP05sZPq7T5dGRjjVteagX5Tx6oMDB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Interview Samples</a>
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

      <section className="publications-section">
        <h2>Published Articles</h2>
        <div className="article-item">
          <h4>Housewife loses ₹5 Lakh in crypto scam</h4>
          <p>An investigative piece on the rise of crypto scams in urban households.</p>
          <a href="https://thedailygazette.substack.com/p/housewife-loses-5-lakh-in-crypto?utm_campaign=post&utm_medium=web&triedRedirect=true" target="_blank" rel="noopener noreferrer">Read Article</a>
        </div>
        <div className="article-item">
          <h4>Nirbhaya Squad: Big Promises, Little Action</h4>
          <p>Reporting on systemic gaps in Mumbai's women's safety initiative.</p>
          <a href="https://thedailygazette.substack.com/p/nirbhaya-squad-big-promises-little?utm_campaign=post&utm_medium=web&triedRedirect=true" target="_blank" rel="noopener noreferrer">Read Article</a>
        </div>
      </section>

      <section className="projects-section">
        <h2>Notable Projects</h2>
        
        <div className="project-item">
          <h3>The News Week Newspaper (2025)</h3>
          <p>Authored an entire front-page edition for the college newspaper, covering diverse topics from news to opinion pieces.</p>
          <a href="https://drive.google.com/file/d/1HcyIdNE9FuXxUUbjFKmWjCEFPWOzMeVL/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Newspaper</a>
        </div>

        <div className="project-item">
          <h3>The News Week Magazine (2025)</h3>
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