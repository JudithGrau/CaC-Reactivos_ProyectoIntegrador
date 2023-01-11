import { async } from "@firebase/util"
import { createContext, useState } from "react"

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {

    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState(undefined)
    const[ waiting, setWaiting ]= useState(false)
    const[ register, setRegister ]= useState(false)
    
    //const user = { name: 'admin', pass: 'admin' }

    function login(){
        /* name === user.name && 
        pass === user.pass &&  */
        setLogged(true)
    }
    function wait(){
        setWaiting(true)
    }
    function error(){
        setWaiting(false)
    }
    //firebase
    async function firebaseLogin(user){
        const { displayName, 
            isAnonymous,
            photoURL,
            email,
            uid } = await user;
        if(uid && !isAnonymous) {
            login()
            setUser({
                nombre: displayName,
                img: photoURL,
                email,
                uid
            })
        }
    }

    function logout(){
        setLogged(false);
        setUser(undefined);
        error();
    }
    
    function signup(){
        setRegister(!register)
    }

    return (
        <LoginContext.Provider
            value={ {
                firebaseLogin,
                register,
                waiting,
                logout,
                signup,
                logged, 
                login,
                error,
                user,
                wait
                } }>
            { children }
        </LoginContext.Provider>
    )
}