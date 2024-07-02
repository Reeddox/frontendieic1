import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Pagina3 = () =>{
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const operacion = (valor:number) => {
        
    }
    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Numero 1: </Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Ingrese un numero"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Numero 2: </Form.Label>
                <Form.Control
                type="number"
                placeholder="Ingrese otro numero"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Resultado: </Form.Label>
                <Form.Control
                type="number"
                placeholder="Resultado"/>
            </Form.Group>
            <Button type="button" variant="success">A</Button>
        </Form>
        </>
    )
}
export default Pagina3
//Crear otro componente llamado Pagina2
//Implementar dos inputs, para recuperar dos numeros
//Implementar un boton que al ser presionado sume ambos numeros
//El resultado debe ser mostrado en un tercer input