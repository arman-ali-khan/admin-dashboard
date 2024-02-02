import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import { Jost } from "next/font/google";
import Head from "next/head";
const font = Jost({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
function AdminLayout({ children, title }) {
  return (
    <section className={`w-full sticky top-0 left-0 ${font.className}`}>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Navbar */}
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:ml-64 p-4">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu fixed top-0 mt-16 p-4 w-64 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a href={"/"}>Dashboard</a>
            </li>
            <li>
              <a href={"/users"}>Users</a>
            </li>
            <li>
              <a href={"/stories"}>Stories</a>
            </li>
            <li>
              <a href={"/blogs"}>Blogs</a>
            </li>
            <li>
              <a href={"/reports"}>Reports</a>
            </li>
            <li>
              <a href={"/reviews"}>Reviews</a>
            </li>
            <li>
              <a href={"/notices"}>Notices</a>
            </li>
            <li>
              <a href={"/ads"}>Ads</a>
            </li>
            <li>
              <a href={"/settings"}>Settings</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default AdminLayout;
