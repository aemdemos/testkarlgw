
export default function decorate(block) {
  // Add the 'myblock' class to the outer block
  block.classList.add('myblock');

  // Structure the inner content
  const columnsDiv = block.querySelector('.columns > div');
  if (columnsDiv) {
    columnsDiv.classList.add('myblock-inner');

    const imageDiv = columnsDiv.querySelector('div:first-child');
    const contentDiv = columnsDiv.querySelector('div:last-child');

    // Swap the positions if necessary
    if (imageDiv && contentDiv) {
      columnsDiv.insertBefore(contentDiv, imageDiv);
      imageDiv.classList.add('myblock-image');
      contentDiv.classList.add('myblock-content');
    }
  }
}
