import platformIsland from '../../assets/platformislandbig.png'
import platform from '../../assets/Platform.png'

import main_background from '../../assets/background0.png'
import background1 from '../../assets/background1.png'
import background2 from '../../assets/background2.png'
import background3 from '../../assets/background3.png'
import background4 from '../../assets/background4.png'

import spriteIdleLeft from '../../assets/idleleft.png'
import spriteIdleRight from '../../assets/idleright.png'
import spriteRunningLeft from '../../assets/runningleft.png'
import spriteRunningRight from '../../assets/runningright.png'

import wolfRight from '../../assets/wolfrunningright.png'
import wolfLeft from '../../assets/wolfrunningleft.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576


const gravity = 0.9 //values can be changed. the lower the number the slower (more moon walk) will it be
const friction = 0.90 //the closer to 1, the more slippery stuff will be.

let scrollOffset = 0



class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 45
        this.height = 80
        this.speed = 8
        this.image = createImage(spriteIdleRight)
        this.frames = 0
        this.framerate = 0
        this.frameratecounter = 0
        this.sprites = {
            stand: {
                right: createImage(spriteIdleRight),
                left: createImage(spriteIdleLeft),
                cropStart: 30,
                cropEnd: 50,
            },
            run: {
                right: createImage(spriteRunningRight),
                left: createImage(spriteRunningLeft),
                cropStart: 0,
                cropEnd: 50,
            }
        }
        this.currentSprite = this.sprites.stand.right
        this.currentCropStart = this.sprites.stand.cropStart
        this.currentCropEnd = this.sprites.stand.cropEnd
    }
    draw() {
        // c.fillStyle = 'blue'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(
            this.currentSprite,
            this.currentCropStart + 80 * this.frames,
            0,
            this.currentCropEnd,
            74,
            this.position.x,
            this.position.y,
            this.width,
            this.height)
    }

    update() {
        this.frameratecounter++
        if (this.frameratecounter > this.framerate){
            this.frames++;
             this.frameratecounter = 0
        }
        // console.log(this.frameratecounter)
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        // this.velocity.x *= friction
        if (this.frames > 35) this.frames = 0
        // console.log(this.frames)

        this.draw()
        if (this.position.y + this.height + this.velocity.y <= canvas.height) { this.velocity.y += gravity }
        // else { this.velocity.y = 0 }
    }

}

class Enemy {
    constructor({ x, y }) {

       this.position = {
            x: x,
            y: y
        }
        this.velocity = {
            x: 6,
        }
        this.image = createImage(wolfRight)
        this.width = 140
        this.height = 62.5
        this.frames = 0
        this.loopcount = 0
        this.direction = 1
        this.sprites = {
            run: {
                right: createImage(wolfRight),
                left: createImage(wolfLeft),

            },
        }
        this.currentSprite = this.sprites.run.right


    }
    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(
                this.currentSprite,
                56 * this.frames,
                0,
                56,
                25,
                this.position.x,
                this.position.y,
                this.width,
                this.height,
        
        
        )
        // console.log(this.position.x, "wolf2")

    }
    update() {
        this.frames++
        this.position.x += this.velocity.x*this.direction
        if (this.frames > 31) {
            this.loopcount++;
            this.frames = 0
            }
        if (this.loopcount > 1){
            this.direction *= -1;
            this.loopcount = 0;
            if (this.direction == -1){this.currentSprite = this.sprites.run.left}
            else{this.currentSprite = this.sprites.run.right}
        }
        // console.log(this.currentSprite, "wolf")

        this.draw()
    }
}

class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image,
            this.position.x,
            this.position.y)
        // c.fillStyle = 'blue'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class GenericObj {
    constructor({ x, y, image }) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image,
            this.position.x,
            this.position.y)
    }
}


let platforms = [

]

let GenericObjs = [
]

let enemies = [
]

const keys = { //key down has a weird bump, it fires one time than only after a set amount of time fires rapidly. 
    right: {  //it created a small stop before starting to move continusly. so instead of using key down to fire, i use it and keyup to flag here.
        pressed: false
    },
    left: {
        pressed: false
    },
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    GenericObjs.forEach(GenericObj => {
        GenericObj.draw()
    })
    platforms.forEach((platform) => {
        platform.draw()
    })
    enemies.forEach((Enemy) => {
        Enemy.update()
        Enemy.draw()
    })



    if (keys.right.pressed
        && player.position.x < canvas.width - 500
    ) {
        player.velocity.x = player.speed;
    } else if ((keys.left.pressed && player.position.x > 350) || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)) {
        player.velocity.x = -player.speed;
    } else {
        player.velocity.x *= friction;    //just realised that by using friction the v value will never 
        if (Math.abs(player.velocity.x) <= 0.3) { //reach true 0, and that will probably makes some stuff harder down the line
            player.velocity.x = 0              //so added safe guard, just to be sure, maybe will need fixing later.
        }
        if (keys.right.pressed) {
            scrollOffset += player.speed
            platforms.forEach((platform) => {
                platform.position.x -= player.speed
            })
            enemies.forEach((Enemy) => {
                Enemy.position.x -= player.speed
            })
            GenericObjs.forEach((platform) => {
                platform.position.x -= player.speed * .66
            })

        }
        else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= player.speed
            platforms.forEach((platform) => {
                platform.position.x += player.speed
            })
            enemies.forEach((Enemy) => {
                Enemy.position.x += player.speed
            })
            GenericObjs.forEach((platform) => {
                platform.position.x += player.speed * .66
            })
        }
    }

    platforms.forEach((platform) => {
        if (player.position.y + player.height - 30 <= platform.position.y
            && player.position.y + player.height + player.velocity.y - 30 >= platform.position.y
            && player.position.x + player.width >= platform.position.x
            && player.position.x <= platform.position.x + platform.width
        ) { player.velocity.y = 0 }
    })
    //win condition
    if (scrollOffset > 4200) {
        alert('you won!')
        init()
    }

    //lose condition
    if (player.position.y > canvas.height) {
        console.log('you lose')
        init()
    }
    enemies.forEach((Enemy) => {
        if ((player.position.x +player.width > Enemy.position.x 
            && player.position.y +player.height > Enemy.position.y
            && player.position.x < Enemy.position.x + Enemy.width
            && player.position.y + player.height < Enemy.position.y + Enemy.height ) ){
            console.log('wolfed!');
            init()
        }

    })

    player.update()

}

