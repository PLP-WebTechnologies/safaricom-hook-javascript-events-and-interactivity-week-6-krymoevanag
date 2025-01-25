// Toggle Background Color
const toggleBackground = document.getElementById('toggleBackground');
let isBlue = false;
toggleBackground.addEventListener('click', () => {
    document.body.style.backgroundColor = isBlue ? '#f5f5f5' : '#2a9d8f';
    document.body.style.color = isBlue ? '#333' : '#ffffff';
    isBlue = !isBlue;
});

// Adjust Text Size with Slider
const fontSlider = document.getElementById('fontSlider');
const sampleText = document.getElementById('sampleText');
fontSlider.addEventListener('input', () => {
    sampleText.style.fontSize = `${fontSlider.value}px`;
});

// Modal Elements
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const actionButton = document.getElementById('actionButton');

// Open Modal
openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
});

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

// Close Modal on Overlay Click
modalOverlay.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

// Action Button Functionality
actionButton.addEventListener('click', () => {
    alert('Action button clicked! You can define more functionality here.');
});


// Form Validation
const form = document.getElementById('myForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (e) => {
    let valid = true;

    // Name Validation
    if (nameField.value.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Password Validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(passwordField.value)) {
        passwordError.textContent = 'Password must be at least 8 characters, include one uppercase letter, and one number.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!valid) {
        e.preventDefault(); // Prevent form submission
    }
});

// Dropdown Interaction
const dropdown = document.getElementById('dropdown');
const dropdownMessage = document.getElementById('dropdownMessage');

dropdown.addEventListener('change', () => {
    if (dropdown.value) {
        dropdownMessage.textContent = `You selected: ${dropdown.value}`;
    } else {
        dropdownMessage.textContent = '';
    }
});
