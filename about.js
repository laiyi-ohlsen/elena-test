fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const {about, resume, contact} = data;

        const intro = document.querySelector('.introductionContainer');
        const introHeading = document.createElement('h2');
        introHeading.textContent = 'Introduction';
        intro.appendChild(introHeading);
        const introText = document.createElement('p');
        introText.textContent = about.introduction;
        intro.appendChild(introText);

        const skills = document.querySelector('.skillsContainer');
        const skillsHeading = document.createElement('h2');
        skillsHeading.textContent = 'Skills';
        skills.appendChild(skillsHeading);
        const mySkills = document.createElement('ul');

        about.skills.forEach(skill => {
        const skillItem = document.createElement('p');
        skillItem.textContent = skill;
        mySkills.appendChild(skillItem);
        });

        skills.appendChild(mySkills);


        const interests = document.querySelector('.interestsContainer');
        const interestsHeading = document.createElement('h2');
        interestsHeading.textContent = 'Interests';
        interests.appendChild(interestsHeading);
        const myInterests = document.createElement('ul');

        about.interests.forEach(interest => {
        const interestItem = document.createElement('p');
        interestItem.textContent = interest;
        myInterests.appendChild(interestItem);
        });

        interests.appendChild(myInterests);


        const work = resume.workExperience;
        const workContainer = document.querySelector('.workContainer');
        const workHeading = document.createElement('h2');
        workHeading.textContent = 'Work Experience';
        workContainer.appendChild(workHeading);
        const workText = document.createElement('p');
        workText.textContent = `${work.company}, ${work.jobTitle} (${work.dates})`;
        workContainer.appendChild(workText);


        const education = resume.education;
        const educationContainer = document.querySelector('.educationContainer');
        const educationHeading = document.createElement('h2');
        educationHeading.textContent = 'Education';
        educationContainer.appendChild(educationHeading);
        const educationText = document.createElement('p');
        educationText.textContent = `${education.institution}, ${education.degree} (${education.yearGraduated})`;
        educationContainer.appendChild(educationText);


        const contactContainer = document.querySelector('.contactContainer');
        const contactHeading = document.createElement('h2');
        contactHeading.textContent = 'Contact';
        contactContainer.appendChild(contactHeading);

        const email = document.createElement('p');
        email.innerHTML = `<b>Email:</b> <a href="mailto:${contact.email}">${contact.email}</a>`;
        contactContainer.appendChild(email);

        const phone = document.createElement('p');
        phone.innerHTML = `<b>Phone:</b> <a href="tel:${contact.phoneNumber}">${contact.phoneNumber}</a>`;
        contactContainer.appendChild(phone);
  })
