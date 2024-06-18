import api from "./config"

const getAllDoctors = async () => {
    try {
        const { data } = await api.get('doctor')
        return data.doctor
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllDoctors
}