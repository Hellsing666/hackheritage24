// script.js
document.addEventListener('DOMContentLoaded', function () {
    const articles = {
        1: {
            title: "Water-Saving Techniques",
            content: "<p>These techniques include rainwater harvesting, drip irrigation, and more...</p>"
        },
        2: {
            title: "Efficient Irrigation Methods",
            content: "<p>Learn about the most efficient methods for irrigating crops...</p>"
        },
        3: {
            title: "Case Studies",
            content: "<p>Explore case studies of successful water conservation projects...</p>"
        },
        4: {
            title: "Reaserch & Findings",
            content: "<p>These are some researches on water efficiency...</p>"
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    if (articleId && articles[articleId]) {
        document.title = articles[articleId].title;
        const articleContent = document.getElementById('article-content');
        articleContent.innerHTML =` <h2>${articles[articleId].title}</h2>${articles[articleId].content}`;
        document.querySelector('.btn').addEventListener('click', function(event) {
            event.preventDefault(); // Prevents default link behavior
            document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
        });    
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('.technique-card .btn');
            
            buttons.forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault(); // Prevent default link behavior
                    
                    // Example of showing an alert (replace with your modal or other functionality)
                    const techniqueName = button.previousElementSibling.previousElementSibling.textContent;
                    alert(`Learn more about ${techniqueName}`);
                });
            });
        });
        
    document.querySelector('.btn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevents default link behavior
        document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
    });    

    const buttons = document.querySelectorAll('.technique-card .btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            
            // Example of showing an alert (replace with your modal or other functionality)
            const techniqueName = button.previousElementSibling.previousElementSibling.textContent;
            alert(`Learn more about ${techniqueName}`);
        });
    });
        
    }
    
});
