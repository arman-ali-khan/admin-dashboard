import { RiCloseLine } from "react-icons/ri";
import Card from "./Card";
// import LineChartComponent from "./Dashboard/Chart";
import dynamic from "next/dynamic";
const LineChartComponent = dynamic(() => import('./Dashboard/Chart'), { ssr: false })


function ChartRevenue() {
    return (
        <Card className={'rounded-lg p-4 h-full max-w-min min-w-full w-full'}>
           <section>
            <div className="flex justify-between">
            <h2>Revenue History</h2>
            <button><RiCloseLine /></button>
            </div>
           </section>
           {/*  */}
           <section className="flex items-center gap-1">
          <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-blue-600">$9,279</h2>
        <p>Revenue</p>
          </div>
          <div className="divider lg:divider-horizontal"></div> 
          <div>
        <h2 className="text-xl font-semibold text-green-600">$5,629</h2>
        <p>Investment</p>
          </div>
           </section>
           {/* Chart */}
           <section className="w-full flex relative h-full text-black">
           <LineChartComponent />
           </section>
        </Card>
    );
}

export default ChartRevenue;