import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <div className={css.user}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={handleClick} className={css.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
