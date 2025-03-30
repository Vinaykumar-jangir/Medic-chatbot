document.addEventListener('DOMContentLoaded', function() {
    // This file now contains minimal JavaScript since we're using FastBots for the chatbot functionality
    
    // You can add any additional website functionality here if needed
    
    // For example, you might want to add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
