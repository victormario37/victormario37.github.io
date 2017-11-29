var image = document.getElementById("redStopLight");
var crownFish = document.getElementById("crown");
var bettaFish = document.getElementById("betta");
var winningFish = document.getElementById("WinningFish");
winningFish.style.display = 'none';
var number = Math.random() * 100;
var number2 = Math.random() * 100;
var raceStarted = false;

function changeLight()
{
    image.src = "greenlight.png";
    image.style.width = '350px';
    image.style.width = '200px';
}

function startRace()
{
    raceStarted = true;

    setTimeout(function () {
        var newNumber = (Math.random() * 100) + number;
        var newNumber2 = (Math.random() * 100) + number2;
        
        crownFish.style.marginLeft = newNumber + 'px';
                
        bettaFish.style.marginLeft = newNumber2 + 'px';
        
        number = newNumber;
        number2 = newNumber2;
        
        var crownDistance = crownFish.style.marginLeft.slice(0, -2);
        var bettaDistance = bettaFish.style.marginLeft.slice(0, -2);

        var width = screen.width;

        if (crownDistance >= width - 150)
        {
            winningFish.style.display = 'inline';
            window.alert("The Crowntail fish won!");
        }
        else if (bettaDistance >= width - 150)
        {           
            document.getElementById("winningCarID").src = "Images/redCar.png";
            winningFish.style.display = 'inline';
            window.alert("The Betta fish won!");                  
        }
        else
        {
            startRace();
        }       
    }, 500);       
}

function reset()
{
    image.src = "redlight.png";
    image.style.width = '350px';
    image.style.width = '200px';
    winningFish.style.display = 'none';
    crownFish.style.marginLeft = 0;
    betta.style.marginLeft = 0;
    crownDistance = 0;
    bettaDistance = 0;
    newNumber = 0;
    newNumber2 = 0;
    number = 0;
    number2 = 0;
}