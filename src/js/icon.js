// import rainyIcon from "../assets/rainy.svg";
export { showIcon };

const showIcon = (() => {
    const wrapper = document.querySelector(".wrapper");
    const icon = document.createElement("img");
    icon.src = rainyIcon;
    wrapper.appendChild(icon);
})