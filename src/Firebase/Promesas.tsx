import { Persona } from "@/Interfaces/Interfaces"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "./Firebase"

export const registrarPersona = async(persona:Persona) => {
    const docRef = await addDoc(collection(db, "persona"),persona);
}

export const obtenerPersonas = async() => {
    const querySnapshot = await getDocs(collection(db, "persona"));
    let personas:Persona[] = []
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let persona:Persona = {
        nombre:doc.data().nombre,
        apellido:doc.data().apellido,
        correo:doc.data().correo,
        fechaNacimiento:doc.data().fechaNacimiento,
        rut:doc.data().rut,
        edad:doc.data().edad
    }
    personas.push(persona)
});
return personas
}