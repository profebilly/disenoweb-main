var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function() {
    myInput.focus()
})

document.getElementById("Elementos").innerHTML = "Un elemento HTML se define mediante una etiqueta de inicio, algo de contenido y una etiqueta de finalización";