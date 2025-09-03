const h1 = document.querySelector("h1");
const h1Text = h1.textContent;
const splitText = h1Text.split("");
let spanText = "";

splitText.forEach((item)=>{
    spanText += `<span>${item}</span>`;
});

h1.innerHTML = spanText;
console.log(spanText) 