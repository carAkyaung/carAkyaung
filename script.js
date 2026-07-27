document.addEventListener("DOMContentLoaded", function(){

    // Smooth scroll for navigation
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });


    // Simple welcome message
    console.log(
        "Welcome to carAkyaung - JDM Spirit & Drift Passion"
    );

});