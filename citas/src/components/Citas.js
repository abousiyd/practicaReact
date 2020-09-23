import React, { useState, useEffect } from 'react';
import Formulario from './Formulario'
import Cita from './Cita'
import './Citas.sass'


const Citas = (props) => {

    let citasIniciales = JSON.parse(localStorage.getItem('citas'))
    if(!citasIniciales) {
        citasIniciales = []
    }
    console.log(citasIniciales)

    const [ citas, guardarCitas ] = useState(citasIniciales)

    useEffect( () => {
        if (!localStorage.token) return props.history.push('/login')
    }, [citas])

    const crearCita = cita => {
        let todasCitas = [...citas, cita]
        guardarCitas(todasCitas)
        localStorage.setItem('citas', JSON.stringify(todasCitas))
    }

    const eliminarCita = id => {
        const todasCitas = citas.filter(cita => cita.id !== id)
        guardarCitas(todasCitas)
        localStorage.setItem('citas', JSON.stringify(todasCitas))
    }


    return (
        <>
        <div className='container-citas'>
            {/* <h1>hola soy Citas</h1> */}
            <div>
                <Formulario crearCita={crearCita} />
            </div>
            <div>
                {citas.map(cita => (
                    <Cita cita={cita} key={cita.id} eliminarCita={eliminarCita} />
                ))}
            </div>
        </div>
        </>
    )
}

export default Citas;
