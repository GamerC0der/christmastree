const stars = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾"];

const ornamentCategories = {
    classic: [
        "ornaments/classic/orpheus_skateboarding.png",
        "ornaments/classic/mrt.png",
        "ornaments/classic/hack_cola.svg",
        "ornaments/classic/i_heart_hc.png",
        "ornaments/classic/adobe.svg",
        "ornaments/classic/hackers_assemble.png",
        "ornaments/classic/macintosh.svg",
        "ornaments/classic/hack_strikes_back.svg"
    ],
    "sticky-holidays": [
        "ornaments/sticky-holidays/ornament1.png",
        "ornaments/sticky-holidays/ornament2.png",
        "ornaments/sticky-holidays/ornament3.png",
        "ornaments/sticky-holidays/ornament4.png",
        "ornaments/sticky-holidays/ornament5.png",
        "ornaments/sticky-holidays/ornament6.png"
    ],
    siege: [
        "ornaments/siege/framework_v2.png",
        "ornaments/siege/w5_sticker.png",
        "ornaments/siege/w7_sticker_orph_1.png",
        "ornaments/siege/w11_sticker.png"
    ],
    other: [
        "ornaments/other/img_1135.png",
        "ornaments/other/orpheus-hollow-knight.png",
        "ornaments/other/tootsie_roll.png"
    ]
};

let ornamentCounter = 0;

function changeStar(){
    let randomIndex = Math.floor(Math.random() * 6 );
    document.getElementById("star").innerText = stars[randomIndex];
}

function loadOrnaments(category) {
    const gallery = document.getElementById("ornament-gallery");
    gallery.innerHTML = "";

    ornamentCategories[category].forEach(ornamentSrc => {
        const ornamentOption = document.createElement("img");
        ornamentOption.src = ornamentSrc;
        ornamentOption.className = "ornament-option";
        ornamentOption.addEventListener("click", () => addOrnamentToTree(ornamentSrc));
        gallery.appendChild(ornamentOption);
    });
}

function addOrnamentToTree(ornamentSrc) {
    const decorations = document.getElementById("decorations");

    const randomTop = Math.random() * 300 + 40;
    const randomLeft = Math.random() * 200 + 40;

    const ornament = document.createElement("img");
    ornament.src = ornamentSrc;
    ornament.className = "ornament";
    ornament.id = `ornament${ornamentCounter++}`;
    ornament.style.transform = `translate(${randomLeft}px, ${randomTop}px)`;
    ornament.setAttribute('data-x', randomLeft);
    ornament.setAttribute('data-y', randomTop);

    decorations.appendChild(ornament);

    initializeInteract(ornament);
}

function initializeInteract(element) {
    interact(element)
        .draggable({
            listeners: {
                start(event) {
                    event.target.style.zIndex = "20";
                },
                move(event) {
                    const target = event.target;
                    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                },
                end(event) {
                    event.target.style.zIndex = "10";
                }
            },
        })
        .resizable({
            edges: { left: true, right: true, bottom: true, top: true },
            listeners: {
                move(event) {
                    const target = event.target;
                    let x = (parseFloat(target.getAttribute('data-x')) || 0);
                    let y = (parseFloat(target.getAttribute('data-y')) || 0);

                    target.style.width = event.rect.width + 'px';
                    target.style.height = event.rect.height + 'px';

                    x += event.deltaRect.left;
                    y += event.deltaRect.top;

                    target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                }
            },
            modifiers: [
                interact.modifiers.restrictSize({
                    min: { width: 20, height: 20 }
                })
            ]
        });
}

function switchTab(category) {
    document.querySelectorAll(".tab-button").forEach(button => {
        button.classList.remove("active");
    });
    document.querySelector(`[data-category="${category}"]`).classList.add("active");

    loadOrnaments(category);
}

document.addEventListener('DOMContentLoaded', () => {
    const star = document.getElementById("star");

    switchTab("classic");

    document.querySelectorAll(".tab-button").forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            switchTab(category);
        });
    });

    star.addEventListener('click', changeStar);

    document.querySelectorAll('.ornament').forEach(ornament => {
        initializeInteract(ornament);
    });
})
