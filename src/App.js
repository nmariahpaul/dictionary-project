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
          <small>
            <a
              href="https://github.com/nmariahpaul/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-sourced
            </a>
            code by Mariah Paul
          </small>
        </p>
      </footer>
    </div>
  );
}
