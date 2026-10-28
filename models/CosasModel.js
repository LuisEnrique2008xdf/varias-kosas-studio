import { setLocalStorage } from "../helpers/local-storage.js"

export let kosas = []

export function guardarKosa(key, value) {
    setLocalStorage(key, value)
}

export function buscarkosa() {

}
