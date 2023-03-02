import React, { useState, useEffect, useRef } from "react";
import { firestore } from "../firebase";
import firebase from "../firebase";

const categories = {
  animals: ["dog", "cat", "bird", "lion", "tiger"],
  fruits: ["apple", "banana", "orange", "pear", "grape"],
  countries: ["USA", "Japan", "China", "Germany", "France"],
};

const getInitialScore = () => {
  const scoreFromStorage = localStorage.getItem("score");
  if (scoreFromStorage) {
    return parseInt(scoreFromStorage);
  }
  return 0;
};

const Game = () => {
  const [category, setCategory] = useState("animals");
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [lives, setLives] = useState(3);
  const [guessWord, setGuessWord] = useState("");
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [lettersToGuess, setLettersToGuess] = useState([]);
  const [guessedWord, setGuessedWord] = useState([]);
  const [purchasedVowels, setPurchasedVowels] = useState([]);
  const [showEndGameModal, setShowEndGameModal] = useState(false);
  const [score, setScore] = useState(getInitialScore());


  const wordPool = categories[category];
  const currentWord = wordPool[Math.floor(Math.random() * wordPool.length)];
  const countdownRef = useRef(null);
/*
  const [familieUndFreunde, setFamilieUndFreunde] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore.collection("Familie und Freunde").get();
      setFamilieUndFreunde(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

const [geldUndArbeit, setGeldUndArbeit] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const data = await firebase.firestore().collection("Geld und Arbeit").get();
    setGeldUndArbeit(data.docs.map((doc) => doc.data()));
  };

  fetchData();
}, []);

const [gesundheitUNdWohlbefinden, setGesundheitUndWohlbefinden] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const data = await firebase.firestore().collection("Gesundheit und Wohlbefinden").get();
    setGeldUndArbeit(data.docs.map((doc) => doc.data()));
  };

  fetchData();
}, []);
*/
  useEffect(() => {
    setWord(currentWord.toLowerCase());
    setGuessedLetters([]);
    setLives(3);
    setGuessWord("");
    setGameLost(false);
    setGameWon(false);
    setLettersToGuess(currentWord.toLowerCase().split(""));
  }, [category]);

  useEffect(() => {
    if (lives === 0) {
      handleGameLost();
    }
  }, [lives]);

  useEffect(() => {
    if (gameWon) {
    setTimeout(() => {
    handleResetGame();
    }, 3000);
    }
    }, [gameWon]);

    useEffect(() => {
      if (gameWon) {
        localStorage.setItem("score", score);
        setTimeout(() => {
          handleResetGame();
        }, 3000);
      }
    }, [gameWon]);

  useEffect(() => {
    if (gameLost) {
      let counter = 3;
      const intervalId = setInterval(() => {
        counter--;
        if (counter === 0) {
          setGameLost(false);
          setScore(100);
          setLives(3);
          clearInterval(intervalId);
        }
      }, 1000);
    }
  }, [gameLost]);

  const handleGuess = (letter) => {
    if (word.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      setLettersToGuess(lettersToGuess.filter((l) => l !== letter));
      if (lettersToGuess.length === 1) {
        if (purchasedVowels.includes(lettersToGuess[0])) {
          setGameWon(true);
        } else {
          const newScore = score + Math.floor(Math.random() * 100);
          setScore(newScore);
          setGameWon(true);
        }
      }
    } else {
      if (purchasedVowels.includes(letter)) {
        alert(`The vowel '${letter}' is not in the word.`);
      } else {
        setLives(lives - 1);
      }
    }
  };
  

  const handleVowelPurchase = (vowel) => {
    const newScore = score - 20;
    if (newScore < 0) {
      return;
    }
    setScore(newScore);
    setPurchasedVowels([...purchasedVowels, vowel]);
    setLettersToGuess(lettersToGuess.filter((l) => l !== vowel));
    setGuessedLetters([...guessedLetters, vowel]);
  };
  

  const handleGameLost = () => {
    setGameLost(true);
    countdownRef.current = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownRef.current);
      const categoriesWithoutCurrent = Object.keys(categories).filter(
        (c) => c !== category
      );
      const newCategory =
        categoriesWithoutCurrent[
          Math.floor(Math.random() * categoriesWithoutCurrent.length)
        ];
      const wordPool = categories[newCategory];
      const newWord = wordPool[Math.floor(Math.random() * wordPool.length)];
      setCategory(newCategory);
      setWord(newWord.toLowerCase());
      setGuessedLetters([]);
      setLives(3);
      setScore(100);
      setGuessWord("");
      setGameLost(false);
    }, countdown * 1000);
  };

  

const handleWordGuess = () => {
    const input = guessWord.toLowerCase();
    if (!"aeiou".includes(input)) {
      if (input === word || guessedWord.join("") === word) {
        const newScore = score + Math.floor(Math.random() * 100);
        setScore(newScore);
        handleResetGame();
      } else {
        setLives(lives - 1);
        if (lives === 1) {
          setGameLost(true);
        }
      }
    } else {
      alert("Vowels are not allowed in the word input field.");
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLetterInputChange = (event) => {
    const input = event.target.value.trim().toLowerCase();
    if (input.match(/^[a-z]$/)) {
      if (!"aeiou".includes(input)) {
        handleGuess(input);
        event.target.value = "";
      } else {
        alert("Vowels are not allowed in the letter input field.");
      }
    }
  };

  const handleResetGame = () => {
    const categoriesWithoutCurrent = Object.keys(categories).filter(
      (c) => c !== category
    );
    const newCategory =
      categoriesWithoutCurrent[
        Math.floor(Math.random() * categoriesWithoutCurrent.length)
      ];
    const wordPool = categories[newCategory];
    const newWord = wordPool[Math.floor(Math.random() * wordPool.length)];
    setCategory(newCategory);
    setWord(newWord.toLowerCase());
    setGuessedLetters([]);
    setLives(3);
    setGuessWord("");
    setGuessedWord(newWord.toLowerCase().split(""));
    setGameWon(false);
    const initialScore = getInitialScore();
    setScore(initialScore);
  };
  

  return (
    <div className="Game">
      {gameLost && (
        <div>
          <h1>You Lost!</h1>
          <p>The game is restarting</p>
        </div>
      )}
      {gameWon && (
        <div>
          <h1>You Won!</h1>
          <p>A new word will be chosen!</p>
        </div>
      )}
      {!gameLost && !gameWon && (
        <>
          <h1>Word Guessing Game</h1>
          <h2>Category: {category}</h2>
          <h2>Score: {score}</h2>
          <h2>Lives: {lives}</h2>

          <div>
            {word.split("").map((letter, index) => (
              <span key={index}>
                {guessedLetters.includes(letter) ? letter : "_"}
              </span>
            ))}
          </div>
          <div>
            <label htmlFor="letter-input">Guess a letter:</label>
            <input
              id="letter-input"
              type="text"
              maxLength="1"
              size="1"
              onChange={handleLetterInputChange}
            />
          </div>
          <div>
            <button onClick={handleWordGuess}>Submit</button>
          </div>
          <div>
            <button onClick={() => handleVowelPurchase("a")}>
              Buy vowel A
            </button>
            <button onClick={() => handleVowelPurchase("e")}>
              Buy vowel E
            </button>
            <button onClick={() => handleVowelPurchase("i")}>
              Buy vowel I
            </button>
            <button onClick={() => handleVowelPurchase("o")}>
              Buy vowel O
            </button>
            <button onClick={() => handleVowelPurchase("u")}>
              Buy vowel U
            </button>
          </div>
        </>
      )}
    </div>
  );
  
};

export default Game;
