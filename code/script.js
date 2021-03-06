// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const playAgainButton = document.getElementById("playAgain")
const findOutButton = document.getElementById("filter")
const winOrLoseWrapper = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    character: "friendly",
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    character: "aggressive",
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    character: "thoughtful",
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    character: "friendly",
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    character: "friendly",
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    character: "confused",
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    character: "friendly",
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    character: "aggressive",
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    character: "friendly",
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    character: "aggressive",
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    character: "aggressive",
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    character: "friendly",
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    character: "thoughtful",
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    character: "aggressive",
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    character: "aggressive",
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    character: "confused",
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    character: "friendly",
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    character: "aggressive",
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    character: "friendly",
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    character: "friendly",
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    character: "confused",
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    character: "friendly",
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    character: "confused",
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    character: "aggressive",
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion 
let numGuess = 0
let charactersInPlay = CHARACTERS

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      category: category
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: "eyeColor",
      value: value,
      category: category,
    }
  } else if (category === 'character') {
    currentQuestion = {
      attribute: "character",
      value: value,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,      
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  }
}

const countingGuesses = () => {
  //numGuess += 1
  infoText.innerHTML = `
  number of guesses: ${numGuess}
  `
  if (numGuess === 3) {
    alert(
      "You have made 3 guesses, now you must choose the person"
    )
  } else {
        //Do nothing
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  let keep
  
  if (currentQuestion.attribute === "hairColor" && currentQuestion.value === secret.hairColor) {
    keep = true
  } 
  else if (currentQuestion.attribute === "eyeColor" && currentQuestion.value === secret.eyeColor) {
    keep = true
  }
  else if (currentQuestion.attribute === "character" && currentQuestion.value === secret.character) {
    keep = true
  }  
  else if (currentQuestion.attribute === "glasses" && currentQuestion.value === secret.glasses) {
    keep = true
  }
  else if (currentQuestion.attribute === "hat" && currentQuestion.value === secret.hat) {
    keep = true
  }
  else if (currentQuestion.attribute === "smoker" && currentQuestion.value === secret.smoker) {
    keep = true
  } else {
    keep = false
  }  

  filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  group = currentQuestion.category
  attribute = currentQuestion.attribute
  value = currentQuestion.value
  
  // Show the correct alert message for different categories
  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`
      )
    }
  }
  else if (group === 'other') {
    if (keep) {
      alert(
        `Yes, the person is ${attribute}! Keep all who ${attribute}`
      )
    } else {
      alert(
        `No, the person is not a ${attribute}! Remove all who ${attribute}`
      )
    }
  }
  else if (group === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all who has ${value} hair`
      )
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all persons with yellow hair"
    } else {
      alert(
        `No, the person does not have ${value} hair! Remove all who has ${value}`
      )
      // alert popup that says something like: "NO, the person doesnt have yellow hair! Remove all persons with yellow hair"
    }
  }
  else if (group === 'eye color') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all who has ${value}`
      )
    } else {
      alert(
        `No, the person does not have ${value} eyes! Remove all who has ${value}`
      )
    }
  }
  else if (group === 'character') {
    if (keep) {
      alert(
        `Yes, the person has ${value} character! Keep all who are ${value}`
      )
    } else {
      alert(
        `No, the person is not ${value}! Remove all who are ${value}`
      )
    }
  }

  // filter to keep or remove based on the keep variable.
  if (keep === false) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value) 
  } else {
  charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)

  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
  countingGuesses()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  confirm("Are you sure?")
  checkMyGuess(suspect)
}

const checkMyGuess = (suspect) => {
  if (secret.name === suspect) {
    board.style.display = "none";
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.innerHTML = `
      <audio autoplay= "autoplay">
        <source src= "sound/victory.wav" type="audio/mpeg">
      </audio>
      <h1 class="glow-won">You have WON !!!</h1>
    `
  } else {
    board.style.display = "none";
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.innerHTML = `
      <audio autoplay = "autoplay">
        <source src= "sound/blaster.wav" type="audio/mpeg"/>
      </audio>
      <h1 class="glow-lost">You have lost!</h1>
    `
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', () => {
  location.reload()
})

questions.addEventListener("change", () => {
  selectQuestion(questions.value)
})

//
findOutButton.addEventListener("click", () => {
  numGuess +=1
  if (numGuess <= 3) {
    checkQuestion()
  }else {
    countingGuesses()
  }
})

playAgainButton.addEventListener("click", () => {
  location.reload()
})