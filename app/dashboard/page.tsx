"use client";

import { useState, useEffect } from "react";

interface RevenueEntry {
  id: string;
  date: string;
  amount: number;
  source: "Automation Services" | "Invoice SaaS" | "Music" | "Other";
}

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface DaySchedule {
  day: string;
  dayName: string;
  theme: string;
  tasks: Task[];
  isToday: boolean;
}

interface Product {
  id: string;
  name: string;
  status: "idea" | "building" | "shipped" | "marketing" | "earning" | "killed";
  dueDate?: string;
}

interface MarketingMetrics {
  contentPieces: number;
  leadsGenerated: number;
  outreachMessages: number;
  clientCalls: number;
  proposalsSent: number;
  dealsClosed: number;
  weeklyResetDate: string;
}

interface QuickWin {
  id: string;
  date: string;
  text: string;
}

interface HSoundsLaunch {
  singleName: string;
  launchDate: string;
  checklist: {
    finalMix: boolean;
    albumArt: boolean;
    distribution: boolean;
    teaserVideo: boolean;
    socialPosts: boolean;
    pressKit: boolean;
    launchPosts: boolean;
  };
  metrics: {
    streams: number;
    views: number;
    followersGained: number;
  };
}

interface DashboardData {
  revenue: RevenueEntry[];
  weeklySchedule: DaySchedule[];
  completionStreak: number;
  products: Product[];
  marketingMetrics: MarketingMetrics;
  quickWins: QuickWin[];
  hSoundsLaunch: HSoundsLaunch;
  lastUpdateDate: string;
}

const defaultWeeklySchedule = (): DaySchedule[] => {
  const today = new Date();
  const currentDay = today.getDay();
  const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
  
  const scheduleTemplates = [
    {
      dayName: "Monday",
      theme: "Outreach Day",
      tasks: [
        { text: "Add 15 leads to Google Sheet", completed: false },
        { text: "Run n8n outreach workflow", completed: false },
        { text: "Follow up on warm leads", completed: false },
        { text: "Review outreach metrics", completed: false },
      ]
    },
    {
      dayName: "Tuesday",
      theme: "Content Creation Day",
      tasks: [
        { text: "Record 2 short videos (n8n demos)", completed: false },
        { text: "Write 1 LinkedIn post", completed: false },
        { text: "Create 3 social media posts", completed: false },
        { text: "Schedule all content via n8n", completed: false },
      ]
    },
    {
      dayName: "Wednesday",
      theme: "Build Day",
      tasks: [
        { text: "Work on Invoice SaaS MVP (4 hours)", completed: false },
        { text: "Fix bugs / ship features", completed: false },
        { text: "Update product status", completed: false },
      ]
    },
    {
      dayName: "Thursday",
      theme: "Marketing & Music Day",
      tasks: [
        { text: "Post all scheduled content", completed: false },
        { text: "H.Sounds: create visual / release prep", completed: false },
        { text: "Engage on LinkedIn (30 min)", completed: false },
        { text: "Respond to all DMs and comments", completed: false },
      ]
    },
    {
      dayName: "Friday",
      theme: "Sales & Learning Day",
      tasks: [
        { text: "Client discovery calls", completed: false },
        { text: "Send proposals", completed: false },
        { text: "Learn new AI tool (1 hour)", completed: false },
        { text: "Review weekly metrics", completed: false },
      ]
    },
    {
      dayName: "Saturday",
      theme: "H.Sounds Day",
      tasks: [
        { text: "Music production / mixing", completed: false },
        { text: "Create AI visuals for releases", completed: false },
        { text: "Plan release marketing", completed: false },
        { text: "Post behind-the-scenes content", completed: false },
      ]
    },
    {
      dayName: "Sunday",
      theme: "Planning & Rest",
      tasks: [
        { text: "Review weekly KPIs", completed: false },
        { text: "Plan next week's tasks", completed: false },
        { text: "Log wins and revenue", completed: false },
        { text: "Rest / exercise", completed: false },
      ]
    }
  ];

  return scheduleTemplates.map((template, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + mondayOffset + index);
    const isToday = date.toDateString() === today.toDateString();
    
    return {
      day: date.toISOString().split('T')[0],
      dayName: template.dayName,
      theme: template.theme,
      tasks: template.tasks.map((task, taskIndex) => ({
        id: `${template.dayName.toLowerCase()}-task-${taskIndex}`,
        ...task
      })),
      isToday
    };
  });
};

