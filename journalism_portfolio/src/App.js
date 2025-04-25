import React from "react";

export default function JournalismPortfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Riddhi Thakur – Journalism Portfolio</h1>
        <p className="mt-2 text-xl italic text-gray-600">“Journalism is printing what someone else does not want printed: everything else is public relations.” – George Orwell</p>
      </header>

      <div className="space-y-10 max-w-4xl mx-auto">
        <Section
          title="IIMUN (2020–2022)"
          description="Organized city-wide youth conferences, handling event logistics, PR, and sponsorships. Conducted exclusive interviews during conferences."
          links={[
            { text: "Letter of Recommendation", url: "https://drive.google.com/file/d/1VGfP05sZPq7T5dGRjjVteagX5Tx6oMDB/view?usp=sharing" },
            { text: "Interview Samples", url: "https://drive.google.com/file/d/1VGfP05sZPq7T5dGRjjVteagX5Tx6oMDB/view?usp=sharing" },
          ]}
        />

        <Section
          title="Papillon Communications (2023)"
          description="Led influencer tie-ups and PR campaigns. Consistently landed features in top-tier publications."
          links={[
            { text: "Experience Letter", url: "https://drive.google.com/file/d/1cE-8qJOKtvLt_pTS8AHhugZ0AtmldlQh/view?usp=sharing" },
          ]}
        />

        <Section
          title="Times Network (2024)"
          description="Managed editorial and SEO for Zoom TV, Telly Talk, and Times Foodie. Scaled digital traffic through impactful content design."
          links={[
            { text: "Letter of Recommendation", url: "https://drive.google.com/file/d/1NVnY1Vhds2aCQICWqvg9xPpWLGcVAvWD/view?usp=sharing" },
          ]}
        />

        <Section
          title="Published Articles (2024)"
          description="Hard-hitting investigative journalism on crypto scams and Mumbai's women's safety initiatives."
          links={[
            { text: "Crypto Scam Article", url: "https://thedailygazette.substack.com/p/housewife-loses-5-lakh-in-crypto?utm_campaign=post&utm_medium=web&triedRedirect=true" },
            { text: "Nirbhaya Squad Article", url: "https://thedailygazette.substack.com/p/nirbhaya-squad-big-promises-little?utm_campaign=post&utm_medium=web&triedRedirect=true" },
          ]}
        />

        <Section
          title="The News Week Newspaper & Magazine (2025)"
          description="Wrote the entire front page and edited a full magazine covering national political topics."
          links={[
            { text: "View Newspaper", url: "https://drive.google.com/file/d/1HcyIdNE9FuXxUUbjFKmWjCEFPWOzMeVL/view?usp=sharing" },
            { text: "View Magazine", url: "https://drive.google.com/file/d/17lNbEwnzbylNGgcajqcrTI-W-d3cUcID/view?usp=sharing" },
          ]}
        />

        <Section
          title="Broadcast Journalism (2025)"
          description="Won investigative journalism competition and led field reporting on global news."
          links={[
            { text: "Watch Broadcast", url: "https://drive.google.com/file/d/1ihwL7WklWQp_pfuyuRg6lo-n5w59y61I/view?usp=sharing" },
            { text: "View Coverage", url: "https://drive.google.com/file/d/1ca2Ove0m7cnc5Du5Z-jKBvg7wlib4hBt/view?usp=sharing" },
          ]}
        />
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2025 Riddhi Thakur. All rights reserved.
      </footer>
    </div>
  );
}

function Section({ title, description, links }) {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <h2 className="text-2xl font-semibold mb-1">{title}</h2>
      <p className="mb-2 text-gray-700">{description}</p>
      <ul className="list-disc ml-6 text-blue-600">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
