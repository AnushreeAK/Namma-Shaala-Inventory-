import { useNavigate } from 'react-router-dom';
import { Package, Wrench, AlertCircle, ClipboardCheck, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="py-6 space-y-8">
      {/* Welcome Section */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800">Welcome back, Teacher</h2>
        <p className="text-slate-500">Here is the current status of your classroom assets.</p>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-brand-surface-container-low p-6 rounded-2xl border border-brand-outline-variant shadow-sm space-y-4"
        >
          <div className="flex justify-between items-start">
            <Package className="text-brand-primary w-8 h-8" />
            <span className="bg-brand-primary-container text-brand-on-primary-container text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Active</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">Total Assets</p>
            <p className="text-3xl font-bold text-slate-800">142</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-brand-surface-container-low p-6 rounded-2xl border border-brand-outline-variant shadow-sm space-y-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1.5 h-full bg-amber-400"></div>
          <div className="flex justify-between items-start">
            <Wrench className="text-amber-600 w-8 h-8" />
            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Warning</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">Items Needing Repair</p>
            <p className="text-3xl font-bold text-slate-800">12</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-brand-surface-container-low p-6 rounded-2xl border border-brand-outline-variant shadow-sm space-y-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1.5 h-full bg-brand-error"></div>
          <div className="flex justify-between items-start">
            <AlertCircle className="text-brand-error w-8 h-8" />
            <span className="bg-brand-error-container text-brand-on-error-container text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Critical</span>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-tight">Broken Items</p>
            <p className="text-3xl font-bold text-slate-800">4</p>
          </div>
        </motion.div>
      </div>

      {/* Progress Section */}
      <section className="bg-brand-surface-container rounded-2xl p-6 space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Asset Verification Progress</h3>
        <div className="w-full bg-brand-outline-variant h-3 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '72%' }}
            transition={{ duration: 1 }}
            className="bg-brand-primary h-full"
          />
        </div>
        <div className="flex justify-between text-sm font-medium text-slate-500">
          <span>72% Verified</span>
          <span>102 / 142 Items</span>
        </div>
      </section>

      {/* Visual Context */}
      <div 
        className="rounded-2xl overflow-hidden h-48 md:h-64 relative group cursor-pointer shadow-md"
        onClick={() => navigate('/audit-report')}
      >
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGogC5uEGdcKfZL9DWc1FBtdoDWae-sdR6pGgZdWVixms-zKMc2avInQrEtJMISFpFXHcmwzQDwUTzeftlrj70l-mf6Mz5_ZLaSIqKMbb0NbbLcRRBTiwVnUKPRDIfu1Ty5zMaCoRhicPP8lrHVmRxN6fQTRz-jg8vyzwFyoXGonIh9tE5vsbpLkE5FpsQ-REyTRc48ovcz-Obx7G54Z_N0P2jqjxua8araVlF5Pmx16jzVEbD6_6MTmKw01YdjCicJ19moDqYbHV9" 
          alt="Lab Storage" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <p className="text-white text-xl font-semibold">Main Laboratory Storage - Section A</p>
        </div>
      </div>

      {/* FABs */}
      <div className="fixed bottom-24 right-4 md:right-8 flex flex-col gap-4 items-end z-40">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/audit-report')}
          className="bg-brand-secondary-container text-brand-on-secondary-container px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold hover:bg-brand-surface-container-high transition-all"
        >
          <ClipboardCheck className="w-5 h-5" />
          <span>Monthly Audit</span>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/live-audit')}
          className="bg-brand-primary text-white px-8 py-5 rounded-full shadow-xl flex items-center gap-3 font-semibold hover:opacity-95 transition-all"
        >
          <QrCode className="w-6 h-6" />
          <span>Quick Scan</span>
        </motion.button>
      </div>
    </div>
  );
}
