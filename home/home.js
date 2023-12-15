'use strict';

const cardsData = [
    {
        image: '../img/Rectangle 6.png',
        price: 'R$ 16,00',
        name: 'Pizza de calabreza com queijo'
    },
    {
        image: '../img/Rectangle 14.png',
        price: 'R$ 19,00',
        name: 'Pizza de peperoni com queijo'
    },
    {
        image: '../img/Rectangle 15.png',
        price: 'R$ 16,00',
        name: 'Pizza de calabreza com queijo'
    }
];

function createPizzaCards(cardsData) {
    const container = document.getElementById('main'); 

    cardsData.forEach(data => {
        const card = document.createElement('div');
        card.classList.add('pizza');

        const image = document.createElement('img');
        image.src = data.image;
        image.alt = 'Pizza Image';

        const infoOverlay = document.createElement('div');
        infoOverlay.classList.add('info-overlay');

        const priceTag = document.createElement('div');
        priceTag.classList.add('price-tag');
        priceTag.textContent = data.price;

        const name = document.createElement('div');
        name.classList.add('name');
        name.textContent = data.name;

        infoOverlay.append(priceTag, name);
        card.append(image, infoOverlay);
        container.appendChild(card);
    });
}

createPizzaCards(cardsData);