import AdminLayout from "@/Layout/AdminLayout";
import Card from "@/components/Sections/Card";
import ChartRevenue from "@/components/Sections/ChartRevenue";
import PieChart from "@/components/Sections/Dashboard/PieChart";
import Stories from "@/components/Sections/Stories";
import Users from "@/components/Sections/Users";
import { FaEye, FaRegUser, FaStar } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";


export default function Home() {
  return (
    <AdminLayout title={"Admin Dashboard"}>
      {/* admin cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {/* Stories Card */}
        <Card className={"w-full rounded-lg p-2"}>
          <div className="flex items-center w-full justify-between">
            <div className="space-y-1">
              <h2 className="text-sm m-0 p-0">Total Stories</h2>
              <p className="text-2xl m-0 p-0 font-bold">12K</p>
              <p className="flex items-center gap-1 text-xs xl:text-sm">
                <span className="bg-green-100 text-green-600 rounded-full flex items-center gap-1 px-2 truncate">
                  <IoIosTrendingUp />
                  +23%
                </span>
                <span className="truncate">from last week</span>
              </p>
            </div>
            <div className="rounded-full p-3 absolute right-3 bg-green-100 text-green-500">
              <RiMenu2Line size={22} />
            </div>
          </div>
        </Card>
        {/* Users Card */}
        <Card className={"w-full rounded-lg p-2"}>
          <div className="flex items-center w-full justify-between">
            <div className="space-y-1">
              <h2 className="text-sm m-0 p-0">Total Users</h2>
              <p className="text-2xl m-0 p-0 font-bold">12K</p>
              <p className="flex items-center gap-1 text-xs xl:text-sm">
                <span className="bg-orange-100 text-orange-600 rounded-full flex items-center gap-1 px-2 truncate">
                  <IoIosTrendingUp />
                  +23%
                </span>
                <span className="truncate">from last week</span>
              </p>
            </div>
            <div className="rounded-full p-3 absolute right-3 bg-orange-100 text-orange-500">
              <FaRegUser size={22} />
            </div>
          </div>
        </Card>
        {/* Reviews Card */}
        <Card className={"w-full rounded-lg p-2"}>
          <div className="flex items-center w-full justify-between">
            <div className="space-y-1">
              <h2 className="text-sm m-0 p-0">Total Reviews</h2>
              <p className="text-2xl m-0 p-0 font-bold">12K</p>
              <p className="flex items-center gap-1 text-xs xl:text-sm">
                <span className="bg-sky-100 text-sky-600 rounded-full flex items-center gap-1 px-2 truncate">
                  <IoIosTrendingUp />
                  +23%
                </span>
                <span className="truncate">from last week</span>
              </p>
            </div>
            <div className="rounded-full p-3 absolute right-3 bg-sky-100 text-sky-500">
              <FaStar size={22} />
            </div>
          </div>
        </Card>
        {/* Total Views Card */}
        <Card className={"w-full rounded-lg p-2"}>
          <div className="flex items-center w-full justify-between">
            <div className="space-y-1">
              <h2 className="text-sm m-0 p-0">Total Views</h2>
              <p className="text-2xl m-0 p-0 font-bold">12K</p>
              <p className="flex items-center gap-1 text-xs xl:text-sm">
                <span className="bg-indigo-100 text-indigo-600 rounded-full flex items-center gap-1 px-2 truncate">
                  <IoIosTrendingUp />
                  +23%
                </span>
                <span className="truncate">from last week</span>
              </p>
            </div>
            <div className="rounded-full p-3 absolute right-3 bg-indigo-100 text-indigo-500">
              <FaEye size={22} />
            </div>
          </div>
        </Card>
      </section>
      {/* Charts */}
     <section className="md:flex w-full space-y-4 md:space-y-0 mt-12 justify-between relative gap-3">
       {/* Revenue History */}
       <div className="w-full h-[450px]">
        <ChartRevenue />
      </div>
      {/* Total Overview */}
      <div className="flex h-full max-w-full min-w-64 w-full md:w-96">
        <PieChart />
      </div>
     </section>
     {/* Stories */}
    <Stories />
    {/* Users */}
    <Users />
    {/* Views */}
    {/* <Views /> */}
    </AdminLayout>
  );
}
