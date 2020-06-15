(async () => {
    const {value: pais} = await Swal.fire({
        title: "Bienvenido",
        text: "Selecciona tu pais",
        // html: "<b class='rojo'>Hola</b>"
        // icon: "success" --------- se pueden usar varios, por ejemplo "error" "warning" "info" "question"---------
        confirmButtonText: "Seleccionar",
        footer: "<span class='rojo'>Esta es info importante</span>",
        // width: "90%",
        padding: "1rem",
        // background: "#000"
        // grow: "row"----se puede usar tambien "column" o "fullscreen"-----
        backdrop: true,
        // timer: 5000,
        // timerProgressBar: true
        // toast: true,
        position: "center",
        allowOutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
    
        input: "select",
        inputPlaceholder: "Pais",
        inputValue: "",
        inputOptions: {
            mexico: "Mexico",
            argentina: "Argentina"
        },
        
         customClass:{
        	// container: ""
        	// popup: "popup-class"
        	// header:
        	// title:
        	// closeButton:
        	// icon:
        	// image:
        	// content:
        	// input:
        	// actions:
        	// confirmButton:
        	// cancelButton:
        	// footer:	
        },
    
        // showConfirmButton: true,
        // confirmButtonColor: 
        // confirmButtonAriaLabel:
    
        // showCancelButton: false,
        // cancelButtonText: "Candelar",
        // cancelButtonColor:
        // cancelButtonAriaLabel:
        
        // buttonsStyling:
        showCloseButton: true
        // closeButtonAriaLabel:
    
    
        // imageUrl:
        // imageWidth:
        // imageHeight:
        // imageAlt:
    });



if(pais){
    Swal.fire({
        title: `Seleccionaste ${pais}`
    });
}
// funcion autoinvocada para que funcione con la promesa ---> async --> await, cuando se selecciona el pais
})();