import anagramGameBox from './images/anagram-game-box.jpg';
import './App.css';
import React from 'react';

function App() {

  const allLettersArray = []
  const [allLetters, setAllLetters] = React.useState([])
  const [revealedLetters, setRevealedLetters] = React.useState([])
  let count = 0

  const addLetters = (letter, number) => {
    while (number > 0){
      allLettersArray.push(letter)
      number --
    } 
  }

  addLetters("A", 7)
    addLetters("B", 2)
    addLetters("C", 3)
    addLetters("D", 4)
    addLetters("E", 10)
    addLetters("F", 2)
    addLetters("G", 3)
    addLetters("H", 3)
    addLetters("I", 4)
    addLetters("J", 2)
    addLetters("K", 2)
    addLetters("L", 4)
    addLetters("M", 4)
    addLetters("N", 5)
    addLetters("O", 5)
    addLetters("P", 2)
    addLetters("Q", 2)
    addLetters("R", 5)
    addLetters("S", 4)
    addLetters("T", 4)
    addLetters("U", 5)
    addLetters("V", 2)
    addLetters("W", 2)
    addLetters("X", 1)
    addLetters("Y", 2)
    addLetters("Z", 1)

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
      </header>
      <body>
        <h2>
          Let's play Anagrams!
        </h2>
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
      </body>
    </div>
  );
}

export default App;
