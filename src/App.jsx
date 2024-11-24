import './App.module.css';
import SettingsButtons from './components/DailyInfo/SettingButtons';
import UserBar from './components/UserBar/UserBar';

function App() {
  return (
    <div>
      <UserBar
        name="Nadia"
        avatarUrl="https://example.com/avatar.jpg" //  ссылка на аватар пользователя
      />

      <SettingsButtons />
    </div>
  );
};

export default App
