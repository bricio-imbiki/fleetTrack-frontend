
import { useState } from "react";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FuelStatsCards } from "@/components/Fuel/FuelStatsCards";
import { FuelSearchFilter } from "@/components/Fuel/FuelSearchFilter";
import { FuelRecordsList } from "@/components/Fuel/FuelRecordsList";

const fuelRecords = [
  {
    id: "FR-001",
    vehicle: "VH-001",
    vehicleName: "Ford Transit",
    driver: "John Smith",
    date: "2024-01-15",
    time: "08:30 AM",
    station: "Shell Station A",
    liters: 45.5,
    pricePerLiter: 1.45,
    totalCost: 65.98,
    mileage: 24567,
    fuelType: "Diesel"
  },
  {
    id: "FR-002",
    vehicle: "VH-002", 
    vehicleName: "Mercedes Sprinter",
    driver: "Sarah Johnson",
    date: "2024-01-14",
    time: "02:15 PM",
    station: "BP Station B",
    liters: 52.3,
    pricePerLiter: 1.42,
    totalCost: 74.27,
    mileage: 18432,
    fuelType: "Diesel"
  },
  {
    id: "FR-003",
    vehicle: "VH-004",
    vehicleName: "Iveco Daily",
    driver: "Emma Wilson",
    date: "2024-01-14",
    time: "10:45 AM", 
    station: "Esso Station C",
    liters: 38.7,
    pricePerLiter: 1.48,
    totalCost: 57.28,
    mileage: 12345,
    fuelType: "Diesel"
  },
  {
    id: "FR-004",
    vehicle: "VH-001",
    vehicleName: "Ford Transit", 
    driver: "John Smith",
    date: "2024-01-12",
    time: "04:20 PM",
    station: "Shell Station A",
    liters: 41.2,
    pricePerLiter: 1.43,
    totalCost: 58.92,
    mileage: 24321,
    fuelType: "Diesel"
  }
];

const Fuel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecords = fuelRecords.filter(record =>
    record.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.vehicleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.station.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalFuelCost = fuelRecords.reduce((sum, record) => sum + record.totalCost, 0);
  const totalLiters = fuelRecords.reduce((sum, record) => sum + record.liters, 0);
  const averagePrice = totalFuelCost / totalLiters;

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Fuel Management</h1>
                <p className="text-muted-foreground">Track fuel consumption and costs across your fleet</p>
              </div>
              <Button className="bg-fleet-blue-600 hover:bg-fleet-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Fuel Record
              </Button>
            </div>

            {/* Fuel Stats */}
            <FuelStatsCards
              totalLiters={totalLiters}
              totalFuelCost={totalFuelCost}
              averagePrice={averagePrice}
              totalRecords={fuelRecords.length}
            />

            {/* Search and Filters */}
            <FuelSearchFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {/* Fuel Records */}
            <FuelRecordsList records={filteredRecords} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Fuel;
