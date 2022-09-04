import './style.css';
import { ancientsData as Ancients } from "./data/ancients.js"
import { difficulties as Diff } from "./data/difficulties.js"
import { brownCards, blueCards, greenCards } from "./data/mythicCards/index.js"

// select Ancients
const ancientsCards = document.querySelectorAll('.ancient-card');
const difficultyContainer = document.querySelector('.difficulty-container');
const difficulties = document.querySelectorAll('.difficulty');
const deckContainer = document.querySelector('.deck-container');
const shuffleBtn = document.querySelector('.shuffle-button');
const playgroundContainer = document.querySelector('.playground-container');
const deck = document.querySelector('.deck');
const lastCard = document.querySelector('.last-card');

let currentAntient;
let currentDifficulties;
let firstPack = [];
let secondPack = [];
let thirdPack = [];
let deckPack = [];
let cardsSet = [];

ancientsCards.forEach(el => {
    el.addEventListener('click', function () {
        for (let item of ancientsCards) {
            item.classList.remove('active');
        }
        this.classList.add('active');

        difficultyContainer.classList.add('show');
        deckContainer.classList.remove('show');

        for (let item of difficulties) {
            item.classList.remove('active');
        }

        for (let anc of Ancients) {
            if (this.classList.contains(`${anc['id']}`)) currentAntient = anc;
        }
    })
})

// select difficulties
difficulties.forEach(el => {
    el.addEventListener('click', function () {
        for (let item of difficulties) {
            item.classList.remove('active');
        }
        this.classList.add('active');

        playgroundContainer.classList.remove('show');
        deckContainer.classList.add('show');
        shuffleBtn.classList.add('show');

        lastCard.style.backgroundImage = `url()`;
        for (let dif of Diff) {
            if (this.innerHTML == dif['id']) currentDifficulties = dif;
        }
    })
})

// shuffle cards
shuffleBtn.addEventListener('click', () => {
    difficultiesLevel();
    shuffleBtn.classList.remove('show');
    playgroundContainer.classList.add('show');
})

const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const veryEasyShuffle = () => {
    cardsSet.length = 0;
    for (const [key, value] of Object.entries(currentAntient['allStages'])) {
        let tempCards;
        let tempSet = [];
        if (`${key}` == 'greenCards') tempCards = shuffleCards(greenCards);
        if (`${key}` == 'brownCards') tempCards = shuffleCards(brownCards);
        if (`${key}` == 'blueCards') tempCards = shuffleCards(blueCards);
        let counter = value;
        for (const [key, val] of Object.entries(tempCards)) {
            if (val.difficulty == 'easy' && counter > 0) {
                tempSet.push(val);
                counter -= 1;
            }
        }
        if (counter > 0) {
            for (const [key, val] of Object.entries(tempCards)) {
                if (val.difficulty == 'normal' && counter > 0) {
                    tempSet.push(val);
                    counter -= 1;
                }
            }
        }
        cardsSet.push(tempSet);
    }
}

const easyShuffle = () => {
    cardsSet.length = 0;
    for (const [key, value] of Object.entries(currentAntient['allStages'])) {
        let tempCards;
        let tempSet = [];
        if (`${key}` == 'greenCards') tempCards = shuffleCards(greenCards);
        if (`${key}` == 'brownCards') tempCards = shuffleCards(brownCards);
        if (`${key}` == 'blueCards') tempCards = shuffleCards(blueCards);
        let counter = value;
        for (const [key, val] of Object.entries(tempCards)) {
            if (val.difficulty != 'hard' && counter > 0) {
                tempSet.push(val);
                counter -= 1;
            }
        }
        if (counter > 0) {
            for (const [key, val] of Object.entries(tempCards)) {
                if (val.difficulty != 'hard' && counter > 0) {
                    tempSet.push(val);
                    counter -= 1;
                }
            }
        }
        cardsSet.push(tempSet);
    }
}

