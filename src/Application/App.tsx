import { useState } from "react";
import Login from '../Login/Login';
import Cbt from '../Pages/CBT/cbt';
import Revaluation from '../Pages/Revaluation/revaluation';
import Supplementary from '../Pages/Supplementary/Supplementary';
import NoPage from '../Pages/NoPage/noPage';
import Layout from '../Components/Layout';
import Download from "../Pages/Download/Download";
import Upload from "../Pages/Upload/upload";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Supplementary/>}></Route>
      <Route path="/cbt" element={<Cbt/>}></Route>
      <Route path="/revaluation" element={<Revaluation/>}></Route>
      <Route path="/download" element={<Download/>}></Route>
      <Route path="/upload" element={<Upload/>}></Route>
      <Route path="*" element={<NoPage/>}></Route>
    </Route>
  )
)

const App: React.FC = () => {
  const [login, setLogin] = useState(false);
  const handleSubmit = () => {
    setLogin(true);
  }

  if(!login) {
    return (
      <Login
      handleSubmit = {handleSubmit}/>
    )
  }
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App;