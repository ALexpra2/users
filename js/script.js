

fetch(`https://jsonplaceholder.typicode.com/users/`)
.then(response => {
    if (!response.ok) {
        throw new Error('No Funciona la pagina')
    }
    return response.json();
})
.then((data) => {                         //vambiar data por users
    console.log(data);
    obtenerusuario(data);
    
});


function obtenerusuario(users) {
    const lista = document.getElementById('listaUsuarios');
    lista.innerHTML = '';
       
    users.forEach((user, i) => {
        const li = document.createElement('li');
        
        // Contenedor Datos/Imagen 
        const perfil = document.createElement('div');
        perfil.classList.add('contenedorPerfil');

        /// Contenedor datos personales
        const divDatos = document.createElement('div');                    //hacelo con .innerHTML challenge U1S5 1:30
        divDatos.classList.add('divDatosPersonales');
        
        const name = document.createElement('h3');
        name.textContent = "Name: " + user.name;
        divDatos.appendChild(name);

        const edadAleatoria = document.createElement('h3');
        edadAleatoria.textContent = `Edad: ${Math.floor(Math.random() * (60 - 18 + 1)) + 18}`;
        divDatos.appendChild(edadAleatoria);
        
        const username = document.createElement('h3');
        username.textContent = "Username: " + user.username;
        divDatos.appendChild(username);

        const phone = document.createElement('h3');
        phone.textContent = "Phone: " + user.phone;
        divDatos.appendChild(phone);

        const email = document.createElement('h3');
        email.textContent = "Email: " + user.email;
        divDatos .appendChild(email);
        
        //Contenedor imagen

        const divImagen = document.createElement('div');
        divImagen.classList.add('divImagen');
        const img = document.createElement('img');
        img.src = `users/assets/img/${i+1}.jpeg`; 
        img.alt = 'Foto de Usuario' ;                     
        divImagen.appendChild(img);
        
        //Incluyo contenedor datos personales e imagen en Contenedor perfil
        
        perfil.appendChild(divDatos);
        perfil.appendChild(divImagen);

        //contenedor Compañia/direccion
        
        const direccion = document.createElement('div');
        direccion.classList.add('divDireccion');

        const company = document.createElement('h3');
        company.textContent = "Compañia: " + user.company.name;
        direccion.appendChild(company);

        const address = document.createElement('h3');
        address.textContent = `Dirección: ${user.address.street} ${user.address.suite} ${user.address.city}`; 
        direccion.appendChild(address);
        
        //incluyo todo en el li
        li.appendChild(perfil);
        li.appendChild(direccion);
        
        //incluyo el li en el ul
        lista.appendChild(li);

    })
    
} 


