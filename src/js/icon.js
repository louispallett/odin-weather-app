import rainyIcon from "../assets/rainy.svg";
export { showIcon };

/* Instructions:
    It would be ideal if this could be used for both the forecast icons AND the current 
    weather icon. 
    
    To so this, probably best to RETURN the icon in question, so that the <img> element
    can be SET to it?*/

// const showIcon = (() => {
//     const wrapper = document.querySelector(".wrapper");
//     const icon = document.createElement("img");
//     icon.src = rainyIcon;
//     wrapper.appendChild(icon);
// })

// WARNING: below function is temporary, just outlining how it SHOULD work, but
// I have no internet :(
const showIcon = ((weatherCode) => {
    //if statement here
    if(weatherCode >= 1100 && weatherCode <= 1200) {
        return rainyIcon;
    } //else if and so on
});