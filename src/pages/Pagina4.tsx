import { obtenerPersonas } from '@/Firebase/Promesas'
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'

export const Pagina4 = () => {
    useEffect(() => {
        obtenerPersonas().then((personas) => {
            console.log(personas)
        }).catch((e)=>{
            alert("No se logra cargar los datos")
            console.log(e)
        })
      },[])  
    return (
    <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>RUT</th>
                    <th>Fecha Nacimiento</th>
                    <th>Correo</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
    </>
  )
}
export default Pagina4