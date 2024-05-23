let present1 = document.getElementById('present1');
let present2 = document.getElementById('present2');
let message = document.getElementById('message');
let photoButton = document.getElementById('photoButton');
let photos = document.getElementById('photos');
let text = document.querySelector('.text');
let happyBirthdayAudio = document.getElementById('happyBirthdayAudio');

console.log(text);

function movePresent(present) {
    // Adjust the range of random positions to keep the present within the viewable area
    present.style.top = Math.random() * 70 + '%';
    present.style.left = Math.random() * 70 + '%';
}

function showFireworks() {
    // Array of icon URLs
    let icons = [
        'icon1.png',
        'icon2.png',
        'icon3.png'
        // Add more icon URLs as needed
    ];

    // Loop through each icon URL
    icons.forEach(iconSrc => {
        for (let i = 0; i < 10; i++) {
            let firework = document.createElement('div');
            firework.classList.add('firework');

            // Set the icon as background image
            firework.style.backgroundImage = `url(${iconSrc})`;

            // Append the firework element to the document body
            document.body.appendChild(firework);

            // Set random position for the firework
            firework.style.top = Math.random() * 100 + '%';
            firework.style.left = Math.random() * 100 + '%';

            // Remove the firework after a certain duration
            setTimeout(() => firework.remove(), 10000);
        }
    });
}


function createFlower() {
    let flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 5000); // Remove flower after animation completes
}

function startFlowerFall() {
    setInterval(createFlower, 500); // Create flowers every 500ms
}

present1.addEventListener('click', function() {
    present1.style.display = 'none';
    message.style.display = 'block';
    message.innerText = 'Haha, đồ bị lừa';
    setTimeout(() => {
        message.style.display = 'none';
        present2.style.display = 'block';
        startMovingPresent(present2);
    }, 2000);
});

present2.addEventListener('click', function() {
    present2.style.display = 'none';
    message.style.display = 'block';
    message.innerText = 'Thôi đùa đấy, happy bóp ti';
    showFireworks();
    setTimeout(function() {
        message.style.display = 'none';
        photoButton.style.display = 'block';
    }, 2000);
});

photoButton.addEventListener('click', function() {
    photoButton.style.display = 'none';
    text.style.display = 'flex';
    photos.style.display = 'flex';
    happyBirthdayAudio.play();
    startFlowerFall();
});

// Function to start moving a present with random intervals
function startMovingPresent(present) {
    function move() {
        movePresent(present);
        let randomInterval = Math.random() * 600 + 200; // Random interval between 200ms and 1000ms
        setTimeout(move, randomInterval);
    }
    move();
}

// Initial animation setup
startMovingPresent(present1);
