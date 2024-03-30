import { useState } from "react";
import "../index.css"

function Instagram(){
    const [login,setLogin] = useState(true);
    const SignUp = () =>{
        setLogin(!login)
    }
    return(
        <div className="Container">
            <div className="user">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1cJp423z8HUUd5WtEK0SjxrbIhIZp5D5wQ&usqp=CAU"/>
                <input hidden={login} type="text" placeholder="Mobile Number, Email"/>
                <input hidden={login} type="text" placeholder="FullName"/>
                <input type="text" placeholder="Phone Number, UserName, Email"/>
                <input type="text" placeholder="Password"/>
                <button className="btn" onClick={() => setLogin(false)} >{(login)? "SignIn" : "Signup"}</button>
                <div className="footer">
                {(login) ? "Dont have account? " : "Have account ? "}
                <span className="btn2" onClick={SignUp}>{(login) ? "Sign Up": "Log In"}</span>
            </div>
            </div>
        </div>
    )
}
export default Instagram;