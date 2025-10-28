document.addEventListener('DOMContentLoaded', function() {

    const miBoton = document.getElementById('btn-portafolio');
    const bototres = document.getElementById('botontres');

    // "async" le dice a la función que espere una respuesta
    miBoton.addEventListener('click', async function(evento) {
        
        // Evita que el enlace '#' recargue la página
        evento.preventDefault(); 

        try {
            // 1. Llama al "mesero" (fetch) y dale la URL de tu servidor
            const respuesta = await fetch('http://127.0.0.1:5000/clic-boton');
            
            // 2. Espera la respuesta del servidor
            const data = await respuesta.json();
            
            // 3. Muestra la respuesta del servidor en la consola del NAVEGADOR
            console.log('Respuesta del servidor:', data.mensaje);

        } catch (error) {
            // 4. Si el servidor está apagado o hay un error
            console.error('Error al conectar con el servidor:', error);
            alert('Error: No se pudo conectar al servidor Python.');
        }
    
    }); 

    if (bototres){
        bototres.addEventListener('click', async function(evento){
            evento.preventDefault()
            try{
                const respuesta = await fetch('http://127.0.0.1:5000/clic-btres')
                const data = await respuesta.json();
                console.log('RESPUESTA DEL SERVIDOR: ', data.mensaje)
            } catch(error){
                console.warn('Error con el servidor: ', error);
                alert('ERROR AL CONECAT CON EL SERVIDOR');
            }
        });
    }

   


});