
export default function decorate(block) {
    block.classList.add('testblock');

    const cards = block.querySelectorAll('.cards > div');
    cards.forEach(card => {
        card.classList.add('testblock-card');
        const picture = card.querySelector('picture');
        picture.classList.add('testblock-card-picture');
        const ul = card.querySelector('ul');
        ul.classList.add('testblock-card-content');
    });
}
