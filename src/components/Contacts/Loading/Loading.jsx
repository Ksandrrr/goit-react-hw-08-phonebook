import Style from './Loading.module.css';
import { createPortal } from 'react-dom';
export const Loading = () => {
  const modalRoot = document.getElementById('root');
  return createPortal(
    <div className={Style.backgroundLoading}>
      <h1 className={Style.nameLoading}>Loading</h1>
      </div>,
      modalRoot
  );
};
