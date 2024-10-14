fetch('data.json')
    .then(response => response.json())
    .then(data => {
    const projects = data.portfolio.InteractiveDesign;
    generateProjectContent(projects);
  })

function generateProjectContent(projects) {
  const container = document.querySelector('.projectContainer');

  const project = projects.project1;

  const title = document.createElement('h1');
  title.textContent = project.name;
  title.classList.add('align');
  container.appendChild(title);

  const date = document.createElement('p');
  date.textContent = `Date: ${project.year}`;
  date.classList.add('align');
  container.appendChild(date);

  const medium = document.createElement('p');
  medium.textContent = `Medium: ${project.medium}`;
  medium.classList.add('align');
  container.appendChild(medium);

  const images = createImageGallery(project);
  container.appendChild(images);

  insertSection(container, 'Introduction', project.description);
//   insertSection(container, 'Design Process', project.designProcess);
  insertSection(container, 'Background Stroy', project.backgroundStory);
}


function insertSection(container, headingText, contentText) {
  const heading = document.createElement('h2');
  heading.textContent = headingText;

  const paragraph = document.createElement('p');
  paragraph.textContent = contentText;

  container.appendChild(heading);
  container.appendChild(paragraph);
}


function createImageGallery(project) {
  const gallery = document.createElement('div');
  gallery.classList.add('image-gallery');

  const { image1, image2, image3 } = project.media;
  if (image1) gallery.appendChild(createImageElement(image1));
  if (image2) gallery.appendChild(createImageElement(image2));
  if (image3) gallery.appendChild(createImageElement(image3));

  return gallery;
}

function createImageElement(src) {
  const img = document.createElement('img');
  img.src = src;
  return img;
}
