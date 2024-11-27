

fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(response => {
        if (!response.ok) {
            throw new Error('No Funciona la pagina')
        }
        return response.json();
    })
    .then((data) => {                                                                 //deberia haber incluido lo comentado
        console.log(data);
        obtenerusuario(data);
    
        /* .then((usuarios) => {                                                      //solucion con map y destruction
        const usuariosConDetalles = usuarios.map((usuario, indiceActual, array) => {
            const edad = generarEdadAleatoria(18, 65);                                 //definido antes
            const img = `./assets/img/${usuario.id}.jpeg`;
            const { street, suite, city } = usuario.address;
            const address = `${street}, ${suite}, ${city}`;
            return {
                    ...usuario,
                    edad,
                    img,
                    address,
                } 
            })*/
    });


function obtenerusuario(users) {
    const lista = document.getElementById('listaUsuarios');
    
    

    users.forEach((user, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="contenedorPerfil">
            <div class="divDatosPersonales">
                <h3>Name: ${user.name}</h3>
                <h3>Edad: ${Math.floor(Math.random() * (60 - 18 + 1)) + 18}</h3>
                <h3>Username: ${user.username}</h3>
                <h3>Phone: ${user.phone}</h3>
                <h3>Email: ${user.email}</h3>
            </div>
            <div class="divImagen">
                <img src="/assets/img/${i + 1}.jpeg" alt="Foto de Usuario" />
            </div>
        </div>
        <div class="contenedorPerfil">
            <div class="divDireccion">
                <h3>Compañia: ${user.company.name}</h3>
                <h3>Dirección: ${user.address.street} ${user.address.suite} ${user.address.city}</h3>
            </div>
        </div>`;
        
        //! Solucion 2__________________________________________________________________________________________________________________

        /* // Contenedor Datos/Imagen 
        const perfil = document.createElement('div');
        perfil.classList.add('contenedorPerfil');

        /// Contenedor datos personales
        const divDatos = document.createElement('div');                    
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
        divDatos.appendChild(email);

        //Contenedor imagen

        const divImagen = document.createElement('div');
        divImagen.classList.add('divImagen');
        const img = document.createElement('img');
        img.src = `/assets/img/${i + 1}.jpeg`;
        img.alt = 'Foto de Usuario';
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
        //li.appendChild(perfil);
        li.appendChild(direccion); */

        //Solucion 3 __________________________________________________________________________________________________________________

        /* const mostrarUsuarios = (usuarios) => {
            usuarios.forEach(({ name, edad, username, img, phone, email, company, address }) => {
                const cadaUsuario = document.createElement('li');
                cadaUsuario.innerHTML = `
                    <div class='userInfo'>
                        <div class='imagen'>
                            <img src='${img}' alt='Imagen de ${name}' width='150' >
                        </div>
                        <div class='datos'>
                            <p><strong>Nombre: </strong>${name}</p>
                            <p><strong>Edad: </strong>${edad}</p>
                            <p><strong>Username: </strong>${username}</p>
                            <p><strong>Teléfono: </strong>${phone}</p>
                            <p><strong>Email: </strong>${email}</p>
                        </div>
                        <p><strong>Compañía: </strong>${company.name}</p>
                        <p><strong>Dirección: </strong>${address}</p>
                    </div>
                `; */
        

        //incluyo el li en el ul
        lista.appendChild(li);

    })

}


