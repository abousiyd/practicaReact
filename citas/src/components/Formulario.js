import React, { useState } from 'react';
import './Formulario.sass'



const Formulario = ({crearCita}) => {

    const [ cita, actualizarCita ] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [ error, actualizarError  ] = useState(false)

    const handleChange = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const {mascota, propietario, fecha, hora, sintomas} = cita

    const submitCita = (e) => {
        e.preventDefault()
        
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '') {
            actualizarError(true)
            setTimeout(() => {
                actualizarError(false)
              }, 6000);
            return
        }
        
        cita.id = Math.random()
        
        crearCita(cita)

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    const logout = () => {
        localStorage.clear()
        window.location.reload(false)
    }


    return (
        <>
        <input onClick={logout} type="button" value="Logout" class="logout"/>

        <div className='container'>
            <h1 className='container__title'>Formulario para crear citas</h1>

            { error ? <p> Todos los campos son obligatorios</p> : null}

            <form className='container__form'  onSubmit={submitCita}>
                <label className='container__form__name'>Nombre Mascota</label>
                <input className='container__form__input' type="text" name="mascota" placeholder="Nombre Mascota" value={mascota} onChange={handleChange}/>

                <label className='container__form__name'>Nombre Dueño</label>
                <input className='container__form__input' type="text" name="propietario" placeholder="Nombre Dueño" value={propietario} onChange={handleChange}/>

                <label className='container__form__name'>Fecha</label>
                <input className='container__form__input' type="date" name="fecha" value={fecha} onChange={handleChange}/>

                <label className='container__form__name'>Hora</label>
                <input className='container__form__input' type="time" name="hora" value={hora} onChange={handleChange}/>

                <label className='container__form__name'>Síntomas</label>
                <textarea className='container__form__text' name="sintomas" value={sintomas} onChange={handleChange}></textarea>

                <button className='container__form__btn' type="submit">Agregar Cita</button>
            </form>
        </div>
        </>

    )
}

export default Formulario;
