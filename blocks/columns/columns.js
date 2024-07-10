
export default function decorate(block) {
    block.classList.add('custom-block');

    // Create structure for columns
    const [col1, col2] = block.querySelectorAll(':scope > div > div');

    // Add classes to columns
    col1.classList.add('custom-col1');
    col2.classList.add('custom-col2');

    // Style the button in col2
    const liveLink = col2.querySelector('a');
    liveLink.classList.add('custom-live-button');

    // Append preview section inside block
    const previewSection = document.createElement('div');
    previewSection.classList.add('custom-preview-section');

    // Add images and texts to the preview section
    const previewImage1 = document.createElement('img');
    previewImage1.src = 'https://via.placeholder.com/600x300?text=Image+1'; // Placeholder, replace with actual URL
    previewImage1.alt = 'Preview image 1';
    previewSection.appendChild(previewImage1);

    const previewImage2 = document.createElement('img');
    previewImage2.src = 'https://via.placeholder.com/600x300?text=Image+2'; // Placeholder, replace with actual URL
    previewImage2.alt = 'Preview image 2';
    previewSection.appendChild(previewImage2);

    const previewText = document.createElement('p');
    previewText.textContent = 'Or you can just view the preview';
    previewSection.appendChild(previewText);

    const previewButton = document.createElement('button');
    previewButton.textContent = 'Preview';
    previewButton.classList.add('custom-preview-button');
    previewSection.appendChild(previewButton);

    // Append preview section to block
    block.appendChild(previewSection);
}
