import AdminLayout from "@/Layout/AdminLayout";
import Card from "@/components/Sections/Card";
import Link from "next/link";

function user() {
  return (
    <AdminLayout title={"Manager Users"}>
      {/* Users */}
      <Card className={`w-full p-4`}>
        <h2 className="font-bold">Manage Users</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Author</th>
                <th>Story</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {[...Array(12).keys()].map((user, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td className="truncate">
                      <Link href={`/`}>User Name</Link>
                    </td>
                    <td className="truncate max-w-44">
                      আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ ।
                    </td>
                    <td className="w-44">
                      <button className="btn btn-sm bg-teal-100 text-teal-600 rounded">
                        Edit
                      </button>
                      <button className="btn btn-sm bg-red-100 text-red-600 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex items-center justify-center w-full">
            <div className="join">
              <button className="join-item btn">«</button>
              <button className="join-item btn">Page 22</button>
              <button className="join-item btn">»</button>
            </div>
          </div>
        </div>
      </Card>
    </AdminLayout>
  );
}

export default user;
