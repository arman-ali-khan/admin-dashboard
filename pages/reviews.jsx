import AdminLayout from "@/Layout/AdminLayout";
import Card from "@/components/Sections/Card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";

function blogs() {
    const router = useRouter()
    // handle redirect 
    const handleRedirect = () =>{
       return router.push('/edit/review/12')
    }
  return (
    <AdminLayout title={"Manager Reviews"}>
      {/* Users */}
      <Card className={`w-full p-4`}>
        <h2 className="font-bold">Manage Reviews</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Story</th>
                <th>Stars</th>
                <th>Comment</th>
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
                      <Link href={`/`}>User</Link>
                    </td>
                    <td title="আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।" className="truncate max-w-44">
                     আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।
                    </td>
                    <td className="truncate max-w-44 flex items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </td>
                    <td className="truncate max-w-44">
                      চিরদিন তোমার আকাশ তোমার বাতাস।
                    </td>
                    <td className="w-44">
                      <button onClick={handleRedirect} className="btn btn-sm bg-teal-100 text-teal-600 rounded">
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

export default blogs;
