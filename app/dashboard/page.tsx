"use client";

import { useState, useEffect } from "react";

interface RevenueEntry {
  id: string;
  date: string;
  amount: number;
}

interface DailyKPI {
  id: string;
  text: string;
  completed: boolean;
}

interface Product {
  id: string;
  name: string;
  status: "idea" | "building" | "shipped" | "marketing" | "earning" | "killed";
}

interface MarketingMetrics {
  contentPieces: number;
  leadsGenerated: number;
  outreachMessages: number;
  clientCalls: number;
}

interface QuickWin {
  id: string;
  date: string;
  text: string;
}

interface DashboardData {
  revenue: RevenueEntry[];
  dailyKPIs: DailyKPI[];
  lastResetDate: string;
  completionStreak: number;
  products: Product[];
  marketingMetrics: MarketingMetrics;
  quickWins: QuickWin[];
}

const defaultKPIs: Omit<DailyKPI, "id" | "completed">[] = [
  { text: "Add 10 leads to outreach Google Sheet" },
  { text: "Send 5 personalized outreach emails (run n8n workflow)" },
  { text: "Record 1 short video of n8n automation demo" },
  { text: "Post content to LinkedIn + X + Facebook" },
  { text: "Work on Invoice SaaS MVP for 2+ hours" },
  { text: "Follow up with warm leads / respond to inquiries" },
  { text: "Learn 1 new AI tool or technique (30 min)" },
  { text: "Log revenue and update financial tracker" },
  { text: "Exercise or movement (30 min)" },
];

