import anagramGameBox from './images/anagram-game-box.jpg';
import './App.css';
import React from 'react';

function App() {

  const [allLetters, setAllLetters] = React.useState([])
  const [revealedLetters, setRevealedLetters] = React.useState([])
  const [wordOne, setWordOne] = React.useState(["e", "x", "a", "m", "p", "l", "e"])
  const [wordTwo, setWordTwo] = React.useState(["t", "e", "s", "t"])
  const [wordThree, setWordThree] = React.useState(["g", "a", "m", "e"])
  const [wordFour, setWordFour] = React.useState([])
  const [wordFive, setWordFive] = React.useState([])
  const [wordSix, setWordSix] = React.useState([])
  const [wordSeven, setWordSeven] = React.useState([])
  const [wordEight, setWordEight] = React.useState([])
  const [wordNine, setWordNine] = React.useState([])
  const [wordTen, setWordTen] = React.useState([])

  const allLettersArray = []
  let count = 0

  const addLetters = (letter, number) => {
    while (number > 0){
      allLettersArray.push(letter)
      number --
    } 
  }

  addLetters("a", 7)
    addLetters("b", 2)
    addLetters("c", 3)
    addLetters("d", 4)
    addLetters("e", 10)
    addLetters("f", 2)
    addLetters("g", 3)
    addLetters("h", 3)
    addLetters("i", 4)
    addLetters("j", 2)
    addLetters("k", 2)
    addLetters("l", 4)
    addLetters("m", 4)
    addLetters("n", 5)
    addLetters("o", 5)
    addLetters("p", 2)
    addLetters("q", 2)
    addLetters("r", 5)
    addLetters("s", 4)
    addLetters("t", 4)
    addLetters("u", 5)
    addLetters("v", 2)
    addLetters("w", 2)
    addLetters("x", 1)
    addLetters("y", 2)
    addLetters("z", 1)

  React.useEffect(() => {
    setAllLetters(allLettersArray)
  }, [])

  const turnLetter = () => {
    const randomNumber = Math.floor(Math.random() * allLetters.length)
    const randomLetter = allLetters[randomNumber]

    setRevealedLetters([...revealedLetters, randomLetter])
    console.log('Revealed letters ', revealedLetters)

    allLetters.splice(randomNumber, 1)

    setAllLetters(allLetters)
  }

  console.log('All letters ', allLetters)

  return (
    <div className="App">
      <header className="App-header">
        <img src={anagramGameBox} className="App-logo" alt="logo" />
        <h2>
          Let's play Anagrams!
        </h2>
      </header>
      <body>
        <button onClick={turnLetter}>
          Turn Letter
        </button>
        <ul className="letters-list">
          {revealedLetters.map(letter => {
            count ++
            return (
            <li key={letter + count}>
              <div className="letter-tile">
                {letter}
              </div>
            </li>
            )
          })}
        </ul>
        <ul className="word">
          {wordOne.map(letter => {
              count ++
              return (
              <li key={letter + count}>
                <div className="letter-tile">
                  {letter}
                </div>
              </li>
              )
            })}
        </ul>
        <ul className="word">
          {wordTwo.map(letter => {
              count ++
              return (
              <li key={letter + count}>
                <div className="letter-tile">
                  {letter}
                </div>
              </li>
              )
            })}
        </ul>
        <ul className="word">
          {wordThree.map(letter => {
              count ++
              return (
              <li key={letter + count}>
                <div className="letter-tile">
                  {letter}
                </div>
              </li>
              )
            })}
        </ul>
      </body>
    </div>
  );
}

export default App;
