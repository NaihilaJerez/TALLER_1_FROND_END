const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	pass: /^.(([a-z]{1,})([A-Z]{1,})([0-9]{1,}){1,10})$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[m]+[i]+[s]+[e]+[n]+[a]+\.[e]+[d]+[u]+\.[c]+[o]+$/,
	ndocumento: /^.{5,15}$/,
}

const cmp = {
	nombre: false,
    apellido: false,
	pass: false, 
	correo: false,
	ndocumento: false,
}


const validarform = (e) => {
	switch (e.target.name) {

		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "pass":
			validarCampo(expresiones.pass, e.target, 'pass');
			validarpass2();
		break;
		case "pass2":
			validarpass2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "ndocumento":
			validarCampo(expresiones.ndocumento, e.target, 'ndocumento');
		break;

	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`gp_${campo}`).classList.remove('form_gp-incorrecto');
		document.getElementById(`gp_${campo}`).classList.add('form_gp-correcto');
		document.querySelector(`#gp__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#gp__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#gp_${campo} .forminput-error`).classList.remove('form_input-error-activo');
		cmp[campo] = true;
	} else {
		document.getElementById(`gp_${campo}`).classList.add('form_gp-incorrecto');
		document.getElementById(`gp_${campo}`).classList.remove('form_gp-correcto');
		document.querySelector(`#gp__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#gp__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#gp_${campo} .forminput-error`).classList.add('form_input-error-activo');
		cmp[campo] = false;
	}
}

const validarpass2 = () => {
	const inputpass1 = document.getElementById('pass');
	const inputpass2 = document.getElementById('pass2');

	if(inputpass1.value !== inputpass2.value){
		document.getElementById(`gp_pass2`).classList.add('form_gp-incorrecto');
		document.getElementById(`gp_pass2`).classList.remove('form_gp-correcto');
		document.querySelector(`#gp__pass2 i`).classList.add('fa-times-circle');
		document.querySelector(`#gp__pass2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#gp_pass2 .forminput-error`).classList.add('form_input-error-activo');
		cmp['pass'] = false;
	} else {
		document.getElementById(`gp_pass2`).classList.remove('form_gp-incorrecto');
		document.getElementById(`gp_pass2`).classList.add('form_gp-correcto');
		document.querySelector(`#gp__pass2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#gp__pass2 i`).classList.add('fa-check-circle');
		document.querySelector(`#gp_pass2 .forminput-error`).classList.remove('form_input-error-activo');
		cmp['pass'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarform);
	input.addEventListener('blur', validarform);
});

form.addEventListener('submit', (e) => {
	e.preventDefault();  

	const tm = document.getElementById('tm');
	if(cmp.nombre && cmp.apellido &&  cmp.pass && cmp.correo && cmp.ndocumento && tm.checked  ){
		form.reset();

		document.getElementById('form_ms-exito').classList.add('form_ms-exito-activo');
		setTimeout(() => {
			document.getElementById('form_ms-exito').classList.remove('form_ms-exito-activo');
		}, 5000);

		document.querySelectorAll('.form__gp-correcto').forEach((icono) => {
			icono.classList.remove('form__gp-correcto');
		});
        alert("si se pueden enviar el form")
	} else {
		document.getElementById('form_ms').classList.add('form_ms-activo');
        alert("No se puede enviar el form porque faltan aspectos ")
	}
});