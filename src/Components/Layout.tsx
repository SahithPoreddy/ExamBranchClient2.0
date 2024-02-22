import { Outlet, NavLink } from "react-router-dom";
import './Layout.css';

// const adminTabs = [
//   {
//     value: 0,
//     name: "CBT",
//     to: "/Cbt",
//   },
//   {
//     value: 1,
//     name: "Re-Evaluation",
//     to: "/Reval",
//   },
//   {
//     value: 2,
//     name: "Supplementary",
//     to: "/Supply",
//   },
//   {
//     value: 3,
//     name: "Download",
//     to: "/Download",
//   },
//   {
//     value: 4,
//     name: "Upload",
//     to: "/Update",
//   },
// ];

function Layout() {
  return (
    <>
    <nav>
      <ul style={{
        display: "flex",
        justifyContent: "left",
      }}>
        <li className="leftPadding">
          <NavLink to="/">Supplementary</NavLink>
        </li>
        <li className="leftPadding">
          <NavLink to="/cbt">CBT</NavLink>
        </li>
        <li className="leftPadding">
          <NavLink to="/revaluation">Revaluation</NavLink>
        </li>
        <li className="leftPadding">
          <NavLink to="/download">Download</NavLink>
        </li>
        <li className="leftPadding">
          <NavLink to="/upload">Upload</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  );
};

export default Layout;