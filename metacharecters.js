let text ="that's a hot!";
let pattern = /h.t/g;
let result = text.match(pattern);

document.getElementById("demo").innerHTML = result;
