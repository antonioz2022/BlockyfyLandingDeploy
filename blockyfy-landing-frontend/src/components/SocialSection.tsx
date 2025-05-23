
import { Youtube, Twitter, Instagram } from "lucide-react";

const SocialSection = () => {
  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@BlockyfyStudios",
      color: "bg-red-600 hover:bg-red-500",
      textColor: "text-red-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/blockyfystudios",
      color: "bg-blue-500 hover:bg-blue-400",
      textColor: "text-blue-400"
    },
    {
      name: "TikTok",
      icon: "🎵",
      url: "https://www.tiktok.com/@blockyfystudios",
      color: "bg-pink-600 hover:bg-pink-500",
      textColor: "text-pink-400"
    },
    {
      name: "Patreon",
      icon: "💎",
      url: "https://www.patreon.com/blockyfy",
      color: "bg-orange-600 hover:bg-orange-500",
      textColor: "text-orange-400"
    },
    {
      name: "CurseForge",
      icon: "🔥",
      url: "https://www.curseforge.com/members/blockyfy/projects",
      color: "bg-purple-600 hover:bg-purple-500",
      textColor: "text-purple-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/blockyfy/",
      color: "bg-orange-600 hover:bg-orange-500",
      textColor: "text-orange-400"
    }
  ];

  return (
    <section className="relative py-20 bg-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="retro-grid h-full opacity-10" />
        
        {/* Floating social icons background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-5 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {['💻', '🎮', '⚡', '🌟', '🚀'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <div className="space-y-4">
            <h2 className="font-pixel text-3xl md:text-4xl text-white animate-neon-pulse">
              <span className="text-neon-pink">Connect</span> With Us
            </h2>
            
            <p className="font-orbitron text-gray-400">
              Join our community across all platforms
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="group relative"
              >
                <div className={`arcade-button ${social.color} p-6 text-center transition-all duration-300 hover:scale-105`}>
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    {typeof social.icon === 'string' ? (
                      <span className="text-4xl">{social.icon}</span>
                    ) : (
                      <social.icon size={32} className="text-white" />
                    )}
                  </div>
                  
                  {/* Platform Name */}
                  <div className="font-pixel text-xs text-white group-hover:text-black transition-colors">
                    {social.name}
                  </div>

                  {/* Button Press Effect */}
                  <div className="absolute inset-2 bg-white/10 opacity-0 group-active:opacity-100 transition-opacity rounded" />
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 ${social.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10`} />
                
                {/* Pixel corners */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-3 h-3 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 space-y-4">
            <div className="font-pixel text-neon-green animate-pulse">
              ⚡ STAY UPDATED ⚡
            </div>
            <p className="font-orbitron text-gray-400 max-w-2xl mx-auto">
              Follow us for the latest mod releases, behind-the-scenes content, and community highlights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