const normalShuffle = () => {
    cardsSet.length = 0;
    for (const [key, value] of Object.entries(currentAntient['allStages'])) {
        let tempCards;
        let tempSet = [];
        if (`${key}` == 'greenCards') tempCards = shuffleCards(greenCards);
        if (`${key}` == 'brownCards') tempCards = shuffleCards(brownCards);
        if (`${key}` == 'blueCards') tempCards = shuffleCards(blueCards);
        let counter = value;
        for (const [key, val] of Object.entries(tempCards)) {
            if (counter > 0) {
                tempSet.push(val);
                counter -= 1;
            }
        }
        cardsSet.push(tempSet);
    }
}

const hardShuffle = () => {
    cardsSet.length = 0;
    for (const [key, value] of Object.entries(currentAntient['allStages'])) {
        let tempCards;
        let tempSet = [];
        if (`${key}` == 'greenCards') tempCards = shuffleCards(greenCards);
        if (`${key}` == 'brownCards') tempCards = shuffleCards(brownCards);
        if (`${key}` == 'blueCards') tempCards = shuffleCards(blueCards);
        let counter = value;
        for (const [key, val] of Object.entries(tempCards)) {
            if (val.difficulty != 'easy' && counter > 0) {
                tempSet.push(val);
                counter -= 1;
            }
        }
        if (counter > 0) {
            for (const [key, val] of Object.entries(tempCards)) {
                if (val.difficulty != 'easy' && counter > 0) {
                    tempSet.push(val);
                    counter -= 1;
                }
            }
        }
        cardsSet.push(tempSet);
    }
}

const veryHardShuffle = () => {
    cardsSet.length = 0;
    for (const [key, value] of Object.entries(currentAntient['allStages'])) {
        let tempCards;
        let tempSet = [];
        if (`${key}` == 'greenCards') tempCards = shuffleCards(greenCards);
        if (`${key}` == 'brownCards') tempCards = shuffleCards(brownCards);
        if (`${key}` == 'blueCards') tempCards = shuffleCards(blueCards);
        let counter = value;
        for (const [key, val] of Object.entries(tempCards)) {
            if (val.difficulty == 'hard' && counter > 0) {
                tempSet.push(val);
                counter -= 1;
            }
        }
        if (counter > 0) {
            for (const [key, val] of Object.entries(tempCards)) {
                if (val.difficulty == 'normal' && counter > 0) {
                    tempSet.push(val);
                    counter -= 1;
                }
            }
        }
        cardsSet.push(tempSet);
    }
}

const getRandomNum = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
}

// mix cards
const mixCardsToSet = () => {
    firstPack.length = 0;
    secondPack.length = 0;
    thirdPack.length = 0;
    deckPack.length = 0;

    for (const [key, value] of Object.entries(currentAntient['firstStage'])) {
        let pointer = [];
        if (`${key}` == 'greenCards') pointer = cardsSet[0];
        if (`${key}` == 'brownCards') pointer = cardsSet[2];
        if (`${key}` == 'blueCards') pointer = cardsSet[1];
        let counter = value;
        for (const [key, val] of Object.entries(pointer)) {
            while (counter > 0) {
                firstPack.push(pointer.splice(getRandomNum(pointer.length - 1, 0), 1))
                counter -= 1;
            }
        }
    }
    firstPack = firstPack.flat();
    firstPack = shuffleCards(firstPack);

    for (const [key, value] of Object.entries(currentAntient['secondStage'])) {
        let pointer = [];
        if (`${key}` == 'greenCards') pointer = cardsSet[0];
        if (`${key}` == 'brownCards') pointer = cardsSet[2];
        if (`${key}` == 'blueCards') pointer = cardsSet[1];
        let counter = value;
        for (const [key, val] of Object.entries(pointer)) {
            while (counter > 0) {
                secondPack.push(pointer.splice(getRandomNum(pointer.length - 1, 0), 1))
                counter -= 1;
            }
        }
    }

    secondPack = secondPack.flat();
    secondPack = shuffleCards(secondPack);

    for (const [key, value] of Object.entries(currentAntient['thirdStage'])) {
        let pointer = [];
        if (`${key}` == 'greenCards') pointer = cardsSet[0];
        if (`${key}` == 'brownCards') pointer = cardsSet[2];
        if (`${key}` == 'blueCards') pointer = cardsSet[1];
        let counter = value;
        for (const [key, val] of Object.entries(pointer)) {
            while (counter > 0) {
                thirdPack.push(pointer.splice(getRandomNum(pointer.length - 1, 0), 1))
                counter -= 1;
            }
        }
    }
    thirdPack = thirdPack.flat();
    thirdPack = shuffleCards(thirdPack);

    deckPack.push(firstPack, secondPack, thirdPack);
    deckPack = deckPack.flat();
    initDots()
}


