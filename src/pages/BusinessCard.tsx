
import React, { useEffect } from "react";
import { Github, Globe, Linkedin, Mail, Terminal, Zap } from "lucide-react";

const BusinessCard = () => {
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
    const numberOfParticles = 100;

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
          
          if (distance < 120) {
            opacity = 1 - (distance / 120);
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
      <canvas id="particles" className="absolute top-0 left-0 w-full h-full -z-10"></canvas>
      
      <div
        className="min-h-screen bg-black bg-opacity-95 flex items-center justify-center p-4"
        style={{ fontFamily: "'Unbounded', sans-serif" }}
      >
        <div className="w-full max-w-[650px]">
          <div className="relative backdrop-blur-sm bg-[rgba(5,15,35,0.6)] rounded-3xl border border-solid border-[rgba(0,122,255,0.3)] overflow-hidden p-8 shadow-[0_0_40px_rgba(0,122,255,0.2)]">
            {/* Декоративные уголки */}
            <div className="absolute w-10 h-10 rounded-[8px_0_0_0] border-l-2 border-t-2 border-solid border-[#007AFF] left-[21px] top-[21px] z-10 animate-pulse"></div>
            <div className="absolute w-10 h-10 rounded-[0_8px_0_0] border-r-2 border-t-2 border-solid border-[#007AFF] right-[21px] top-[21px] z-10 animate-pulse"></div>
            <div className="absolute w-10 h-10 rounded-[0_0_0_8px] border-l-2 border-b-2 border-solid border-[#007AFF] left-[21px] bottom-[21px] z-10 animate-pulse"></div>
            <div className="absolute w-10 h-10 rounded-[0_0_8px_0] border-r-2 border-b-2 border-solid border-[#007AFF] right-[21px] bottom-[21px] z-10 animate-pulse"></div>
            
            {/* Светящийся шар для эффекта */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#007AFF] opacity-15 blur-[80px] -left-20 -top-20"></div>
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#0047AB] opacity-15 blur-[60px] right-0 bottom-0"></div>
            
            <div className="relative z-10">
              {/* Верхняя часть визитки */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-10">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center p-2 px-4 mb-4 bg-[#007AFF]/20 rounded-full backdrop-blur-md">
                    <Terminal className="w-4 h-4 mr-2 text-[#007AFF]" />
                    <span className="text-white text-sm">Full-Stack Developer</span>
                  </div>
                  <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 animate-[slideInRight_0.7s_ease-out_forwards]">
                    Zondaxxx
                  </h1>
                  <p className="text-[#66a3ff] text-lg md:text-xl animate-[fadeIn_0.7s_ease-out_0.3s_both]">
                    Создаю инновационные веб-решения
                  </p>
                </div>
                
                <div className="relative group transition-all duration-300 hover:scale-105">
                  <div className="w-[120px] h-[120px] rounded-xl bg-gradient-to-br from-[#0047AB] to-[#007AFF] flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-[#007AFF]/20 relative overflow-hidden">
                    Z
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(0,122,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span className="absolute -bottom-2 -right-2">
                      <Zap className="w-6 h-6 text-[#007AFF] filter drop-shadow-[0_0_3px_rgba(0,122,255,0.8)]" />
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Разделитель */}
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,122,255,0.4)] to-transparent my-6"></div>
              
              {/* Навыки */}
              <div className="mb-8 animate-[fadeIn_0.7s_ease-out_0.5s_both]">
                <h3 className="text-white text-xl mb-4">Технические навыки</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-[rgba(5,15,35,0.7)] text-[#66a3ff] rounded-full text-sm hover:bg-[#007AFF]/30 transition-all duration-300 cursor-default border border-[#007AFF]/20"
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
                <h3 className="text-white text-xl mb-4">Свяжитесь со мной</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="text-[#66a3ff] hover:text-[#007AFF] transition-colors duration-300 flex items-center group">
                    <Github className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="relative overflow-hidden">
                      <span className="inline-block">github.com/zondaxxx</span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#007AFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </a>
                  <a href="#" className="text-[#66a3ff] hover:text-[#007AFF] transition-colors duration-300 flex items-center group">
                    <Linkedin className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="relative overflow-hidden">
                      <span className="inline-block">linkedin.com/in/zondaxxx</span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#007AFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </a>
                  <a href="#" className="text-[#66a3ff] hover:text-[#007AFF] transition-colors duration-300 flex items-center group">
                    <Mail className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="relative overflow-hidden">
                      <span className="inline-block">zondaxxx@example.com</span>
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#007AFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </span>
                  </a>
                  <a href="#" className="text-[#66a3ff] hover:text-[#007AFF] transition-colors duration-300 flex items-center group">
                    <Globe className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="relative overflow-hidden">
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
