let header, toggleUp, body, headerMobile;
body = document.querySelector("body");
header = document.querySelector(".site-header");
toggleUp = document.querySelector(".site-up");
burgerElem = document.querySelector(".burger-btn").children[0];
headerMobile = document.querySelector(".site-header-mobile-content");
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
function openElem(clickedElem){
    if(clickedElem != null){
        if(clickedElem.classList.contains("site-header-mobile-burger")){
            if(!headerMobile.hasAttribute("style")){
                headerMobile.style.transform = "translate(0, -3px)";
                body.style.overflow = "hidden";
                burgerElem.children[0].style.display = "none";
                burgerElem.style.setProperty("--rotateUp", "45deg");
                burgerElem.style.setProperty("--rotateDown", "-45deg");
                burgerElem.style.setProperty("--top", "0");
            }
            else{
                headerMobile.style.cssText = "transform: translate(0, -270px)";
                setTimeout(() => {
                    headerMobile.removeAttribute("style");
                }, 500);
                burgerElem.style.display = "block";
                burgerElem.children[0].style.display = "block";
                burgerElem.style.setProperty("--rotateUp", "0");
                burgerElem.style.setProperty("--rotateDown", "-0");
                burgerElem.style.setProperty("--top", "8px");
                body.removeAttribute("style");
            }
        }
        else{
            toggle = clickedElem.children[0].children[0].children[0];
            content = clickedElem.parentNode.children[1];
            height = 0;
            for(i=0; i<content.childElementCount; i++){
                height += content.children[i].offsetHeight;
            }
            if(!content.hasAttribute("style")){
                if(!toggle.parentNode.parentNode.classList.contains("site-up")){
                    content.style.marginBottom = 20 + "px";
                    content.style.height = height + "px";
                    toggle.setAttribute("d", "M33 29L25 21L17 29");
                }
            }
            else{
                if(!toggle.parentNode.parentNode.classList.contains("site-up")){
                    content.style.marginBottom = 0;
                    content.style.height = 0;
                    setTimeout(() => {
                        toggle.setAttribute("d", "M33 20L25 30L17 20");
                        content.removeAttribute("style");
                    }, 500);
                }
            }
        }
    }
    clickedElem = null;
}
document.addEventListener("click", function(e){
    if(e.target.classList.contains("header-mobile-top")){
        clickedElem = e.target.children[2];
    }
    else if(e.target.classList.contains("burger-btn")){
        clickedElem = e.target.parentNode;
    }
    else if(e.target.tagName == "I"){
        clickedElem = e.target.parentNode.parentNode.parentNode;
    }
    else if(e.target.tagName == "SPAN"){
        clickedElem = e.target.parentNode.parentNode;
    }
    else if(e.target.tagName == "path" && !e.target.parentNode.parentNode.classList.contains("site-up__link")){
        clickedElem = e.target.parentNode.parentNode.parentNode;
    }
    else if(e.target.tagName == "svg" && !e.target.parentNode.classList.contains("site-up__link")){
        clickedElem = e.target.parentNode.parentNode;
    }
    else if(e.target.classList.contains("site-header-mobile-burger")){
        clickedElem = e.target;
    }
    else if(e.target.classList.contains("site-up")){
        clickedElem = null;
    }
    else{
        clickedElem = null;
    }
    if(clickedElem != null){
        console.log(clickedElem);
        openElem(clickedElem);
    }
});

window.addEventListener("scroll", ()=>{
        if(window.scrollY != 0){
            if(!header.hasAttribute("style")){
                header.style.cssText = "box-shadow: 0px 5px 2px #ededed;";
            }
        }
        else{
                header.removeAttribute("style");
            }
    if(window.pageYOffset != 0 || !toggleUp.style.display == "none"){
        fadeIn(toggleUp, 250);
    }
    if(window.pageYOffset == 0){
        fadeOut(toggleUp, 500);
        toggleUp.removeAttribute("style");
    }
});

/* доделать открытие меню */