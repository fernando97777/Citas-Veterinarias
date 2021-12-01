import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente,EliminarPaciente}) => {

    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

                    <p className="text-lg mt-3 mb-10 text-center">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
                    </p>

                    {pacientes.map(paciente => (
                        <Paciente 
                        paciente={paciente} 
                        key={paciente.id} 
                        setPaciente={setPaciente}
                        EliminarPaciente={EliminarPaciente}
                        />
                    ))
                    }
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
                    <p className="text-lg mt-3 mb-10 text-center">
                        Comienza Agregando Pacientes {""}
                        <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>


    )
}

export default ListadoPacientes
