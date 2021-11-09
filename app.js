document.addEventListener('DOMContentLoaded',() => {
    const cardArray = [
        {
            name: 'coffee',
            img: 'assets/coffee.jpg'
        },
        {
            name: 'gaming',
            img: 'assets/gaming.jpg'
        },        {
            name: 'pizza',
            img: 'assets/pizza.jpg'
        },
        {
            name: 'programming',
            img: 'assets/programming.jpg'
        },
        {
            name: 'travels',
            img: 'assets/travels.jpg'
        },
        {
            name: 'weightlifting',
            img: 'assets/weightlifting.jpg'
        },        {
            name: 'coffee',
            img: 'assets/coffee.jpg'
        },
        {
            name: 'gaming',
            img: 'assets/gaming.jpg'
        },        {
            name: 'pizza',
            img: 'assets/pizza.jpg'
        },
        {
            name: 'programming',
            img: 'assets/programming.jpg'
        },
        {
            name: 'travels',
            img: 'assets/travels.jpg'
        },
        {
            name: 'weightlifting',
            img: 'assets/weightlifting.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const statusDisplay = document.querySelector('#status')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'assets/card.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'assets/card.png')
            cards[optionTwoId].setAttribute('src', 'assets/card.png')
            statusDisplay.textContent = 'You have clicked on the same image'
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            statusDisplay.textContent = "You found a match, you're almost there!"
            cards[optionOneId].setAttribute('src', 'assets/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/blank.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/card.png')
            cards[optionTwoId].setAttribute('src', 'assets/card.png')
            statusDisplay.textContent = 'Try again!'
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
            statusDisplay.textContent = 'Congratulations! Things that i love the most are: Programming, espresso, fitness, gaming, travels and food :)'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})