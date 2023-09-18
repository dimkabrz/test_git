import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/appRouter/AppRouter";
import NavBar from "./components/UI/navBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useLayoutEffect} from "react";
import {setAuth, setTheme} from "./components/Toolkit/ToolkitSlice";
import './styles/main.css'
import {ToggleTheme} from "./ToggleTheme";

function App() {
  const loginSession = localStorage.getItem("token");
  const dispatch = useDispatch();
  const storageTheme = localStorage.getItem('theme')
  const toolkitTheme = useSelector(state=> state.authorithation.theme)


  useLayoutEffect(() => {
    ToggleTheme(storageTheme)
    dispatch(setTheme(storageTheme))
    if (loginSession) {
      dispatch(setAuth(true));
    }
  }, []);



  return (

      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>

  );
}

export default App;
