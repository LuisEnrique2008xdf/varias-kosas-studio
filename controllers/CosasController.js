import { getlocalStorage, removeLocalStorage } from "../helpers/local-storage.js";
import { generalAlert } from "../helpers/alerts.js";
import { kosas, guardarKosa } from "../models/CosasModel.js";

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
 
document.querySelector("#btn-agregar-kosa").addEventListener("click",()=>{
    let nombre_producto = document.querySelector("#nombre-producto").value
    let precio = document.querySelector("#precio").value
    let categoria = document.querySelector("#categoria").value
    let materiales = document.querySelector("#materiales").value
    let dimensiones = document.querySelector("#dimensiones").value
    let stock = document.querySelector("#stock").value
    let descripcion = document.querySelector("#descripcion").value
    let foto_producto = document.querySelector("#foto-producto").value
    let kosa ={nombre_producto, precio, categoria, materiales, dimensiones, stock, descripcion, foto_producto}
    kosas.push(kosa)
    guardarKosa("kosas", kosas)
    generalAlert("Registro exitoso", "se guardo la kosa base de datos", "success")
})