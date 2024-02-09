//랜덤 번호 지정

//유저가 번호를 입력하고, GO 버튼을 누름

//유저가 랜덤 번호를 맞추면, 정답!
//랜덤번호 < 유저번호, Down!
//랜덤번호 > 유저번호, Up!
//Reset 버튼을 누르면 게임 리셋
//5번의 기회를 다쓰면 게임 끝, 더 이상 추측 불가, 버튼 Disable
//유저가 1~100 범위 밖의 숫자를 입력하면, 알려주고 기회소진x
//유저가 이미 입력한 숫자를 또 입력하면, 알려주고 기회소진x

let randomNum = 0
let history = []
let countNum = 5
let playButton = document.getElementById("playButton")
let inputNumber = document.getElementById("inputNumber")
let resultArea = document.getElementById("resultArea")
let resetButton = document.getElementById("resetButton")
let countDownArea = document.getElementById("countDownArea")

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
inputNumber.addEventListener("focus", function () {inputNumber.value = ""})

pickRandomNum();

function pickRandomNum()
{
    randomNum = Math.floor(Math.random() * 100) + 1
    console.log("정답: ", randomNum)
}

function play()
{
    let userValue = inputNumber.value

    if((userValue < 1) || (userValue > 100))
    {
        resultArea.textContent = "1 ~ 100까지의 숫자를 입력해주세요!"
    }else if(history.includes(userValue))
    {
        resultArea.textContent = "같은 숫자를 입력하였습니다."
    }
    else if(userValue < randomNum)
    {
        resultArea.textContent = "Up!"
        countDown()
    }
    else if(userValue > randomNum)
    {
        resultArea.textContent = "Down!"
        countDown()
    }
    else if(userValue == randomNum)
    {
        resultArea.textContent = "정답!"
        playButton.disabled = true
    }
    history.push(userValue)
}

function reset()
{
    inputNumber.value = ""
    resultArea.textContent = "결과가 나온다"
    pickRandomNum()
    countNum = 5
    countDownArea.textContent = `남은기회: ${countNum}번`
    playButton.disabled = false
    history = []
}

function countDown()
{
    countNum--
    if(countNum == 0)
    {
        playButton.disabled = true
    }
    countDownArea.textContent = `남은기회: ${countNum}번`
}