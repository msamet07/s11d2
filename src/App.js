import './App.css';
import LoginForm from './components/LoginForm';
import {useDispatch, useSelector} from "react-redux";
import { Route, Routes,  useHistory,  } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.loginForm);
  const logStatu = useSelector((store) => store.log);
  return (
    <Routes>
      <Route path= "/LoginForm" element={<LoginForm></LoginForm>}  />
      <Route path= "/" element={<LoginForm></LoginForm>}  />
      </Routes>
  );
}

export default App;
