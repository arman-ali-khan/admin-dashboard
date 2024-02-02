import AdminLayout from "@/Layout/AdminLayout";
import Card from "@/components/Sections/Card";

function settings() {
    return (
        <AdminLayout title={'Manage Settings'}>
            <Card className={'w-full p-4'}>
            <form className="md:flex flex-col space-y-5">
               <div className="md:flex items-center w-full gap-2 justify-between">
                {/* Title */}
               <div className="flex flex-col w-full">
               <label className="mt-4" htmlFor="title">Title</label>
                <input type="text" className="input input-bordered input-sm rounded" placeholder="Title" id="title" defaultValue={'Admin Template'} />
               </div>
               {/* Logo */}
               <div className="md:flex flex-col w-full">
               <div className="flex items-center gap-4">
               <label className="mt-4" htmlFor="logo">Logo (200x60)</label>
                <img className="h-6" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
               </div>
                <input type="file" className="file-input w-full file-input-bordered file-input-sm rounded" id="logo" />
               </div>
               </div>
               {/* Hero */}
               <div className="md:flex w-full gap-2 justify-between">
                {/* hero Title */}
               <div className="flex flex-col w-full">
               <label className="mt-4" htmlFor="hero-title">Hero Title</label>
                <input type="text" className="input input-bordered input-sm rounded" placeholder="Title" id="title" defaultValue={'Admin Template'} />
                 {/* hero small text */}
               <div className="flex flex-col mt-4 w-full">
               <label className="mt-4" htmlFor="slug">Slug</label>
               <textarea defaultValue={`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.`} className="textarea textarea-bordered"></textarea>
               </div>
               </div>
               
               {/* Image */}
               <div className="md:flex flex-col w-full">
               <div className="flex items-center gap-4">
               <label className="mt-4" htmlFor="logo">Image (1200x700)</label>
                <img className="h-6" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
               </div>
                <input type="file" className="file-input w-full file-input-bordered file-input-sm rounded" id="logo" />
                <div className="flex flex-col mt-4 w-full">
               <label className="mt-4" htmlFor="slug">Button Link</label>
               <input type="link" className="input input-bordered input-sm rounded" placeholder="Link" id="title" defaultValue={'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
               </div>
               </div>
               </div>
              <button className="btn btn-sm w-full btn-success text-white rounded">Save</button>
            </form>
            </Card>
        </AdminLayout>
    );
}

export default settings;