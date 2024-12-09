document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const contentArea = document.getElementById('content');
    const searchInput = document.getElementById('search');

    const tierListData = {
        Vanilla: {
            1: [
                { name: "FourTure", status: "high" },
                { name: "s1ben", status: "low" },

            ],
            2: [
                { name: "Bennifit", status: "high" },
                { name: "blqnki0", status: "high" },
                { name: "stefypog", status: "low" },
            ],
            3: [
                { name: "AviKgolD1", status: "high" },
                { name: "Shtyrlitz", status: "low" },
            ],
            4: [
                { name: "хз чесна", status: "low" },
            ],
            5: [
                { name: "SlaveWs", status: "low" },
                { name: "RunishYT", status: "low" },
            ],
        },

        Sword: {
            1: [
                { name: "Я", status: "high" },
            ],
            2: [
                { name: "не знаю", status: "low" },
            ],
            3: [
                { name: "что", status: "high" },
            ],
            4: [
                { name: "тут", status: "low" },
            ],
            5: [
                { name: "писать", status: "high" },
            ],
        },

        NethiritePot: {
            1: [
                { name: "Я", status: "high" },
            ],
            2: [
                { name: "не знаю", status: "low" },
            ],
            3: [
                { name: "что", status: "high" },
            ],
            4: [
                { name: "тут", status: "low" },
            ],
            5: [
                { name: "писать", status: "high" },
            ],
        },

        UHC: {
            1: [
                { name: "Я", status: "high" },
            ],
            2: [
                { name: "не знаю", status: "low" },
            ],
            3: [
                { name: "что", status: "high" },
            ],
            4: [
                { name: "тут", status: "low" },
            ],
            5: [
                { name: "писать", status: "high" },
            ],
        },

        SMP: {
            1: [
                { name: "Я", status: "high" },
            ],
            2: [
                { name: "не знаю", status: "low" },
            ],
            3: [
                { name: "что", status: "high" },
            ],
            4: [
                { name: "тут", status: "low" },
            ],
            5: [
                { name: "писать", status: "high" },
            ],
        },

        Retired: {
            1: [
                { name: "Я", status: "high" },
            ],
            2: [
                { name: "не знаю", status: "low" },
            ],
            3: [
                { name: "что", status: "high" },
            ],
            4: [
                { name: "тут", status: "low" },
            ],
            5: [
                { name: "писать", status: "high" },
            ],
        },

        Blacklist: {
            1: [
                { name: "Я", status: "high" },
            ],
            2: [
                { name: "не знаю", status: "low" },
            ],
            3: [
                { name: "что", status: "high" },
            ],
            4: [
                { name: "тут", status: "low" },
            ],
            5: [
                { name: "писать", status: "high" },
            ],
        },
    };

    function createTierList(data) {
        if (!data || Object.keys(data).length === 0) {
            return '<p>No data available for this category.</p>';
        }

        let html = '<table class="tier-list">';
        html += '<tr><th>TIER 1</th><th>TIER 2</th><th>TIER 3</th><th>TIER 4</th><th>TIER 5</th></tr>';

        const maxPlayers = Math.max(...Object.values(data).map(tier => tier.length));

        for (let i = 0; i < maxPlayers; i++) {
            html += '<tr>';
            for (let tier = 1; tier <= 5; tier++) {
                if (data[tier] && data[tier][i]) {
                    const player = data[tier][i];
                    const tierClass = player.status === 'high' ? 'high-tier' : 'low-tier';
                    html += `<td class="${tierClass}">${player.name}</td>`;
                } else {
                    html += '<td></td>';
                }
            }
            html += '</tr>';
        }

        html += '</table>';
        return html;
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.dataset.category;
            const categoryData = tierListData[category];

            contentArea.innerHTML = `
                <h2>${category} Tier List</h2>
                ${createTierList(categoryData)}
            `;
        });
    });

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        console.log(`Searching for: ${searchTerm}`);
    });

    const initialCategory = categoryButtons[0].dataset.category;
    contentArea.innerHTML = `
        <h2>${initialCategory} Tier List</h2>
        ${createTierList(tierListData[initialCategory])}
    `;
});