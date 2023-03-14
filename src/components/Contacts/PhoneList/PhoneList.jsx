import Style from '../Component.module.css';

import { getFilterContacts } from '../../../redux/phonebook/phonebook-selectors';
import { deleteContact } from "../../../redux/phonebook/phonebook-operation";
import { useSelector, useDispatch } from 'react-redux';

const PhoneList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilterContacts);
  
  const elements = filteredContacts.map(({ id, name, number }) => (
    <li key={id} className={Style.list}>
      {name} ({number})
      <button onClick={() => dispatch(deleteContact(id))} className={Style.btnDelate}>
        Delete
      </button>
    </li>
    
  ));

  return <ul>{elements}</ul>;
};

export default PhoneList;
