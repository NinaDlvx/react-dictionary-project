import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header">My React Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Nina Delvaux</footer>
      </div>
    </div>
  );
}
