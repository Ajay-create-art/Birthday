// Function to get name and age from URL parameters (e.g., ?name=John&year=2000)
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') || 'Arjuna';
    const birthYear = params.get('year');
    const currentYear = new Date().getFullYear();
    
    let age = '22!';
    if (birthYear) {
        age = currentYear - parseInt(birthYear);
    }

    return { name, age };
}

// Display the birthday greeting
function displayGreeting() {
    const { name, age } = getUrlParams();
    document.getElementById('greeting').textContent = `Happy Birthday, ${name}!`;
    document.getElementById('details').textContent = `Congratulations On Turning ${age}`;
    document.getElementById('name').textContent = `Wishing you a fantastic day filled with joy and laughter.`;
}

// Call the function when the page loads
window.onload = displayGreeting;
