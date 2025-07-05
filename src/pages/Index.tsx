
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { StatsCards } from "@/components/Dashboard/StatsCards";
import { LiveMap } from "@/components/Dashboard/LiveMap";
import { VehicleStatus } from "@/components/Dashboard/VehicleStatus";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Stats Cards */}
            <StatsCards />
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Live Map - Takes 2 columns on large screens */}
              <LiveMap />
              
              {/* Vehicle Status - Takes 1 column */}
              <VehicleStatus />
            </div>
            
            {/* Recent Activity */}
            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
