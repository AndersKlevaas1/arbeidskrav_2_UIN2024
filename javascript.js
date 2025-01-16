const resourceNav = document.getElementById('resourceNav')
const resourceContent = document.getElementById('resourceContent')

function populateNav() {
    resources.forEach(resource => {
        const listItem = document.createElement('li');
        listItem.textContent = resource.category;

        listItem.addEventListener('click', () => {
            document.querySelectorAll('#resourceNav li').forEach(li => li.classList.remove('active'));
            listItem.classList.add('active');

            showResourceContent(resource);
        });

        resourceNav.appendChild(listItem);
    });

    if (resources.length > 0) {
        const firstItem = resourceNav.querySelector('li');
        if (firstItem) {
            firstItem.classList.add('active');
            showResourceContent(resources[0]);
        }
    }
}

function showResourceContent(resource) {
    const sourcesListItems = resource.sources.map(source => 
        `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
    ).join('');

    resourceContent.innerHTML = `
        <div class="resource-container">
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul class="sources-list">
                ${sourcesListItems}
            </ul>
        </div>
    `;
}
populateNav()
