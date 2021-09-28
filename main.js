document.addEventListener("DOMContentLoaded", () => {
    const flyer = document.querySelector(".game__element--flyer")
    const gameWindow = document.querySelector(".game")
    const ground = document.querySelector(".game__element--ground")


    let flyerLeft = 220
    let flyerBottom = 180
    let gravity = 2
    let isGameOver = false

    function startGame(){
        flyerBottom = flyerBottom - gravity
        flyer.style.bottom = flyerBottom + 'px'
        flyer.style.left = flyerLeft + 'px'
    }

    let gameTimer = setInterval(startGame, 20)

    function fly() {
        if (flyerBottom < 500){
            flyerBottom = flyerBottom + 50
        }
        flyer.style.bottom = flyerBottom + 'px'
    }

    document.addEventListener('keyup', fly )

    function generateTube(){
        let tubeLeft = 500
        let randomRange = Math.random() * 60
        let tubeBottom = randomRange
        const tube = document.createElement('div')
        tube.classList.add('tube')
        if(!isGameOver){gameWindow.appendChild(tube)}
        tube.style.left = tubeLeft + 'px'
        tube.style.bottom = tubeBottom + 'px'

        function moveTube() {
            tubeLeft = tubeLeft - 2
            tube.style.left = tubeLeft + 'px'

            if(tubeLeft === -60){
                clearInterval(tubeTimer)
                gameWindow.removeChild(tube)
            }

            if(tubeLeft>200 && tubeLeft < 280 && flyerLeft ===220 || flyerBottom === 76){
                gameOver()
            }
        }
        let tubeTimer = setInterval(moveTube, 20)
        if (!isGameOver){setTimeout(generateTube, 3000)}
    }
    generateTube()

    function gameOver(){
        clearInterval(gameTimer)
        
        isGameOver = true
        document.removeEventListener('keyup', fly)
    }
})