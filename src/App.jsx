import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes";


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
      const obtenerLs = () => {
        const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        setPacientes(pacientesLs)
      }
      obtenerLs();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  //funciones
  const EliminarPaciente = (id) =>{  
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-4">
      <Header />

      <div className="mt-12 md:flex">

        <Formulario 
        pacientes={pacientes} 
        setPacientes={setPacientes} 
        paciente={paciente} 
        setPaciente={setPaciente}
        />

        <ListadoPacientes 
        pacientes={pacientes} 
        setPaciente={setPaciente}
        EliminarPaciente={EliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App;
