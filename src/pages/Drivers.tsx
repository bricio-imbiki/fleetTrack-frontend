
import { useState } from "react";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, User, Phone, Mail, MapPin } from "lucide-react";

const drivers = [
  {
    id: "DR-001",
    name: "John Smith",
    phone: "+1 234-567-8901",
    email: "john.smith@fleet.com",
    license: "DL123456789",
    status: "active",
    vehicle: "VH-001",
    experience: "5 years",
    rating: 4.8,
    totalTrips: 245
  },
  {
    id: "DR-002", 
    name: "Sarah Johnson",
    phone: "+1 234-567-8902",
    email: "sarah.johnson@fleet.com",
    license: "DL987654321",
    status: "active",
    vehicle: "VH-002",
    experience: "3 years",
    rating: 4.9,
    totalTrips: 189
  },
  {
    id: "DR-003",
    name: "Mike Davis",
    phone: "+1 234-567-8903",
    email: "mike.davis@fleet.com",
    license: "DL456789123",
    status: "off-duty",
    vehicle: "VH-003",
    experience: "7 years",
    rating: 4.7,
    totalTrips: 312
  },
  {
    id: "DR-004",
    name: "Emma Wilson",
    phone: "+1 234-567-8904",  
    email: "emma.wilson@fleet.com",
    license: "DL789123456",
    status: "active",
    vehicle: "VH-004",
    experience: "2 years",
    rating: 4.6,
    totalTrips: 156
  }
];

const Drivers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'off-duty':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'unavailable':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h1 className="text-3xl font-bold">Driver Management</h1>
                <p className="text-muted-foreground">Manage your fleet drivers and track their performance</p>
              </div>
              <Button className="bg-fleet-blue-600 hover:bg-fleet-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Driver
              </Button>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search drivers by name, email, or assigned vehicle..."
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

            {/* Drivers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrivers.map((driver) => (
                <Card key={driver.id} className="hover:shadow-lg transition-all duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-fleet-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-fleet-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{driver.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{driver.id}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(driver.status)}>
                        {driver.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{driver.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="truncate">{driver.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">License:</span>
                        <span className="font-medium">{driver.license}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Vehicle:</span>
                        <span className="font-medium">{driver.vehicle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience:</span>
                        <span className="font-medium">{driver.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rating:</span>
                        <span className="font-medium text-yellow-600">★ {driver.rating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Trips:</span>
                        <span className="font-medium">{driver.totalTrips}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        <MapPin className="w-4 h-4" />
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

export default Drivers;
