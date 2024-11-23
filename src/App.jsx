import './App.module.css';
import UserBar from './components/UserBar/UserBar';

function App() {
  return (
    <div>
      <UserBar
        name="Nadia"
        avatarUrl="https://example.com/avatar.jpg" //  ссылка на аватар пользователя
      />
    </div>
  );
};

export default App
