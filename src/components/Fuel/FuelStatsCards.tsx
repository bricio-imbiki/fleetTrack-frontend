
import { Card, CardContent } from "@/components/ui/card";
import { Fuel as FuelIcon, TrendingUp, TrendingDown } from "lucide-react";

interface FuelStatsCardsProps {
  totalLiters: number;
  totalFuelCost: number;
  averagePrice: number;
  totalRecords: number;
}

export const FuelStatsCards = ({ 
  totalLiters, 
  totalFuelCost, 
  averagePrice, 
  totalRecords 
}: FuelStatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2">
            <FuelIcon className="w-8 h-8 text-fleet-blue-600" />
            <div>
              <p className="text-2xl font-bold">{totalLiters.toFixed(1)}L</p>
              <p className="text-sm text-muted-foreground">Total Fuel</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold">${totalFuelCost.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">Total Cost</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2">
            <TrendingDown className="w-8 h-8 text-amber-600" />
            <div>
              <p className="text-2xl font-bold">${averagePrice.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">Avg Price/L</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2">
            <FuelIcon className="w-8 h-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold">{totalRecords}</p>
              <p className="text-sm text-muted-foreground">Fill-ups</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
