import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Supplementary</Link>
        </li>
        <li>
          <Link to="/cbt">CBT</Link>
        </li>
        <li>
          <Link to="/revaluation">Revaluation</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  );
};

export default Layout;