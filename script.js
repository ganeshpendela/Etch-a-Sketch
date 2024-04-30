const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');


//Function to generate random RGB color

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to create grid
function createGrid(numSquaresPerSide) {
    // Clear existing grid
    container.innerHTML = '';

    // Calculate square size
    const squareWidth = 50 / numSquaresPerSide; // Assuming 50vw for the container width
    const squareHeight = 70 / numSquaresPerSide;

    // Create new grid
    for(let i = 0; i < numSquaresPerSide * numSquaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(${squareWidth}vw - 2px)`;
        square.style.height = `calc(${squareHeight}vh - 2px)`;
        container.appendChild(square);

        square.addEventListener('mouseenter', ()=>{
            handleMouseEnter(square);
        });

        square.addEventListener('mouseleave', ()=>{
            square.style.backgroundColor = "white";
        })
    }
}


//Function to handle mouse Enter
function handleMouseEnter(square){
    const newColor = getRandomColor();
    square.style.backgroundColor = newColor;
}

// Event listener for button click
resetButton.addEventListener('click', () => {
    let numSquaresPerSide = prompt('Enter number of squares per side (maximum 100):');
    numSquaresPerSide = parseInt(numSquaresPerSide);

    // Validate input
    if (!isNaN(numSquaresPerSide) && numSquaresPerSide > 0 && numSquaresPerSide <= 100) {
        createGrid(numSquaresPerSide);
    } else {
        alert('Invalid input! Please enter a number between 1 and 100.');
    }
});

// Initial grid creation
createGrid(16); // Default 16x16 grid
