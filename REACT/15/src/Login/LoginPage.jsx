import React,{Fragment, useState} from "react";
import '../Login/LoginStyles.css'


function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        console.log('Login')
        console.log(`${email} ${password} `)
        // Verifica sin el correo y la contraseña son correctas

    }
    return(
        <Fragment>
           
            <div className="container">
                <h3>Iniciar Sesion</h3>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(data)=> setEmail(data.target.value)} />
                    <label for="floatingInput">Correo Electronico</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(data)=> setPassword(data.target.value)}/>
                    <label for="floatingPassword">Contraseña</label>
                </div>
                <button type="button" className="btn-primary" onClick={login}>Iniciar sesión</button>
            </div>
        </Fragment>
    )
}


export default LoginPage;