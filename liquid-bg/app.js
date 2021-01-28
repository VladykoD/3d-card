new hoverEffect({
    parent: document.querySelector('.distortion1'),
    intensity: 0.4,
    image1: 'dog1.jpg',
    image2: 'dog2.jpg',
    displacementImage: './displacement/2.jpg'
})
new hoverEffect({
    parent: document.querySelector('.distortion2'),
    intensity: 0.4,
    image1: 'dog2.jpg',
    image2: 'dog1.jpg',
    angle: Math.PI / 2,
    displacementImage: './displacement/6.jpg'
})
