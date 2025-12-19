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
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/6738cbc8f0007511_25pc_sticker_2.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/c8a9b423f92e7c76_image-removebg-preview__28_-removebg-preview.png"
    ]
};

function loadOrnaments(category) {
    const gallery = document.getElementById("ornament-gallery");
    gallery.innerHTML = "";

    ornamentCategories[category].forEach(ornamentSrc => {
        const ornamentOption = document.createElement("img");
        ornamentOption.src = ornamentSrc;
        ornamentOption.className = "ornament-option";
        gallery.appendChild(ornamentOption);
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
    switchTab("classic");

    document.querySelectorAll(".tab-button").forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            switchTab(category);
        });
    });

    interact('.ornament-option')
        .draggable({
            inertia: true,
            autoScroll: true,
            listeners: {
                start(event) {
                    const original = event.target;
                    const clone = original.cloneNode(true);
                    clone.className = 'ornament';
                    clone.style.position = 'absolute';

                    const naturalWidth = original.naturalWidth || 60;
                    const naturalHeight = original.naturalHeight || 60;
                    const aspectRatio = naturalWidth / naturalHeight;

                    let width, height;
                    const maxSize = 80;
                    const minSize = 40;

                    if (naturalWidth > naturalHeight) {
                        width = Math.min(Math.max(naturalWidth * 0.15, minSize), maxSize);
                        height = width / aspectRatio;
                    } else {
                        height = Math.min(Math.max(naturalHeight * 0.15, minSize), maxSize);
                        width = height * aspectRatio;
                    }

                    clone.style.width = width + 'px';
                    clone.style.height = height + 'px';
                    clone.style.left = (event.clientX - width/2) + 'px';
                    clone.style.top = (event.clientY - height/2) + 'px';
                    clone.style.zIndex = '1000';
                    clone.style.pointerEvents = 'none';
                    document.body.appendChild(clone);

                    event.target.dragClone = clone;
                },
                move(event) {
                    const clone = event.target.dragClone;
                    if (clone) {
                        const x = (parseFloat(clone.style.left) || 0) + event.dx;
                        const y = (parseFloat(clone.style.top) || 0) + event.dy;
                        clone.style.left = x + 'px';
                        clone.style.top = y + 'px';

                        snapToTree(clone, x, y);
                    }
                },
                end(event) {
                    const clone = event.target.dragClone;
                    if (clone) {
                        clone.style.pointerEvents = 'auto';

                        addResizeHandles(clone);

                        makeResizable(clone);

                        delete event.target.dragClone;
                    }
                }
            }
        });
});

function snapToTree(ornament, x, y) {
    const tree = document.getElementById('tree-image');
    const treeRect = tree.getBoundingClientRect();

    const ornamentWidth = ornament.offsetWidth;
    const ornamentHeight = ornament.offsetHeight;
    const ornamentCenterX = x + ornamentWidth / 2;
    const ornamentCenterY = y + ornamentHeight / 2;

    const treeCenterX = treeRect.left + treeRect.width / 2;
    const treeCenterY = treeRect.top + treeRect.height / 2;

    const ornamentLeft = x;
    const ornamentRight = x + ornamentWidth;
    const ornamentTop = y;
    const ornamentBottom = y + ornamentHeight;

    const isOnTree =
        ornamentRight > treeRect.left &&
        ornamentLeft < treeRect.right &&
        ornamentBottom > treeRect.top &&
        ornamentTop < treeRect.bottom;

    if (isOnTree) {
        ornament.classList.add('snapped');
    } else {
        ornament.classList.remove('snapped');
    }
}

function addResizeHandles(ornament) {
    const handles = ['tl', 'tr', 'bl', 'br'];
    handles.forEach(handle => {
        const resizeHandle = document.createElement('div');
        resizeHandle.className = `interact-resize-handle interact-resize-handle-${handle}`;
        ornament.appendChild(resizeHandle);
    });
}

function makeResizable(ornament) {
    interact(ornament)
        .resizable({
            edges: {
                top: '.interact-resize-handle-tl, .interact-resize-handle-tr',
                left: '.interact-resize-handle-tl, .interact-resize-handle-bl',
                bottom: '.interact-resize-handle-bl, .interact-resize-handle-br',
                right: '.interact-resize-handle-tr, .interact-resize-handle-br'
            },
            listeners: {
                move(event) {
                    const target = event.target;

                    target.style.width = event.rect.width + 'px';
                    target.style.height = event.rect.height + 'px';

                    if (event.deltaRect.left !== 0 || event.deltaRect.top !== 0) {
                        const currentLeft = parseFloat(target.style.left) || 0;
                        const currentTop = parseFloat(target.style.top) || 0;
                        target.style.left = (currentLeft + event.deltaRect.left) + 'px';
                        target.style.top = (currentTop + event.deltaRect.top) + 'px';
                    }
                }
            },
            modifiers: [
                interact.modifiers.restrictSize({
                    min: { width: 30, height: 30 },
                    max: { width: 150, height: 150 }
                })
            ],
            inertia: true
        })
        .draggable({
            listeners: {
                move(event) {
                    const target = event.target;
                    const currentLeft = parseFloat(target.style.left) || 0;
                    const currentTop = parseFloat(target.style.top) || 0;

                    target.style.left = (currentLeft + event.dx) + 'px';
                    target.style.top = (currentTop + event.dy) + 'px';

                    snapToTree(target, currentLeft + event.dx, currentTop + event.dy);
                }
            },
            inertia: true
        });
}
