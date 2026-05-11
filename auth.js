// =============================================================
//  auth.js  —  Sistema de login local para Smash Bros. Ultimate
//
//  Cómo funciona con users.json:
//  - Al cargar, intenta leer users.json vía fetch().
//  - Si lo encuentra, importa sus usuarios a localStorage
//    (sin borrar los que ya hubiera registrados).
//  - Nuevos registros se guardan en localStorage en tiempo real.
//  - Al exportar (botón en sesion.html) se descarga el JSON
//    actualizado con todos los usuarios actuales.
//
//  IMPORTANTE: fetch() sobre archivos locales requiere un
//  servidor (Live Server, XAMPP, etc.). Si abres el .html
//  con doble clic, la carga del JSON se omite en silencio
//  y el sistema sigue funcionando solo con localStorage.
// =============================================================

var USERS_KEY = 'usuarios_smash';

// ── Cargar users.json e importar sus usuarios ─────────────────
function cargarUsersJSON() {
    fetch('users.json')
        .then(function(res) {
            if (!res.ok) throw new Error('No se pudo leer users.json');
            return res.json();
        })
        .then(function(data) {
            if (!data.usuarios || !Array.isArray(data.usuarios)) return;

            var guardados = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

            data.usuarios.forEach(function(u) {
                var existe = guardados.find(function(g) {
                    return g.email === u.email;
                });
                if (!existe) {
                    guardados.push(u);
                }
            });

            localStorage.setItem(USERS_KEY, JSON.stringify(guardados));
            console.log('users.json cargado. Usuarios disponibles:', guardados.length);
        })
        .catch(function() {
            // Sin servidor: se omite silenciosamente, localStorage sigue funcionando
            console.info('users.json no disponible (modo sin servidor). Usando localStorage.');
        });
}

// Cargar el JSON nada más ejecutar el script
cargarUsersJSON();

// ── Registrar un nuevo usuario ────────────────────────────────
function registrarUsuario(email, password) {
    var usuarios = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

    var existe = usuarios.find(function(u) { return u.email === email; });
    if (existe) {
        alert('¡Error! Este correo ya está registrado.');
        return;
    }

    usuarios.push({ email: email, password: password });
    localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
    alert('¡Registro con éxito! Ahora puedes iniciar sesión.');
}

// ── Validar inicio de sesión ──────────────────────────────────
function validarLogin(email, password) {
    var usuarios = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

    var usuarioValido = usuarios.find(function(u) {
        return u.email === email && u.password === password;
    });

    if (usuarioValido) {
        sessionStorage.setItem('sesion_activa', 'true');
        sessionStorage.setItem('usuario_email', email);
        window.location.href = 'index.html';
    } else {
        alert('Datos incorrectos. Inténtalo de nuevo o regístrate.');
    }
}

// ── Cerrar sesión ─────────────────────────────────────────────
function cerrarSesion() {
    sessionStorage.removeItem('sesion_activa');
    sessionStorage.removeItem('usuario_email');
    window.location.href = 'sesion.html';
}

// ── Proteger páginas privadas ─────────────────────────────────
function verificarAcceso() {
    if (!sessionStorage.getItem('sesion_activa')) {
        window.location.href = 'sesion.html';
    }
}

// ── Exportar usuarios actuales como users.json ────────────────
// Llama a esta función desde un botón para descargar el JSON
// actualizado y reemplazar tu users.json manualmente.
function exportarUsersJSON() {
    var usuarios = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    var contenido = JSON.stringify({ usuarios: usuarios }, null, 2);
    var blob = new Blob([contenido], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'users.json';
    a.click();
    URL.revokeObjectURL(url);
}
