
const Footer = () => {
  return (
    <footer className="relative bg-black py-8 border-t-2 border-neon-purple">
      {/* Background Grid */}
      <div className="absolute inset-0 retro-grid opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main Copyright */}
          <p className="font-orbitron text-gray-400">
            © 2025 Blockyfy Studios. All rights reserved.
          </p>
          
          {/* Pixel Art Divider */}
          <div className="flex justify-center space-x-1 mt-4">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-neon-purple animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-4 space-y-2">
            <p className="font-pixel text-xs text-neon-pink">
              GAME ON • BUILD EPIC • MOD LEGENDARY
            </p>
            
            <div className="flex justify-center space-x-4 text-xs text-gray-500">
              <span>Minecraft Java Edition</span>
              <span>•</span>
              <span>Community Driven</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue animate-pulse" />
    </footer>
  );
};

export default Footer;
