
export default function decorate(block) {
    // Create and append the headline
    const headline = document.createElement('h1');
    headline.innerText = 'Testing a Headline.';
    block.prepend(headline);
    
    // Add a class to the block for scoping styles
    block.classList.add('testblock');
}
