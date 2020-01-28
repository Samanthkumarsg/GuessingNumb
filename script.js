window.onload = function(){
    // const gameInput = 3;
    const gameInput = document.querySelector('#game-input');
    const playBtn = document.querySelector('.play-btn');
    const score = document.querySelector('main h5');
    const label = document.querySelector('main label');
    const main = document.querySelector('main');
    let lives = 3;
    let time = 5;

    playBtn.addEventListener('click',start);

        function start(e){
            let randomNumber = Math.floor(Math.random()*10);
            console.log(`${randomNumber} vs ${gameInput.value}`);
            if(randomNumber==gameInput.value)
            {                
                main.style.borderBottom="4px solid lawngreen";
                console.log("You Win");
                won();
                setInterval(reload,4000);
            }
            else
            {
                checkLife();
                console.log(lives);
                console.log(randomNumber);
                gameInput.value='';
                main.style.borderBottom="4px solid red";
                score.textContent = `lives : ${lives} Correct answer is ${randomNumber}`;

            }
        }

        function won(){
            score.textContent = `Congrats! You won`;
        }

        function gameOver()
        {
            console.log("Game over");
            playBtn.textContent="Play Again";
            playBtn.style.margin="50px auto";

            playBtn.style.display="none";
            score.textContent = `lifes : ${lives} -  Game Over!`;
            score.style.marginTop="20%";
            gameInput.style.display="none";
            label.style.display="none";
            setInterval(reload,1000);
        }

        function checkLife(randomNumber){
       
            if(lives===0)
            {
                gameOver();   
            }
            else
            {
                lives-=1;
            }
        }

        function reload(){
                
                score.textContent = `Game will be restarted in ${time--} seconds`; 
                setTimeout(refresh,time*1000);
        }

        function refresh(){
            location.reload(true);
        }

}