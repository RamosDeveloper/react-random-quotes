import { useState, useEffect } from "react";

import './App.css';

import Container from './components/Container';
import quotes from './data/quotes.json';

const App = () => {
  const [quote,setQuote] = useState(null);
  const [color,setColor] = useState("#7fc5bb");

  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  const setRandomQuoteAndColor = () => {
    let randomColor = ("#" + Math.floor(Math.random()*16777215).toString(16));

    if(randomColor.toLocaleLowerCase() === "#ffffff" ) randomColor = ("#" + Math.floor(Math.random()*16777215).toString(16));

    setQuote(quotes[getRandomNumber(quotes.length)]);
    setColor(randomColor);
  }

  useEffect(() => {
    setRandomQuoteAndColor();
  },[]);

  return (
    <div className="App">
        { quote != null && <Container quote={quote} color={color} setRandomQuoteAndColor={setRandomQuoteAndColor} /> }
    </div>
  );
};

export default App;
