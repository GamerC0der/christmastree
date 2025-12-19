const date = new Date();
const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const ornamentImg = ["ordament.png"];
const stars = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾"];

function changeStar(){
    let randomIndex = Math.floor(Math.random() * 6 );
    document.getElementById("star").innerText = stars[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const decorations = document.getElementById("decorations");
    const star = document.getElementById("star");

    const ornaments = [
        { top: "1rem", left: "9rem" },
        { top: "2rem", left: "7rem" },
        { top: "2rem", left: "14rem" }
    ];

    for(let i = 0; i < ornaments.length; i++){
        const randomImg= ornamentImg[0]
        decorations.innerHTML += `<img src="${randomImg}" class="ornament" id="ornament${i}">`;
        const ornament = document.getElementById("ornament"+i);
        ornament.style.marginLeft = ornaments[i].left;
        ornament.style.marginTop = ornaments[i].top;
    }

    star.addEventListener('click', changeStar);
})
