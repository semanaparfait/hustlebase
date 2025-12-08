
// src/components/AuroraBackground.jsx
const AuroraBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-slate-100 selection:bg-blue-200 overflow-x-hidden">
      
      {/* --- THE BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        
        {/* Blob 1: Top Left - Blue */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        
        {/* Blob 2: Top Right - Cyan */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        
        {/* Blob 3: Bottom Left - Purple/Pink (adds depth) */}
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Blob 4: Center - Subtle Indigo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        
      </div>

      {/* --- YOUR CONTENT GOES HERE --- */}
      <div className="relative z-10">
        {children}
      </div>
      
    </div>
  );
};

export default AuroraBackground;