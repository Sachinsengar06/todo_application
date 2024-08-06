import { Navigate, Outlet } from "react-router-dom"
import { useTypedSelector } from "../redux/store"

const PrivateRoutes = () => {
    const userData = useTypedSelector((state) => state.user)
  return (
    <div>
      {userData.isLogin?<Outlet/>:<Navigate to= '/login' replace />}
    </div>
  )
}

export default PrivateRoutes
