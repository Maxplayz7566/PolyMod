const cardTemplate = `<div onclick="window.location.href = '%link'" class="w-max bg-white rounded-lg shadow-md p-6 mx-3">
    <div class="flex items-center w-full">
        <img src="%image" class="rounded-lg shadow-md mr-6" style="height: 100px;">
        <div class="flex flex-col justify-start text-left">
            <h2 class="text-3xl font-semibold">%name</h2>
            <p class="font-medium text-blue-500 mt-2">%author</p>
            <img alt="%plat" style="max-height: 32px; height: 32px;" class="mt-1 place-self-start" src="%platBadge">
        </div>
    </div>
</div>
`;

const carousel = document.getElementById("carousel");
const carousel2 = document.getElementById("carousel2");

function createCard(card) {
    let platBadge =
        "https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact/available/modrinth_vector.svg";
    if (card.platform == "curse") {
        platBadge =
            "https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact/available/curseforge_vector.svg";
    }

    return cardTemplate
        .replace("%name", card.title)
        .replace("%author", card.author)
        .replace("%link", card.link)
        .replace("%plat", card.platform)
        .replace("%platBadge", platBadge)
        .replace("%image", card.icon_url);
}

fetch("/api/getTopMods")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((json) => {
        let html = "";
        json.forEach((card) => {
            html += createCard(card);
        });
        carousel.innerHTML += carousel2.innerHTML += html;
    });
