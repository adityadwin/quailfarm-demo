// app/page.tsx
import Image from "next/image";
import Card from "./components/Card";
import OrdersChart from "./components/charts/OrdersChart";
import FinancesChart from "./components/charts/FinancesChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6">
        <Card title="Products" className="flex flex-col lg:col-span-3">
          <div className="grid grid-cols-2 gap-4 flex-grow">
            <div className="text-center">
              <div className="relative w-full aspect-square mb-2 overflow-hidden rounded">
                <Image
                  src="/assets/images/1.png"
                  alt="Product 1"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">Quail Eggs</span>
            </div>
            <div className="text-center">
              <div className="relative w-full aspect-square mb-2 overflow-hidden rounded">
                <Image
                  src="/assets/images/2.png"
                  alt="Product 2"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm text-gray-600">Quail Meat</span>
            </div>
          </div>
        </Card>

        <Card title="Orders" className="lg:col-span-3">
          <div className="grid grid-cols-10 gap-4 items-center">
            <div className="col-span-3">
              <p className="text-3xl font-bold text-gray-800">1,300</p>
              <p className="text-xs text-gray-500">orders this week</p>
            </div>
            <div className="relative w-full col-span-7">
              <Image
                src="/assets/images/3.png"
                alt="Orders illustration"
                width={150}
                height={100}
                style={{ width: "100%", height: "auto" }}
                className="object-contain rounded"
              />
            </div>
          </div>
        </Card>

        <Card
          title="Shipments"
          className="lg:col-span-2 lg:align-self-start h-28 flex flex-col justify-center"
        >
          <div className="flex justify-around items-center px-2">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">10</p>
              <p className="text-xs text-gray-500">In Transit</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">15</p>
              <p className="text-xs text-gray-500">Delivered</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <OrdersChart />
          <div className="mt-4">
            <p className="text-xl font-semibold text-gray-800">1,300</p>
            <p className="text-xs text-gray-500">orders this week</p>
          </div>
        </Card>

        <div className="md:col-span-1 lg:col-span-1 flex flex-col justify-between">
          <Card title="Finances" className="mb-6 md:mb-0">
            {" "}
            <FinancesChart />
          </Card>

          <Card title="Employees" className="">
            {" "}
            <div className="flex items-center space-x-5 p-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/assets/images/4.png"
                  alt="Employee Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-base text-gray-800">Aubrey</p>
                <p className="text-sm text-gray-500">Manager</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
