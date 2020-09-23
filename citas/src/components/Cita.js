import React from 'react';
import './Cita.sass'



const Cita = ({cita, eliminarCita}) => {


    return (
        <>
            <h1 className='title'>Administra tus citas</h1>
            <div className="container-cita">
                <div className='container-cita__form'>
                    <p className='container-cita__form__names'>Mascota: <span className='container-cita__form__names__txt'>{cita.mascota}</span></p>
                    <p className='container-cita__form__names'>Dueño: <span className='container-cita__form__names__txt'>{cita.propietario}</span></p>
                    <p className='container-cita__form__names'>Fecha: <span className='container-cita__form__names__txt'>{cita.fecha}</span></p>
                    <p className='container-cita__form__names'>Hora: <span className='container-cita__form__names__txt'>{cita.hora}</span></p>
                    <p className='container-cita__form__names'>sintomas: <span className='container-cita__form__names__txt'>{cita.sintomas}</span></p>
                    <button className='container-cita__form__btn' onClick={()=> eliminarCita(cita.id)}>Eliminar</button>
                </div>
            </div>
        </>
    )
}

export default Cita;
