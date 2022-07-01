// 模块化
import string from './css.js'

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






