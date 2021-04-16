const formBuscar = document.getElementById('buscarId');

function busqueda() {
	var acumErrores = 0;
	
	formBuscar.classList.remove('is-invalid');
	
	var inputBuscar = document.getElementById('inputBuscar');
	//var inputBuscar = document.forms["myFormB"]["inputBuscar"];

	if(inputBuscar.value == "") {
		inputBuscar.classList.add("is-invalid");
		document.getElementById("errorBuscar").textContent = "El campo es obligatorio";
		acumErrores ++;

	}else if(!validar_buscar(inputBuscar.value)){
		inputBuscar.classList.add("is-invalid");
		document.getElementById("errorBuscar").textContent = "El texto debe tener como mínimo 3 caracteres";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}

formBuscar.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

function validar_buscar(buscar) {
	var regex = /^[a-zA-Z0-9]{3,50}$/;
	return regex.test(buscar) ? true : false;
}


