import Link from "next/link";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/menu">Menu</Link>
      </li>
      <li>
        <Link href="/order">Order Food</Link>
      </li>
    </>
  );

  return (
    <header>
      <div className="navbar bg-base-100">
        <nav className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Yummy Yard
          </Link>
        </nav>
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </nav>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
