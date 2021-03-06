

document.addEventListener("DOMContentLoaded", () => {
    const flyer = document.querySelector(".game__element--flyer")
    const gameWindow = document.querySelector(".game")
    const ground = document.querySelector(".game__element--ground")


    let flyerLeft = 220
    let flyerBottom = 180 
    let gravity = 2
    let isGameOver = false
    let spacing = 100
    let score = 0
    const scoreText = document.getElementById('highscore')
    
    startGame = () => {
        score = score + 1
        flyerBottom = flyerBottom - gravity
        flyer.style.bottom = flyerBottom + 'px'
        flyer.style.left = flyerLeft + 'px'
        scoreText.innerHTML = score
    }

   

    let gameTimer = setInterval(startGame, 20) //simulates our gravity plus setInterval function keeps executing

    fly = () => {
        if (flyerBottom < 500){
            flyerBottom = flyerBottom + 50
        }
        flyer.style.bottom = flyerBottom + 'px'
    }

    document.addEventListener('keyup', fly )

    generateTube = () => {
        let tubeLeft = 500
        let randomRange = Math.random() * 60
        let tubeBottom = randomRange
        const tube = document.createElement('div')
        const upperTube = document.createElement('div')
        tube.classList.add('tube')//add a class as generated in js
        upperTube.classList.add('tube')
        if(!isGameOver){gameWindow.appendChild(tube)} //if statement prevents second last tube generating on game over
        if(!isGameOver){gameWindow.appendChild(upperTube)}
        tube.style.left = tubeLeft + 'px'
        tube.style.bottom = tubeBottom + 'px'
        upperTube.style.left = tubeLeft + 'px'
        upperTube.style.top = tubeBottom - spacing + 'px'

        moveTube = () => { // function similar to that of gravity 
            tubeLeft = tubeLeft - 2 
            tube.style.left = tubeLeft + 'px'
            upperTube.style.left = tubeLeft + 'px'

            if(tubeLeft === -60){ //gets rid of tube on very left good for memory storage
                clearInterval(tubeTimer)
                gameWindow.removeChild(tube)
                gameWindow.removeChild(upperTube)
            }

            if(tubeLeft>180 && tubeLeft < 280 && flyerLeft ===220 && (flyerBottom < tubeBottom +223 || flyerBottom > tubeBottom + spacing +250) || flyerBottom === 76){ //if statement halts flyer from vertical position
                gameOver()
                clearInterval(tubeTimer)
            }
        }
        let tubeTimer = setInterval(moveTube, 20)
        if (!isGameOver){setInterval(generateTube, 3000)}
    }
    generateTube()

    gameOver = () => {
        clearInterval(gameTimer)
        
        isGameOver = true
        document.removeEventListener('keyup', fly) //stops game functionality 
    }
})