document.addEventListener("DOMContentLoaded", () => {
    loadTypes();
});

// ----------------------------------
// Load Type Buttons
// ----------------------------------
function loadTypes() {
    const typesDiv = document.getElementById("types");
    const catDiv = document.getElementById("categories");
    const resultsDiv = document.getElementById("results");

    catDiv.style.display = "none";
    resultsDiv.innerHTML = "";

    typesDiv.innerHTML = `
        <button class="tg-btn" onclick="loadCategories('channel')">📢 Channels</button>
        <button class="tg-btn" onclick="loadCategories('group')">👥 Groups</button>
        <button class="tg-btn" onclick="loadCategories('bot')">🤖 Bots</button>
    `;
}

// ----------------------------------
// Show Categories
// ----------------------------------
function loadCategories(type) {
    const typesDiv = document.getElementById("types");
    const catDiv = document.getElementById("categories");
    const resultsDiv = document.getElementById("results");

    typesDiv.innerHTML = "";
    resultsDiv.innerHTML = "";

    catDiv.style.display = "grid";

    const categories = [
        "Anime/AC","Adult","News","Local",
        "Music","Film & TV","Games","Emotions",
        "Community","Crypto","Programming","AI",
        "Tech","Finance","Travel","Novels",
        "Live","Design","Education","Shopping"
    ];

    catDiv.innerHTML = "";

    categories.forEach(c => {
        const formatted = c.toLowerCase().replace(/[^a-z0-9]/g, "_");

        catDiv.innerHTML += `
            <button class="tg-btn-outline" onclick="showResults('${type}', '${formatted}')">
                ${c}
            </button>
        `;
    });

    // Back button full-width across the grid
    catDiv.innerHTML += `
        <button class="tg-btn mt-3" style="grid-column: 1 / -1;" onclick="loadTypes()">⬅ Back</button>
    `;
}

// ----------------------------------
// Show Results
// ----------------------------------
function showResults(type, category) {
    const catDiv = document.getElementById("categories");
    const resultsDiv = document.getElementById("results");

    catDiv.style.display = "none";

    const filtered = resources.filter(
        item =>
            item.type === type &&
            item.category.toLowerCase().replace(/[^a-z0-9]/g, "_") === category
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = `
            <h4>No data found.</h4>
            <button class="tg-btn mt-3 w-100" onclick="backToCategories()">⬅ Back</button>
        `;
        return;
    }

    let html = `
        <h4 class="text-primary">${type.toUpperCase()} → ${category.replace(/_/g, " ")}</h4>
        <ul class="list-group mt-3">
    `;

    filtered.forEach(item => {
        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <strong>${item.name}</strong>
                <a href="${item.link}" target="_blank" class="tg-btn-link">Open</a>
            </li>
        `;
    });

    html += `</ul>
        <button class="tg-btn mt-3 w-100" onclick="backToCategories()">⬅ Back</button>
    `;

    resultsDiv.innerHTML = html;
}

// ----------------------------------
// Back to Categories
// ----------------------------------
function backToCategories() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("categories").style.display = "grid";
}