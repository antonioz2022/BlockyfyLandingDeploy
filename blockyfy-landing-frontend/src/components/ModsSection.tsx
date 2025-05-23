
const ModsSection = () => {
  const upcomingMods = [
    {
      name: "Creative Builder Pro",
      description: "Advanced building tools for architects",
      status: "Coming Soon",
      color: "from-neon-purple to-neon-pink"
    },
    {
      name: "Survival Enhanced",
      description: "Hardcore survival mechanics overhaul",
      status: "In Development",
      color: "from-neon-blue to-neon-green"
    },
    {
      name: "Pixel Realms",
      description: "New dimensions with pixel art themes",
      status: "Coming Soon",
      color: "from-neon-pink to-neon-yellow"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-purple-900">
      {/* Arcade Cabinet Style Background */}
      <div className="absolute inset-0">
        <div className="retro-grid h-full opacity-20" />
        
        {/* Scanlines effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent bg-repeat-y" 
             style={{ backgroundSize: '100% 4px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <div className="space-y-4">
            <h2 className="font-pixel text-3xl md:text-4xl text-white animate-neon-pulse">
              <span className="text-neon-green">Mods</span> Coming Soon
            </h2>
            
            <p className="font-orbitron text-gray-400">
              Select your next adventure
            </p>
            
            {/* Arcade-style divider */}
            <div className="flex justify-center space-x-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-neon-yellow animate-pulse"
                  style={{ animationDelay: `${i * 0.05}s` }}
                />
              ))}
            </div>
          </div>

          {/* Mod Cards - Arcade Cabinet Style */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingMods.map((mod, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Card Container */}
                <div className="arcade-button p-8 h-full">
                  {/* Screen Effect */}
                  <div className={`relative bg-gradient-to-br ${mod.color} p-6 rounded-lg mb-6 overflow-hidden`}>
                    {/* CRT Screen effect */}
                    <div className="absolute inset-0 bg-black/20 bg-gradient-to-r from-transparent via-white/5 to-transparent transform skew-x-12" />
                    
                    {/* Placeholder Game Screen */}
                    <div className="relative h-32 bg-black/30 rounded border-2 border-white/20 flex items-center justify-center">
                      <div className="font-pixel text-white text-lg animate-pulse">
                        MOD_{index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Mod Info */}
                  <div className="space-y-4 text-center">
                    <h3 className="font-pixel text-xl text-white group-hover:text-neon-purple transition-colors">
                      {mod.name}
                    </h3>
                    
                    <p className="font-orbitron text-sm text-gray-400">
                      {mod.description}
                    </p>
                    
                    <div className="inline-block px-4 py-2 bg-neon-purple/20 border border-neon-purple rounded font-pixel text-xs text-neon-purple">
                      {mod.status}
                    </div>
                  </div>

                  {/* Arcade Button Decoration */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-red-700 shadow-lg animate-pulse" />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${mod.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`} />
              </div>
            ))}
          </div>

          {/* Insert Coin Message */}
          <div className="mt-12 text-center">
            <div className="font-pixel text-neon-yellow animate-pulse text-lg">
              ▶ MORE MODS LOADING... ◀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModsSection;
