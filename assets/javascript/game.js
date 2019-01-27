$ ( document ).ready(function() {

    // Generates a random between 19-120 number at the start of the game
    var Random=Math.floor(Math.random()*101+19)

    //Appends the random number toe the randomNumber id in the html
    $('#randomNumber').text(Random)

    //Generates the random numbers beatween 1 and 12 for each gem
    var num1= Math.floor(Math.random()*11+1);
    var num2= Math.floor(Math.random()*11+1);
    var num3= Math.floor(Math.random()*11+1);
    var num4= Math.floor(Math.random()*11+1);

    //declares variables for tally
    var userTotal= 0;
    var wins= 0;
    var losses= 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    //resets game
    function reset(){
        Random= Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
    }

    //adds wins!
    function woo() {
        alert("Congrats! You win!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    //adds losses
    function boo() {
        alert("Congrats! You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    //makes gems clickable
    $('#gemOne').on('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        //setup for winnning/losing
        if (userTotal == Random) {
            woo();
        }
        else if ( userTotal > Random) {
            boo();
        }
    })
    $('#gemTwo').on('click', function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        //setup for winnning/losing
        if (userTotal == Random) {
            woo();
        }
        else if ( userTotal > Random) {
            boo();
        }
    })
    $('#gemThree').on('click', function(){
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        //setup for winnning/losing
        if (userTotal == Random) {
            woo();
        }
        else if ( userTotal > Random) {
            boo();
        }
    })
    $('#gemFour').on('click', function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        //setup for winnning/losing
        if (userTotal == Random) {
            woo();
        }
        else if ( userTotal > Random) {
            boo();
        }
    });
});