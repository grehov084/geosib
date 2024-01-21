let header, toggleUp, body;
body = document.querySelector("body");
header = document.querySelector(".site-header");
toggleUp = document.querySelector(".site-up");

function fadeIn(el, timeout, display){
    if(el.style.opacity == 0){
        el.style.opacity = 0;
        el.style.display = display || 'flex';;
        el.style.transition = `opacity ${timeout}ms`;
        setTimeout(() => {
            el.style.opacity = 1;
        }, timeout);
    }
};
function fadeOut(el, timeout){
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    body.style.cssText = "";
    setTimeout(() => {
        el.style.display = 'none';
    }, timeout); 
};
toggleUp.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
window.addEventListener("scroll", ()=>{
    if(window.innerWidth > 1240){
        if(window.scrollY != 0){
            if(!header.hasAttribute("style")){
                console.log("1");
                header.style.cssText = "box-shadow: 0px 5px 2px #ededed;";
            }
        }
        else{
                header.removeAttribute("style");
            }
    }
    if(window.pageYOffset != 0 || !toggleUp.style.display == "none"){
        fadeIn(toggleUp, 250);
    }
    if(window.pageYOffset == 0){
        fadeOut(toggleUp, 500);
        toggleUp.removeAttribute("style");
    }
});