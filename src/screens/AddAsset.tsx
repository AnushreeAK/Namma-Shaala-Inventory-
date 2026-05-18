import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Barcode, MapPin, Save, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AddAsset() {
  const navigate = useNavigate();

  return (
    <div className="py-6 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2.5 hover:bg-brand-surface-container-high rounded-full transition-all active:scale-90"
        >
          <ArrowLeft className="text-brand-primary w-6 h-6 font-bold" />
        </button>
        <h2 className="text-2xl font-bold text-brand-primary">Add Asset</h2>
      </div>

      {/* Hero / Camera Section */}
      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-black border-4 border-brand-surface-container-highest shadow-xl group">
        <img 
          className="w-full h-full object-cover opacity-70 grayscale-[0.3]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuClVaOYJ5bxxoueNxFLDfOfZKZxiftUab0UjmzGUUgymEfNSH1nhgfQytxNTIAjSUZuUYuI9apZmT8LVexMaRUOV3PPQG6j2Ik9OcwreDlaFI_YU19r99wCOt9eKKaNPVRc-1a79y18rHz2ZQfP5DDwZHWgYUxHQGG4_0CbN1k16o7gTwXi2F6YuPNRyBXZmi1zq6V_2ydPtlV8g8TPyJX8ADiN7tQGQDVGeGoELMGkpGpyOOpmONLmU89n_DcRI2IP30op65s959Kd" 
          alt="Camera Preview" 
        />
        
        {/* Overlay Viewfinder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl flex items-center justify-center">
             {/* Corners */}
             <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-primary rounded-tl-lg"></div>
             <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-brand-primary rounded-tr-lg"></div>
             <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-brand-primary rounded-bl-lg"></div>
             <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-primary rounded-br-lg"></div>
             
             <motion.button 
               whileTap={{ scale: 0.9 }}
               className="bg-brand-primary hover:bg-brand-primary-container text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-10"
             >
               <Camera className="w-8 h-8 fill-current" />
             </motion.button>
          </div>
          <p className="mt-6 text-sm font-bold text-white uppercase tracking-widest drop-shadow-lg">Capture Asset Photo</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-brand-surface-container-low p-8 rounded-3xl border border-brand-outline-variant shadow-sm space-y-8">
        <h3 className="text-xl font-bold text-brand-primary">Asset Details</h3>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1" htmlFor="item-name">Item Name</label>
            <input 
              type="text" 
              id="item-name" 
              placeholder="e.g. Dell Latitude 5420"
              className="w-full h-14 bg-brand-surface border-brand-outline-variant border-2 rounded-2xl px-5 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all font-medium text-slate-800"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1" htmlFor="category">Category</label>
              <div className="relative">
                <select 
                  id="category"
                  className="w-full h-14 bg-brand-surface border-brand-outline-variant border-2 rounded-2xl px-5 appearance-none focus:border-brand-primary outline-none transition-all font-medium text-slate-800"
                >
                  <option value="">Select Category</option>
                  <option value="it">IT Hardware</option>
                  <option value="furniture">Furniture</option>
                  <option value="lab">Lab Equipment</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1" htmlFor="serial">Serial Number</label>
              <div className="relative">
                <input 
                  type="text" 
                  id="serial" 
                  placeholder="SN: XXXXXXXX"
                  className="w-full h-14 bg-brand-surface border-brand-outline-variant border-2 rounded-2xl px-5 focus:border-brand-primary outline-none transition-all font-medium text-slate-800"
                />
                <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-brand-secondary-container text-brand-on-secondary-container rounded-xl hover:opacity-90 transition-all">
                  <Barcode className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1" htmlFor="location">Room Location</label>
            <div className="relative">
              <input 
                type="text" 
                id="location" 
                placeholder="e.g. Science Lab B-12"
                className="w-full h-14 bg-brand-surface border-brand-outline-variant border-2 rounded-2xl px-5 focus:border-brand-primary outline-none transition-all font-medium text-slate-800"
              />
              <MapPin className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>
          </div>
        </form>
      </div>

      {/* Sticky Save Action */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-lg px-6 z-[60]">
        <motion.button 
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-16 bg-brand-primary text-white font-bold text-lg rounded-full shadow-2xl flex items-center justify-center gap-3 hover:shadow-brand-primary/20 transition-all"
        >
          <Save className="w-6 h-6" />
          Save Asset
        </motion.button>
      </div>
    </div>
  );
}
