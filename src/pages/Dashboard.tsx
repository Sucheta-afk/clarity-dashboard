import { Navigation } from "@/components/Navigation";
import { KPICard } from "@/components/KPICard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <main className="md:ml-64 pb-20 md:pb-6">
        <div className="max-w-7xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's an overview of your business.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <KPICard title="Total Products" value="247" />
            <KPICard title="Low Stock Items" value="12" />
            <KPICard title="Pending Receipts" value="8" />
            <KPICard title="Pending Deliveries" value="5" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
