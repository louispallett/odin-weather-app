import rainy from "../assets/rainy.svg";
import cloudy from "../assets/cloudy.svg";
import sunny from "../assets/sunny.svg";
import stormy from "../assets/stormy.svg"
// (Yet to exist...)
// import foggy from "../assets/foggy.svg";

export { showIcon };

/* Instructions:
    It would be ideal if this could be used for both the forecast icons AND the current 
    weather icon. 
    
    To so this, probably best to RETURN the icon in question, so that the <img> element
    can be SET to it? In the place the function is called, first set it to console.log(FUNCTION)
    so that you can see the image coming through (we still need to fix the .location-wrapper 
    grid).
*/
const showIcon = ((weatherCode) => {
    switch (weatherCode) {
        case weatherCode < 1005:
            return sunny;
        case weatherCode < 1088:
            return cloudy;
        case weatherCode < 1118:
            return snow;
        //need to add this icon!!!
        // case weatherCode < 1148:
        //     return foggy; 
        case weatherCode < 1208:
            return rainy;
        case weatherCode < 1238:
            return snow;
        case weatherCode < 1265:
            return rainy;
        default:
            return stormy;
    }
});