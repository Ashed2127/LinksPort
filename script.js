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

        <button class="tg-btn" onclick="loadCategories('channel')"> Channels</button>

        <button class="tg-btn" onclick="loadCategories('group')"> Groups</button>

        <button class="tg-btn" onclick="loadCategories('bot')">Bots</button>

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

        "Anime/AC","Adult","News","Business",

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

        <button class="tg-btn mt-3" style="grid-column: 1 / -1;" onclick="loadTypes()"> Back</button>

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

            <button class="tg-btn mt-3 w-100" onclick="backToCategories()"> Back</button>

        `;

        return;

    }
    
    // Function to convert string to Title Case (First letter of each word capitalized)
    const toTitleCase = (str) => {
        // Replace underscores with space, convert to lowercase, then capitalize starts of words
        return str.replace(/_/g, ' ').toLowerCase().replace(/(^|\s)\S/g, (x) => x.toUpperCase());
    }

    // Format Type and Category using the new function
    let typeTitle = toTitleCase(type);
    const categoryTitle = toTitleCase(category);
    
    // Pluralize the type for the header (e.g., 'Channel' -> 'Channels')
    if (!typeTitle.endsWith('s')) {
        typeTitle += 's';
    }
    
    // Header template: Category Type (e.g., "Tech Channels") using the non-hovering style
    let html = `
        <div class="tg-header-btn">
            ${categoryTitle} ${typeTitle}
        </div>
        <ul class="list-group mt-3">
    `;


    filtered.forEach(item => {

        // Build the image HTML dynamically. Uses the 'profile-pic' class defined in index.html.

        const imageHtml = item.image 

            ? `<img src="${item.image}" alt="Profile Picture" class="profile-pic">`

            : ''; 
        html += `

            <li class="list-group-item d-flex justify-content-between align-items-center">

                <div class="d-flex align-items-center">

                    ${imageHtml}

                    <strong>${item.name}</strong>

                </div>

                <a href="${item.link}" target="_blank" class="tg-btn-link">Open</a>

            </li>

        `;

    });
    html += `</ul>

        <button class="tg-btn mt-3 w-100" onclick="backToCategories()">Back</button>

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
