const moveButton = document.querySelector('#moveButton');
const sizeButton = document.querySelector('#sizeButton');

moveButton.addEventListener('mouseenter', (event) => {
    const threshold = 700; // Adjust this value as needed
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const buttonRect = moveButton.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;
    const distance = Math.sqrt(Math.pow(mouseX - buttonX, 2) + Math.pow(mouseY - buttonY, 2));
    if (distance < threshold) {
        moveButton.style.transform = `translate(${mouseX - buttonX}px, ${mouseY - buttonY}px)`;
        // Get the current width and height of the size button
        const currentWidth = sizeButton.offsetWidth;
        const currentHeight = sizeButton.offsetHeight;

        // Increase the width and height by a certain amount (e.g., 10 pixels)
        const newWidth = currentWidth + 10;
        const newHeight = currentHeight + 10;

        // Apply the new width and height to the size button
        sizeButton.style.width = `${newWidth}px`;
        sizeButton.style.height = `${newHeight}px`;
    } else {
        moveButton.style.transform = '';
    }
});
