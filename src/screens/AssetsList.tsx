import { useState } from 'react';
import { Search, Filter, MapPin, User, Wrench, Package, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DUMMY_ASSETS } from '../constants';
import { useNavigate } from 'react-router-dom';

export default function AssetsList() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredAssets = DUMMY_ASSETS.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(search.toLowerCase()) || asset.id.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || asset.category === filter;
    return matchesSearch && matchesFilter;
  });

  const categories = ['All', 'Lab Equipment', 'IT Hardware', 'Furniture'];

  return (
    <div className="py-6 space-y-6">
      {/* Search Header */}
      <div className="sticky top-16 bg-brand-surface pt-2 pb-4 z-40 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search assets by name or ID..."
            className="w-full pl-12 pr-12 py-3.5 bg-brand-surface-container-low border border-brand-outline-variant rounded-2xl focus:ring-2 focus:ring-brand-primary outline-none transition-all font-medium text-slate-800 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-brand-primary hover:bg-brand-primary-container/10 rounded-xl transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                filter === cat 
                ? 'bg-brand-primary text-white shadow-md' 
                : 'bg-brand-surface-container-high text-slate-600 hover:bg-brand-outline-variant'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Assets List */}
      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredAssets.map((asset) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={asset.id}
              className="bg-brand-surface-container-low border border-brand-outline-variant rounded-2xl p-4 flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group active:scale-[0.98]"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-brand-surface-container flex-shrink-0 border border-brand-outline-variant">
                <img src={asset.imageUrl} alt={asset.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              </div>
              
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-slate-800 truncate">{asset.name}</h3>
                  <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
                    asset.status === 'working' ? 'bg-green-100 text-green-700' : 'bg-brand-error-container text-brand-on-error-container'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${asset.status === 'working' ? 'bg-green-500' : 'bg-brand-error'}`} />
                    {asset.status}
                  </span>
                </div>
                
                <p className="text-xs font-medium text-slate-500 mt-1">ID: {asset.id}</p>
                
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-semibold">{asset.location}</span>
                  </div>
                  {asset.assignedTo && (
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <User className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-semibold">{asset.assignedTo}</span>
                    </div>
                  )}
                  {asset.status === 'broken' && (
                    <div className="flex items-center gap-1.5 text-brand-error">
                      <Wrench className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase">Fix Required</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Action for Adding */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/add-asset')}
        className="fixed right-6 bottom-24 w-15 h-15 bg-brand-primary text-white rounded-full shadow-xl flex items-center justify-center hover:opacity-95 transition-all z-50 border-4 border-brand-surface"
      >
        <QrCode className="w-7 h-7" />
      </motion.button>
    </div>
  );
}
