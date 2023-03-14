import ContactForm from './PhonebookForm/PhonebookForm';
import PhoneList from './PhoneList/PhoneList';
import PhoneBookFilter from './PhonebookFilter/PhonebookFilter';
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/phonebook/phonebook-operation';
import { useSelector } from 'react-redux';
import { Loading } from './Loading/Loading';
import Style from './Component.module.css';


const Contacts = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <section className={Style.section}>
      <div className={Style.Phonebook}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={Style.Contacts}>
        <h2>Contacts</h2>
        <PhoneBookFilter />
      <PhoneList />
      </div>
      {isLoading && <Loading />}
    </section>
  );
};

export default Contacts;
