
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, Activity } from "lucide-react";

const Tracking = () => {
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
                <h1 className="text-3xl font-bold">GPS Tracking</h1>
                <p className="text-muted-foreground">Real-time vehicle tracking and route monitoring</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Clock className="w-4 h-4 mr-2" />
                  History
                </Button>
                <Button className="bg-fleet-blue-600 hover:bg-fleet-blue-700">
                  <Activity className="w-4 h-4 mr-2" />
                  Live View
                </Button>
              </div>
            </div>

            {/* Main Tracking Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Map View */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    Live Fleet Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg h-[600px] overflow-hidden">
                    {/* Enhanced Map Interface */}
                    <div className="absolute inset-4 bg-white rounded-lg shadow-inner">
                      {/* Map Grid Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-12 grid-rows-8 h-full">
                          {Array.from({ length: 96 }).map((_, i) => (
                            <div key={i} className="border border-gray-300"></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Vehicle Markers with Routes */}
                      <div className="absolute top-1/4 left-1/4">
                        <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse-dot border-3 border-white shadow-lg relative">
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            VH-001 • Active
                            <div className="text-[10px] text-gray-300">Speed: 65 km/h</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-1/2 right-1/3">
                        <div className="w-5 h-5 bg-blue-500 rounded-full animate-pulse-dot border-3 border-white shadow-lg relative">
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            VH-002 • En Route
                            <div className="text-[10px] text-gray-300">Speed: 45 km/h</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-1/3 left-1/2">
                        <div className="w-5 h-5 bg-amber-500 rounded-full border-3 border-white shadow-lg relative">
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            VH-004 • Idle
                            <div className="text-[10px] text-gray-300">Parked 15 min</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Route Lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                          refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                          </marker>
                        </defs>
                        <path
                          d="M 150 120 Q 300 200 450 280"
                          stroke="#22c55e"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray="8,4"
                          markerEnd="url(#arrowhead)"
                          opacity="0.8"
                        />
                        <path
                          d="M 500 300 Q 400 400 300 500"
                          stroke="#3b82f6"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray="8,4"
                          markerEnd="url(#arrowhead)"
                          opacity="0.8"
                        />
                      </svg>
                      
                      {/* Geofence Areas */}
                      <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-dashed border-purple-400 rounded-full bg-purple-100 opacity-60"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-32 h-20 border-2 border-dashed border-orange-400 rounded-lg bg-orange-100 opacity-60"></div>
                    </div>
                    
                    {/* Map Controls */}
                    <div className="absolute bottom-6 right-6 space-y-2">
                      <button className="bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                        <Navigation className="w-5 h-5" />
                      </button>
                      <button className="bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                        <MapPin className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Enhanced Legend */}
                    <div className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg">
                      <div className="text-sm font-semibold mb-3">Live Status</div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span>Active (3)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                          <span>En Route (2)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                          <span>Idle (1)</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-2 border border-purple-400 border-dashed"></div>
                          <span>Geofence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vehicle List */}
              <Card>
                <CardHeader>
                  <CardTitle>Active Vehicles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { id: "VH-001", driver: "John Smith", status: "active", speed: "65 km/h", location: "Highway 101" },
                    { id: "VH-002", driver: "Sarah Johnson", status: "route", speed: "45 km/h", location: "Downtown" },
                    { id: "VH-004", driver: "Emma Wilson", status: "idle", speed: "0 km/h", location: "Warehouse" }
                  ].map((vehicle) => (
                    <div key={vehicle.id} className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{vehicle.id}</div>
                        <Badge className={
                          vehicle.status === 'active' ? 'bg-green-100 text-green-800' :
                          vehicle.status === 'route' ? 'bg-blue-100 text-blue-800' :
                          'bg-amber-100 text-amber-800'
                        }>
                          {vehicle.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>Driver: {vehicle.driver}</div>
                        <div>Speed: {vehicle.speed}</div>
                        <div>Location: {vehicle.location}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Tracking;
