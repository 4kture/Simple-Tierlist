document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const contentArea = document.getElementById('content');
    const searchInput = document.getElementById('search');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            contentArea.innerHTML = `
                        <h2>${category} Tier List</h2>
                        <p>The tier list for the ${category} category will be displayed here.</p>`;
        });
    });

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        console.log(`Searching for: ${searchTerm}`);
    });
});