import api from './config'

const getUserProfile = async () => {
  try {
    const { data } = await api.get('user/profile', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    return data.result
  } catch (error) {
    console.log(error)
  }
}

const getAllUsers = async () => {
  try {
    const users = await api.get('user?role=user', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
    // console.log(users.data.result)
    return users.data.result
  } catch (error) {
    console.log(error)
  }
}

export { getUserProfile, getAllUsers }
