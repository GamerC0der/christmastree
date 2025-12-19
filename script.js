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
        "ornaments/classic/hack_strikes_back.svg",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/84d21d014bf6cee90ce53f8f35698b64612f0a3e_Jetlag.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/b6707300b42b2c5cb0d44e8b6f4c5066d6fefa6b_Airlines.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/9f49fb15a86c7fd57e3f58bf885650e5b0efcadf_Friends.svg",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/57a5e0616e3da740b4ef9594ffd9f97b098969f0_Orphmoji_Peefest.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/6828f0051622f9d8ad1d0eb182b2c33ef324fe68_Hack_In_The_Club.svg",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/3a55bb53f26e58c92fd14af70ab90eab5fe43ed8_Jurassic_Hack.png"
    ],
    "sticky-holidays": [
        "ornaments/sticky-holidays/ornament1.png",
        "ornaments/sticky-holidays/ornament2.png",
        "ornaments/sticky-holidays/ornament3.png",
        "ornaments/sticky-holidays/ornament4.png",
        "ornaments/sticky-holidays/ornament5.png",
        "ornaments/sticky-holidays/ornament6.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/4c53c2888a662bc4_image-removebg-preview__13_.png"
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
        "ornaments/other/tootsie_roll.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/6d115d0c51dc911e294b0c0c7294a5036fef3531_Epoch_Among_Us.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/0680ab24134561362b3dfaacb2c53caeaba21b7c_Undertale.svg",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/dda44f08c2f529dc432b51c3a4e99c5c59607f08_Orpheus_Goes_To_FIRST_Robotics.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/53ec1cb30fdf0dc1_love_gaming.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/1271409861dcd5d4_25pc_sticker_8.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/bf920cb34b899762d6767749d1000c0207caeb55_Stranger_Hacks.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/a95f11d40fe3bb46_65pc_sticker_2.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/f982c025a94f9aca56c53af498e2d31df44b4036_Sticky_Holidays_-_Completion.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/3eef048f97e84f3384ff2368dc51846884279474_2025_Summer_of_Making.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/6738cbc8f0007511_25pc_sticker_2.png"
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
