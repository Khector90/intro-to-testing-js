(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let planetsStringOne = "<br>Mercury</br>,<br>Venus</br>,<br>Earth</br>,<br>Mars</br>,<br>Jupiter</br>,<br>Saturn</br>,<br>Uranus</br>,<br>Neptune</br>";
    console.log(planetsStringOne);

    let planetStringTwo = <ul>'mercury','venus','earth','mars'</ul>;
    console.log(planetStringTwo);

})();