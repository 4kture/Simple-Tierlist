document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const contentArea = document.getElementById('content');
    const searchInput = document.getElementById('search');

    const tierListData = {
        Vanilla: {
            1: [
                { name: "FourTure", status: "high", region: "ВСНГ" },
                { name: "s1ben", status: "low", region: "ЗСНГ" },
            ],
            2: [
                { name: "Bennifit", status: "high", region: "ВСНГ" },
                { name: "blqnki0", status: "high", region: "ЗСНГ" },
                { name: "stefypog", status: "low", region: "ВСНГ" },
            ],
            3: [
                { name: "AviKgolD1", status: "high", region: "ЗСНГ" },
                { name: "Shtyrlitz", status: "low", region: "ВСНГ" },
            ],
            4: [
                { name: "хз чесна", status: "low", region: "ЗСНГ" },
            ],
            5: [
                { name: "SlaveWs", status: "low", region: "ВСНГ" },
                { name: "RunishYT", status: "low", region: "ЗСНГ" },
            ],
        },
        Sword: {
            1: [
                { name: "Я", status: "high", region: "ВСНГ" },
            ],
            2: [
                { name: "не знаю", status: "low", region: "ЗСНГ" },
            ],
            3: [
                { name: "что", status: "high", region: "ВСНГ" },
            ],
            4: [
                { name: "тут", status: "low", region: "ЗСНГ" },
            ],
            5: [
                { name: "писать", status: "high", region: "ВСНГ" },
            ],
        },
        NethiritePot: {
            1: [
                { name: "Я", status: "high", region: "ЗСНГ" },
            ],
            2: [
                { name: "не знаю", status: "low", region: "ВСНГ" },
            ],
            3: [
                { name: "что", status: "high", region: "ЗСНГ" },
            ],
            4: [
                { name: "тут", status: "low", region: "ВСНГ" },
            ],
            5: [
                { name: "писать", status: "high", region: "ЗСНГ" },
            ],
        },
        UHC: {
            1: [
                { name: "Я", status: "high", region: "ВСНГ" },
            ],
            2: [
                { name: "не знаю", status: "low", region: "ЗСНГ" },
            ],
            3: [
                { name: "что", status: "high", region: "ВСНГ" },
            ],
            4: [
                { name: "тут", status: "low", region: "ЗСНГ" },
            ],
            5: [
                { name: "писать", status: "high", region: "ВСНГ" },
            ],
        },
        SMP: {
            1: [
                { name: "Я", status: "high", region: "ВСНГ" },
            ],
            2: [
                { name: "не знаю", status: "low", region: "ЗСНГ" },
            ],
            3: [
                { name: "что", status: "high", region: "ВСНГ" },
            ],
            4: [
                { name: "тут", status: "low", region: "ЗСНГ" },
            ],
            5: [
                { name: "писать", status: "high", region: "ВСНГ" },
            ],
        },
        Retired: {
            1: [
                { name: "Я", status: "high", region: "ЗСНГ" },
            ],
            2: [
                { name: "не знаю", status: "low", region: "ВСНГ" },
            ],
            3: [
                { name: "что", status: "high", region: "ЗСНГ" },
            ],
            4: [
                { name: "тут", status: "low", region: "ЗСНГ" },
            ],
            5: [
                { name: "писать", status: "high", region: "ЗСНГ" },
            ],
        },
        Blacklist: {
            1: [
                { name: "Я", status: "high", region: "ЗСНГ" },
            ],
            2: [
                { name: "не знаю", status: "low", region: "ВСНГ" },
            ],
            3: [
                { name: "что", status: "high", region: "ЗСНГ" },
            ],
            4: [
                { name: "тут", status: "low", region: "ВСНГ" },
            ],
            5: [
                { name: "писать", status: "high", region: "ЗСНГ" },
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
                    html += `
                        <td class="interactive ${tierClass}" data-player="${player.name}" data-status="${player.status}">
                            <div class="region-box">${player.region}</div>
                            ${player.name}
                        </td>`;
                } else {
                    html += '<td></td>';
                }
            }
            html += '</tr>';
        }

        html += '</table>';
        return html;
    }

    function addTableCellClickHandlers() {
        const tableCells = document.querySelectorAll('.tier-list .interactive');
        tableCells.forEach(cell => {
            cell.addEventListener('click', function () {
                const playerName = this.dataset.player;
                const playerStatus = this.dataset.status;
                alert(`Вы нажали на игрока: ${playerName}, статус: ${playerStatus}`);
            });
        });
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

            addTableCellClickHandlers();
        });
    });

    categoryButtons[0].click();
});