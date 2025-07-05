
import { useState } from "react";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, DollarSign, TrendingUp, TrendingDown, CreditCard } from "lucide-react";

const transactions = [
  {
    id: "TXN-001",
    type: "income",
    category: "Booking Revenue",
    description: "Trip BK-001 - ABC Corporation",
    amount: 45.00,
    date: "2024-01-15",
    vehicle: "VH-001",
    status: "completed"
  },
  {
    id: "TXN-002",
    type: "expense",
    category: "Fuel",
    description: "Fuel refill at Shell Station A",
    amount: 65.98,
    date: "2024-01-15",
    vehicle: "VH-001",
    status: "paid"
  },
  {
    id: "TXN-003",
    type: "income",
    category: "Booking Revenue",
    description: "Trip BK-002 - Jane Doe",
    amount: 28.50,
    date: "2024-01-15",
    vehicle: "VH-002",
    status: "completed"
  },
  {
    id: "TXN-004",
    type: "expense",
    category: "Maintenance",
    description: "Regular service - VH-003",
    amount: 150.00,
    date: "2024-01-14",
    vehicle: "VH-003",
    status: "paid"
  },
  {
    id: "TXN-005",
    type: "expense",
    category: "Insurance",
    description: "Monthly fleet insurance premium",
    amount: 450.00,
    date: "2024-01-14",
    vehicle: "All Vehicles",
    status: "paid"
  },
  {
    id: "TXN-006",
    type: "income",
    category: "Booking Revenue",
    description: "Trip BK-004 - Medical Center",
    amount: 22.00,
    date: "2024-01-13",
    vehicle: "VH-004",
    status: "completed"
  }
];

const Finance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || transaction.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
    
  const netProfit = totalIncome - totalExpenses;

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
                <h1 className="text-3xl font-bold">Financial Management</h1>
                <p className="text-muted-foreground">Track income, expenses, and fleet profitability</p>
              </div>
              <Button className="bg-fleet-blue-600 hover:bg-fleet-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Transaction
              </Button>
            </div>

            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold text-green-600">${totalIncome.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">Total Income</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <TrendingDown className="w-8 h-8 text-red-600" />
                    <div>
                      <p className="text-2xl font-bold text-red-600">${totalExpenses.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">Total Expenses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <DollarSign className={`w-8 h-8 ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`} />
                    <div>
                      <p className={`text-2xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${netProfit.toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">Net Profit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-8 h-8 text-fleet-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">{transactions.length}</p>
                      <p className="text-sm text-muted-foreground">Transactions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search transactions by description, category, or vehicle..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="all">All Types</option>
                    <option value="income">Income Only</option>
                    <option value="expense">Expenses Only</option>
                  </select>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Transactions List */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          transaction.type === 'income' 
                            ? 'bg-green-100' 
                            : 'bg-red-100'
                        }`}>
                          {transaction.type === 'income' ? (
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          ) : (
                            <TrendingDown className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{transaction.description}</div>
                          <div className="text-sm text-muted-foreground">
                            {transaction.category} • {transaction.date} • {transaction.vehicle}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Badge 
                          className={transaction.status === 'completed' || transaction.status === 'paid' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                          }
                        >
                          {transaction.status}
                        </Badge>
                        
                        <div className={`text-lg font-bold ${
                          transaction.type === 'income' 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </div>
                        
                        <Button variant="outline" size="sm">
                          View Details
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

export default Finance;
