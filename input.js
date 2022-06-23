document.getElementById('button').onclick = myFunction;

function myFunction() {
    const name = document.getElementById("input").value;
    document.getElementById('menu').innerHTML = "Greetings" +" "+ name
}