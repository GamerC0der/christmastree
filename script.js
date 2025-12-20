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
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/4c53c2888a662bc4_image-removebg-preview__13_.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/17ed519d653f9218_image-removebg-preview__8_.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/4467161685991c75_image-removebg-preview__16_.png"
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
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/c8a9b423f92e7c76_image-removebg-preview__28_-removebg-preview.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/f38590ace966c976b4f2922e56be6edc936e9148_HackHackClub.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/412791702873de9de5297c616e38818a1cdac0d5_Horse.png",
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/7886d2c85adf83c0ed767d5cbf1b3b6700f173bf_flea_sticker.png"
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

    const treeActionsBtn = document.getElementById("tree-actions-btn");
    const dropdown = treeActionsBtn.parentElement;

    treeActionsBtn.addEventListener("click", () => {
        dropdown.classList.toggle("show");
    });

    document.getElementById("save-tree-btn").addEventListener("click", () => {
        dropdown.classList.remove("show");
        saveTree();
    });

    document.getElementById("import-tree-btn").addEventListener("click", () => {
        dropdown.classList.remove("show");
        importTree();
    });

    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
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

                        makeSimpleResizable(clone);

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

function makeSimpleResizable(ornament) {
    ornament.style.resize = 'both';
    ornament.style.overflow = 'hidden';
    ornament.style.cursor = 'move';

    interact(ornament)
        .resizable({
            edges: { right: true, bottom: true, left: true, top: true },
            listeners: {
                start(event) {
                    event.target.classList.add('resizing');
                },
                move(event) {
                    const target = event.target;
                    const aspectRatio = target.naturalWidth / target.naturalHeight;

                    let { width, height } = event.rect;

                    if (Math.abs(event.deltaRect.width) > Math.abs(event.deltaRect.height)) {
                        height = width / aspectRatio;
                    } else {
                        width = height * aspectRatio;
                    }

                    target.style.width = width + 'px';
                    target.style.height = height + 'px';

                    if (event.deltaRect.left !== 0) {
                        target.style.left = (parseFloat(target.style.left) + event.deltaRect.left) + 'px';
                    }
                    if (event.deltaRect.top !== 0) {
                        target.style.top = (parseFloat(target.style.top) + event.deltaRect.top) + 'px';
                    }
                },
                end(event) {
                    event.target.classList.remove('resizing');
                }
            },
            modifiers: [
                interact.modifiers.restrictSize({
                    min: { width: 30, height: 30 },
                    max: { width: 200, height: 200 }
                }),
                interact.modifiers.restrictEdges({
                    outer: 'parent'
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
            inertia: true,
            autoScroll: true
        });

    const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
            const { width, height } = entry.contentRect;
            if (width < 30 || height < 30) {
                ornament.style.border = '2px solid red';
            } else {
                ornament.style.border = '2px solid transparent';
            }
        }
    });

    resizeObserver.observe(ornament);
}

