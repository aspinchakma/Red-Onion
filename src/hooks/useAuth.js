import { useContext } from "react"
import { AuthContext } from "../firebase/AuthencticationProvider"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;