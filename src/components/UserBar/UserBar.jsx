import css from "./UserBar.module.css";
import { useState, useRef } from 'react';



const UserBar = ({ name, avatarUrl }) => {
    const [showPopover, setShowPopover] = useState(true);
  const buttonRef = useRef(null);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

    return (
        <div className={css.user_button_container}>
            <button className={css.user_button} onClick={togglePopover} ref={buttonRef}>
                <span className={css.username}>{name}</span>
                <img src={avatarUrl} alt="#" className={css.avatar} />
                
      </button>

      { /* Всплывающее окно (popover) */ }
      {showPopover && (
        <div className={css.popover}>
            <button className={css.inPopover}><span className={css.buttonSetting}>Setting</span></button>
            <button className={css.inPopover}><span className={css.buttonLogOut}>Log out</span></button>
        </div>
      )}
    </div>
  );
}

export default UserBar