function saveTree() {
    const ornaments = document.querySelectorAll('.ornament');
    const treeImg = document.getElementById('tree-image');
    const treeRect = treeImg.getBoundingClientRect();

    let metadata = '';
    ornaments.forEach((ornament, index) => {
        const left = parseFloat(ornament.style.left) || 0;
        const top = parseFloat(ornament.style.top) || 0;
        const width = parseFloat(ornament.style.width) || 60;
        const src = ornament.src;

        const x = Math.round(left * 100 / treeRect.width);
        const y = Math.round(top * 100 / treeRect.height);
        const w = Math.round(width);

        metadata += `${index},${x},${y},${w},${src};`;
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;

    ctx.fillStyle = '#ec3750';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#8492a6';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';

    const line1 = 'This is a christmas tree,';
    const line2 = 'press the actions to import it!';
    const line3 = 'Want to view the data, see the metadata!';

    ctx.fillText(line1, canvas.width / 2, canvas.height / 2 - 10);
    ctx.fillText(line2, canvas.width / 2, canvas.height / 2 + 15);
    ctx.fillText(line3, canvas.width / 2, canvas.height / 2 + 40);

    const flagImg = new Image();
    flagImg.crossOrigin = 'anonymous';
    flagImg.onload = () => {
        const flagSize = 80;
        ctx.drawImage(flagImg, canvas.width - flagSize - 20, -10, flagSize, flagSize * (flagImg.height / flagImg.width));
        finalizeSave();
    };
    flagImg.onerror = () => {
        finalizeSave();
    };
    flagImg.src = 'https://assets.hackclub.com/flag-orpheus-top.svg';

    function finalizeSave() {
        canvas.toBlob(blob => {
            blob.arrayBuffer().then(buffer => {
                const pngData = new Uint8Array(buffer);
                const metadataChunk = createTextChunk('OrnamentData', metadata);

                const newPngData = new Uint8Array(pngData.length + metadataChunk.length);
                newPngData.set(pngData.slice(0, -12), 0);
                newPngData.set(metadataChunk, pngData.length - 12);
                newPngData.set(pngData.slice(-12), pngData.length + metadataChunk.length - 12);

                const newBlob = new Blob([newPngData], { type: 'image/png' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(newBlob);
                link.download = 'christmas-tree.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        });
    }

}

function createTextChunk(keyword, text) {
    const keywordBytes = new TextEncoder().encode(keyword + '\0');
    const textBytes = new TextEncoder().encode(text);
    const chunkLength = keywordBytes.length + textBytes.length;

    const chunk = new Uint8Array(12 + chunkLength);
    const view = new DataView(chunk.buffer);

    view.setUint32(0, chunkLength, false);
    chunk.set(new TextEncoder().encode('tEXt'), 4);
    chunk.set(keywordBytes, 8);
    chunk.set(textBytes, 8 + keywordBytes.length);

    let crc = 0xFFFFFFFF;
    for (let i = 4; i < chunk.length - 4; i++) {
        crc = (crc >>> 8) ^ crcTable[(crc ^ chunk[i]) & 0xFF];
    }
    view.setUint32(chunk.length - 4, crc ^ 0xFFFFFFFF, false);

    return chunk;
}

const crcTable = [];
for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
        c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[i] = c;
}

function importTree() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.png';

    input.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const metadata = extractPNGMetadata(arrayBuffer);

                document.querySelectorAll('.ornament').forEach(ornament => ornament.remove());

                if (metadata) {
                    const ornaments = metadata.split(';').filter(item => item.length > 0);
                    ornaments.forEach(ornamentData => {
                        const parts = ornamentData.split(',');
                        const index = parseInt(parts[0]);
                        const x = parseInt(parts[1]);
                        const y = parseInt(parts[2]);
                        const w = parseInt(parts[3]);
                        const src = parts.slice(4).join(',');

                        const ornament = document.createElement('img');
                        ornament.src = src;
                        ornament.className = 'ornament';
                        ornament.style.position = 'absolute';
                        ornament.style.width = w + 'px';
                        ornament.style.height = '60px';
                        const treeRect = document.getElementById('tree-image').getBoundingClientRect();
                        ornament.style.left = (x * treeRect.width / 100) + 'px';
                        ornament.style.top = (y * treeRect.height / 100) + 'px';
                        ornament.style.zIndex = '1000';
                        ornament.style.pointerEvents = 'none';

                        document.body.appendChild(ornament);
                        ornament.style.pointerEvents = 'auto';
                        makeSimpleResizable(ornament);
                    });
                }
            };
            reader.readAsArrayBuffer(file);
        }
    });

    input.click();
}

function extractPNGMetadata(arrayBuffer) {
    const data = new Uint8Array(arrayBuffer);
    const dataView = new DataView(arrayBuffer);

    let offset = 8;
    while (offset < data.length - 8) {
        const length = dataView.getUint32(offset, false);
        const type = String.fromCharCode(...data.slice(offset + 4, offset + 8));

        if (type === 'tEXt') {
            const nullIndex = data.indexOf(0, offset + 8);
            if (nullIndex !== -1) {
                const keyword = String.fromCharCode(...data.slice(offset + 8, nullIndex));
                if (keyword === 'OrnamentData') {
                    const textData = data.slice(nullIndex + 1, offset + 8 + length);
                    return new TextDecoder().decode(textData);
                }
            }
        }

        offset += 12 + length;
    }

    return null;
}
