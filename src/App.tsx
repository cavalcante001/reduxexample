import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/userReducer";
import { setThemeStatus } from "./redux/reducers/themeReducer";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import React from "react";

function App() {
  // const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);
  const theme = useAppSelector((state) => state.theme);

  const changeName = (newName: string) => {
    dispatch(setName(newName));
  };

  const hamdleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  };

  const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme));

  const handleSwitchTheme = () => {
    switchTheme(theme.status === "light" ? "dark" : "light");
  };

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos
      <br />
      Tema: {theme.status}
      <hr />
      <input type="text" value={user.name} onChange={hamdleNameInput} />
      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
