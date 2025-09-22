import { Instagram, Youtube } from "lucide-react";
import timedevLogo from "../assets/timedev-logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 bg-black rounded-full flex items-center justify-center p-6">
            <img 
              src={timedevLogo} 
              alt="TimeDev Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Project Credits */}
        <div className="flex-1 mx-12">
          <h3 className="text-black font-medium text-lg mb-3 tracking-wide">
            PROJETO REALIZADO POR:
          </h3>
          <div className="space-y-1 text-black text-base leading-snug">
            <div>Maria Eduarda Fernandes Ribeiro</div>
            <div>Gabriel Luis de Lima Ramos</div>
            <div>Matheus</div>
            <div>Manuela Ieme</div>
            <div>Murilo Moreno</div>
            <div>Marco Antonio</div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex-shrink-0 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border-2 border-gray-400 rounded-lg flex items-center justify-center">
              <Instagram size={20} className="text-gray-600" />
            </div>
            <span className="text-black text-base">@timedev_sesisenai</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border-2 border-gray-400 rounded-lg flex items-center justify-center">
              <Youtube size={20} className="text-gray-600" />
            </div>
            <span className="text-black text-base">@TimeDevMangal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;