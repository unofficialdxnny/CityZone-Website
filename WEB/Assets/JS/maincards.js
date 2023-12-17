const cardData = [
    {
      imageUrl: 'https://picsum.photos/200/200',
      title: 'Card 1',
      paragraph: 'Description for Card 1.',
    },
    {
      imageUrl: 'https://picsum.photos/200/200',
      title: 'Card 2',
      paragraph: 'Description for Card 2.',
    },
    // Add more card data as needed
  ];

  // Function to create and append cards to the container
  function createCards() {
    const cardContainer = document.getElementById('card-container');

    cardData.forEach(data => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = data.imageUrl;

      const cardTitle = document.createElement('h2');
      cardTitle.innerText = data.title;

      const cardParagraph = document.createElement('p');
      cardParagraph.innerText = data.paragraph;

      card.appendChild(image);
      card.appendChild(cardTitle);
      card.appendChild(cardParagraph);

      cardContainer.appendChild(card);
    });
  }

  // Call the function to create and append cards
  createCards();