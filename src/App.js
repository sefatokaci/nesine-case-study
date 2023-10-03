import { useEffect, useState, } from "react";
import './App.css';
import Table from "./components/Table";
import Basket from "./components/Basket";
import Context from "./context";

function App() {

  const [bets, setBets] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetch('https://nesine-case-study.onrender.com/bets')
    .then((res) => res.ok && res.json())
    .then((data) => setBets(data))
    .catch((err) => console.error(err));
  }, []);

  const data = {
    bets,
    setBets,
    basket,
    setBasket,
  };

  return (
    <Context.Provider value={data}>
      {basket.length > 0 && <Basket />}
      {bets.length > 0 && <Table />}
    </Context.Provider>
  );
}

export default App;
