import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header">
          <h1>My React Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://github.com/NinaDlvx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nina Delvaux
          </a>
          , is{" "}
          <a
            href="https://github.com/NinaDlvx/react-dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          on Github and hosted on{" "}
          <a
            href="https://myreactdictionaryapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
