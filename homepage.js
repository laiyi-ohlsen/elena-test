fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const fullName = `${data.firstName} ${data.lastName}`;
        const fields = data.fields;

        const nameElement = document.querySelector('.name');
        const fieldsElement = document.querySelector('.fields');
        const navLinksElement = document.querySelector('.links');

        nameElement.textContent = fullName;
        fieldsElement.textContent = fields;

        const navItems = [
            { text: 'About Me', url: 'about.html' },
            { text: 'Projects', url: 'projects.html' },
            // { text: 'Resume', url: 'resume.html' }
        ];

        navItems.forEach(item => {
            const p = document.createElement('p');
            const link = document.createElement('a');
            link.textContent = item.text;
            link.href = item.url;
            p.appendChild(link);
            navLinksElement.appendChild(p);
        });
    })