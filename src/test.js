// 模块化
// import string from './css.js'

let string =` .skin * {
    box-sizing: border-box;
margin: 0;
padding: 0;

}
.skin *::before,
.skin *::after {
    box-sizing: border-box;
}

.skin {
    background: #ffe600;
    min-height: 50vh;
    position: relative;
}
.nose {
    width: 0;
    height: 25px;
    position: relative;
    top: 145px;
    left: 50%;
    transform: translate(-50%, 0);
}
.triangle {
    border: 10px solid ;
    border-color: #000000 transparent transparent transparent;
    border-bottom: none;

    width: 0;
    height: 0;

    position: absolute;
    left: 50%;
    top: 6px;
    transform: translate(-50%, 0);
    z-index: 2;
}
.triangle-shade {
    width: 22px;
    height: 20px;
    display: block;
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;
    /* border: 1px solid blue; */
    top: 6px;
    background-color: #ffe600;
    z-index: 1;
}
.arc {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #000000;
    /* top: 139px; */
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
    z-index: -1;
}
.eye {
    border: 2px solid rgb(0, 0, 0);
    background: rgb(46, 46, 46);
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translate(-50%, 0);
    margin-left: -32px;
    border-radius: 50%;
}
.eye::before {
    content: '';
    display: block;
    border: 3px solid rgb(0, 0, 0);
    background: rgb(255, 255, 255);
    width: 32px;
    height: 32px;
    position: absolute;
    border-radius: 50%;
    top: 2px;
    left: 4px;
}
.eye.left {
    transform: translateX(-120px);
}

.eye.right {
    transform: translateX(120px);
}
.mouth {
    /* border: 1px solid red; */
    width: 200px;
    height: 100px;
    position: relative;
    left: 50%;
    top: 170px;
    transform: translate(-50%, 0);
}
.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 0 50px;
    position: relative;
    background: #ffe600;
}
.mouth .up .lip::before {
    content: '';
    width: 102px;
    height: 13px;
    background-color: #ffe600;
    display: block;
    position: absolute;
    left: -4px;
    top: -5px;
}
.mouth .up .lip.left {
    border-radius: 0 100% 69% 31% / 0 36% 64% 100%;
    left: 2px;
    transform: rotate(-7deg);
}
.mouth .up .lip.right {
    border-radius: 100% 0 31% 69% / 36% 0 100% 64%;
    transform: rotate(7deg);
    top: -30px;
    left: 98px;
}
.mouth .down {
    position: absolute;
    width: 100%;
    height: 200px;
    top: 8px;
    overflow: hidden;
}
.mouth .down .yuan1 {
    border: 2px solid rgb(0, 0, 0);
    background: #9b000a;
    height: 280px;
    position: absolute;
    top: -90px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 0 0 50% 50% / 0 0 100% 90%;
    width: 165px;
    z-index: -3;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
    width: 165px;
    height: 280px;
    transform: translate(-50%, 0);
    border-radius: 50% 50% 50% 0 / 23% 24% 0 0;
    position: absolute;
    background: #ff485f;
    top: 115px;
    left: 50%;
}
.face {
    border: 3px solid black;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 88px;
    height: 88px;
    top: 220px;
    border-radius: 50%;
    background: #ff0000;
    z-index: 2;
}
.face.left {
    transform: translateX(-210px);
}
.face.right {
    transform: translateX(120px);
}
@keyframes wave {
    0% {
        transform: rotate(0deg);
}

    33% {
        transform: rotate(10deg);
}

    66% {
        transform: rotate(-10deg);
}

    100% {
        transform: rotate(0deg);
}

}
.nose:hover {
    transform-origin: center bottom;
    animation: wave 0.25s infinite;
}`

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')
const player = {
    id:undefined,
    time :0,
    n: 1,
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'fastSpeed',
        '#btnSlow': 'slowSpeed',
        '#btnNormal': 'normalSpeed',
        '#final': 'finalResult'
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            // 代表不要再继续执行下面的console.log了
            return
        }
        console.log(player.n + ':' + string.substring(0, player.n))
        demo.innerText = string.substring(0, player.n)
        demo2.innerHTML = string.substring(0, player.n)
        demo.scrollTop = demo.scrollHeight
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
        player.bindEvents()
    },
    bindEvents: () => {
        for (let key in player.events) {
            // 检查这个key是不是自身的属性(防御性编程)
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slowSpeed: () => {
        player.pause()
        player.time = 200
        player.play()
    },
    normalSpeed: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fastSpeed: () => {
        player.pause()
        player.time = 0
        player.play()
    },
    finalResult: () => {
        player.pause()
        demo.innerText = ''
        demo.innerText = string
        demo2.innerHTML = ''
        demo2.innerHTML = string
    }
}
player.play()






