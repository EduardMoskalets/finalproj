import "./SettingsButtons.module.css";

const SettingsButtons = () => {
  return (
    <div className="settings-container">
      <button className="settings-button">
        <span className="icon">⚙️</span> Setting
      </button>
      <button className="logout-button">
        <span className="icon">↪️</span> Log out
      </button>
    </div>
  );
};

export default SettingsButtons;