import { RiMenu4Fill } from "react-icons/ri";
function Navbar() {
    return (
        <nav className="navbar sticky top-0 z-50 bg-base-100">
        <div className="flex-1">
        <label
            htmlFor="my-drawer-2"
            className="btn drawer-button lg:hidden"
          >
            {/* Menu btn */}
           <RiMenu4Fill size={23} />
          </label>
          {/* Logo */}
          <a className="btn btn-ghost text-xl">Logo</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;