const defaultProducts: Omit<Product, "id">[] = [
  { name: "Invoice Generator SaaS", status: "building" },
  { name: "Optimal AI Website", status: "shipped" },
  { name: "n8n Automation Services", status: "marketing" },
  { name: "H.Sounds Music Brand", status: "idea" },
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

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    revenue: [],
    dailyKPIs: [],
    lastResetDate: "",
    completionStreak: 0,
    products: [],
    marketingMetrics: {
      contentPieces: 0,
      leadsGenerated: 0,
      outreachMessages: 0,
      clientCalls: 0,
    },
    quickWins: [],
  });

  const [revenueAmount, setRevenueAmount] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [quickWinText, setQuickWinText] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const weddingDate = new Date("2026-12-20");
  const currentDate = new Date();
  const daysUntilWedding = Math.ceil((weddingDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

  const totalRevenue = data.revenue.reduce((sum, entry) => sum + entry.amount, 0);
  const revenueProgress = Math.min((totalRevenue / 75000) * 100, 100);
  const completedKPIs = data.dailyKPIs.filter(kpi => kpi.completed).length;
  const kpiProgress = data.dailyKPIs.length > 0 ? (completedKPIs / data.dailyKPIs.length) * 100 : 0;

  useEffect(() => {
    const savedData = localStorage.getItem("dashboardData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setData(parsed);
    } else {
      const initialData: DashboardData = {
        revenue: [],
        dailyKPIs: defaultKPIs.map((kpi, index) => ({
          id: `kpi-${index}`,
          text: kpi.text,
          completed: false,
        })),
        lastResetDate: today,
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
        },
        quickWins: [],
      };
      setData(initialData);
      localStorage.setItem("dashboardData", JSON.stringify(initialData));
    }
  }, []);

  useEffect(() => {
    if (data.lastResetDate !== today) {
      const previousDay = data.lastResetDate;
      const wasCompleted = data.dailyKPIs.length > 0 && data.dailyKPIs.every(kpi => kpi.completed);
      
      const resetData = {
        ...data,
        dailyKPIs: defaultKPIs.map((kpi, index) => ({
          id: `kpi-${index}`,
          text: kpi.text,
          completed: false,
        })),
        lastResetDate: today,
        completionStreak: wasCompleted && previousDay ? data.completionStreak + 1 : 0,
      };
      
      setData(resetData);
      localStorage.setItem("dashboardData", JSON.stringify(resetData));
    }
  }, [data.lastResetDate, data.dailyKPIs, data.completionStreak, today]);

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
    };
    
    const newData = {
      ...data,
      revenue: [newEntry, ...data.revenue],
    };
    
    saveData(newData);
    setRevenueAmount("");
  };

  const toggleKPI = (id: string) => {
    const newData = {
      ...data,
      dailyKPIs: data.dailyKPIs.map(kpi =>
        kpi.id === id ? { ...kpi, completed: !kpi.completed } : kpi
      ),
    };
    saveData(newData);
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

  const updateMetric = (metric: keyof MarketingMetrics, increment: number = 1) => {
    const newData = {
      ...data,
      marketingMetrics: {
        ...data.marketingMetrics,
        [metric]: Math.max(0, data.marketingMetrics[metric] + increment),
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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="border-b border-[#1a1a1a] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">
            <span className="text-[#00d4ff]">Command</span> Center
          </h1>
          <a
            href="/"
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm transition-colors hover:border-zinc-500"
          >
            ← Back to Site
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6 text-center">
            <p className="text-sm text-zinc-400">Today</p>
            <p className="text-lg font-semibold">
              {new Date().toLocaleDateString("en-US", { 
                weekday: "long", 
                month: "short", 
                day: "numeric" 
              })}
            </p>
          </div>
          <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6 text-center">
            <p className="text-sm text-zinc-400">Days Until Wedding</p>
            <p className="text-2xl font-bold text-[#00d4ff]">{daysUntilWedding}</p>
          </div>
          <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6 text-center">
            <p className="text-sm text-zinc-400">Completion Streak</p>
            <p className="text-2xl font-bold text-[#00d4ff]">{data.completionStreak} days</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
            <h2 className="mb-4 text-xl font-semibold">Revenue Tracker</h2>
            <div className="mb-4">
              <p className="text-3xl font-bold text-[#00d4ff]">${totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-zinc-400">of $75,000 target</p>
              <div className="mt-2 h-2 w-full rounded-full bg-zinc-800">
                <div
                  className="h-2 rounded-full bg-[#00d4ff] transition-all duration-500"
                  style={{ width: `${revenueProgress}%` }}
                />
              </div>
              <p className="mt-1 text-sm text-zinc-400">{revenueProgress.toFixed(1)}% complete</p>
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
              <button
                onClick={addRevenue}
                className="rounded-lg bg-[#00d4ff] px-4 py-2 text-sm font-medium text-black hover:bg-[#0099cc]"
              >
                Log
              </button>
            </div>
            <div className="max-h-48 overflow-y-auto">
              <p className="mb-2 text-sm font-medium">Recent Entries</p>
              {data.revenue.slice(0, 10).map((entry) => (
                <div key={entry.id} className="flex justify-between text-sm">
                  <span className="text-zinc-400">{entry.date}</span>
                  <span className="text-[#00d4ff]">+${entry.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
            <h2 className="mb-4 text-xl font-semibold">Daily KPIs</h2>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Progress</span>
                <span className="text-sm text-[#00d4ff]">{completedKPIs}/{data.dailyKPIs.length}</span>
              </div>
              <div className="mt-1 h-2 w-full rounded-full bg-zinc-800">
                <div
                  className="h-2 rounded-full bg-[#00d4ff] transition-all duration-500"
                  style={{ width: `${kpiProgress}%` }}
                />
              </div>
              <p className="mt-1 text-sm text-zinc-400">{kpiProgress.toFixed(0)}% complete</p>
            </div>
            <div className="space-y-3">
              {data.dailyKPIs.map((kpi) => (
                <label key={kpi.id} className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={kpi.completed}
                    onChange={() => toggleKPI(kpi.id)}
                    className="mt-1 h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-[#00d4ff] focus:ring-[#00d4ff]"
                  />
                  <span className={`text-sm ${kpi.completed ? "text-zinc-400 line-through" : "text-white"}`}>
                    {kpi.text}
                  </span>
                </label>
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
                  <select
                    value={product.status}
                    onChange={(e) => updateProductStatus(product.id, e.target.value as Product["status"])}
                    className="w-full rounded border border-[#1a1a1a] bg-[#111111] px-2 py-1 text-xs"
                  >
                    {statusOrder.map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                  <div className={`mt-2 inline-block rounded-full px-2 py-1 text-xs ${statusColors[product.status]} text-white`}>
                    {product.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
            <h2 className="mb-4 text-xl font-semibold">Marketing Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#00d4ff]">{data.marketingMetrics.contentPieces}</p>
                <p className="text-xs text-zinc-400">Content Pieces</p>
                <button
                  onClick={() => updateMetric("contentPieces")}
                  className="mt-1 rounded bg-[#00d4ff] px-2 py-1 text-xs text-black hover:bg-[#0099cc]"
                >
                  +1
                </button>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#00d4ff]">{data.marketingMetrics.leadsGenerated}</p>
                <p className="text-xs text-zinc-400">Leads Generated</p>
                <button
                  onClick={() => updateMetric("leadsGenerated")}
                  className="mt-1 rounded bg-[#00d4ff] px-2 py-1 text-xs text-black hover:bg-[#0099cc]"
                >
                  +1
                </button>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#00d4ff]">{data.marketingMetrics.outreachMessages}</p>
                <p className="text-xs text-zinc-400">Outreach Messages</p>
                <button
                  onClick={() => updateMetric("outreachMessages")}
                  className="mt-1 rounded bg-[#00d4ff] px-2 py-1 text-xs text-black hover:bg-[#0099cc]"
                >
                  +1
                </button>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#00d4ff]">{data.marketingMetrics.clientCalls}</p>
                <p className="text-xs text-zinc-400">Client Calls</p>
                <button
                  onClick={() => updateMetric("clientCalls")}
                  className="mt-1 rounded bg-[#00d4ff] px-2 py-1 text-xs text-black hover:bg-[#0099cc]"
                >
                  +1
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#1a1a1a] bg-[#111111] p-6">
            <h2 className="mb-4 text-xl font-semibold">Financial Overview</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-400">Wedding Fund Target</p>
                <p className="text-lg font-semibold text-[#00d4ff]">$75,000</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Current Progress</p>
                <p className="text-lg font-semibold">${totalRevenue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Remaining</p>
                <p className="text-lg font-semibold text-yellow-400">
                  ${Math.max(0, 75000 - totalRevenue).toLocaleString()}
                </p>
              </div>
              <div className="rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] p-3">
                <p className="text-xs font-medium text-zinc-400">Monthly Income Trend</p>
                <p className="text-sm text-zinc-300">Track manually in Revenue Tracker above</p>
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
  );
}