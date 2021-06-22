let mainTag = document.querySelector('main');
let img = document.querySelector('img');
let infoText = document.querySelector('.info');
let interacted = false;
for( let i=0; i<2; i++) {
    let quadrant = document.createElement("div");
    quadrant.setAttribute('id', i);
    quadrant.classList.add("section");
    if(i === 0){
        quadrant.addEventListener('mouseenter', () => {
            img.style.transform = "rotate(180deg)";
            if(interacted) infoText.style.visibility = "hidden";
            else interacted = true;
        })
        quadrant.addEventListener('touchstart', () => {
            img.style.transform = "rotate(180deg)";
        })
    } else {
        quadrant.addEventListener('mouseenter', () => {
            img.style.transform = "rotate(0deg)";
            if(interacted) infoText.style.visibility = "hidden";
            else interacted = true;
        })
        quadrant.addEventListener('touchstart', () => {
            img.style.transform = "rotate(0deg)";
            if(interacted) infoText.style.visibility = "hidden";
            else interacted = true;
        })
    }
    mainTag.appendChild(quadrant);
}