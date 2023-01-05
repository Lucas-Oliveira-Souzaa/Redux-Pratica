import { useDispatch } from 'react-redux';
import { setName, setAge } from './redux/reducers/userReducer';
import { useAppSelector } from './redux/hooks/useAppSelector';
import React from 'react';
import { setThemeStatus } from './redux/reducers/themeReducer';

function App() {

  const dispatch = useDispatch();
  const user = useAppSelector(state => state.user);

  const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme));

  const theme = useAppSelector(state => state.theme);

  const handleSwitchTheme = () => {
    switchTheme(theme.status === 'Light' ? 'Dark' : 'Light')
  }

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  }

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.<br />
      Tema: {theme.status}
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <hr />
      <button onClick={handleSwitchTheme}>Alterar o tema</button>
    </div>
  );
}

export default App;
