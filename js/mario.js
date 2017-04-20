var btn = document.querySelector('#btn');
    var first_board = document.querySelector("#first-board");
    var stage = document.querySelector(".stage");
    var mario = document.querySelector('#mario');
    var hideStage = function(){
      first_board.style.display = 'block';
      stage.style.display = "none";
    };
    window.onload = hideStage;
        btn.addEventListener('click', function(){
        first_board.style.display = 'none';
        stage.style.display = "block";
        mario.style.display = "block";
    });
    mario.style.top = "300px";
    mario.style.left = '0px';
    mario.style.animationName = '';
    var marioWalk = function(event){
      switch (event.charCode || event.keyCode){
        case 37: /*left arrow*/
        mario.style.animationName = 'mario-walk';
        mario.style.backgroundPositionY = '-35px';
        mario.style.left = parseInt(mario.style.left) - 5 + 'px';
        break;
        case 65:/*'a' key*/
        mario.style.animationName = 'mario-walk';
        mario.style.backgroundPositionY = '-35px';
        mario.style.left = parseInt(mario.style.left) - 5 + 'px';
        break;
        case 39:/*right arrow*/
        mario.style.animationName = 'mario-walk';
        mario.style.backgroundPositionY = '-70px';
        mario.style.left = parseInt(mario.style.left) + 5 + 'px';
        break;
        case 68:/*'d' key*/
        mario.style.animationName = 'mario-walk';
        mario.style.backgroundPositionY = '-70px';
        mario.style.left = parseInt(mario.style.left) + 5 + 'px';
        break;
        case 38: /* up arrow*/
        mario.style.animationName = 'mario-walk';
        mario.style.backgroundPositionY = '-105px';
        mario.style.top = parseInt(mario.style.top) - 5 + 'px';
        break;
        case 87: /* 'w' key*/
        mario.style.animationName = 'mario-walk';
        mario.style.backgroundPositionY = '-105px';
        mario.style.top = parseInt(mario.style.top) - 5 + 'px';
        break;
        case 40: /* down arrow*/
        mario.style.animationName = 'mario-walk';
        mario.style.backgroundPositionY = '0px';
        mario.style.top = parseInt(mario.style.top) + 5 + 'px';
        break;
        case 83: /* 's' key*/
        mario.style.animationName = 'mario-walk';
        mario.style.backgroundPositionY = '0px';
        mario.style.top = parseInt(mario.style.top) + 5 + 'px';
        break;
      }
    }
    var marioStop = function(){
      mario.style.animationName = '';
    }
    window.onkeydown = marioWalk;
    window.onkeyup = marioStop;