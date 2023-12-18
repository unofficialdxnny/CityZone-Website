const cardData = [
  {
    imageUrl: 'https://cdn.discordapp.com/attachments/1092434952815120515/1172309026973950074/IMG-20231109-WA0042.jpg?ex=655fd8dc&is=654d63dc&hm=c66844bb1e1a1d06d2bb4dbab566bea35f43b0a397862dcb456fea5ee5c7c877',
    title: 'Rico Lewis Has Burst Onto The Scene In The Last Year And A Half And Helped Manchester City Win The Treble!',
    paragraph: 'Rico Lewis joined the Manchester City academy at the age of eight whilst also being a lifelong blue! He went...',
    redirectUrl: ''
  },
  {
    imageUrl: 'https://cdn.discordapp.com/attachments/1150106517790527609/1183538451782578216/IMG_0652.jpg?ex=6588b313&is=65763e13&hm=3ea8cab5c62f1107fdaf1a016f282b43594874740e72f9ff8a91ff5cc1b2d4b9',
    title: 'Here Are CityZone’s Player Ratings For Manchester City’s Game Against Luton Town',
    paragraph: 'Here Are CityZone’s Player Ratings For Manchester City’s Game Against Luton Town...',
    redirectUrl: ''
  },

  
  // Add more card data as needed
];

// Function to create and append cards to the container
function createCards() {
  const cardContainer = document.getElementById('card-container');

  cardData.forEach(data => {
    const card = document.createElement('a');
    card.classList.add('card');
    card.href = data.redirectUrl;

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
createCards();f