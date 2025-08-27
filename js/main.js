function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        menu.classList.add("hidden");
    } else {
        menu.classList.remove("hidden");
        menu.classList.add("show");
    }
}

function updateWelcomeMessage(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById("nama");
    const welcomeMessage = document.getElementById("welcome-message");
    
    if (nameInput.value.trim() !== "") {
        const userName = nameInput.value.trim();
        welcomeMessage.textContent = `Hi ${userName}, Welcome To Website`;
        
        // Save name to localStorage
        localStorage.setItem('userName', userName);
    }
    
    // Process the complete form and display results
    processFormData();
}

function processFormData() {
    // Get form values
    const name = document.getElementById("nama").value.trim();
    const date = document.getElementById("tanggal").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value.trim();
    
    // Format date for display
    const formattedDate = formatDateForDisplay(date);
    
    // Get current time
    const currentTime = new Date().toString();
    
    // Update message-info section
    const messageInfo = document.querySelector('.message-info');
    messageInfo.innerHTML = `
        <p><strong>Current time</strong>: ${currentTime}</p>
        <p>
            <strong>Name</strong>: ${name}<br />
            <strong>Date of birth</strong>: ${formattedDate}<br />
            <strong>Gender</strong>: ${gender}<br />
            <strong>Message</strong>: ${message}
        </p>
    `;
}

function formatDateForDisplay(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

// Update welcome message on page load if name is already in localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedName = localStorage.getItem('userName');
    const welcomeMessage = document.getElementById("welcome-message");
    const nameInput = document.getElementById("nama");
    
    if (savedName) {
        welcomeMessage.textContent = `Hi ${savedName}, Welcome To Website`;
        nameInput.value = savedName;
    } else {
        // Only open the modal automatically if no name is stored
        openNameModal();
    }
    
    // Update current time on page load
    updateCurrentTime();
});

function updateCurrentTime() {
    const currentTime = new Date().toString();
    const timeElement = document.querySelector('.message-info p:first-child');
    if (timeElement) {
        timeElement.innerHTML = `<strong>Current time</strong>: ${currentTime}`;
    }
}

// Modal functionality
function openNameModal() {
    document.getElementById("name-modal").classList.remove("hidden");
}

function closeNameModal() {
    document.getElementById("name-modal").classList.add("hidden");
}

function handleNameSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById("popup-nama");
    const welcomeMessage = document.getElementById("welcome-message");
    
    if (nameInput.value.trim() !== "") {
        const userName = nameInput.value.trim();
        welcomeMessage.textContent = `Hi ${userName}, Welcome To Website`;
        
        // Save name to localStorage
        localStorage.setItem('userName', userName);
        
        // Show a welcome speech/alert
        alert(`Selamat datang ${userName}! Terima kasih telah mengunjungi website kami.`);
        
        // Close the modal
        closeNameModal();
    } else {
        alert("Silakan masukkan nama Anda terlebih dahulu!");
    }
}
