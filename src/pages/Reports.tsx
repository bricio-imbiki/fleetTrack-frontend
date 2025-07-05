import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, BarChart3, PieChart, TrendingUp, Clock } from "lucide-react";

const reportTypes = [
  {
    id: "fleet-performance",
    title: "Fleet Performance Report",
    description: "Overall fleet efficiency, utilization rates, and key metrics",
    icon: BarChart3,
    frequency: "Monthly",
    lastGenerated: "2024-01-15",
    status: "ready"
  },
  {
    id: "financial-summary",
    title: "Financial Summary Report",
    description: "Income, expenses, profit margins, and cost analysis",
    icon: PieChart,
    frequency: "Monthly",
    lastGenerated: "2024-01-15",
    status: "ready"
  },
  {
    id: "driver-performance",
    title: "Driver Performance Report",
    description: "Individual driver statistics, ratings, and productivity",
    icon: TrendingUp,
    frequency: "Weekly",
    lastGenerated: "2024-01-14",
    status: "ready"
  },
  {
    id: "vehicle-maintenance",
    title: "Vehicle Maintenance Report",
    description: "Maintenance schedules, costs, and vehicle health status",
    icon: FileText,
    frequency: "Monthly",
    lastGenerated: "2024-01-10",
    status: "generating"
  },
  {
    id: "fuel-efficiency",
    title: "Fuel Efficiency Report",
    description: "Fuel consumption patterns and cost optimization insights",
    icon: BarChart3,
    frequency: "Weekly",
    lastGenerated: "2024-01-12",
    status: "ready"
  },
  {
    id: "booking-analytics",
    title: "Booking Analytics Report",
    description: "Customer booking patterns, popular routes, and demand analysis",
    icon: PieChart,
    frequency: "Monthly",
    lastGenerated: "2024-01-08",
    status: "scheduled"
  }
];

const quickStats = [
  { label: "Total Reports Generated", value: "247", icon: FileText, color: "text-fleet-blue-600" },
  { label: "Reports This Month", value: "18", icon: Calendar, color: "text-green-600" },
  { label: "Scheduled Reports", value: "6", icon: Clock, color: "text-amber-600" },
  { label: "Custom Reports", value: "12", icon: BarChart3, color: "text-purple-600" }
];

const Reports = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'generating':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'scheduled':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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
                <h1 className="text-3xl font-bold">Reports & Analytics</h1>
                <p className="text-muted-foreground">Generate comprehensive reports and analyze fleet performance</p>
              </div>
              <Button className="bg-fleet-blue-600 hover:bg-fleet-blue-700">
                <FileText className="w-4 h-4 mr-2" />
                Create Custom Report
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Report Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {reportTypes.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-all duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-fleet-blue-100 rounded-lg flex items-center justify-center">
                          <report.icon className="w-5 h-5 text-fleet-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{report.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {report.frequency} • Last: {report.lastGenerated}
                          </p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {report.description}
                    </p>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        disabled={report.status === 'generating'}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        {report.status === 'generating' ? 'Generating...' : 'Generate'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        disabled={report.status !== 'ready'}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Fleet Performance Report - January 2024", date: "2024-01-15", size: "2.3 MB", format: "PDF" },
                    { name: "Financial Summary Report - January 2024", date: "2024-01-15", size: "1.8 MB", format: "Excel" },
                    { name: "Driver Performance Report - Week 2", date: "2024-01-14", size: "945 KB", format: "PDF" },
                    { name: "Fuel Efficiency Report - Week 2", date: "2024-01-12", size: "1.2 MB", format: "PDF" }
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-fleet-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-fleet-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">{report.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Generated on {report.date} • {report.size} • {report.format}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reports;
