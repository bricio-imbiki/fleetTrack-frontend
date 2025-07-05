
import { useState } from "react";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, Car, Settings } from "lucide-react";

const vehicles = [
  {
    id: "VH-001",
    name: "Ford Transit",
    model: "2023 Ford Transit 350",
    license: "ABC-1234",
    driver: "John Smith",
    status: "active",
    mileage: "24,567",
    fuel: 85,
    nextMaintenance: "2024-03-15"
  },
  {
    id: "VH-002", 
    name: "Mercedes Sprinter",
    model: "2022 Mercedes Sprinter 2500",
    license: "XYZ-5678",
    driver: "Sarah Johnson",
    status: "idle",
    mileage: "18,432",
    fuel: 67,
    nextMaintenance: "2024-02-28"
  },
  {
    id: "VH-003",
    name: "Toyota Hiace",
    model: "2021 Toyota Hiace Van",
    license: "DEF-9012",
    driver: "Mike Davis",
    status: "maintenance",
    mileage: "45,789",
    fuel: 23,
    nextMaintenance: "In Progress"
  },
  {
    id: "VH-004",
    name: "Iveco Daily",
    model: "2023 Iveco Daily 35S",
    license: "GHI-3456",
    driver: "Emma Wilson",
    status: "active",
    mileage: "12,345",
    fuel: 91,
    nextMaintenance: "2024-04-10"
  }
];

const Vehicles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'idle':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'maintenance':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getFuelColor = (fuel: number) => {
    if (fuel > 50) return 'text-green-600';
    if (fuel > 25) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.driver.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.license.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                <h1 className="text-3xl font-bold">Vehicle Management</h1>
                <p className="text-muted-foreground">Manage your fleet vehicles and track their status</p>
              </div>
              <Button className="bg-fleet-blue-600 hover:bg-fleet-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Vehicle
              </Button>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search vehicles by name, driver, or license plate..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Vehicles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="hover:shadow-lg transition-all duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-fleet-blue-100 rounded-lg flex items-center justify-center">
                          <Car className="w-5 h-5 text-fleet-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{vehicle.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{vehicle.id}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(vehicle.status)}>
                        {vehicle.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Model:</span>
                        <span className="font-medium">{vehicle.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">License:</span>
                        <span className="font-medium">{vehicle.license}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Driver:</span>
                        <span className="font-medium">{vehicle.driver}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Mileage:</span>
                        <span className="font-medium">{vehicle.mileage} km</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fuel:</span>
                        <span className={`font-medium ${getFuelColor(vehicle.fuel)}`}>
                          {vehicle.fuel}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Next Service:</span>
                        <span className="font-medium">{vehicle.nextMaintenance}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Vehicles;
