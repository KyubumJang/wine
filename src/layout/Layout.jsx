import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>Wine 추천</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
