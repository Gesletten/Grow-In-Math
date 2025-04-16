const clickedImages = [];

const images = document.querySelectorAll('.toggle-image');

const clickedList = document.getElementById('clicked-list');

const mathProblemDisplay = document.getElementById('math-problem');

function updateClickedList() {
    clickedList.innerHTML = '';
    clickedImages.forEach(imageId => {
        const listItem = document.createElement('li');
        listItem.textContent = `Image ${imageId}`;
        clickedList.appendChild(listItem);
    });
}

function generateRandomMathProblem() {
    if (clickedImages.length === 0) {
      mathProblemDisplay.textContent = '';
      return;
    }
    const fromList = Number(clickedImages[Math.floor(Math.random() * clickedImages.length)]);
    const randomNum = Math.floor(Math.random() * 12) + 1;
    const op = '+';
    const [a, b] = Math.random() < 0.5 ? [fromList, randomNum] : [randomNum, fromList];
    const problem = `${a} ${op} ${b} = ?`;



  mathProblemDisplay.textContent = problem;

}
    

images.forEach(image => {
    image.addEventListener('click', function() {
        const imageId = this.getAttribute('data-id');
        this.classList.toggle('darken');
        if (this.classList.contains('darken') && !clickedImages.includes(imageId)) {
            clickedImages.push(imageId);
        } 
        else if (!this.classList.contains('darken') && clickedImages.includes(imageId)) {
            const index = clickedImages.indexOf(imageId);
            clickedImages.splice(index, 1);
        }
        updateClickedList();
        generateRandomMathProblem();
    });
});

