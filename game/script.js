let $start = document.querySelector('#start')
let $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let $input = document.querySelector('#game-time')
let $result = document.querySelector('#result')
let $resultHeader = document.querySelector('#result-header')
let $timeHeader =document.querySelector('#time-header')



let score = 0
let isGameStarted = false
$start.addEventListener('click',startGame)
$game.addEventListener('click',handleBoxClick)

function startGame() {
    setTime()
isGameStarted = true
$game.style.backgroundColor = '#fff'
$start.classList.add('hide')
$resultHeader.classList.add('hide')
$timeHeader.classList.remove('hide')


let interval = setInterval(function(){
    let time = parseFloat($time.textContent)

    if (time <= 0) {
        clearInterval(interval)
        endGame()
    }else {
        $time.textContent = (time - 0.1).toFixed(1)
    }
},100)

 renderBox()
 
}

function setTime(){
    $time.textContent = $input.value
}

function endGame(){
 isGameStarted = false
 $game.style.backgroundColor = '#acacac'
 $start.classList.remove('hide')
 $game.innerHTML = ""

 $resultHeader.classList.remove('hide')
 $timeHeader.classList.add('hide')
$result.textContent = score.toString()

}

function handleBoxClick(event){
    if (!isGameStarted){
    return
    }
}


function handleBoxClick(event){
    if (event.target.dataset.box){
        score++
        renderBox()

    }
}


$input.addEventListener('input',updateValue)

function updateValue(){
    $time.textContent = $input.value
}

function renderBox(){
    $game.innerHTML = ''
     let box = document.createElement('div')
     let boxSize = getRandom(30,100)
     let gameSize = $game.getBoundingClientRect()
     let maxTop = gameSize.height - boxSize
     let maxLeft = gameSize.width - boxSize

     box.style.height = box.style.width = boxSize + 'px'
     box.style.position = 'absolute'
     box.style.top = getRandom(0,maxTop) + 'px'
     box.style.left = getRandom(0,maxLeft)+'px'
     box.style.cursor = 'pointer'
     box.setAttribute('data-box','true')
     let color, symbols

     color = '#'
     symbols = "0123456789ABCDEF"
     for (let i = 0; i < 6; i++) {
         
         color = color + symbols[Math.floor(Math.random() * 16)]
     }
     box.style.background = color
     $game.insertAdjacentElement('afterbegin',box)
     
       }

    function getRandom(min,max){
        return Math.floor(Math.random() * (max - min) + min)
    }





