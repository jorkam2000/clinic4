import api from './config'

const signUp = async (dataForm) => {
    try {
        const { data } = await api.post('auth/signup', dataForm)
        localStorage.setItem('token', data.result)
        //localStorage.setItem('token', data.role)
        return data
    } catch (error) {
        console.log(error)
    }
}

const login = async (dataForm) => {
    try {
        const { data } = await api.post('auth/login', dataForm)
        localStorage.setItem('token', data.result)
        //localStorage.setItem('token', data.role)
        return data
    } catch (error) {
        console.log(error)
    }
}

export {
    signUp,
    login
}