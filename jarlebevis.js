//Arrayen med arrayer for år, og type ulovlighet
var tab = new Array();
tab[0] = [2008, 2009, 2010, 2011, 2012]; //år
tab[1] = [8956, 9745, 10032, 9734, 8999]; //promillekjøring
tab[2] = [15653, 14756, 11476, 11145, 19988]; //hastighetsovertredelse

//funksjon
function func()
{
    //variabler
    var sum = tab[1][0] + tab[2][0]; //legger sammen lovbrudd i det første året (2008)
    var temp; //variabel for å sjekke sum lovbrudd i et gitt år
    var yearIndex = 0; //en integer som brukes for å gi en index til arrayen for året det er flest forbrytelser

    //for-loopen teller lengden i arryaet for år
    for (var i = 0; i < tab[0].length; i++)
    {
        temp = tab[1][i] + tab[2][i]; //legger sammen lovbrudd for index 'i' i året som er gitt

        if(temp < sum) //sjekker om antall lovbrudd for året er mindre enn forrige år med minst lovbrudd
        {
            //...isåfall
            sum = temp; //blir sum lik temp fordi dette er da den nye minste verdien
            yearIndex++; //indexen for arrayet til år øker med (viktig for å hente frem hvilket år det gjelder)
        }
    }

    //her logger jeg en melding + arrayen for år og yearIndex som index for arrayen
    console.log("Det var færrest ulovligheter i: " + tab[0][yearIndex]);
}
func(); //kaller på funksjonen
