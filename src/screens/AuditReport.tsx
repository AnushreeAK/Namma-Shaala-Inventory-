import { useState, useEffect } from 'react';
import { Sparkles, Download, Share2, TrendingDown, TrendingUp, PieChart, Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AuditReport() {
  const [aiSummary, setAiSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAiSummary = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/audit-summary', { method: 'POST' });
      const data = await res.json();
      setAiSummary(data.summary);
    } catch (err) {
      console.error(err);
      setAiSummary('Failed to load intelligence report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAiSummary();
  }, []);

  return (
    <div className="py-6 space-y-8 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl ai-gradient p-8 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 fill-white" />
              <span className="text-xs font-bold uppercase tracking-widest">Gemini-powered analysis</span>
            </div>
            <h2 className="text-3xl font-bold">Smart Inventory Audit</h2>
            <p className="text-lg opacity-90 leading-relaxed">Leverage advanced AI to synthesize complex audit data into actionable insights for the School Development and Monitoring Committee.</p>
          </div>
          <button 
            onClick={fetchAiSummary}
            disabled={loading}
            className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold shadow-xl hover:bg-brand-primary-container hover:text-white transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Refresh AI Summary'}
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-primary-container/30 rounded-full blur-3xl" />
      </section>

      {/* Report Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Document Content */}
        <div className="md:col-span-8 glass-card rounded-2xl p-8 shadow-sm space-y-8">
          <div className="flex items-center justify-between border-b border-brand-outline-variant pb-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-brand-primary">Executive Summary for SDMC</h3>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-tighter">Generated: {new Date().toLocaleDateString()} • Inventory Cycle 2</p>
            </div>
            <span className="bg-brand-secondary-container text-brand-on-secondary-container px-4 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Official Report</span>
          </div>

          <div className="prose max-w-none text-slate-700 leading-loose space-y-6">
            {loading ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-slate-200 rounded w-3/4" />
                <div className="h-4 bg-slate-200 rounded w-5/6" />
                <div className="h-4 bg-slate-200 rounded w-2/3" />
              </div>
            ) : (
              <div className="whitespace-pre-wrap font-medium">
                {aiSummary || "Generating intelligence report..."}
              </div>
            )}
          </div>

          <div className="pt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 border-2 border-brand-primary text-brand-primary font-bold px-6 py-3 rounded-xl hover:bg-brand-primary/5 transition-all">
              <Download className="w-5 h-5" />
              Export PDF
            </button>
            <button className="flex items-center gap-2 border-2 border-brand-primary text-brand-primary font-bold px-6 py-3 rounded-xl hover:bg-brand-primary/5 transition-all">
              <Share2 className="w-5 h-5" />
              Share with Committee
            </button>
          </div>
        </div>

        {/* Side Panel Stats */}
        <div className="md:col-span-4 space-y-6">
          {/* Progress Visuals */}
          <div className="bg-brand-surface-container rounded-2xl p-6 border border-brand-outline-variant shadow-sm space-y-6">
            <h4 className="font-bold flex items-center gap-2 text-brand-primary">
              <TrendingDown className="w-5 h-5" />
              Funding Gaps
            </h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span>IT Equipment</span>
                  <span className="text-brand-error">42% Deficit</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="bg-brand-error h-full w-[42%]" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span>Furniture</span>
                  <span className="text-brand-on-secondary-container">12% Deficit</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="bg-brand-secondary h-full w-[12%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="bg-slate-800 text-white rounded-2xl p-6 shadow-xl space-y-4">
             <div className="flex items-center gap-2 mb-2">
               <PieChart className="w-5 h-5 text-brand-secondary-container" />
               <p className="font-bold">Asset Distribution</p>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/10 p-4 rounded-xl">
                 <p className="text-2xl font-bold">1.4k</p>
                 <p className="text-[10px] uppercase font-bold opacity-60">Total Items</p>
               </div>
               <div className="bg-white/10 p-4 rounded-xl">
                 <p className="text-2xl font-bold">₹8.2M</p>
                 <p className="text-[10px] uppercase font-bold opacity-60">Net Value</p>
               </div>
             </div>
          </div>

          {/* Verification Photo */}
          <div className="rounded-2xl overflow-hidden h-48 relative shadow-lg group">
             <img 
               className="w-full h-full object-cover grayscale-[0.2]" 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkCN5-gzqRgT2g4Od-X4tdWlJfQJwpX0Lkkggj6FFiRDkcfIdx-C6AJgKet3G7DY-weB2NG6Xo8k6qbWMuHohc5ED3diAFZwvnk9-5KQWHJMeJ-4jDCNFK-RtYh_F0lSrHHqUmStC9zb8stqln2y7SDOGnJoLK35qd4d8Uv12nJ92bvGXaHQlJORZCBdbbshrMGnv2umvw7n6ijEMsb8HfcH0IoHaQ-Ec1E_19cDozyqTMau-N43FwDslXvIRKaEdeV4h6Vfdm3wuG" 
               alt="Lab"
             />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-xs font-bold uppercase">View Site Photo</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
