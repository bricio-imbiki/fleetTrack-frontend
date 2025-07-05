
import { Car, Users, MapPin, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Vehicles",
    value: "247",
    change: "+12%",
    changeType: "positive",
    icon: Car,
    color: "bg-fleet-blue-500"
  },
  {
    title: "Active Drivers",
    value: "189",
    change: "+5%",
    changeType: "positive",
    icon: Users,
    color: "bg-fleet-green-500"
  },
  {
    title: "On Route",
    value: "142",
    change: "-2%",
    changeType: "negative",
    icon: MapPin,
    color: "bg-fleet-amber-500"
  },
  {
    title: "Fleet Efficiency",
    value: "94%",
    change: "+8%",
    changeType: "positive",
    icon: TrendingUp,
    color: "bg-emerald-500"
  }
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="transition-all duration-200 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="w-4 h-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <div className="text-2xl font-bold">{stat.value}</div>
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