function init() {
    platforms = [
        new Platform({ x: 200, y: 100, image: createImage(platformIsland) }),
        new Platform({ x: 1000, y: 400, image: createImage(platformIsland) }),
        new Platform({ x: 1750, y: 500, image: createImage(platformIsland) }),
        new Platform({ x: 400, y: 300, image: createImage(platformIsland) }),
        new Platform({ x: -50, y: 500, image: createImage(platformIsland) }),
        new Platform({ x: 2250, y: 300, image: createImage(platform) }),
        new Platform({ x: 2050, y: 400, image: createImage(platform) }),
        new Platform({ x: 2050, y: 150, image: createImage(platform) }),
        new Platform({ x: 2350, y: 80, image: createImage(platform) }),
        new Platform({ x: 2950, y: 250, image: createImage(platformIsland) }),
        new Platform({ x: 3150, y: 400, image: createImage(platformIsland) }),
        new Platform({ x: 3550, y: 400, image: createImage(platformIsland) }),
        new Platform({ x: 3950, y: 400, image: createImage(platformIsland) }),
        new Platform({ x: 4650, y: 200, image: createImage(platformIsland) }),
        new Platform({ x: 4350, y: 400, image: createImage(platformIsland) }),
        new Platform({ x: 3700, y: 300, image: createImage(platform) }),
        new Platform({ x: 4300, y: 300, image: createImage(platform) }),
    ]

    GenericObjs = [
        new GenericObj({ x: -300, y: 0, image: createImage(main_background) },),
        new GenericObj({ x: -300, y: 100, image: createImage(background4) }),
        new GenericObj({ x: -300, y: 0, image: createImage(background3) }),
        new GenericObj({ x: -300, y: 0, image: createImage(background2) }),
        new GenericObj({ x: -300, y: 350, image: createImage(background1) }),
    ]

    enemies = [
        new Enemy({x: 400, y:270}),
        new Enemy({x: 1750, y:470}),
        new Enemy({x: 3600, y:370}),
        new Enemy({x: 4100, y:370}),
    ]


    player = new Player()

    scrollOffset = 0
}

//opted to use keydown and keyup as flags instead of basic fire, lets hope it works
window.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 87: case 38:
            {
                if (Math.abs(player.velocity.y) > 1) {
                    console.log('no jump')
                    break
                }
                else {
                    player.velocity.y -= 20
                    console.log('jump!')
                    break
                }

            }
        case 83: case 40:
            {
                console.log('down')
                break
            }
        case 68: case 39:
            {
                console.log('right')
                keys.right.pressed = true
                player.currentSprite = player.sprites.run.right
                player.currentCropStart = player.sprites.run.cropStart
                player.currentCropEnd = player.sprites.run.cropEnd
                break
            }
        case 65: case 37:
            {
                console.log('left')
                keys.left.pressed = true
                player.currentSprite = player.sprites.run.left
                player.currentCropStart = player.sprites.run.cropStart
                player.currentCropEnd = player.sprites.run.cropEnd
                break
            }
        case 32:
            {
                console.log('spacebar')
                break
            }
    }
})
window.addEventListener('keyup', ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 87: case 38:
            {
                console.log('up up')
                break
            }
        case 83: case 40:
            {
                console.log('down up')
                break
            }
        case 68: case 39:
            {
                console.log('right up')
                keys.right.pressed = false
                player.currentSprite = player.sprites.stand.right
                player.currentCropStart = player.sprites.stand.cropStart
                player.currentCropEnd = player.sprites.stand.cropEnd
                break
            }
        case 65: case 37:
            {
                console.log('left up')
                keys.left.pressed = false
                player.currentSprite = player.sprites.stand.left
                player.currentCropStart = player.sprites.stand.cropStart
                player.currentCropEnd = player.sprites.stand.cropEnd
                break
            }
        case 32:
            {
                console.log('spacebar up')
                break
            }
    }
})

function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}

let player = new Player()

init()
animate()