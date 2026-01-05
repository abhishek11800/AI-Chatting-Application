import Sidebar from "./sidebar.jsx"
import Topcontainer from "./topcontainer.jsx"
import Maincontainer from "./maincontainer.jsx"

function Layout({ children, userName = 'Abhishek' }) {
  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-16 bg-[#111111] border-r border-[#1f1f1f] flex flex-col items-center py-4 gap-6">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden">

        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        {/* Animated Bubble Background */}
        <div className="absolute bottom-100 left-1/2 -translate-x-1/2 pointer-events-none">
          
          <div className="relative w-96 h-64 mb-8 flex items-center justify-center">

            {/* FLOATING PARTICLES */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-80 h-24">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-cyan-500/20 border border-cyan-400/30 rounded-sm"
                  style={{
                    left: `${Math.random() * 80}%`,
                    top: `${Math.random() * 60}%`,
                    animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                    boxShadow: "0 0 10px rgba(34, 211, 238, 0.25)"
                  }}
                />
              ))}
            </div>

            {/* MAIN BUBBLE */}
            <div className="relative w-96 h-90">
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="borderGradient" x1="0%" y1="0%" x2="50%" y2="70%">
                    <stop offset="0%" stopColor="rgba(34, 211, 238, 0.25)" />
                    <stop offset="50%" stopColor="rgba(20, 184, 166, 0.05)" />
                    <stop offset="100%" stopColor="rgba(34, 211, 238, 0.25)" />
                  </linearGradient>

                  <radialGradient id="bubbleFill" cx="3%" cy="35%">
                    <stop offset="0%" stopColor="rgba(30, 50, 60, 0.03)" />
                    <stop offset="40%" stopColor="rgba(20, 40, 50, 0.08)" />
                    <stop offset="100%" stopColor="rgba(10, 20, 30, 0.05)" />
                  </radialGradient>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d="M100,20 C120,18 142,25 155,40 C168,55 175,70 178,90 C181,110 178,130 168,148 C158,166 145,178 125,185 C105,192 85,190 68,180 C51,170 38,155 28,135 C18,115 15,95 20,75 C25,55 38,35 58,25 C78,15 88,21 100,20 Z"
                  fill="url(#bubbleFill)"
                  stroke="url(#borderGradient)"
                  strokeWidth="0.5"
                  filter="url(#glow)"
                  style={{
                    animation: "morph 2s ease-in-out infinite",
                    filter:
                      "drop-shadow(0 0 15px rgba(34, 211, 238, 0.05)) drop-shadow(0 0 30px rgba(34, 211, 238, 0.05))",
                  }}
                />
              </svg>

              <div
                className="absolute top-[15%] left-[20%] w-32 h-20 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(255, 255, 255, 0.02) 0%, transparent 70%)",
                }}
              />

              <div
                className="absolute inset-8 opacity-20"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.08) 0%, transparent 60%)",
                  filter: "blur(30px)",
                  borderRadius: "45% 55% 60% 40% / 50% 45% 55% 50%",
                }}
              />

              <div
                className="absolute bottom-4 left-8 right-8 h-24"
                style={{
                  background:
                    "radial-gradient(ellipse at bottom, rgba(20, 184, 166, 0.3) 0%, transparent 0%)",
                  filter: "blur(25px)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Actual content */}
        <div className="relative z-10">
          <Topcontainer userName={userName} />
          <Maincontainer userName={userName} />
        </div>

      </main>
    </div>
  )
}

export default Layout