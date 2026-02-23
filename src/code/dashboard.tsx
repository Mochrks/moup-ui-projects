import { useState, useMemo } from "react";
import { Button } from "@/components/ui-neobrutalism/button";
import { Input } from "@/components/ui-neobrutalism/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui-neobrutalism/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { Calendar } from "@/components/ui-shadcn/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui-neobrutalism/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-neobrutalism/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-shadcn/avatar";
import { Switch } from "@/components/ui-neobrutalism/switch";
import { Checkbox } from "@/components/ui-shadcn/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui-shadcn/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui-shadcn/dialog";
import { Label } from "@/components/ui-neobrutalism/label";
import {
  BarChart3,
  Home,
  Settings,
  Users,
  Sun,
  Moon,
  Plus,
  Clock,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  User,
  Key,
  LogOut,
  DollarSign,
  ShoppingCart,
} from "lucide-react";

const monthlyData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
];

const weeklyData = [
  { name: "Mon", visits: 3000 },
  { name: "Tue", visits: 3500 },
  { name: "Wed", visits: 4200 },
  { name: "Thu", visits: 4000 },
  { name: "Fri", visits: 4500 },
  { name: "Sat", visits: 3800 },
  { name: "Sun", visits: 3200 },
];

const deviceData = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const areaChartData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const initialTableData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Active" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", status: "Inactive" },
  { id: 6, name: "Eva White", email: "eva@example.com", status: "Active" },
  { id: 7, name: "Frank Miller", email: "frank@example.com", status: "Inactive" },
  { id: 8, name: "Grace Lee", email: "grace@example.com", status: "Active" },
  { id: 9, name: "Henry Wilson", email: "henry@example.com", status: "Active" },
  { id: 10, name: "Ivy Taylor", email: "ivy@example.com", status: "Inactive" },
];

const initialTasks = [
  { id: 1, title: "Create new design system", completed: false },
  { id: 2, title: "Develop landing page", completed: true },
  { id: 3, title: "Optimize database queries", completed: false },
  { id: 4, title: "Implement user authentication", completed: false },
];

