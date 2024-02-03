import AdminLayout from "@/Layout/AdminLayout";
import Card from "@/components/Sections/Card";

function ads() {
    return (
        <AdminLayout title={'Manage Ads'}>
            <Card className={'w-full md:flex gap-4 p-4'}>
                <h2>Ads Manager</h2>
                <section className="md:flex gap-4 w-full">
                <div className="w-full">
                    <h2>Header Ads</h2>
                    <textarea className="w-full textarea textarea-bordered max-h-44 min-h-12 h-32"></textarea>
                </div>
                <div className="w-full">
                    <h2>Story Read Ads</h2>
                    <textarea className="w-full textarea textarea-bordered max-h-44 min-h-12 h-32"></textarea>
                </div>
                </section>
                <section className="md:flex gap-4 w-full">
                <div className="w-full">
                    <h2>Bottom Sticky Ads</h2>
                    <textarea className="w-full textarea textarea-bordered max-h-44 min-h-12 h-32"></textarea>
                </div>
                <div className="w-full">
                    <h2>Story Card Top Ads</h2>
                    <textarea className="w-full textarea textarea-bordered max-h-44 min-h-12 h-32"></textarea>
                </div>
                </section>
                <section className="md:flex gap-4 w-full">
                <div className="w-full">
                    <h2>Search Results Ads</h2>
                    <textarea className="w-full textarea textarea-bordered max-h-44 min-h-12 h-32"></textarea>
                </div>
                <div className="w-full">
                    <h2>Story Read Top Ads</h2>
                    <textarea className="w-full textarea textarea-bordered max-h-44 min-h-12 h-32"></textarea>
                </div>
                </section>
                <section className="md:flex gap-4 w-full">
                <div className="w-full">
                    <h2>User Profile Ads</h2>
                    <textarea className="w-full textarea textarea-bordered max-h-44 min-h-12 h-32"></textarea>
                </div>
                <div className="w-full">
                    <h2>Story Create Instruction Top Ads</h2>
                    <textarea className="w-full textarea textarea-bordered max-h-44 min-h-12 h-32"></textarea>
                </div>
                </section>
            </Card>
        </AdminLayout>
    );
}

export default ads;