import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer>
        <p>
          This project was{" "}
          <a
            href="https://github.com/nmariahpaul/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            coded by Mariah Paul
          </a>
          and is{" "}
          <a
            href="https://eclectic-naiad-a616b2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
