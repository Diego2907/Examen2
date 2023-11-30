let dataArray = [];

// Función para agregar un elemento al array y actualizar la lista
function agregarEvento() {
  let inputText = document.getElementById("inputText");
  let Create = document.createElement("li");

  if (inputText.value.trim() !== "") {
    dataArray.push(inputText.value);
    Create.appendChild(document.createTextNode(inputText.value));
    document.getElementById("ulArray").appendChild(Create);
    inputText.value = ""; 
  }
}

// Función para eliminar el último elemento del array y actualizar la lista
function eliminarEvento() {
  if (dataArray.length > 0) {
    dataArray.pop(); 
    let list = document.getElementById("ulArray");
    list.removeChild(list.lastElementChild); 
  }
}