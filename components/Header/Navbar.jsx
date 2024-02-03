import Link from "next/link";
import { AiOutlineMessage } from "react-icons/ai";
import { RiMenu4Fill } from "react-icons/ri";
import { VscBell } from "react-icons/vsc";
function Navbar() {
  return (
    <nav className="navbar sticky top-0 z-50 bg-base-100">
      <div className="flex-1">
        <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
          {/* Menu btn */}
          <RiMenu4Fill size={23} />
        </label>
        {/* Logo */}
        <Link href={`/`} className="btn btn-ghost text-xl">Logo</Link>
      </div>
      <div className="flex-none gap-2">
        {/* Search */}
        <div className="form-control">
          <input
            type="search"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {/* Notifications */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="">
            {/* <VscBellDot  /> */}
            <VscBell size={32} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content border border-zinc-600 z-[1] menu p-2 shadow bg-base-100 rounded-md min-w-44 max-w-80 w-80"
          >
            {[...Array(6).keys()]?.map((chat, i) => {
              return (
                <li key={i}>
                  <Link href={`#`}>
                    <div className="flex gap-3 truncate">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        alt=""
                      />
                      <div className="w-full flex flex-col">
                        <h3 className="flex items-center gap-1">
                          <b>User Name</b>
                          <p>Report on hello world</p>
                        </h3>
                        <p>Hello world amar sonar bangla ami tomay love kori</p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
            <Link
              className="btn btn-success flex items-center rounded text-white"
              href={`#`}
            >
              See All Reports
            </Link>
          </ul>
        </div>
        {/* Messages */}
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button">
            {/* <VscBellDot  /> */}
            <AiOutlineMessage size={32} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content border border-zinc-600 z-[1] menu p-2 shadow bg-base-100 rounded-md min-w-44 max-w-80 w-80"
          >
            {[...Array(6).keys()]?.map((chat, i) => {
              return (
                <li key={i}>
                  <Link href={`#`}>
                    <div className="flex gap-3 truncate">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        alt=""
                      />
                      <div className="w-full flex flex-col">
                        <b>User Name</b>
                        <p>Hello world amar sonar bangla ami tomay love kori</p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
            <Link
              className="btn btn-success flex items-center rounded text-white"
              href={`#`}
            >
              See All Messages
            </Link>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/admin" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="/admin/settings">Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
