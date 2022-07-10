const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gravity = 0.9 //values can be changed. the lower the number the slower (more moon walk) will it be
const friction = 0.93 //the closer to 1, the more slippery stuff will be.

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
        else { this.velocity.y = 0 }
    }

}

class Platform{  
    constructor() {
        this.position = {
            x:200,
            y:100
        }
        this.width = 200
        this.height = 20
    }
    draw(){
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const player = new Player()
const platforms = [new Platform()]


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
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    platforms.forEach((platform) =>{
        platform.draw()
    })


	if(keys.right.pressed
        && player.position.x < canvas.width - 700
        ) {
		player.velocity.x = 5;
	} else if(keys.left.pressed
        &&  player.position.x > 350
        ) {
		player.velocity.x = -5;
	} else {
		player.velocity.x *= friction;    //just realised that by using friction the v value will never 
        if(Math.abs(player.velocity.x) <= 0.3){ //reach true 0, and that will probably makes some stuff harder down the line
            player.velocity.x = 0              //so added safe guard, just to be sure, maybe will need fixing later.
        }
        if (keys.right.pressed){ 
            platforms.forEach((platform) =>{
                platform.position.x -= 5
            })
        }
        if (keys.left.pressed){
            platforms.forEach((platform) =>{
                platform.position.x += 5
            })

        }
	}
    platforms.forEach((platform) =>{
        if (player.position.y + player.height <= platform.position.y 
            && player.position.y + player.height + player.velocity.y >= platform.position.y
            && player.position.x +player.width >= platform.position.x
            && player.position.x  <= platform.position.x + platform.width
            )
        {player.velocity.y = 0}    })

}

animate()


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
                player.velocity.y -= 20
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
