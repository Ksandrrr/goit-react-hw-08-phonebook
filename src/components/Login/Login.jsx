
import { useState } from 'react';
import {login} from "../../redux/auth/auth-operations"
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async event => {
    event.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
  dispatch(login(payload));
  };
    return (
        <>
            <section className="HomePageSection">  
                <h1>Login</h1>
            <form  className="HomePageForm" onSubmit={handleSubmit}>
              <div className="HomePageBgrnd">
                <label>
                    Email
                        <input type="text"
                            name='email'
                             onChange={event => setEmail(event.target.value)}
                        />
                </label>
                <label>
                    Password
                        <input type="password" name='password'
                        onChange={event => setPassword(event.target.value)}
                        />
                    </label>
                    
              <button type="submit" className='btnHomePage'>Sign in</button>
              </div>
            </form>
    </section>
        </>
        )

}
export default Login