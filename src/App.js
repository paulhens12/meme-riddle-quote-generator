import './App.css';
import {useState} from 'react';
import React from 'react';
import images from './components/images/Images';
import comedyJokes from './components/Comedys';
import riddles from './components/Riddle';
import quotes from './components/Quotes';



function App() {

  const [picture, setPicture] = useState(null);
  const [joke, setJoke] = useState(null);
  const [currentRiddle, setCurrentRiddle] = useState(null);
  const [showAnswer, setShowAnswer] = useState(null);
  const [quote, setQuote] = useState(null);



  // button
  const [showButton, setShowButton] = useState(false);


  function generateMeme(){
    setPicture(images[Math.floor(Math.random()*images.length)]);
    setJoke(false);
    setCurrentRiddle(false);
    setQuote(false);
  }

  function generateComedy(){
    setJoke(comedyJokes[Math.floor(Math.random()*comedyJokes.length)]);
    setPicture(false);
    setCurrentRiddle(false);
    setQuote(false);

  }

  function generateQuote(){
    setQuote(quotes[Math.floor(Math.random()*quotes.length)]);
    setJoke(false);
    setCurrentRiddle(false);
    setPicture(false);
  }

  const getRandomRiddle = () => {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    const randomRiddle = riddles[randomIndex];
    setCurrentRiddle(randomRiddle);
    setShowAnswer(false); 
    setShowButton(true);

    setPicture(false);
    setJoke(false);
    setQuote(null)
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setShowButton(false);
  };



  return(
    <>
    <h1>Let's Have Some Fun</h1>
    <div className="container">
      <div className="left-side">
        <button onClick={generateMeme} disabled={currentRiddle && !showAnswer}>show a meme</button><br />
        <button onClick={generateComedy} disabled={currentRiddle && !showAnswer}>tell me a comedy</button><br />
        <button onClick={generateQuote} disabled={currentRiddle && !showAnswer}>random quote</button> <br />
        <button onClick={getRandomRiddle} disabled={currentRiddle && !showAnswer}>riddle me</button>
      </div>

      
      <div className="right-side">
        <img src={picture}/>
        <p>{joke}</p>
        <p>{quote}</p>

        <div className="riddleAns">
        {currentRiddle && (
          <div>
            <p>{currentRiddle.riddle}</p>
              {showAnswer && <p className='riddleAnswer'>Answer: {currentRiddle.answer}</p>}
          </div>
        )}

        {showButton && <button onClick={handleShowAnswer} disabled={!currentRiddle}>
        reveal riddle answer
        </button>}
        </div>
      </div>
    </div></>
  )
}

export default App;
