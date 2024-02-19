import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cbt from '../Pages/CBT/cbt';
import Revaluation from '../Pages/Revaluation/revaluation';
import Supplementary from '../Pages/Supplementary/Supplementary';
import NoPage from '../Pages/NoPage/noPage';
import Layout from '../Components/Layout';
import dataBase from './DataBase.json';

export default function App() {
  const [login, setLogin] = useState(false);

  const handleSubmit = () => {
    var {Uname, Pword} = document.forms[0];
    const userDate = dataBase.find((user) => user.username == Uname.value)
    if(userDate) {
      if(userDate.password === Pword.value) {
        setLogin(true);
      }
    }
  }
  const renderForm = (
    <div className="App">
    <h1 className="mainHeading">Welcome User</h1>
    <img src="/GeethanjaliLogo.png" alt="Geethanjali College Logo" className="image"/>
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input type="text" name="Uname" required/>
      </label>
      <br />
      <label>
        Password: <input type="password" name="Pword" required/>
      </label>
      <br />
      <input type="submit" />
    </form>
  </div>
  )
  if(!login) {
    return (
      renderForm
    )
  }
  else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Supplementary/>}></Route>
            <Route path="/cbt" element={<Cbt/>}></Route>
            <Route path="/revaluation" element={<Revaluation/>}></Route>
            <Route path="*" element={<NoPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}