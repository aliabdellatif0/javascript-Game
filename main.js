

document.addEventListener("DOMContentLoaded", () => {
    const flyer = document.querySelector(".game__element--flyer")
    const gameWindow = document.querySelector(".game")
    const ground = document.querySelector(".game__element--ground")


    let flyerLeft = 220
    let flyerBottom = 180 
    let gravity = 2
    let isGameOver = false
    let spacing = 100

    startGame = () => {
        flyerBottom = flyerBottom - gravity
        flyer.style.bottom = flyerBottom + 'px'
        flyer.style.left = flyerLeft + 'px'
    }

    let gameTimer = setInterval(startGame, 20) //simulates our gravity

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
        tube.classList.add('tube')
        upperTube.classList.add('tube')
        if(!isGameOver){gameWindow.appendChild(tube)} //if statement prevents second last tube generating on game over
        if(!isGameOver){gameWindow.appendChild(upperTube)}
        tube.style.left = tubeLeft + 'px'
        tube.style.bottom = tubeBottom + 'px'
        upperTube.style.left = tubeLeft + 'px'
        upperTube.style.top = tubeBottom - spacing + 'px'

        moveTube = () => {
            tubeLeft = tubeLeft - 2 
            tube.style.left = tubeLeft + 'px'
            upperTube.style.left = tubeLeft + 'px'

            if(tubeLeft === -60){
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
        if (!isGameOver){setTimeout(generateTube, 3000)}
    }
    generateTube()

    gameOver = () => {
        clearInterval(gameTimer)
        
        isGameOver = true
        document.removeEventListener('keyup', fly)
    }
})