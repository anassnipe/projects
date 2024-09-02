const dark = document.getElementById("dark");


dark.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        dark.src = 'moon.png'

    }else {
        dark.src = 'sun.png'
    }
})