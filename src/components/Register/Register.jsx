import { useState } from 'react';
import {register} from "../../redux/auth/auth-operations"
import { useDispatch } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async event => {
    event.preventDefault();
    const payload = {
      name: name,
      email: email,
      password: password,
    };

     dispatch(register(payload));
 
  };

  return (
    <section className="HomePageSection">
      <h1>Register</h1>
      <form className="HomePageForm" onSubmit={handleSubmit}>
        <div className="HomePageBgrnd">
        <label>
          Name
          <input
            type="text"
            name='name'
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>

        <label>
          Email
          <input
            name='email'
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input 
            name='password'
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <button type="submit" className='btnHomePage'>Sign up</button>
        </div>
      </form>
    </section>
  );
};
export default Register;
