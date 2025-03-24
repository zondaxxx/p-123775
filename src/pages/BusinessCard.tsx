
import React, { useEffect, useState } from "react";
import { Github, Globe, Mail, Terminal, Zap, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const BusinessCard = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setEmailCopied(true);
    toast.success("Email copied to clipboard!");
    
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  // Эффект для создания анимированных частиц на фоне
  useEffect(() => {
    const canvas = document.getElementById("particles") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Настройка размера canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Параметры частиц
    const particlesArray: Particle[] = [];
    const numberOfParticles = 150; // Increased number of particles

    // Класс для частиц
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulse: boolean;
      pulseRate: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Более насыщенные синие оттенки для частиц
        const blueShades = [
          'rgba(0, 122, 255, ', // Яркий синий
          'rgba(10, 132, 255, ', // Насыщенный синий
          'rgba(65, 105, 225, ', // Королевский синий
          'rgba(0, 71, 171, ', // Глубокий синий
        ];
        
        this.color = blueShades[Math.floor(Math.random() * blueShades.length)];
        this.opacity = Math.random() * 0.5 + 0.1;
        this.pulse = Math.random() > 0.5;
        this.pulseRate = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
        
        // Пульсирующий эффект
        if (this.pulse) {
          this.opacity += this.pulseRate;
          if (this.opacity >= 0.6 || this.opacity <= 0.1) {
            this.pulseRate = -this.pulseRate;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Инициализация частиц
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    init();

    // Анимация частиц
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Линии между близкими частицами
      connectParticles();
      requestAnimationFrame(animate);
    };

    // Соединение близких частиц линиями
    const connectParticles = () => {
      if (!ctx) return;
      let opacity = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) { // Increased connection distance
            opacity = 1 - (distance / 150);
            ctx.strokeStyle = `rgba(52, 152, 219, ${opacity * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap"
        rel="stylesheet"
      />
      
      {/* Фон с частицами */}
      <canvas id="particles" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>
      
      <div
        className="min-h-screen w-full bg-black bg-opacity-95 flex items-center justify-center p-4"
        style={{ fontFamily: "'Unbounded', sans-serif" }}
      >
        <div className="w-full max-w-[800px]"> {/* Increased max-width */}
          <div className="relative backdrop-blur-sm bg-[rgba(5,15,35,0.6)] rounded-3xl overflow-hidden p-10 shadow-[0_0_40px_rgba(0,122,255,0.2)]"> {/* Increased padding */}
            {/* Animated running border with glow effect */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-transparent border-[1px] border-[rgba(0,122,255,0)] rounded-3xl"></div>
              
              {/* Top running line */}
              <div className="absolute top-0 left-0 h-[2px] w-full">
                <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-[#007AFF] to-transparent animate-[border-run-x_3s_linear_infinite] shadow-[0_0_8px_#007AFF]"></div>
              </div>
              
              {/* Right running line */}
              <div className="absolute top-0 right-0 h-full w-[2px]">
                <div className="absolute top-[-100%] right-0 h-full w-full bg-gradient-to-b from-transparent via-[#007AFF] to-transparent animate-[border-run-y_3s_linear_infinite_0.75s] shadow-[0_0_8px_#007AFF]"></div>
              </div>
              
              {/* Bottom running line */}
              <div className="absolute bottom-0 right-0 h-[2px] w-full">
                <div className="absolute bottom-0 right-[-100%] h-full w-full bg-gradient-to-l from-transparent via-[#007AFF] to-transparent animate-[border-run-x-reverse_3s_linear_infinite_1.5s] shadow-[0_0_8px_#007AFF]"></div>
              </div>
              
              {/* Left running line */}
              <div className="absolute bottom-0 left-0 h-full w-[2px]">
                <div className="absolute bottom-[-100%] left-0 h-full w-full bg-gradient-to-t from-transparent via-[#007AFF] to-transparent animate-[border-run-y-reverse_3s_linear_infinite_2.25s] shadow-[0_0_8px_#007AFF]"></div>
              </div>
            </div>
            
            {/* Keep the existing decorative corners, but remove the border since we have the running border now */}
            <div className="absolute w-10 h-10 rounded-[8px_0_0_0] border-l-2 border-t-2 border-solid border-[#007AFF] left-[21px] top-[21px] z-10 animate-pulse"></div>
            <div className="absolute w-10 h-10 rounded-[0_8px_0_0] border-r-2 border-t-2 border-solid border-[#007AFF] right-[21px] top-[21px] z-10 animate-pulse"></div>
            <div className="absolute w-10 h-10 rounded-[0_0_0_8px] border-l-2 border-b-2 border-solid border-[#007AFF] left-[21px] bottom-[21px] z-10 animate-pulse"></div>
            <div className="absolute w-10 h-10 rounded-[0_0_8px_0] border-r-2 border-b-2 border-solid border-[#007AFF] right-[21px] bottom-[21px] z-10 animate-pulse"></div>
            
            {/* Светящийся шар для эффекта */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#007AFF] opacity-15 blur-[80px] -left-20 -top-20"></div>
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#0047AB] opacity-15 blur-[60px] right-0 bottom-0"></div>
            
            <div className="relative z-10">
              {/* Верхняя часть визитки */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12"> {/* Increased gap and margin */}
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center p-2 px-4 mb-4 bg-[#007AFF]/20 rounded-full backdrop-blur-md">
                    <Terminal className="w-4 h-4 mr-2 text-[#007AFF]" />
                    <span className="text-white text-sm">Full-Stack Developer</span>
                  </div>
                  <h1 className="text-white text-5xl md:text-6xl font-bold mb-3 animate-[slideInRight_0.7s_ease-out_forwards]"> {/* Increased text size */}
                    Zondaxxx
                  </h1>
                  <p className="text-[#66a3ff] text-xl md:text-2xl animate-[fadeIn_0.7s_ease-out_0.3s_both]"> {/* Increased text size */}
                    Создаю инновационные веб-решения
                  </p>
                </div>
                
                <div className="relative group transition-all duration-300 hover:scale-105">
                  <div className="w-[150px] h-[150px] rounded-xl bg-gradient-to-br from-[#0047AB] to-[#007AFF] flex items-center justify-center text-white text-6xl font-bold shadow-lg shadow-[#007AFF]/20 relative overflow-hidden"> {/* Increased size and text */}
                    Z
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(0,122,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span className="absolute -bottom-2 -right-2">
                      <Zap className="w-8 h-8 text-[#007AFF] filter drop-shadow-[0_0_3px_rgba(0,122,255,0.8)]" /> {/* Increased icon size */}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Разделитель */}
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,122,255,0.4)] to-transparent my-8"></div> {/* Increased margin */}
              
              {/* Навыки */}
              <div className="mb-10 animate-[fadeIn_0.7s_ease-out_0.5s_both]"> {/* Increased margin */}
                <h3 className="text-white text-2xl mb-5">Технические навыки</h3> {/* Increased text size and margin */}
                <div className="flex flex-wrap gap-3"> {/* Increased gap */}
                  {["Django", "HTML", "Node.js", "Python", "AWS", "Docker"].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-[rgba(5,15,35,0.7)] text-[#66a3ff] rounded-full text-base hover:bg-[#007AFF]/30 transition-all duration-300 cursor-default border border-[#007AFF]/20" {/* Increased padding and font size */}
                      style={{ 
                        animationDelay: `${700 + index * 100}ms`,
                        animation: 'fadeIn 0.5s ease-out forwards'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Контакты */}
              <div className="animate-[fadeIn_0.7s_ease-out_0.7s_both]">
                <h3 className="text-white text-2xl mb-5">Свяжитесь со мной</h3> {/* Increased text size and margin */}
                <div className="flex flex-wrap gap-6"> {/* Increased gap */}
                  <a 
                    href="https://github.com/zondaxxx" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#66a3ff] hover:text-[#007AFF] transition-colors duration-300 flex items-center group"
                  >
                    <Github className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" /> {/* Increased icon size */}
                    <span className="relative overflow-hidden text-lg"> {/* Increased text size */}
                      <span className="inline-block">github.com/zondaxxx</span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#007AFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </a>
                  <button 
                    onClick={() => copyToClipboard("zondaxxx@example.com")} 
                    className="text-[#66a3ff] hover:text-[#007AFF] transition-colors duration-300 flex items-center group"
                  >
                    <Mail className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" /> {/* Increased icon size */}
                    <span className="relative overflow-hidden text-lg flex items-center"> {/* Increased text size */}
                      <span className="inline-block">zondaxxx@example.com</span>
                      {emailCopied ? (
                        <Check className="ml-2 w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="ml-2 w-5 h-5 opacity-50 group-hover:opacity-100" />
                      )}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#007AFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </button>
                  <a 
                    href="https://zondaxxx.dev" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#66a3ff] hover:text-[#007AFF] transition-colors duration-300 flex items-center group"
                  >
                    <Globe className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" /> {/* Increased icon size */}
                    <span className="relative overflow-hidden text-lg"> {/* Increased text size */}
                      <span className="inline-block">zondaxxx.dev</span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#007AFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
