
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Highlight.js
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });


    // Add click event listeners to all copy buttons
    document.querySelectorAll('.copy-btn').forEach((button) => {
        button.addEventListener('click', () => {
            // Find the closest <pre> element
            const pre = button.closest('pre');
            if (pre) {
                // Get the <code> element inside the <pre>
                const codeElement = pre.querySelector('code');
                if (codeElement) {
                    // Save the previous text content of the button
                    const previousText = button.innerHTML;

                    // Copy the text content of the <code> element
                    navigator.clipboard.writeText(codeElement.textContent).then(() => {
                        // Change button icon temporarily to indicate success
                        button.innerHTML = '<i class="fa-solid fa-check"></i>';
                        alertNotify('Copy Done!', 'success', 3000);
                        setTimeout(() => {
                            // Restore the previous icon after 2 seconds
                            button.innerHTML = previousText;
                        }, 3000);
                    }).catch((err) => {
                        console.error('Failed to copy text: ', err);
                    });
                }
            }
        });
    });
});
