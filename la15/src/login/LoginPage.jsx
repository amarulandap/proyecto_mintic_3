import React,{useState} from "react";

const LoginPage = () => {

        //estos los states
    const [usuario,setUsuario] = useState({
        email:'',
        password:'',

    });
   

//funciones

    const usuChange =(e) =>{
        setUsuario({
                ...usuario,
                [e.target.name] : e.target.value
        })
    }



    return(
        <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='Email' value={usuario.email} onChange ={usuChange}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    )
}

export default LoginPage;