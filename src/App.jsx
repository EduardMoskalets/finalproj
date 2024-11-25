import './App.module.css';
import SettingsButtons from './components/DailyInfo/SettingButtons';
import UserBar from './components/UserBar/UserBar';
import UserLogo from './components/ChooseDate/Userlogo';

function App() {
  return (
    <div>

      <UserLogo/>
      <UserBar
        name="Nadia"
        avatarUrl="https://example.com/avatar.jpg" //  ссылка на аватар пользователя
      />

      <SettingsButtons />
    </div>
  );
};

export default App
