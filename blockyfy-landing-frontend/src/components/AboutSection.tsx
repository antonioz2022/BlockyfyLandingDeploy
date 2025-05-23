
const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="retro-grid h-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="font-pixel text-3xl md:text-4xl text-neon-purple animate-neon-pulse">
              About Blockyfy
            </h2>
            
            {/* Decorative line */}
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-neon-pink animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="font-orbitron text-xl md:text-2xl text-gray-300 leading-relaxed">
              We're a team of gamers building mods that push Minecraft's creativity forward.
            </p>
            
            <p className="font-orbitron text-lg text-neon-blue font-semibold">
              Built by gamers, for gamers.
            </p>
          </div>

          {/* Visual Elements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: "Originality", icon: "🎯" },
              { label: "Creativity", icon: "🎨" },
              { label: "Quality", icon: "⭐" },
              { label: "Community", icon: "🤝" }
            ].map((item, i) => (
              <div key={i} className="arcade-button p-6 text-center group">
                <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                  {item.icon}
                </div>
                <div className="font-pixel text-sm text-gray-300 group-hover:text-neon-purple transition-colors">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
