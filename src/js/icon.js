import rainy from "../assets/rainy.svg";
import cloudy from "../assets/cloudy.svg";
import sunny from "../assets/sunny.svg";
import stormy from "../assets/stormy.svg"
import foggy from "../assets/foggy.svg";

export { showIcon };

const showIcon = ((weatherCode) => {
    switch (true) {
        case weatherCode < 1005:
            return sunny;
        case weatherCode < 1088:
            return cloudy;
        case weatherCode < 1118:
            return snow;
        case weatherCode < 1148:
            return foggy;
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