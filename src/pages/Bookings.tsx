
import { useState } from "react";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, Calendar, MapPin, Clock, User } from "lucide-react";

const bookings = [
  {
    id: "BK-001",
    customer: "ABC Corporation",
    pickup: "Downtown Office",
    destination: "Airport Terminal 1",
    date: "2024-01-15",
    time: "08:30 AM",
    driver: "John Smith",
    vehicle: "VH-001",
    status: "confirmed",
    price: "$45.00"
  },
  {
    id: "BK-002",
    customer: "Jane Doe",
    pickup: "Hotel Grand Plaza",
    destination: "Central Station",
    date: "2024-01-15",
    time: "10:15 AM", 
    driver: "Sarah Johnson",
    vehicle: "VH-002",
    status: "in-progress",
    price: "$28.50"
  },
  {
    id: "BK-003",
    customer: "Tech Solutions Ltd",
    pickup: "Business Park",
    destination: "Conference Center",
    date: "2024-01-15",
    time: "02:00 PM",
    driver: "Mike Davis",
    vehicle: "VH-003",
    status: "pending",
    price: "$35.75"
  },
  {
    id: "BK-004",
    customer: "Medical Center",
    pickup: "Hospital Main",
    destination: "Pharmacy District",
    date: "2024-01-16",
    time: "09:45 AM",
    driver: "Emma Wilson",
    vehicle: "VH-004", 
    status: "completed",
    price: "$22.00"
  }
];

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'in-progress':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'completed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredBookings = bookings.filter(booking =>
    booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.pickup.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.driver.toLowerCase().includes(searchTerm.toLowerCase())
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
                <h1 className="text-3xl font-bold">Booking Management</h1>
                <p className="text-muted-foreground">Manage customer bookings and trip assignments</p>
              </div>
              <Button className="bg-fleet-blue-600 hover:bg-fleet-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                New Booking
              </Button>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search bookings by customer, pickup, destination, or driver..."
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

            {/* Bookings List */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredBookings.map((booking) => (
                <Card key={booking.id} className="hover:shadow-lg transition-all duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{booking.id}</CardTitle>
                        <p className="text-sm text-muted-foreground">{booking.customer}</p>
                      </div>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Pickup</p>
                          <p className="text-sm text-muted-foreground">{booking.pickup}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Destination</p>
                          <p className="text-sm text-muted-foreground">{booking.destination}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{booking.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{booking.time}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm pt-2 border-t">
                        <div>
                          <span className="text-muted-foreground">Driver: </span>
                          <span className="font-medium">{booking.driver}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Vehicle: </span>
                          <span className="font-medium">{booking.vehicle}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-lg font-bold text-fleet-blue-600">{booking.price}</span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Track
                          </Button>
                        </div>
                      </div>
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

export default Bookings;
