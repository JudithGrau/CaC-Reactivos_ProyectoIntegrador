import { useContext } from "react"
import { LoginContainer, LoginContext } from "../Login"

export const LoginLayout = ({ children }) => {

    const { logged } = useContext(LoginContext)
    //console.log(logged);
    return logged
        ? children
        : <LoginContainer />
}