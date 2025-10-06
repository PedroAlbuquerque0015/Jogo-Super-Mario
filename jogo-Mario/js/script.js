const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () =>{
    mario.classList.add('jump')
    console.log("funcionou")
    setTimeout(() => {
        mario.classList.remove('jump')

    },650);
}

document.addEventListener('keydown', jump);


const loop = setInterval(() => {

    console.log('loop')
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    

    if(pipePosition < 120 && marioPosition < 93){
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.src = '/images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '45px'
        clearInterval(loop);
    }
},10);