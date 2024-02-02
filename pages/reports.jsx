import AdminLayout from "@/Layout/AdminLayout";
import Card from "@/components/Sections/Card";
import Link from "next/link";
import { useRouter } from "next/navigation";

function blogs() {
    const router = useRouter()
    // handle redirect 
    const handleRedirect = () =>{
       return router.push('/edit/report/12')
    }
  return (
    <AdminLayout title={"Manager Reports"}>
      {/* Users */}
      <Card className={`w-full p-4`}>
        <h2 className="font-bold">Manage Reports</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Story ID</th>
                <th>Reporter</th>
                <th>Story</th>
                <th>Reasons</th>
                <th>Old Reports</th>
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
                      <Link href={`/`}>Reporter</Link>
                    </td>
                    <td title="আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।" className="truncate max-w-44">
                     আমার সোনার বাংলা আমি তোমায় ভালোবাসি ।
                    </td>
                    <td className="truncate max-w-44">
                      Adult
                    </td>
                    <td className="truncate max-w-44">
                      3
                    </td>
                    <td className="w-44">
                     
                      <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-sm bg-orange-100 text-orange-600 rounded">Action</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><button className="bg-yellow-100 text-yellow-600 my-1">Warn Author</button></li>
    <li><button className="bg-orange-100 text-orange-600 my-1">Hide And Warn</button></li>
    <li><button className="bg-rose-100 text-rose-600 my-1">Archive And Warn</button></li>
    <li><button className="bg-red-100 text-red-600 my-1">Delete And Delete Report</button></li>
  </ul>
</div>
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
