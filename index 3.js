
let navIcon = document.querySelector(".icon");

let navList = document.querySelector(".links ul");

navIcon.addEventListener("click", (e) => {

    e.stopPropagation();
    
    navList.classList.add("ulist");

    if(navList.classList.contains("ulist")) {

        document.addEventListener("click", (e) => {

            if(e.target !== navList && e.target !== navIcon) {

                navList.classList.remove("ulist");
                
            }
            
        });
        
    }
    
});

