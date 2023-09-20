// URL de la API de JSONPlaceholder para obtener usuarios
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Elemento HTML <ul> donde se mostrarán los usuarios
const userList = document.getElementById('user-list');

// Función para obtener y mostrar usuarios
async function getUsers() {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Iterar sobre la lista de usuarios y crear elementos <li>
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.id}. ${user.name} (${user.email})`;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}

// Llamar a la función para obtener y mostrar usuarios al cargar la página
getUsers();
