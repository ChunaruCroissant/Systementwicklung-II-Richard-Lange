// Structure of Posts
const posts = [
    { title: 'Feedback zur Benutzeroberfläche', date: '05.10.2023, 00:00:00', author: 'John', content: 'Wir würden gerne euer Feedback zur neuen Benutzeroberfläche hören. Was gefällt euch, was können wir verbessern?' },
    { title: 'Neue API-Dokumentation', date: '04.10.2023, 00:00:00', author: 'Lisa', content: 'Die API-Dokumentation wurde aktualisiert. Schaut euch die neuen Endpunkte und Beispiele an, um die Integration zu erleichtern.' },
    { title: 'Wartungsarbeiten am Wochenende', date: '03.10.2023, 00:00:00', author: 'Tom', content: 'Am kommenden Wochenende werden Wartungsarbeiten durchgeführt. Die App wird für einige Stunden nicht verfügbar sein. Wir bitten um euer Verständnis.' },
    { title: 'Bug im Login-System', date: '02.10.2023, 00:00:00', author: 'Anna', content: 'Es gibt einen Bug im Login-System, der dazu führt, dass einige Benutzer sich nicht anmelden können. Wir arbeiten an einer Lösung.' },
    { title: 'Neues Feature in der App', date: '01.10.2023, 00:00:00', author: 'Max', content: 'Wir haben ein neues Feature in der App hinzugefügt, das die Benutzerfreundlichkeit verbessert. Probiert es aus und gebt uns Feedback!' }
];


// Render Posts
function renderPosts(sortBy = 'date') {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    
    // Sort Posts
    posts.sort((a, b) => {
        if (sortBy === 'date') {
            return parseGermanDate(b.date) - parseGermanDate(a.date);
        } else if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        }
    });

    // Parse Content into Container
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p class="post-meta">${post.author} - ${post.date}</p>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;

        postsContainer.appendChild(postElement);
    });
}


// Convert Date from TT.MM.YYYY, HH:MM:SS in a python Date Object
function parseGermanDate(dateString) {
    const [day, month, yearAndTime] = dateString.split('.');
    const [year, time] = yearAndTime.split(', ');
    return new Date(`${year}-${month}-${day}T${time}`);
}


// EventListener for Sorting
const sortDropdown = document.getElementById('sort-dropdown');
sortDropdown.addEventListener('change', (e) => {
    renderPosts(e.target.value);
});


// Init view of Posts (SortByDate)
renderPosts('date');


// Dynamic Year in Footer Copyright
document.getElementById('year').textContent = new Date().getFullYear();
