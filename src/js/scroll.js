const navigationBar = document.getElementById('navbar');
const main = document.querySelector("main");

window.addEventListener("scroll", () => {
    const mainPosition = main.getBoundingClientRect();
    
    if (mainPosition.top <= 0) {
        navigationBar.classList.remove("text-black");
        navigationBar.classList.add("text-white");
        navigationBar.classList.add("backdrop-blur-lg")
    } else {
        navigationBar.classList.add("text-black");
        navigationBar.classList.remove("text-white");
        navigationBar.classList.remove("backdrop-blur-lg")
    }
});
