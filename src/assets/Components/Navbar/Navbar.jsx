const Navbar = () => {
  const navItems = (
    <>
      <li><a>Home</a></li>
      <li><a>Contact Us</a></li>
      <li><a>DASHBOARD</a></li>
      <li><a>Our Menu</a></li>
      <li><a>Our Shop</a></li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-20 bg-black text-white">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase "
            >
              {navItems}
            </ul>
          </div>
          <div className="ml-16 ">
            <h1 className="uppercase font-serif text-2xl font-extrabold">Bistro Boss</h1>
            <h1 className="uppercase font-serif text-base font-bold tracking-widest ">R e s t a u r a n t</h1>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 text-sm font-extrabold uppercase">{navItems}</ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
