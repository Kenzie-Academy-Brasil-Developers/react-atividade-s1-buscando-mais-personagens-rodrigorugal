import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  }, [next]);

  const nextPage = () => {
    setNext(next + 1);
  };
  const downPage = () => {
    next > 1 ? setNext(next - 1) : setNext(next);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Characters characters={characters} />

        <div className="bntPages">
          <button onClick={downPage}> &lt; </button>
          <button onClick={nextPage}> &gt; </button>
        </div>
      </header>
    </div>
  );
}

export default App;