export const DashboardPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState(initialTasks);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [tableData, setTableData] =
    useState<{ id: number; name: string; email: string; status: string }[]>(initialTableData);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sortedData = useMemo(() => {
    const sortableItems = [...tableData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (
          a[sortConfig.key as keyof (typeof tableData)[0]] <
          b[sortConfig.key as keyof (typeof tableData)[0]]
        ) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (
          a[sortConfig.key as keyof (typeof tableData)[0]] <
          b[sortConfig.key as keyof (typeof tableData)[0]]
        ) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [tableData, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter(
      (item) =>
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (statusFilter === "all" || item.status === statusFilter)
    );
  }, [sortedData, searchTerm, statusFilter]);

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnName: string) => {
    if (sortConfig?.key === columnName) {
      return sortConfig.direction === "ascending" ? (
        <ArrowUp className="h-4 w-4" />
      ) : (
        <ArrowDown className="h-4 w-4" />
      );
    }
    return <ArrowUpDown className="h-4 w-4" />;
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTaskList([...taskList, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTaskList(
      taskList.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const startTimer = () => {
    setIsTimerRunning(true);
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsTimerRunning(false);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to change the password
    console.log("Password change requested");
    setIsChangePasswordOpen(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleLogout = () => {
    // Here you would typically handle the logout process
    console.log("Logout requested");
  };

  return (
    <div className="w-full h-full">
      <div className={`flex h-screen ${darkMode ? "dark" : ""}`}>
        {/* Sidebar */}
        <div
          className={`bg-white dark:bg-gray-800  border-r dark:text-white dark:border-r-gray-600 w-64 h-full flex-shrink-0 ${sidebarOpen ? "" : "hidden"}`}
        >
          <div className="p-4">
            <div className="flex justify-between text-center items-center  mb-10">
              <h2 className=" text-2xl font-semibold dark:text-white ">Dashboard</h2>
            </div>
            <nav>
              <Button
                variant="noShadow"
                className="w-full justify-start mb-2 dark:hover:bg-gray-600"
              >
                <Home className="mr-2 h-4 w-4" /> Home
              </Button>
              <Button
                variant="noShadow"
                className="w-full justify-start mb-2 dark:hover:bg-gray-600"
              >
                <Users className="mr-2 h-4 w-4" /> Users
              </Button>
              <Button
                variant="noShadow"
                className="w-full justify-start mb-2 dark:hover:bg-gray-600"
              >
                <BarChart3 className="mr-2 h-4 w-4" /> Analytics
              </Button>
              <Button variant="noShadow" className="w-full justify-start dark:hover:bg-gray-600">
                <Settings className="mr-2 h-4 w-4" /> Settings
              </Button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col overflow-auto bg-gray-100 dark:bg-gray-900 w-full">
          <header className="flex items-center justify-between border-b dark:border-b-gray-600 bg-white dark:bg-gray-800 shadow-sm z-50">
            <div className="flex flex-row w-full">
              <div className="flex text-center items-center dark:text-white ml-5 ">
                <Button
                  variant="noShadow"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="dark:hover:bg-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </div>
              <div className="flex w-full py-4 px-4 sm:px-6 lg:px-8 justify-end items-end  ">
                <div className="flex items-center">
                  <Input type="search" placeholder="Search..." className="mr-4 dark:border-white" />
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} className="mr-4" />
                  {darkMode ? (
                    <Moon className="h-8 w-8 text-gray-400" />
                  ) : (
                    <Sun className="h-8 w-8 text-yellow-500" />
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Avatar className="ml-4 cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setIsChangePasswordOpen(true)}>
                        <Key className="mr-2 h-4 w-4" />
                        <span>Change Password</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
            <div className="px-4 py-6 sm:px-0">
              <h1 className="text-3xl font-semibold mb-6 dark:text-white">Dashboard Overview</h1>

              {/* Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card className="border-4 border-black shadow-[4px_4px_0_0_#000]">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-black uppercase italic">
                      Total Revenue
                    </CardTitle>
                    <div className="w-8 h-8 rounded-lg bg-blue-100 border-2 border-black flex items-center justify-center">
                      <DollarSign className="h-4 w-4 text-black" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-black">$45,231.89</div>
                    <p className="text-[10px] font-bold text-green-600 tracking-wider uppercase">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-4 border-black shadow-[4px_4px_0_0_#000]">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-black uppercase italic">
                      Subscriptions
                    </CardTitle>
                    <div className="w-8 h-8 rounded-lg bg-green-100 border-2 border-black flex items-center justify-center">
                      <Users className="h-4 w-4 text-black" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-black">+2,350</div>
                    <p className="text-[10px] font-bold text-green-600 tracking-wider uppercase">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-4 border-black shadow-[4px_4px_0_0_#000]">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-black uppercase italic">Sales</CardTitle>
                    <div className="w-8 h-8 rounded-lg bg-purple-100 border-2 border-black flex items-center justify-center">
                      <ShoppingCart className="h-4 w-4 text-black" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-black">+12,234</div>
                    <p className="text-[10px] font-bold text-green-600 tracking-wider uppercase">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-4 border-black shadow-[4px_4px_0_0_#000]">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-black uppercase italic">
                      Active Now
                    </CardTitle>
                    <div className="w-8 h-8 rounded-lg bg-yellow-100 border-2 border-black flex items-center justify-center">
                      <Clock className="h-4 w-4 text-black" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-black">+573</div>
                    <p className="text-[10px] font-bold text-green-600 tracking-wider uppercase">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="mb-8">
                <Card className="border-4 border-black shadow-[4px_4px_0_0_#000]">
                  <CardHeader className="border-b-4 border-black bg-zinc-50">
                    <CardTitle className="font-black uppercase tracking-tight">
                      Monthly Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                        <XAxis
                          dataKey="name"
                          axisLine={{ stroke: "#000", strokeWidth: 2 }}
                          tickLine={false}
                          tick={{ fontWeight: "bold" }}
                        />
                        <YAxis
                          axisLine={{ stroke: "#000", strokeWidth: 2 }}
                          tickLine={false}
                          tick={{ fontWeight: "bold" }}
                        />
                        <Tooltip
                          contentStyle={{
                            border: "4px solid #000",
                            borderRadius: "8px",
                            fontWeight: "bold",
                          }}
                          cursor={{ fill: "#ffe135", opacity: 0.1 }}
                        />
                        <Legend wrapperStyle={{ fontWeight: "bold", paddingTop: "20px" }} />
                        <Bar
                          dataKey="pv"
                          fill="#ffe135"
                          stroke="#000"
                          strokeWidth={2}
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar
                          dataKey="uv"
                          fill="#34A853"
                          stroke="#000"
                          strokeWidth={2}
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Charts */}
              <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Weekly Visits Line Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Visits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={weeklyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="visits" stroke="#8884d8" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Device Usage Pie Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Device Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {deviceData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Revenue Comparison Bar Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Comparison</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={monthlyData.slice(0, 3)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" name="Previous Year" />
                        <Bar dataKey="uv" fill="#82ca9d" name="Current Year" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Interactive Area Chart */}
              <div className="mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Area Chart - Sales Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <AreaChart
                        data={areaChartData}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stackId="1"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                        <Area
                          type="monotone"
                          dataKey="pv"
                          stackId="1"
                          stroke="#82ca9d"
                          fill="#82ca9d"
                        />
                        <Area
                          type="monotone"
                          dataKey="amt"
                          stackId="1"
                          stroke="#ffc658"
                          fill="#ffc658"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Data Table with Filtering, Sorting, and Pagination */}
              <div className="mb-8">
                <Card className="border-4 border-black shadow-[4px_4px_0_0_#000]">
                  <CardHeader className="border-b-4 border-black bg-[#ffe135]">
                    <div className="flex justify-between items-center">
                      <CardTitle className="font-black uppercase italic text-2xl">
                        User Data
                      </CardTitle>
                      <Button
                        className="bg-black text-white hover:bg-zinc-800 border-2 border-black shadow-[2px_2px_0_0_#000]"
                        onClick={() =>
                          setTableData([
                            ...tableData,
                            {
                              id: 11,
                              name: "John Doe",
                              email: "john@example.com",
                              status: "Active",
                            },
                          ])
                        }
                      >
                        <Plus className="mr-2 h-4 w-4" /> Add Row
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                      <Input
                        type="text"
                        placeholder="Search users..."
                        className="max-w-sm border-2 border-black shadow-[2px_2px_0_0_#000] font-bold"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                          <SelectTrigger className="w-[180px] border-2 border-black font-bold shadow-[2px_2px_0_0_#000]">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent className="border-2 border-black bg-white">
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Inactive">Inactive</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="border-4 border-black rounded-lg overflow-hidden shadow-[4px_4px_0_0_#000]">
                      <Table>
                        <TableHeader className="bg-zinc-100 border-b-2 border-black">
                          <TableRow>
                            <TableHead
                              onClick={() => requestSort("name")}
                              className="cursor-pointer font-black text-black"
                            >
                              <div className="flex items-center gap-2">
                                Name {getSortIcon("name")}
                              </div>
                            </TableHead>
                            <TableHead
                              onClick={() => requestSort("email")}
                              className="cursor-pointer font-black text-black"
                            >
                              <div className="flex items-center gap-2">
                                Email {getSortIcon("email")}
                              </div>
                            </TableHead>
                            <TableHead
                              onClick={() => requestSort("status")}
                              className="cursor-pointer font-black text-black"
                            >
                              <div className="flex items-center gap-2">
                                Status {getSortIcon("status")}
                              </div>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {currentItems.map((row) => (
                            <TableRow
                              key={row.id}
                              className="border-b border-black/10 hover:bg-zinc-50"
                            >
                              <TableCell className="font-bold">{row.name}</TableCell>
                              <TableCell>{row.email}</TableCell>
                              <TableCell>
                                <span
                                  className={`px-2 py-1 rounded-md border-2 border-black text-[10px] font-black uppercase ${row.status === "Active" ? "bg-green-400" : "bg-red-400"}`}
                                >
                                  {row.status}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <div className="text-xs font-bold text-zinc-500">
                        Showing{" "}
                        {Math.min((currentPage - 1) * itemsPerPage + 1, filteredData.length)}-
                        {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
                        {filteredData.length} entries
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="neutral"
                          className="border-2 border-black font-black uppercase text-xs"
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                        >
                          Prev
                        </Button>
                        <Button
                          variant="neutral"
                          className="border-2 border-black font-black uppercase text-xs"
                          onClick={() =>
                            setCurrentPage((prev) =>
                              Math.min(prev + 1, Math.ceil(filteredData.length / itemsPerPage))
                            )
                          }
                          disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tasks */}
              <div className="mb-8">
                <Card className="border-4 border-black shadow-[4px_4px_0_0_#000]">
                  <CardHeader className="border-b-4 border-black bg-indigo-500 text-white">
                    <CardTitle className="font-black uppercase tracking-widest italic">
                      Tasks & Workflow
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form onSubmit={handleAddTask} className="flex space-x-2 mb-6">
                      <Input
                        type="text"
                        placeholder="Add a new task..."
                        className="border-2 border-black font-bold shadow-[2px_2px_0_0_#000]"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                      />
                      <Button
                        type="submit"
                        className="bg-[#ffe135] text-black border-2 border-black shadow-[2px_2px_0_0_#000] font-black uppercase italic active:shadow-none active:translate-x-[1px] active:translate-y-[1px]"
                      >
                        <Plus className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </form>
                    <div className="space-y-3">
                      {taskList.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center space-x-3 p-3 border-2 border-black rounded-lg bg-zinc-50 shadow-[2px_2px_0_0_#000]"
                        >
                          <Checkbox
                            id={`task-${task.id}`}
                            checked={task.completed}
                            onCheckedChange={() => toggleTaskCompletion(task.id)}
                            className="border-2 border-black data-[state=checked]:bg-[#ffe135]"
                          />
                          <label
                            htmlFor={`task-${task.id}`}
                            className={`text-sm font-black uppercase tracking-tight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                              task.completed
                                ? "line-through text-black/40 decoration-black/40 decoration-2"
                                : "text-black"
                            }`}
                          >
                            {task.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Calendar, Timer, and Gallery */}
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-4 border-black shadow-[4px_4px_0_0_#000]">
                  <CardHeader className="border-b-4 border-black bg-pink-400">
                    <CardTitle className="font-black uppercase italic">Calendar</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="border-2 border-black rounded-lg p-2 shadow-[2px_2px_0_0_#000]">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-4 border-black shadow-[4px_4px_0_0_#000]">
                  <CardHeader className="border-b-4 border-black bg-yellow-400">
                    <CardTitle className="font-black uppercase italic">Tools & Gallery</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div className="p-4 border-4 border-black bg-zinc-900 text-white rounded-xl shadow-[4px_4px_0_0_#ffe135]">
                      <div className="text-5xl font-black mb-4 font-mono tracking-tighter">
                        {Math.floor(timer / 3600)
                          .toString()
                          .padStart(2, "0")}
                        :
                        {Math.floor((timer % 3600) / 60)
                          .toString()
                          .padStart(2, "0")}
                        :{(timer % 60).toString().padStart(2, "0")}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={startTimer}
                          disabled={isTimerRunning}
                          className="bg-[#ffe135] text-black border-2 border-black font-black uppercase text-xs"
                        >
                          Start
                        </Button>
                        <Button
                          onClick={stopTimer}
                          disabled={!isTimerRunning}
                          className="bg-red-500 text-white border-2 border-black font-black uppercase text-xs"
                        >
                          Stop
                        </Button>
                        <Button
                          onClick={resetTimer}
                          variant="neutral"
                          className="border-2 border-white text-white font-black uppercase text-xs hover:bg-white hover:text-black"
                        >
                          Reset
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest mb-3 italic underline decoration-4 decoration-[#ffe135] underline-offset-4">
                        Media Assets
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((id) => (
                          <div
                            key={id}
                            className="group relative border-2 border-black rounded-lg overflow-hidden shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000] transition-all"
                          >
                            <img
                              src={`https://picsum.photos/id/${10 + id}/400/300`}
                              alt={`Gallery photo ${id}`}
                              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                            <div className="absolute top-2 left-2 px-2 py-0.5 bg-white border-2 border-black text-[10px] font-black uppercase">
                              IMG_{id}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>

        {/* Change Password Dialog */}
        <Dialog open={isChangePasswordOpen} onOpenChange={setIsChangePasswordOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
              <DialogDescription>
                Enter your current password and a new password to change your account password.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleChangePassword}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="old-password" className="text-right">
                    Old Password
                  </Label>
                  <Input
                    id="old-password"
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="new-password" className="text-right">
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="confirm-password" className="text-right">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Change Password</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
