const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//move
container.addEventListener('mousemove', (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
   let yAxis = (window.innerHeight/ 2 - e.pageY) / 15;

   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//animate in
container.addEventListener('mouseenter', (e) => {
   card.style.transition = `none`;

   sneaker.style.transform = 'translateZ(80px) rotateZ(-45deg)'
   title.style.transform = 'translateZ(70px)'
   description.style.transform = 'translateZ(60px)'
   sizes.style.transform = 'translateZ(50px)'
   purchase.style.transform = 'translateZ(40px)'
})

//animate out
container.addEventListener('mouseleave', (e) => {
   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
   card.style.transition = `transform .3s ease`;

   title.style.transform = 'translateZ(0px)'
   title.style.transition = 'transform .3s ease'
   sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
   sneaker.style.transition = 'transform .3s ease'
   description.style.transform = 'translateZ(0px)'
   description.style.transition = 'transform .3s ease'
   sizes.style.transform = 'translateZ(0px)'
   sizes.style.transition = 'transform .3s ease'
   purchase.style.transform = 'translateZ(0px)'
   purchase.style.transition = 'transform .3s ease'
})