const difficultiesLevel = () => {
    if (currentDifficulties['id'] == 'very easy') {
        veryEasyShuffle();
    };
    if (currentDifficulties['id'] == 'easy') {
        easyShuffle();
    };
    if (currentDifficulties['id'] == 'normal') {
        normalShuffle();
    };
    if (currentDifficulties['id'] == 'hard') {
        hardShuffle();
    };
    if (currentDifficulties['id'] == 'very hard') {
        veryHardShuffle();
    }
    mixCardsToSet()
}

// show card
const stageDone = document.querySelectorAll('.stage-text');
const dotsFirstStage = document.querySelectorAll('.first-stage');
const dotsSecondStage = document.querySelectorAll('.second-stage');
const dotsThirdStage = document.querySelectorAll('.third-stage');
let firstStageDots;
let secondStageDots;
let thirdStageDots;

const initDots = () => {
    firstStageDots = 0;
    secondStageDots = 0;
    thirdStageDots = 0;
    dotsFirstStage.forEach((el, i) => {
        el.innerHTML = Object.values(currentAntient['firstStage'])[i];
        firstStageDots += parseInt(el.innerHTML);
    })
    dotsSecondStage.forEach((el, i) => {
        el.innerHTML = Object.values(currentAntient['secondStage'])[i];
        secondStageDots += parseInt(el.innerHTML);
    })
    dotsThirdStage.forEach((el, i) => {
        el.innerHTML = Object.values(currentAntient['thirdStage'])[i];
        thirdStageDots += parseInt(el.innerHTML);
    })

    for (let el of stageDone) {
        el.classList.remove('done');
    }
    lastCard.style.backgroundImage = `url()`;
    deck.style.backgroundImage = `url('./assets/mythicCardBackground.webp')`;
}

const shiftCardToDeck = () => {
    const currentCard = deckPack.shift();
    lastCard.style.backgroundImage = `url('${currentCard.cardFace}')`

    if (firstStageDots > 0) {
        dotsFirstStage.forEach((el, i) => {
            if (el.classList.contains(`${currentCard.color}`)) {
                el.innerHTML = el.innerHTML - 1;
            }
        })
        firstStageDots -= 1;
        if (firstStageDots == 0) stageDone[0].classList.add('done');
    } else if (secondStageDots > 0) {
        dotsSecondStage.forEach((el, i) => {
            if (el.classList.contains(`${currentCard.color}`)) {
                el.innerHTML = el.innerHTML - 1;
            }
        })
        secondStageDots -= 1;
        if (secondStageDots == 0) stageDone[1].classList.add('done');
    } else {
        if (thirdStageDots > 0) {
            dotsThirdStage.forEach((el, i) => {
                if (el.classList.contains(`${currentCard.color}`)) {
                    el.innerHTML = el.innerHTML - 1;
                }
            })
            thirdStageDots -= 1;
        }
    }

    if (deckPack.length == 0) {
        deck.style.backgroundImage = `url()`;
        stageDone[2].classList.add('done');
    }
}
deck.addEventListener('click', shiftCardToDeck);