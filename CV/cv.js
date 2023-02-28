document.getElementById('BotonInfo').onclick = function () {
    var x = document.getElementById('info');
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

document.getElementById('BotonFotos').onclick = function () {
    var y = document.getElementById('listaFotos');
    if (y.style.display === "none" || y.style.display === "") {
        y.style.display = "block";
    }
    else {
        y.style.display = "none";
    }
}