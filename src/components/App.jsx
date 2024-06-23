import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import css from "./App.module.css";

const App = () => {
  return (
    <div>
      <div className={css.title}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="92"
          height="92"
          viewBox="0 0 92 92"
          fill="none"
        >
          <path
            d="M61.8333 5.5L29.1667 5.5C24.3963 5.5 20.5 9.24262 20.5 13.8947L20.5 73.1053C20.5 77.7574 24.3963 81.5 29.1667 81.5H61.8332C66.6036 81.5 70.4999 77.7574 70.4999 73.1053L70.5 13.8948C70.5 9.24263 66.6037 5.5 61.8333 5.5Z"
            stroke="#0B0B0B"
            strokeLinecap="round"
          />
          <path
            d="M57.5029 68.6233H33.5M60.5 8.00002H30.5C26.0098 7.49578 22.6683 10.4268 22.9583 15.0417L22.9583 72.5C22.8737 76.8733 26.2445 79.3672 30.5 79.1459L61 79.5C65.3348 79.1646 68.3775 76.3362 68.2083 72.5V15.0417C68.4315 10.3126 64.8814 7.45357 60.5 8.00002Z"
            stroke="#5B53C4"
            strokeWidth="4.1"
            strokeLinecap="round"
          />
          <rect
            x="31"
            y="66.5"
            width="28.5"
            height="4.5"
            rx="2.25"
            stroke="#0B0B0B"
          />
          <path
            d="M31.1667 9.5L59.8333 9.5C63.509 9.5 66.5 12.5216 66.5 16.2632L66.4999 70.7369C66.4999 74.4784 63.5089 77.5 59.8333 77.5H31.1667C27.4911 77.5 24.5 74.4784 24.5 70.7368L24.5 16.2632C24.5 12.5216 27.4911 9.5 31.1667 9.5Z"
            stroke="#0B0B0B"
          />
        </svg>
        <h1 className={css.titleText}>Phonebook</h1>
      </div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
