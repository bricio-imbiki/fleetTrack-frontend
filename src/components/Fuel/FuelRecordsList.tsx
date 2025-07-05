
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Fuel as FuelIcon } from "lucide-react";

interface FuelRecord {
  id: string;
  vehicle: string;
  vehicleName: string;
  driver: string;
  date: string;
  time: string;
  station: string;
  liters: number;
  pricePerLiter: number;
  totalCost: number;
  mileage: number;
  fuelType: string;
}

interface FuelRecordsListProps {
  records: FuelRecord[];
}

export const FuelRecordsList = ({ records }: FuelRecordsListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Fuel Records</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {records.map((record) => (
            <div key={record.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-fleet-blue-100 rounded-lg flex items-center justify-center">
                  <FuelIcon className="w-5 h-5 text-fleet-blue-600" />
                </div>
                <div>
                  <div className="font-medium">{record.vehicle} - {record.vehicleName}</div>
                  <div className="text-sm text-muted-foreground">
                    {record.driver} • {record.date} {record.time}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-medium">{record.liters}L</div>
                <div className="text-sm text-muted-foreground">${record.totalCost.toFixed(2)}</div>
              </div>
              
              <div className="text-right">
                <div className="font-medium">{record.station}</div>
                <div className="text-sm text-muted-foreground">${record.pricePerLiter}/L</div>
              </div>
              
              <div className="text-right">
                <Badge variant="outline">{record.fuelType}</Badge>
                <div className="text-sm text-muted-foreground mt-1">{record.mileage.toLocaleString()} km</div>
              </div>
              
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
