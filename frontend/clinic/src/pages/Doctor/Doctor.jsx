import { useEffect, useState } from "react"
import { getAllDoctors } from "../../services/doctorServices"

function Doctor() {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    const doctorRequest = async () => {
      const result = await getAllDoctors() 
      setDoctors(result)
    }
    doctorRequest()
  }, [])

  console.log(doctors)
  return (
    <div>
      {
        doctors.map((doctor) => {
          return <h1 key={doctor.id}>{doctor.value}</h1>
        })
      }
    </div>
  )
}

export default Doctor