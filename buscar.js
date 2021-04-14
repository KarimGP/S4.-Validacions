const formBuscar = document.getElementById('buscarId');

function busqueda() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputBuscar = document.getElementById('inputBuscar');
	

	if(inputBuscar.value == "") {
		inputBuscar.classList.add("is-invalid");
		document.getElementById("errorBuscar").textContent = "Es campo es obligatorio";
        acumErrores ++;

    }else if(!validar_buscar(inputBuscar.value)){
		inputBuscar.classList.add("is-invalid");
		document.getElementById("errorBuscar").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_buscar(buscar) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(buscar) ? true : false;
}


