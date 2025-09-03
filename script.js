function textSplit(){
    const h1 = document.querySelector("h1");
    const h1Text = h1.textContent;
    const splitText = h1Text.split("");
    let spanText = "";

    splitText.forEach((item,idx)=>{
        if(idx < 4){
            spanText += `<span class="a">${item}</span>`;
        }else{
          spanText += `<span class="b">${item}</span>`;  
        } 
    });
    h1.innerHTML = spanText;
}

textSplit();

gsap.from("h1 .a",{
    y:70,
    // opacity: 0,
    duration: .5,
    stagger: .1,
    opacity: 0
})
gsap.from("h1 .b",{
    y:70,
    // opacity: 0,
    duration: .5,
    stagger: -.1,
    opacity: 0
})


