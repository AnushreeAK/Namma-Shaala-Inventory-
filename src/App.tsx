/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { School, LayoutDashboard, Database, Bell, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Dashboard from './screens/Dashboard';
import AssetsList from './screens/AssetsList';
import AddAsset from './screens/AddAsset';
import AuditReport from './screens/AuditReport';
import LiveAudit from './screens/LiveAudit';

function TopBar() {
  return (
    <header className="bg-brand-surface border-b border-brand-outline-variant flex justify-between items-center px-4 md:px-8 h-16 w-full z-50 fixed top-0">
      <div className="flex items-center gap-3">
        <School className="text-brand-primary w-6 h-6" />
        <h1 className="font-semibold text-xl text-brand-primary">Namma-Shaale</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-brand-surface-container-high transition-colors">
          <Bell className="w-5 h-5 text-slate-600" />
        </button>
        <div className="w-9 h-9 rounded-full bg-brand-primary-container flex items-center justify-center border border-brand-outline-variant overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxlV7e0wnMPpRlwQyTgAE5jidPJ1WEge0r67MJXW4G7hMi0u7SYHb_vJmcc2dSS9unNZt-wr7lR2mY7FhMomGyX5bhF9SpqEZQMDUBy4-1M2Q105MdnEawFeZfL7i3vUxgxo2Jl1k68jRkIOKVvm0xreKzOuAnngHeK7wUNjZJblr4dLRvzB0_BYaavmrEeHTujMFQoDDFknMHRKwfhtOZtx3GiYbp-laiTdUswuhK0lGlmqprhLCn088VIaIu-NgyWfmcodM0MwRY" 
            alt="User" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </header>
  );
}

function BottomNav() {
  const location = useLocation();
  const activeTab = location.pathname;

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-20 px-2 pb-safe bg-brand-surface-container-low border-t border-brand-outline-variant rounded-t-2xl shadow-lg md:max-w-md md:left-1/2 md:-translate-x-1/2">
      <Link 
        to="/" 
        className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all active:scale-95 ${
          activeTab === '/' ? 'bg-brand-secondary-container text-brand-on-secondary-container' : 'text-slate-500'
        }`}
      >
        <LayoutDashboard className="w-6 h-6" />
        <span className="text-xs font-medium mt-1">Dashboard</span>
      </Link>
      <Link 
        to="/assets" 
        className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all active:scale-95 ${
          activeTab === '/assets' ? 'bg-brand-secondary-container text-brand-on-secondary-container' : 'text-slate-500'
        }`}
      >
        <Database className="w-6 h-6" />
        <span className="text-xs font-medium mt-1">Assets</span>
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen pb-24 md:pb-0">
        <TopBar />
        <main className="pt-16 max-w-7xl mx-auto px-4 md:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/assets" element={<AssetsList />} />
            <Route path="/add-asset" element={<AddAsset />} />
            <Route path="/audit-report" element={<AuditReport />} />
            <Route path="/live-audit" element={<LiveAudit />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

