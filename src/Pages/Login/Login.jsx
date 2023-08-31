import { useContext, useRef } from "react";
import "./Login.scss";
import { LoginContext } from "../../Context/loginContext";

export const Login = () => {
  let nameRef = useRef(null)
  let passRef = useRef(null)

  let {setLogin} = useContext(LoginContext)


  function logFunc(e) {
    e.preventDefault();
    if(nameRef.current.value == 'admin' && passRef.current.value == '123'){
      setLogin(true)
      localStorage.setItem('login', JSON.stringify(true))
    }else{
      localStorage.setItem('login', JSON.stringify(false))
      
    }
  }
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="login_container">
        <div className="login">
          <div className="cover"></div>
          <div className="shadow"></div>
          <div className="content">
            <form onSubmit={logFunc}>
              <h3 className="logo">
              <i class="fa-solid fa-key"></i>
              </h3>
              <h1>Login</h1>
              <div className="inputBox">
                <input ref={nameRef} type="text" placeholder="Username" />
                <i class="fa-solid fa-user"></i>
                {/* <span>Username</span> */}
              </div>
              <div className="inputBox">
                <input ref={passRef} type="password" placeholder="Pasword"  />
                <i class="fa-solid fa-lock"></i>
                {/* <span>Pasword</span> */}
              </div>
              <button>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
