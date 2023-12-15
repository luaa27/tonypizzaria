
'use strict'

const circle = document.getElementById('circle');

const mudarPerfil = () => {
    const addIcon = document.getElementById('addImg');

    addIcon.addEventListener('change', (e) => {
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load', (e) => {
                const readerTarget = e.target;
                const iconImg = readerTarget.result;

                const MAX_IMAGE_SIZE = 200;
                const image = new Image();
                image.src = iconImg;

                image.onload = () => {
                    const aspectRatio = image.width / image.height;
                    const maxWidth = MAX_IMAGE_SIZE;
                    const maxHeight = MAX_IMAGE_SIZE / aspectRatio;

                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    canvas.width = maxWidth;
                    canvas.height = maxHeight;
                    ctx.drawImage(image, 0, 0, maxWidth, maxHeight);

                    const resizedIconImg = canvas.toDataURL('image/png');
                    circle.style.backgroundImage = `url(${resizedIconImg})`;
                };
            });
        }
    });
};

const urlParams = new URLSearchParams(window.location.search);

mudarPerfil();