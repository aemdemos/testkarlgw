
export default function decorate(block) {
  // Add a class to the outer block
  block.classList.add('testblock');

  // Create a new div element for the text
  const textDiv = document.createElement('div');
  textDiv.classList.add('hero-text');
  textDiv.innerHTML = '<h1>Testing a Headline.</h1>';

  // Append the new text div to the outer block
  block.appendChild(textDiv);

  // Style the existing image container
  const imageContainer = block.querySelector('picture');
  if (imageContainer) {
    imageContainer.parentElement.classList.add('hero-image');
  }
}
