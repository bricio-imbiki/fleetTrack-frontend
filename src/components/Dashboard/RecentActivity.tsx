
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Fuel, AlertTriangle } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "location",
    icon: MapPin,
    title: "VH-001 arrived at destination",
    description: "Downtown Delivery Center",
    time: "2 minutes ago",
    iconColor: "text-green-600"
  },
  {
    id: 2,
    type: "fuel",
    icon: Fuel,
    title: "VH-003 fuel level low",
    description: "Current level: 23%",
    time: "15 minutes ago",
    iconColor: "text-red-600"
  },
  {
    id: 3,
    type: "route",
    icon: MapPin,
    title: "VH-002 started new route",
    description: "Route: Airport - City Center",
    time: "32 minutes ago",
    iconColor: "text-blue-600"
  },
  {
    id: 4,
    type: "alert",
    icon: AlertTriangle,
    title: "Speed limit exceeded",
    description: "VH-004 on Highway 101",
    time: "1 hour ago",
    iconColor: "text-amber-600"
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className={`p-2 rounded-full bg-muted ${activity.iconColor}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm">{activity.title}</div>
              <div className="text-sm text-muted-foreground">{activity.description}</div>
              <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
