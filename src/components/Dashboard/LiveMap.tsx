
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

export function LiveMap() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="w-5 h-5" />
          Live GPS Tracking
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 h-96 flex items-center justify-center">
          {/* Simulated Map Interface */}
          <div className="absolute inset-4 bg-white rounded-lg shadow-inner overflow-hidden">
            {/* Map Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-8 grid-rows-6 h-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-gray-300"></div>
                ))}
              </div>
            </div>
            
            {/* Simulated Vehicle Markers */}
            <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse-dot border-2 border-white shadow-lg relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  VH-001
                </div>
              </div>
            </div>
            
            <div className="absolute top-2/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse-dot border-2 border-white shadow-lg relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  VH-002
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse-dot border-2 border-white shadow-lg relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  VH-004
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
                d="M 120 80 Q 200 120 280 160"
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
                opacity="0.7"
              />
            </svg>
          </div>
          
          {/* Map Controls */}
          <div className="absolute bottom-6 right-6 space-y-2">
            <button className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
              <Navigation className="w-4 h-4" />
            </button>
          </div>
          
          {/* Legend */}
          <div className="absolute top-6 right-6 bg-white p-3 rounded-lg shadow-lg">
            <div className="text-xs font-semibold mb-2">Vehicle Status</div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>En Route</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span>Idle</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
