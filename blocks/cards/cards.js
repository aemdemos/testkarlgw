
export default function decorate(block) {
  block.classList.add('styled-block');

  // Apply specific styles to each card div
  const cards = block.querySelectorAll('.cards > div');
  cards.forEach((card) => {
    card.classList.add('styled-card');
  });

  // Apply styles to each picture in the cards
  const pictures = block.querySelectorAll('.cards picture');
  pictures.forEach((picture) => {
    picture.classList.add('styled-picture');
  });

  // Apply styles to each ul in the cards
  const uls = block.querySelectorAll('.cards ul');
  uls.forEach((ul) => {
    ul.classList.add('styled-list');
  });
}
