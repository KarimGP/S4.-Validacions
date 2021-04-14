const formRegister = document.getElementById('registerId');

function registerNewUser() {
	var acumErrores = 0;
	
	formRegister.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputEmailP = document.getElementById('inputEmailP');
	
	var inputPasswordP = document.forms["myFormP"]["inputPasswordP"];
	var inputProvince = document.forms["myFormP"]["inputProvince"];

	

	if(inputEmailP.value == "") {
		inputEmailP.classList.add("is-invalid");
		document.getElementById("errorEmailP").textContent = "El campo es obligatorio";
        acumErrores ++;

    }else if(!validar_emailP(inputEmailP.value)){
		inputEmailP.classList.add("is-invalid");
		document.getElementById("errorEmailP").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(inputPasswordP.value == "") {
		inputPasswordP.classList.add("is-invalid");
		document.getElementById("errorPasswordP").textContent = "El campo es obligatorio";
		acumErrores ++;

	}else if(!validar_passwordP(inputPasswordP.value)){
		inputPasswordP.classList.add("is-invalid");
		document.getElementById("errorPasswordP").textContent = "El password debe tener almenos 8 caracteres, un número y una mayúscula";
		acumErrores ++;
	}

	if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		acumErrores ++;
	}
	
    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}



formRegister.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_emailP(emailP) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(emailP) ? true : false;
}

function validar_passwordP(passwordP) {
	var regex = /^(?=\w*\d)(?=\w*[A-Z])\S{8}$/;
	return regex.test(passwordP) ? true : false;
}