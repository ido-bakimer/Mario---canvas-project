const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gravity = 0.9
const friction = 0.97 

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: -10
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


const player = new Player()
const keys = {
    right: {
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


	if(keys.right.pressed) {
		player.velocity.x = 5;
	} else if(keys.left.pressed) {
		player.velocity.x = -5;
	} else {
		player.velocity.x *= friction;
	}
}

animate()

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
