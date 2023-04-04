const el = document.querySelector("#myName");
const text = "Gabriel Andrade";
const interval = 200;
const i = 1;

function showText(el, text, interval){

    const char = text.split("").reverse();

    const typer = setInterval(() => {
    
    if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next;
        

    }, interval);

}
    showText(el, text, interval);

