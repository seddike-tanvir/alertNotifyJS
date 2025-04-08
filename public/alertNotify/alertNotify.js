
(function () {
    // Create or retrieve the container for alerts
    let container = document.getElementById('alert-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'alert-container';
        document.body.appendChild(container);
    }

    // Define the alertNotify function
    window.alertNotify = function (message, type = 'info', duration = 3000) {
        // Create a new alert element
        const alert = document.createElement('div');
        alert.className = `custom-alert alert-${type}`;
        alert.textContent = message;

        // Append the alert to the container
        container.appendChild(alert);

        // Add the 'show' class after a short delay to trigger the animation
        setTimeout(() => alert.classList.add('show'), 50);

        // Remove the alert after the specified duration
        setTimeout(() => {
            alert.classList.remove('show');
            alert.classList.add('hide');

            // Listen for the transitionend event to remove the alert from the DOM
            alert.addEventListener('transitionend', () => {
                alert.remove();
            }, { once: true });
        }, duration);
    };
})();