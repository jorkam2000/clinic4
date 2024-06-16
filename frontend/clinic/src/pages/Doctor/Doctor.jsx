import { useEffect, useState } from "react"
import { getAllDoctors } from "../../services/doctorServices"

function Doctor() {
  const [doctor, setDoctor] = useState([])

  useEffect(() => {
    const doctorRequest = async () => {
      const result = await getAllDoctors() 
      setDoctor(result)
    }
    doctorRequest()
  }, [])

  console.log(doctor)
  return (
    <div>Doctor</div>
  )
}

export default Doctor