const defaultProducts: Omit<Product, "id">[] = [
  { name: "Invoice Generator SaaS", status: "building", dueDate: "2024-04-15" },
  { name: "Optimal AI Website", status: "shipped" },
  { name: "n8n Automation Services", status: "marketing" },
  { name: "H.Sounds Single Launch", status: "building", dueDate: "2024-04-01" },
  { name: "H.Sounds Music Brand", status: "marketing" },
];

const statusColors = {
  idea: "bg-gray-600",
  building: "bg-yellow-600",
  shipped: "bg-blue-600",
  marketing: "bg-purple-600",
  earning: "bg-green-600",
  killed: "bg-red-600",
};

const statusOrder = ["idea", "building", "shipped", "marketing", "earning", "killed"];

const checklistItems = [
  { key: "finalMix", label: "Final mix complete" },
  { key: "albumArt", label: "Album art created (AI generated)" },
  { key: "distribution", label: "Distributed to streaming platforms" },
  { key: "teaserVideo", label: "Teaser video created" },
  { key: "socialPosts", label: "Social media posts scheduled" },
  { key: "pressKit", label: "Press kit ready" },
  { key: "launchPosts", label: "Launch day posts ready" },
];

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    revenue: [],
    weeklySchedule: [],
    completionStreak: 0,
    products: [],
    marketingMetrics: {
      contentPieces: 0,
      leadsGenerated: 0,
      outreachMessages: 0,
      clientCalls: 0,
      proposalsSent: 0,
      dealsClosed: 0,
      weeklyResetDate: "",
    },
    quickWins: [],
    hSoundsLaunch: {
      singleName: "New Single",
      launchDate: "2024-04-01",
      checklist: {
        finalMix: false,
        albumArt: false,
        distribution: false,
        teaserVideo: false,
        socialPosts: false,
        pressKit: false,
        launchPosts: false,
      },
      metrics: {
        streams: 0,
        views: 0,
        followersGained: 0,
      },
    },
    lastUpdateDate: "",
  });

  const [revenueAmount, setRevenueAmount] = useState("");
  const [revenueSource, setRevenueSource] = useState<RevenueEntry["source"]>("Other");
  const [newProductName, setNewProductName] = useState("");
  const [quickWinText, setQuickWinText] = useState("");
  const [newTaskText, setNewTaskText] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const weddingDate = new Date("2026-12-20");
  const currentDate = new Date();
  const daysUntilWedding = Math.ceil((weddingDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

  const totalRevenue = data.revenue.reduce((sum, entry) => sum + entry.amount, 0);
  const revenueProgress = Math.min((totalRevenue / 75000) * 100, 100);
  
  const todaySchedule = data.weeklySchedule.find(day => day.isToday);
  const completedTodayTasks = todaySchedule?.tasks.filter(task => task.completed).length || 0;
  const totalTodayTasks = todaySchedule?.tasks.length || 0;

  const getCurrentWeekMonday = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayOffset);
    return monday.toISOString().split('T')[0];
  };

  const shouldResetWeeklyMetrics = () => {
    const currentWeekMonday = getCurrentWeekMonday();
    return data.marketingMetrics.weeklyResetDate !== currentWeekMonday;
  };

  useEffect(() => {
    const savedData = localStorage.getItem("dashboardData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setData(parsed);
    } else {
      const initialData: DashboardData = {
        revenue: [],
        weeklySchedule: defaultWeeklySchedule(),
        completionStreak: 0,
        products: defaultProducts.map((product, index) => ({
          id: `product-${index}`,
          ...product,
        })),
        marketingMetrics: {
          contentPieces: 0,
          leadsGenerated: 0,
          outreachMessages: 0,
          clientCalls: 0,
          proposalsSent: 0,
          dealsClosed: 0,
          weeklyResetDate: getCurrentWeekMonday(),
        },
        quickWins: [],
        hSoundsLaunch: {
          singleName: "New Single",
          launchDate: "2024-04-01",
          checklist: {
            finalMix: false,
            albumArt: false,
            distribution: false,
            teaserVideo: false,
            socialPosts: false,
            pressKit: false,
            launchPosts: false,
          },
          metrics: {
            streams: 0,
            views: 0,
            followersGained: 0,
          },
        },
        lastUpdateDate: today,
      };
      setData(initialData);
      localStorage.setItem("dashboardData", JSON.stringify(initialData));
    }
  }, []);

  useEffect(() => {
    if (shouldResetWeeklyMetrics()) {
      const resetData = {
        ...data,
        marketingMetrics: {
          ...data.marketingMetrics,
          contentPieces: 0,
          leadsGenerated: 0,
          outreachMessages: 0,
          clientCalls: 0,
          proposalsSent: 0,
          dealsClosed: 0,
          weeklyResetDate: getCurrentWeekMonday(),
        },
        weeklySchedule: defaultWeeklySchedule(),
      };
      setData(resetData);
      localStorage.setItem("dashboardData", JSON.stringify(resetData));
    }
  }, [data.marketingMetrics.weeklyResetDate]);

  const saveData = (newData: DashboardData) => {
    setData(newData);
    localStorage.setItem("dashboardData", JSON.stringify(newData));
  };

  const addRevenue = () => {
    if (!revenueAmount || isNaN(Number(revenueAmount))) return;
    
    const newEntry: RevenueEntry = {
      id: `revenue-${Date.now()}`,
      date: today,
      amount: Number(revenueAmount),
      source: revenueSource,
    };
    
    const newData = {
      ...data,
      revenue: [newEntry, ...data.revenue],
    };
    
    saveData(newData);
    setRevenueAmount("");
  };

  const toggleTask = (dayIndex: number, taskId: string) => {
    const newSchedule = [...data.weeklySchedule];
    const task = newSchedule[dayIndex].tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
    
    const newData = {
      ...data,
      weeklySchedule: newSchedule,
    };
    saveData(newData);
  };

  const addTaskToDay = (dayIndex: number) => {
    if (!newTaskText.trim()) return;
    
    const newSchedule = [...data.weeklySchedule];
    const newTask: Task = {
      id: `custom-task-${Date.now()}`,
      text: newTaskText.trim(),
      completed: false,
    };
    
    newSchedule[dayIndex].tasks.push(newTask);
    
    const newData = {
      ...data,
      weeklySchedule: newSchedule,
    };
    
    saveData(newData);
    setNewTaskText("");
    setSelectedDay("");
  };

  const addProduct = () => {
    if (!newProductName.trim()) return;
    
    const newProduct: Product = {
      id: `product-${Date.now()}`,
      name: newProductName.trim(),
      status: "idea",
    };
    
    const newData = {
      ...data,
      products: [...data.products, newProduct],
    };
    
    saveData(newData);
    setNewProductName("");
  };

  const updateProductStatus = (id: string, status: Product["status"]) => {
    const newData = {
      ...data,
      products: data.products.map(product =>
        product.id === id ? { ...product, status } : product
      ),
    };
    saveData(newData);
  };

  const updateProductDueDate = (id: string, dueDate: string) => {
    const newData = {
      ...data,
      products: data.products.map(product =>
        product.id === id ? { ...product, dueDate: dueDate || undefined } : product
      ),
    };
    saveData(newData);
  };

  const updateMetric = (metric: keyof MarketingMetrics, increment: number = 1) => {
    if (metric === 'weeklyResetDate') return;
    
    const newData = {
      ...data,
      marketingMetrics: {
        ...data.marketingMetrics,
        [metric]: Math.max(0, (data.marketingMetrics[metric] as number) + increment),
      },
    };
    saveData(newData);
  };

  const addQuickWin = () => {
    if (!quickWinText.trim()) return;
    
    const newWin: QuickWin = {
      id: `win-${Date.now()}`,
      date: today,
      text: quickWinText.trim(),
    };
    
    const newData = {
      ...data,
      quickWins: [newWin, ...data.quickWins].slice(0, 10),
    };
    
    saveData(newData);
    setQuickWinText("");
  };

  const updateHSoundsField = (field: string, value: any) => {
    const newData = {
      ...data,
      hSoundsLaunch: {
        ...data.hSoundsLaunch,
        [field]: value,
      },
    };
    saveData(newData);
  };

  const toggleChecklistItem = (key: string) => {
    const newData = {
      ...data,
      hSoundsLaunch: {
        ...data.hSoundsLaunch,
        checklist: {
          ...data.hSoundsLaunch.checklist,
          [key]: !data.hSoundsLaunch.checklist[key as keyof typeof data.hSoundsLaunch.checklist],
        },
      },
    };
    saveData(newData);
  };

  const updateHSoundsMetric = (metric: keyof HSoundsLaunch["metrics"], value: number) => {
    const newData = {
      ...data,
      hSoundsLaunch: {
        ...data.hSoundsLaunch,
        metrics: {
          ...data.hSoundsLaunch.metrics,
          [metric]: Math.max(0, value),
        },
      },
    };
    saveData(newData);
  };

  const getRevenueBySource = () => {
    const sources = data.revenue.reduce((acc, entry) => {
      acc[entry.source] = (acc[entry.source] || 0) + entry.amount;
      return acc;
    }, {} as Record<string, number>);
    return sources;
  };

  const getMotivationalMessage = () => {
    const progress = completedTodayTasks / Math.max(totalTodayTasks, 1);
    if (progress >= 0.8) return "Crushing it today! Keep up the momentum!";
    if (progress >= 0.5) return "Great progress! You're halfway there!";
    if (progress >= 0.2) return "Good start! Stay focused on your goals!";
    return "Ready to dominate today? Let's get started!";
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">
            <span className="text-[#00d4ff]">Command</span> Center
          </h1>
          <div className="flex items-center gap-4 text-sm">
            <span>{new Date().toLocaleString()}</span>
            <span className="text-[#00d4ff]">{daysUntilWedding} days to wedding</span>
            <span className="text-[#00d4ff]">{data.completionStreak} day streak</span>
            <a href="/" className="rounded-full border border-zinc-700 px-4 py-2 transition-colors hover:border-zinc-500">
              ← Site
            </a>
            <a href="/music" className="rounded-full border border-zinc-700 px-4 py-2 transition-colors hover:border-zinc-500">
              Music
            </a>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-8 rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">
              Today is {todaySchedule?.dayName} - <span className="text-[#00d4ff]">{todaySchedule?.theme}</span>
            </h2>
            <p className="text-zinc-400 mb-4">{getMotivationalMessage()}</p>
            <div className="flex justify-center gap-8">
              {todaySchedule?.tasks.slice(0, 4).map((task) => (
                <label key={task.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => {
                      const dayIndex = data.weeklySchedule.findIndex(d => d.isToday);
                      if (dayIndex !== -1) toggleTask(dayIndex, task.id);
                    }}
                    className="h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-[#00d4ff] focus:ring-[#00d4ff]"
                  />
                  <span className={`text-sm ${task.completed ? "text-zinc-400 line-through" : "text-white"}`}>
                    {task.text}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
              <h2 className="mb-6 text-xl font-semibold">Weekly Schedule</h2>
              <div className="space-y-4">
                {data.weeklySchedule.map((day, dayIndex) => (
                  <div key={day.day} className={`rounded-lg border p-4 ${day.isToday ? 'border-[#00d4ff] bg-[#00d4ff]/5' : 'border-[#1a1a1a] bg-[#0a0a0a]'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{day.dayName}</h3>
                        <p className="text-sm text-[#00d4ff]">{day.theme}</p>
                      </div>
                      {day.isToday && <span className="text-xs bg-[#00d4ff] text-black px-2 py-1 rounded">Today</span>}
                    </div>
                    <div className="space-y-2">
                      {day.tasks.map((task) => (
                        <label key={task.id} className="flex items-start gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(dayIndex, task.id)}
                            className="mt-1 h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-[#00d4ff] focus:ring-[#00d4ff]"
                          />
                          <span className={`text-sm ${task.completed ? "text-zinc-400 line-through" : "text-white"}`}>
                            {task.text}
                          </span>
                        </label>
                      ))}
                      {selectedDay === day.day && (
                        <div className="flex gap-2 mt-2">
                          <input
                            type="text"
                            placeholder="Add custom task..."
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            className="flex-1 rounded border border-[#1a1a1a] bg-[#111111] px-2 py-1 text-sm"
                            onKeyPress={(e) => e.key === "Enter" && addTaskToDay(dayIndex)}
                          />
                          <button
                            onClick={() => addTaskToDay(dayIndex)}
                            className="rounded bg-[#00d4ff] px-3 py-1 text-xs font-medium text-black hover:bg-[#0099cc]"
                          >
                            Add
                          </button>
                        </div>
                      )}
                      <button
                        onClick={() => setSelectedDay(selectedDay === day.day ? "" : day.day)}
                        className="text-xs text-[#00d4ff] hover:underline"
                      >
                        + Add task
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
              <h2 className="mb-4 text-xl font-semibold">Products & Shipping</h2>
              <div className="mb-4 flex gap-2">
                <input
                  type="text"
                  placeholder="New product name"
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  className="flex-1 rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-2 text-sm"
                  onKeyPress={(e) => e.key === "Enter" && addProduct()}
                />
                <button
                  onClick={addProduct}
                  className="rounded-lg bg-[#00d4ff] px-4 py-2 text-sm font-medium text-black hover:bg-[#0099cc]"
                >
                  Add
                </button>
              </div>
              <div className="space-y-3">
                {data.products.map((product) => (
                  <div key={product.id} className="rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] p-3">
                    <p className="mb-2 text-sm font-medium">{product.name}</p>
                    <div className="flex gap-2 mb-2">
                      <select
                        value={product.status}
                        onChange={(e) => updateProductStatus(product.id, e.target.value as Product["status"])}
                        className="flex-1 rounded border border-[#1a1a1a] bg-[#111111] px-2 py-1 text-xs"
                      >
                        {statusOrder.map((status) => (
                          <option key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </option>
                        ))}
                      </select>
                      <input
                        type="date"
                        value={product.dueDate || ""}
                        onChange={(e) => updateProductDueDate(product.id, e.target.value)}
                        className="rounded border border-[#1a1a1a] bg-[#111111] px-2 py-1 text-xs"
                      />
                    </div>
                    <div className={`inline-block rounded-full px-2 py-1 text-xs ${statusColors[product.status]} text-white`}>
                      {product.status}
                    </div>
                    {product.dueDate && (
                      <span className="ml-2 text-xs text-zinc-400">Due: {product.dueDate}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
              <h2 className="mb-4 text-xl font-semibold">Revenue Tracker</h2>
              <div className="mb-4">
                <p className="text-3xl font-bold text-[#00d4ff]">${totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-zinc-400">of $75,000 target</p>
                <div className="mt-2 h-3 w-full rounded-full bg-zinc-800">
                  <div
                    className="h-3 rounded-full bg-[#00d4ff] transition-all duration-500"
                    style={{ width: `${revenueProgress}%` }}
                  />
                </div>
                <p className="mt-1 text-sm text-zinc-400">{revenueProgress.toFixed(1)}% complete</p>
              </div>
              
              <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                {Object.entries(getRevenueBySource()).map(([source, amount]) => (
                  <div key={source} className="flex justify-between">
                    <span className="text-zinc-400">{source}:</span>
                    <span className="text-[#00d4ff]">${amount}</span>
                  </div>
                ))}
              </div>

              <div className="mb-4 flex gap-2">
                <input
                  type="number"
                  placeholder="Amount"
                  value={revenueAmount}
                  onChange={(e) => setRevenueAmount(e.target.value)}
                  className="flex-1 rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-2 text-sm"
                  onKeyPress={(e) => e.key === "Enter" && addRevenue()}
                />
                <select
                  value={revenueSource}
                  onChange={(e) => setRevenueSource(e.target.value as RevenueEntry["source"])}
                  className="rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-2 text-sm"
                >
                  <option value="Automation Services">Automation Services</option>
                  <option value="Invoice SaaS">Invoice SaaS</option>
                  <option value="Music">Music</option>
                  <option value="Other">Other</option>
                </select>
                <button
                  onClick={addRevenue}
                  className="rounded-lg bg-[#00d4ff] px-4 py-2 text-sm font-medium text-black hover:bg-[#0099cc]"
                >
                  Log
                </button>
              </div>
              <div className="max-h-32 overflow-y-auto">
                {data.revenue.slice(0, 5).map((entry) => (
                  <div key={entry.id} className="flex justify-between text-sm">
                    <span className="text-zinc-400">{entry.date} - {entry.source}</span>
                    <span className="text-[#00d4ff]">+${entry.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
              <h2 className="mb-4 text-xl font-semibold">Marketing Analytics</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: "contentPieces", label: "Content", goal: 10 },
                  { key: "leadsGenerated", label: "Leads", goal: 50 },
                  { key: "outreachMessages", label: "Outreach", goal: 25 },
                  { key: "clientCalls", label: "Calls", goal: 5 },
                  { key: "proposalsSent", label: "Proposals", goal: 3 },
                  { key: "dealsClosed", label: "Deals", goal: 2 },
                ].map(({ key, label, goal }) => {
                  const value = data.marketingMetrics[key as keyof MarketingMetrics] as number;
                  const progress = Math.min((value / goal) * 100, 100);
                  
                  return (
                    <div key={key} className="text-center">
                      <p className="text-2xl font-bold text-[#00d4ff]">{value}</p>
                      <p className="text-xs text-zinc-400">{label} ({value}/{goal})</p>
                      <div className="mt-1 h-1 w-full rounded-full bg-zinc-800">
                        <div
                          className="h-1 rounded-full bg-[#00d4ff] transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex gap-1 mt-2">
                        <button
                          onClick={() => updateMetric(key as keyof MarketingMetrics, 1)}
                          className="rounded bg-[#00d4ff] px-2 py-1 text-xs text-black hover:bg-[#0099cc]"
                        >
                          +1
                        </button>
                        <button
                          onClick={() => updateMetric(key as keyof MarketingMetrics, -1)}
                          className="rounded bg-zinc-700 px-2 py-1 text-xs hover:bg-zinc-600"
                        >
                          -1
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
              <h2 className="mb-4 text-xl font-semibold">H.Sounds Launch Tracker</h2>
              <div className="mb-4 space-y-3">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Single Name</label>
                  <input
                    type="text"
                    value={data.hSoundsLaunch.singleName}
                    onChange={(e) => updateHSoundsField("singleName", e.target.value)}
                    className="w-full rounded border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Launch Date</label>
                  <input
                    type="date"
                    value={data.hSoundsLaunch.launchDate}
                    onChange={(e) => updateHSoundsField("launchDate", e.target.value)}
                    className="w-full rounded border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Pre-launch Checklist</h3>
                <div className="space-y-2">
                  {checklistItems.map(({ key, label }) => (
                    <label key={key} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={data.hSoundsLaunch.checklist[key as keyof typeof data.hSoundsLaunch.checklist]}
                        onChange={() => toggleChecklistItem(key)}
                        className="h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-[#00d4ff] focus:ring-[#00d4ff]"
                      />
                      <span className="text-sm">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Post-launch Metrics</h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { key: "streams", label: "Streams" },
                    { key: "views", label: "Views" },
                    { key: "followersGained", label: "Followers" },
                  ].map(({ key, label }) => (
                    <div key={key}>
                      <p className="text-lg font-bold text-[#00d4ff]">
                        {data.hSoundsLaunch.metrics[key as keyof HSoundsLaunch["metrics"]]}
                      </p>
                      <p className="text-xs text-zinc-400">{label}</p>
                      <input
                        type="number"
                        placeholder="0"
                        onChange={(e) => updateHSoundsMetric(
                          key as keyof HSoundsLaunch["metrics"], 
                          parseInt(e.target.value) || 0
                        )}
                        className="w-full mt-1 rounded border border-[#1a1a1a] bg-[#0a0a0a] px-2 py-1 text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
              <h2 className="mb-4 text-xl font-semibold">Quick Wins Log</h2>
              <div className="mb-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Log a win..."
                  value={quickWinText}
                  onChange={(e) => setQuickWinText(e.target.value)}
                  className="flex-1 rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-2 text-sm"
                  onKeyPress={(e) => e.key === "Enter" && addQuickWin()}
                />
                <button
                  onClick={addQuickWin}
                  className="rounded-lg bg-[#00d4ff] px-4 py-2 text-sm font-medium text-black hover:bg-[#0099cc]"
                >
                  Add
                </button>
              </div>
              <div className="max-h-48 overflow-y-auto space-y-2">
                {data.quickWins.map((win) => (
                  <div key={win.id} className="rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] p-3">
                    <p className="text-sm">{win.text}</p>
                    <p className="text-xs text-zinc-400">{win.date}</p>
                  </div>
                ))}
                {data.quickWins.length === 0 && (
                  <p className="text-center text-sm text-zinc-400">No wins logged yet. Start building momentum!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}