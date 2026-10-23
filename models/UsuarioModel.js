const usuarios = [
    {
        nombre: "pablito patricio de la osa",
        telefono: "123456789",
        correo: "pablito@pablito.com",
        contrasena: "1234",
        id: "2008"
    },
    {
        nombre: "ana juliana lopez",
        telefono: "3032343434",
        correo: "abajuanita1234@lopez.com",
        contrasena: "3422234",
        id: "200888"
    }
];

export function guardarUsuario() {
    
}

export function buscarUsuario(correo, contrasena) {
    let auth = usuarios.find((usuario) => correo == usuario.correo && contrasena == usuario.contrasena) 
    return auth
}