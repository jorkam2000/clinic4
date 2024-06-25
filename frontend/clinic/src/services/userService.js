import api from './config'

const getUserProfile = async () => {
    try {
        const { data } = await api.get('user/profile', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export {
    getUserProfile
}