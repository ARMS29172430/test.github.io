/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <img src="http://iatbangalore.com/assets/images/logo.png" alt="logo" />
      <div className="navbar bg-green-1">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost sm:hidden">
              <span className="material-icons-round text-white">menu</span>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-1 rounded-box w-fit"
            >
              <li>
                <a className="btn btn-ghost text-white">HOME</a>
              </li>
              <li tabIndex={0}>
                <a className="btn btn-ghost text-white">ABOUT US</a>
                <ul className="p-2 bg-base-100 z-10 border border-slate-300 ml-2">
                  <li>
                    <a className="hover:bg-sky-500/75">History</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-500/75">Objectives</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-500/75">History of H.R.Arakeri</a>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a className="btn btn-ghost text-white">MANAGEMENT</a>
                <ul className="p-2 bg-base-100 z-10 border border-slate-300 ml-2">
                  <li>
                    <a className="hover:bg-sky-500/75">Managing Committee</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-500/75">Members</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-500/75">Co-opted Members</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-500/75">Ex-Officio Members</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="btn btn-ghost text-white">CONTACT US</a>
              </li>
            </ul>
          </div>
          <div className="hidden sm:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="btn btn-ghost text-white">HOME</a>
              </li>
              <li tabIndex={0}>
                <a className="btn btn-ghost text-white">ABOUT US</a>
                <ul className="p-2 bg-base-100 z-10 mt-2 border border-slate-300">
                  <li>
                    <a className="hover:bg-sky-500/75">History</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-500/75">Objectives</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-500/75">History of H.R.Arakeri</a>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a className="btn btn-ghost text-white">MANAGEMENT</a>
                <ul className="p-2 bg-base-100 z-10 mt-2 border border-slate-300">
                  <li>
                    <a className="hover:bg-sky-500/75">Managing Committee</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-500/75">Members</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-500/75">Co-opted Members</a>
                  </li>
                  <li>
                    <a className="hover:bg-sky-500/75">Ex-Officio Members</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="btn btn-ghost text-white">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
