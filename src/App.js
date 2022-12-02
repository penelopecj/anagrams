import anagramGameBox from './images/anagram-game-box.jpg';
import './App.css';
import React from 'react';

function App() {

  const [allLetters, setAllLetters] = React.useState([])
  const [revealedLetters, setRevealedLetters] = React.useState([])
  const [typedWord, setTypedWord] = React.useState('')
  const [wordOne, setWordOne] = React.useState([])
  
  // "e", "x", "a", "m", "p", "l", "e"
  const [wordTwo, setWordTwo] = React.useState([])
  // "t", "e", "s", "t"
  const [wordThree, setWordThree] = React.useState([])
  // "g", "a", "m", "e"
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

  const makeWord = (e) => {
    console.log(e.target.value)
    setTypedWord(e.target.value)

    // setWordOne(e.target.value.split(''))

    // if (!wordOne.length) {
    //   setWordOne(e.target.value)
    // } else if (!wordTwo.length) {
    //   setWordTwo(e.target.value)
    // } else if (!wordThree.length) {
    //   setWordThree(e.target.value)
    // } else if (!wordFour.length) {
    //   setWordFour(e.target.value)
    // } else if (!wordFive.length) {
    //   setWordFive(e.target.value)
    // }

    // console.log({ wordOne })
    // console.log({ wordTwo })
    // console.log({ wordThree })
    // console.log({ wordFour })
    // console.log({ wordFive })
  }

  const submitWord = (e) => {
    e.preventDefault()

    console.log(typedWord)

    let splitWord = typedWord.split('')

    setWordOne(typedWord.split(''))

    let revealedLettersHolder = revealedLetters

    revealedLettersHolder.forEach(letter => {
      
      if (splitWord.includes(letter)) {
        revealedLettersHolder.splice(revealedLettersHolder[revealedLettersHolder.indexOf(letter)], 1)
        console.log('revelead letters left: ', revealedLettersHolder)
        // splitWord.splice(splitWord[splitWord.indexOf(letter)], 1)
        // console.log('split word letter left: ', splitWord)
      }
    })

    setRevealedLetters(revealedLettersHolder)

    setTypedWord('')
  }

  // console.log('All letters ', allLetters)

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
        <form className="word-submission">
          <input 
            placeholder="Type your word..." 
            value={typedWord}
            onChange={makeWord}
          />
          <input type="submit" 
          onClick={submitWord}/>
        </form>
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
