import Link from "next/link";
import Card from "./Card";

function Users() {
    return (
        <section className="md:flex w-full space-y-4 md:space-y-0 mt-12 justify-between relative gap-3">
        {/* Users */}
        <Card className={`w-full p-4`}>
          <h2 className="font-bold">Last 5 Users</h2>
          <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Story</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <td className="truncate"><Link href={`/`}>User Name</Link></td>
          <td className="truncate max-w-44">আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ ।</td>
        </tr>
        {/* row 2 */}
        <tr>
          <th>2</th>
          <td className="truncate"><Link href={`/`}>User Name</Link></td>
          <td className="truncate max-w-44">Desktop Support Technician</td>
        </tr>
        {/* row 3 */}
        <tr>
          <th>3</th>
          <td className="truncate"><Link href={`/`}>User Name</Link></td>
          <td className="truncate max-w-44">Tax Accountant</td>
        </tr>
      </tbody>
    </table>
  </div>
        </Card>
        {/* Users */}
        <Card className={`w-full p-4`}>
  <h2 className="font-bold">Popular 5 Users</h2>
  <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Story</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <td className="truncate"><Link href={`/`}>User Name</Link></td>
          <td className="truncate max-w-44">আমার সোনার বাংলা আমি তোমায় ভালোবাসি চিরদিন তোমার আকাশ ।</td>
        </tr>
        {/* row 2 */}
        <tr>
          <th>2</th>
          <td className="truncate"><Link href={`/`}>User Name</Link></td>
          <td className="truncate max-w-44">Desktop Support Technician</td>
        </tr>
        {/* row 3 */}
        <tr>
          <th>3</th>
          <td className="truncate"><Link href={`/`}>User Name</Link></td>
          <td className="truncate max-w-44">Tax Accountant</td>
        </tr>
      </tbody>
    </table>
  </div>
        </Card>
       </section>
    );
}

export default Users;