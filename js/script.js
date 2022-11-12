const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500)
}
const loop = setInterval(()=>{
    const pipe_position =  pipe.offsetLeft;
    const mario_position = window.getComputedStyle(mario).bottom.replace('px', '');
    const clouds_position = window.getComputedStyle(clouds).bottom.replace('px', '');;

if (pipe_position <= 120 && pipe_position > 0 && mario_position <= 80){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipe_position}px`
    mario.style.animation = 'none';
    mario.style.bottom = `${mario_position}px`
    mario.src = './images/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'
    clouds.style.animation = 'none'
    clouds.style.left = `${clouds_position+550}px` 
    clearInterval(loop)
}

}, 10)
document.addEventListener('keydown', jump)