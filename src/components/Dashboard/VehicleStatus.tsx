
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const vehicles = [
  {
    id: "VH-001",
    name: "Ford Transit",
    driver: "John Smith",
    status: "active",
    location: "Downtown Area",
    fuel: 85
  },
  {
    id: "VH-002", 
    name: "Mercedes Sprinter",
    driver: "Sarah Johnson",
    status: "idle",
    location: "Warehouse District",
    fuel: 67
  },
  {
    id: "VH-003",
    name: "Toyota Hiace",
    driver: "Mike Davis",
    status: "maintenance",
    location: "Service Center",
    fuel: 23
  },
  {
    id: "VH-004",
    name: "Iveco Daily",
    driver: "Emma Wilson",
    status: "active",
    location: "Airport Route",
    fuel: 91
  }
];

export function VehicleStatus() {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Vehicle Status
          <Badge variant="secondary">{vehicles.length} Active</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <div className="font-semibold">{vehicle.name}</div>
                <Badge className={getStatusColor(vehicle.status)}>
                  {vehicle.status}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                <div>Driver: {vehicle.driver}</div>
                <div>Location: {vehicle.location}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Fuel</div>
              <div className={`font-semibold ${getFuelColor(vehicle.fuel)}`}>
                {vehicle.fuel}%
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
