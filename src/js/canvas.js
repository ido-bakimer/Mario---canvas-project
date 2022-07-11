import platform from '../../assets/platformislandbig.png'
import main_background from '../../assets/background0.png'
import background1 from '../../assets/background1.png'
import background2 from '../../assets/background2.png'
import background3 from '../../assets/background3.png'
import background4 from '../../assets/background4.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576


const gravity = 0.9 //values can be changed. the lower the number the slower (more moon walk) will it be
const friction = 0.93 //the closer to 1, the more slippery stuff will be.

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
        this.width = 30
        this.height = 30
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        // this.velocity.x *= friction
        this.draw()
        if (this.position.y + this.height + this.velocity.y <= canvas.height) { this.velocity.y += gravity }
        // else { this.velocity.y = 0 }
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
    new Platform({ x: 200, y: 100, image: createImage(platform) }),
    new Platform({ x: 1000, y: 400, image: createImage(platform) }),
    new Platform({ x: 1750, y: 500, image: createImage(platform) }),
    new Platform({ x: 400, y: 300, image: createImage(platform) }),
    new Platform({ x: -50, y: 500, image: createImage(platform) }),

]

let GenericObjs = [
    new GenericObj({ x: -300, y: 0, image: createImage(main_background) },),
    new GenericObj({ x: -300, y: 100, image: createImage(background4) }),
    new GenericObj({ x: -300, y: 0, image: createImage(background3) }),
    new GenericObj({ x: -300, y: 0, image: createImage(background2) }),
    new GenericObj({ x: -300, y: 350, image: createImage(background1) }),

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



    if (keys.right.pressed
        && player.position.x < canvas.width - 500
    ) {
        player.velocity.x = 5;
    } else if (keys.left.pressed
        && player.position.x > 350
    ) {
        player.velocity.x = -5;
    } else {
        player.velocity.x *= friction;    //just realised that by using friction the v value will never 
        if (Math.abs(player.velocity.x) <= 0.3) { //reach true 0, and that will probably makes some stuff harder down the line
            player.velocity.x = 0              //so added safe guard, just to be sure, maybe will need fixing later.
        }
        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach((platform) => {
                platform.position.x -= 5
            })
            GenericObjs.forEach((platform) => {
                platform.position.x -= 2
            })
        }
        if (keys.left.pressed) {
            scrollOffset -= 5
            platforms.forEach((platform) => {
                platform.position.x += 5
            })
            GenericObjs.forEach((platform) => {
                platform.position.x += 2
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
    if (scrollOffset > 2000) {
         alert('you won') }

    //lose condition
    if (player.position.y > canvas.height) {
         console.log('you lose') 
         init() 
        }
         
    player.update()


}

function init(){
    platforms = [
        new Platform({ x: 200, y: 100, image: createImage(platform) }),
        new Platform({ x: 1000, y: 400, image: createImage(platform) }),
        new Platform({ x: 1750, y: 500, image: createImage(platform) }),
        new Platform({ x: 400, y: 300, image: createImage(platform) }),
        new Platform({ x: -50, y: 500, image: createImage(platform) }),
    
    ]
    
    GenericObjs = [
        new GenericObj({ x: -300, y: 0, image: createImage(main_background) },),
        new GenericObj({ x: -300, y: 100, image: createImage(background4) }),
        new GenericObj({ x: -300, y: 0, image: createImage(background3) }),
        new GenericObj({ x: -300, y: 0, image: createImage(background2) }),
        new GenericObj({ x: -300, y: 350, image: createImage(background1) }),
    
    ]

    player = new Player()

    scrollOffset = 0
}

//opted to use keydown and keyup as flags instead of basic fire, lets hope it works
window.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 87:
            {
                console.log('up')
                player.velocity.y -= 20
                break
            }
        case 83:
            {
                console.log('down')
                break
            }
        case 68:
            {
                console.log('right')
                keys.right.pressed = true
                break
            }
        case 65:
            {
                console.log('left')
                keys.left.pressed = true
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
    switch (keyCode) {
        case 87:
            {
                console.log('up up')
                break
            }
        case 83:
            {
                console.log('down up')
                break
            }
        case 68:
            {
                console.log('right up')
                keys.right.pressed = false
                break
            }
        case 65:
            {
                console.log('left up')
                keys.left.pressed = false
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

animate()