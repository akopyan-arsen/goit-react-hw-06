import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { filterContact } from "../../redux/filterSlice";

const SearchBox = () => {
  const filterId = useId();
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(filterContact(event.target.value));

  return (
    <div className={css.filterWrapper}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        id={filterId}
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};
export default SearchBox;
