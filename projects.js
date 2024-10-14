const subtitles = [
    { 
      title: 'Photography', 
      images: [
        { src: 'assets/Photography/Project1/1.jpg', link: 'Pp1.html' },
        { src: 'assets/Photography/Project2/3.jpg', link: 'Pp2.html' },
      ]
    },
    { 
      title: 'Interactive Design', 
      images: [
        { src: 'assets/InteractiveDesign/Project1/1.png', link: 'Ip1.html' },
        { src: 'assets/InteractiveDesign/Project2/3.png', link: 'Ip2.html' },
        { src: 'assets/InteractiveDesign/Project3/1.JPG', link: 'Ip3.html' },
        { src: 'assets/InteractiveDesign/Project4/1.png', link: 'Ip4.html' },
      ]
    },
    { 
      title: 'Sculpture', 
      images: [
        { src: 'assets/Sculpture/Project1/1.JPG', link: 'Sp1.html' },
        { src: 'assets/Sculpture/Project2/1.JPG', link: 'Sp2.html' },
      ]
    }
];
  
const container = document.querySelector('.categories');
  
subtitles.forEach(item => {
    const h2 = document.createElement('h2');
    h2.textContent = item.title;
  
    const imagesRow = document.createElement('div');
    imagesRow.classList.add('images');
    imagesRow.style.display = 'none';
  
    item.images.forEach(image => {
        const link = document.createElement('a');
        link.href = image.link;
    
        const img = document.createElement('img');
        img.src = image.src;
        img.classList.add('project-image');
    
        link.appendChild(img);
        imagesRow.appendChild(link);
    });
  
    h2.addEventListener('click', () => {
      const isVisible = imagesRow.style.display === 'flex';
      imagesRow.style.display = isVisible ? 'none' : 'flex';
      // Conditional (ternary) operator
      // condition ? exprIfTrue : exprIfFalse
      // If the condition is true, it will return IfTrue. If the condition is false, it will return IfFalse.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    });
  
    container.appendChild(h2);
    container.appendChild(imagesRow);
  });
  