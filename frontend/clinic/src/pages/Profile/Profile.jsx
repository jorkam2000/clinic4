import { getUserProfile } from "../../services/userService"
import { useState, useEffect } from "react"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import { CircularProgress } from "@mui/material"


function Profile() {
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const getUserDataProfile = async () => {
      const result = await getUserProfile()
      setUserProfile(result)
    }

    getUserDataProfile()
  }, [])
  //console.log(userProfile)

  return (
    <div>
      {
        userProfile !== null ? <ProfileCard userInfo={userProfile}/> : <CircularProgress />
      }
      {/*<ProfileCard userInfo={userProfile}/>*/}
    </div>
  )
}

export default Profile