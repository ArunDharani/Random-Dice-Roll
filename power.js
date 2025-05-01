var player1;
var player2;

document.querySelector('.click').addEventListener('click', function() {
    player1 = Math.floor(Math.random() * 6) + 1;
    player2 = Math.floor(Math.random() * 6) + 1;

    const image1 = document.querySelector(".one"); 
    const image2 = document.querySelector(".two"); 
    const text = document.querySelector(".result");
    switch (player1) {
        case 1:
            image1.src = "one.png"; 
            break;
        case 2:
            image1.src = "two.png";
            break;
        case 3:
            image1.src = "three.png";
            break;
        case 4:
            image1.src = "four.png";
            break;
        case 5:
            image1.src = "five.png";
            break;
        case 6:
            image1.src = "six.png";
            break;
    }

    switch (player2) {
        case 1:
            image2.src = "one.png";
            break;
        case 2:
            image2.src = "two.png";
            break;
        case 3:
            image2.src = "three.png";
            break;
        case 4:
            image2.src = "four.png";
            break;
        case 5:
            image2.src = "five.png";
            break;
        case 6:
            image2.src = "six.png";
            break;
    }


    if (player1 > player2) {
        text.innerHTML = 'Player 1 own the test';
    }
    else if ( player1 === player2 ) {
        text.innerHTML = " Test Drawn ";
    }
    else {
        text.innerHTML = 'Player 2 own the test ';
    }
});