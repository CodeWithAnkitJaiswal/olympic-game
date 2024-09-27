// Event data for different sports
const eventDetails = {
    'swimming': {
        img: '/images/swimming.jfif',
        details: `
            <h3>100m Freestyle</h3>
            <p><strong>Date:</strong> July 27, 2024</p>
            <p><strong>Time:</strong> 10:00 AM</p>
            <p><strong>Venue:</strong> Aquatics Center</p>
            <hr>
            <h3>200m Butterfly</h3>
            <p><strong>Date:</strong> July 27, 2024</p>
            <p><strong>Time:</strong> 2:00 PM</p>
            <p><strong>Venue:</strong> Aquatics Center</p>
        `
    },
    'gymnastics': {
        img: '/images/sport-2.webp',
        details: `
            <h3>Floor Exercise</h3>
            <p><strong>Date:</strong> July 28, 2024</p>
            <p><strong>Time:</strong> 11:00 AM</p>
            <p><strong>Venue:</strong> Gymnastics Arena</p>
        `
    },
    'athletics': {
        img: '/images/sport-3.jfif',
        details: `
            <h3>100m Sprint</h3>
            <p><strong>Date:</strong> July 29, 2024</p>
            <p><strong>Time:</strong> 9:00 AM</p>
            <p><strong>Venue:</strong> Athletics Stadium</p>
        `
    },
    'basketball': {
        img: '/images/sport-4.jfif',
        details: `
            <h3>Men's Basketball Final</h3>
            <p><strong>Date:</strong> July 30, 2024</p>
            <p><strong>Time:</strong> 8:00 PM</p>
            <p><strong>Venue:</strong> Basketball Arena</p>
        `
    },
    'boxing': {
        img: '/images/sport-5.jfif',
        details: `
            <h3>Boxing Welterweight Final</h3>
            <p><strong>Date:</strong> July 31, 2024</p>
            <p><strong>Time:</strong> 5:00 PM</p>
            <p><strong>Venue:</strong> Boxing Arena</p>
        `
    }
};


// Open modal and populate details
function openModal(sport) {
    const modal = document.getElementById('event-modal');
    const imgElement = document.getElementById('modal-img');
    const detailsElement = document.getElementById('modal-details');

    const eventData = eventDetails[sport];

    imgElement.src = eventData.img;
    detailsElement.innerHTML = eventData.details;

    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('event-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('event-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}