import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Style from './HomePage.module.css';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';

import { getUser } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
const HomePage = () => {
  const isLogin = useSelector(isUserLogin);

  const { email } = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <section className={Style.main}>
       {!isLogin && <NavLink to="/" className={Style.linkHome}>
          Phonebook
        </NavLink>}
        {!isLogin && (
          <div>
            <NavLink to="/register" className={Style.link}>
              Sign up
            </NavLink>
            |
            <NavLink to="/login" className={Style.link}>
              Login
            </NavLink>
          </div>
        )}
        {isLogin && (
          <div className={Style.isLoginUser}>
            <p>{email}</p>
           
            <button className={Style.btnOut} onClick={onLogout}>
    Logout
    <div className={Style.arrowWrapper}>
        <div className={Style.arrow}></div>

    </div>
</button>
          </div>
        )}
      </section>
      <Outlet />
    </>
  );
};
export default HomePage;
