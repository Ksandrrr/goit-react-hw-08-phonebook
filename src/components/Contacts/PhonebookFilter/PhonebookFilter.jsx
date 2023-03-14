import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "../../../redux/filter/filter-action";
import { getFilter } from '../../../redux/filter/filter-selectors';

const PhoneBookFilter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

 const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
 }
  
  return (
    <input
      type="text"
      name="filter"
      title="Search Contacts"
      onChange={handleFilter}
      value={filter}
    />
  );
};

export default PhoneBookFilter;
