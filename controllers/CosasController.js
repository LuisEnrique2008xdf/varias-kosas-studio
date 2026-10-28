import { getlocalStorage, removeLocalStorage } from "../helpers/local-storage.js";
import { generalAlert } from "../helpers/alerts.js";

let token = getlocalStorage("token")
if (!token){
    window.location.href = "/index.html"
}
let usuario = getlocalStorage("usuario")

document.querySelector("#info-usuario").textContent = "USUARIO: " + usuario.nombre
document.querySelector("#btn-salir").addEventListener("click", function () {
    removeLocalStorage("usuario")
    removeLocalStorage("token")
    window.location.href = "/index.html"
})
