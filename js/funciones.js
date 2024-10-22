jQuery(document).ready(listo);
function listo(){
	jQuery(".hamb").click(function(e){
		e.preventDefault();
		jQuery("header .container nav").toggleClass("open");
		jQuery(".hamb i").toggleClass(" fa-xmark");
	});
	jQuery("header .container nav a").click(function(){
		jQuery("header .container nav").removeClass("open");
		jQuery(".hamb i").removeClass(" fa-xmark");
		var dev=jQuery(this).attr("href");
		jQuery("html.body").animate({
			"scrollTop": jQuery(dev).offset().top -76
		});
	});
}


function doFunction(e){
	console.log('enviar')
	const mensaje = document.getElementById('mensaje')

		const texto = mensaje.value.replaceAll(' ','%')
		e.setAttribute('href', `https://wa.me/+573122656289?text=${texto}`)
	
}

document.addEventListener("DOMContentLoaded", () => {
	const sendBtn = document.getElementById("enviar");
	sendBtn.addEventListener('click', doFunction(sendBtn))

	}
)


