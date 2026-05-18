import { useState } from 'react';
import { CheckCircle2, Wrench, AlertTriangle, SkipForward, Info, Microscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function LiveAudit() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const mockAsset = {
    name: 'Digital Microscope X-400',
    id: 'SL-MC-204',
    location: 'Shelf 4B',
    category: 'Lab Equipment',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEvTv81AqSy-S1gpP6-HISbNfLK5w3NPcq3Jfl9Tg40LVARbLj82C9VenAG6lJwMleI928qytDAhi4fJNR_mMfN2f_gss3sKMvdA4Y-EfCGijDIEmyhDBN6S9QiHR_MmNonnOxr9h5IQGTi_dt5WD_3t8QsA_MEXeeQ3nACVBA03_celGgo2qqLVZhNooIe-FpL156vnFDrIPDsfPlYbbOxra70AtJbeXToDSw1LhyHemp3ivv3qzVZXgRgBvLI8VZM6ZLATRZnnIB',
    history: 'Last checked 32 days ago. Previously marked as Excellent.'
  };

  const handleAction = () => {
    // In a real app, this would save to database
    setStep(s => s + 1);
  };

  return (
    <div className="py-6 min-h-[calc(100vh-160px)] flex flex-col justify-center max-w-lg mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Audit Header Progress */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
             <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Monthly Audit: Science Lab</h3>
             <p className="text-xs font-semibold text-brand-primary">12 / 45 Assets Verified</p>
          </div>
          <span className="text-xl font-bold text-brand-primary">26%</span>
        </div>
        <div className="h-2 w-full bg-brand-surface-container-high rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '26%' }}
            className="h-full bg-brand-primary rounded-full"
          />
        </div>
      </div>

      {/* Main Asset Card */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-brand-surface-container-low rounded-3xl p-6 border border-brand-outline-variant shadow-xl space-y-6 relative overflow-hidden"
        >
          {/* Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-brand-secondary-container text-brand-on-secondary-container px-4 py-1.5 rounded-xl font-bold text-[10px] uppercase tracking-widest border border-brand-on-secondary-container/10 shadow-sm">
              {mockAsset.category}
            </span>
          </div>

          {/* Image */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden bg-brand-surface-container border border-brand-outline-variant/30">
            <img 
              className="w-full h-full object-cover" 
              src={mockAsset.imageUrl} 
              alt={mockAsset.name} 
            />
          </div>

          {/* Info */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-slate-800">{mockAsset.name}</h2>
            <div className="flex justify-center items-center gap-3 text-slate-500 font-semibold text-sm">
              <span>ID: {mockAsset.id}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span>Location: {mockAsset.location}</span>
            </div>
          </div>

          {/* Context Note */}
          <div className="bg-brand-surface-container p-4 rounded-2xl border border-brand-outline-variant/40 flex gap-3 items-center">
            <Info className="w-5 h-5 text-brand-primary flex-shrink-0" />
            <p className="text-sm italic text-slate-600 leading-relaxed font-medium">"{mockAsset.history}"</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Rapid Actions */}
      <div className="grid grid-cols-1 gap-4 pb-12">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAction}
          className="flex items-center justify-between bg-emerald-600 hover:bg-emerald-700 text-white p-6 rounded-2xl shadow-lg group transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-2 rounded-xl">
              <CheckCircle2 className="w-6 h-6 stroke-[3px]" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-lg font-bold">Working</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest opacity-80">Asset is in good order</span>
            </div>
          </div>
          <SkipForward className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAction}
          className="flex items-center justify-between bg-amber-500 hover:bg-amber-600 text-amber-950 p-6 rounded-2xl shadow-lg group transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="bg-black/10 p-2 rounded-xl">
              <Wrench className="w-6 h-6 stroke-[3px]" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-lg font-bold">Repair Needed</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest opacity-80">Minor issues or cleaning</span>
            </div>
          </div>
          <SkipForward className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAction}
          className="flex items-center justify-between bg-brand-error hover:bg-red-800 text-white p-6 rounded-2xl shadow-lg group transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-2 rounded-xl">
              <AlertTriangle className="w-6 h-6 stroke-[3px]" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-lg font-bold">Missing/Broken</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest opacity-80">Critical failure or lost</span>
            </div>
          </div>
          <SkipForward className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        <button 
          onClick={() => navigate('/')}
          className="py-4 text-slate-400 hover:text-slate-600 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
        >
          Skip this asset for now
          <SkipForward className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
