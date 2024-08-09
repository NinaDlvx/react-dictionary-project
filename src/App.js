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
        <footer className="text-center">Coded by Nina Delvaux</footer>
      </div>
    </div>
  );
}
