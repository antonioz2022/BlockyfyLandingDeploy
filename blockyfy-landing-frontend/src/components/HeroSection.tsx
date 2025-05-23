
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 retro-grid opacity-30" />
      
      {/* Floating Pixels Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-purple animate-pixel-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white animate-neon-pulse">
                <span className="text-neon-purple">Transforming</span> your{" "}
                <span className="text-neon-pink">Minecraft</span> experience
              </h1>
              
              <p className="font-orbitron text-lg md:text-xl text-gray-300 max-w-2xl">
                Original Minecraft mods for players and creators around the world.
              </p>
            </div>

            <Button
              onClick={scrollToAbout}
              className="arcade-button font-pixel text-sm px-8 py-6 text-white hover:text-neon-purple transition-colors"
            >
              Learn more about Blockyfy
            </Button>

            {/* Decorative Elements */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-neon-blue animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Pixel Art */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Pixel Art Container */}
              <div className="w-80 h-80 bg-gradient-to-br from-green-600 to-green-800 relative pixel-border animate-pixel-float">
                {/* Minecraft-style pixel art representation */}
                <div className="absolute inset-4 bg-gradient-to-br from-brown-600 to-brown-800">
                  {/* Grass blocks pattern */}
                  <div className="w-full h-1/3 bg-gradient-to-r from-green-500 to-green-600" />
                  
                  {/* Building blocks */}
                  <div className="grid grid-cols-4 gap-1 p-2 h-2/3">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${
                          i % 3 === 0 ? 'bg-stone-600' : 
                          i % 3 === 1 ? 'bg-stone-500' : 'bg-stone-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue opacity-75 blur-sm -z-10" />
              </div>

              {/* Floating logo/text */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="font-pixel text-neon-purple text-xl animate-neon-pulse">
                  BLOCKYFY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-purple rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
