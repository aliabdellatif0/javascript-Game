document.addEventListener("DOMContentLoaded", () => {
    const flyer = document.querySelector(".game__element--flyer")
    const gameWindow = document.querySelector(".game")
    const ground = document.querySelector(".game__element--ground")


    let flyerLeft = 220
    let flyerBottom = 100
    let gravity = 2

    function startGame(){
        flyerBottom = flyerBottom - gravity
        flyer.style.bottom = flyerBottom + 'px'
        flyer.style.left = flyerLeft + 'px'
    }

    setInterval(startGame, 20)

    function fly() {
        if (flyerBottom < 500){
            flyerBottom = flyerBottom + 50
        }
        flyer.style.bottom = flyerBottom + 'px'
    }

    document.addEventListener('keyup', fly )

    function generateTube(){
        let tubeLeft = 500
        let tubeBottom = 150
        const tube = document.createElement('div')
        tube.classList.add('tube')
        gameWindow.appendChild(tube)
        tube.style.left = tubeLeft + 'px'
        tube.style.bottom = tubeBottom + 'px'
    }
    generateTube()
})