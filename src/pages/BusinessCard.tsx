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
    const numberOfParticles = 80;

    // Класс для частиц
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(166, 144, 255, ${Math.random() * 0.3 + 0.2})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
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
          
          if (distance < 100) {
            opacity = 1 - (distance / 100);
            ctx.strokeStyle = `rgba(166, 144, 255, ${opacity * 0.2})`;
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
        className="min-h-screen bg-[#2A2A4E] bg-opacity-95 flex items-center justify-center p-4"
        style={{ fontFamily: "'Unbounded', sans-serif" }}
      >
        <div className="w-full max-w-[650px]">
          <div className="relative backdrop-blur-sm bg-[rgba(255,255,255,0.05)] rounded-3xl border border-solid border-[rgba(255,255,255,0.10)] overflow-hidden animate-fade-in p-8">
            {/* Декоративные уголки */}
            <div className="absolute w-10 h-10 rounded-[8px_0_0_0] border-l-2 border-t-2 border-solid border-[#AA79FD] left-[21px] top-[21px] z-10"></div>
            <div className="absolute w-10 h-10 rounded-[0_8px_0_0] border-r-2 border-t-2 border-solid border-[#AA79FD] right-[21px] top-[21px] z-10"></div>
            <div className="absolute w-10 h-10 rounded-[0_0_0_8px] border-l-2 border-b-2 border-solid border-[#AA79FD] left-[21px] bottom-[21px] z-10"></div>
            <div className="absolute w-10 h-10 rounded-[0_0_8px_0] border-r-2 border-b-2 border-solid border-[#AA79FD] right-[21px] bottom-[21px] z-10"></div>
            
            {/* Светящийся шар для эффекта */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#AA79FD] opacity-10 blur-[80px] -left-20 -top-20"></div>
            <div className="absolute w-[200px] h-[200px] rounded-full bg-[#F15BB5] opacity-10 blur-[60px] right-0 bottom-0"></div>
            
            <div className="relative z-10">
              {/* Верхняя часть визитки */}
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-10">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center p-2 px-4 mb-4 bg-[#AA79FD]/20 rounded-full">
                    <Terminal className="w-4 h-4 mr-2 text-[#AA79FD]" />
                    <span className="text-[#E6E6FF] text-sm">Full-Stack Developer</span>
                  </div>
                  <h1 className="text-[#E6E6FF] text-4xl md:text-5xl font-bold mb-2 animate-slide-in-right">
                    Zondaxxx
                  </h1>
                  <p className="text-[#BFBFE0] text-lg md:text-xl animate-fade-in delay-75">
                    Создаю инновационные веб-решения
                  </p>
                </div>
                
                <div className="relative hover-scale">
                  <div className="w-[120px] h-[120px] rounded-xl bg-gradient-to-br from-[#AA79FD] to-[#F15BB5] flex items-center justify-center text-[#E6E6FF] text-4xl font-bold shadow-lg">
                    Z
                    <span className="absolute -bottom-2 -right-2">
                      <Zap className="w-6 h-6 text-[#F15BB5]" />
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Разделитель */}
              <div className="h-[1px] bg-[rgba(255,255,255,0.10)] my-6"></div>
              
              {/* Навыки */}
              <div className="mb-8 animate-fade-in delay-100">
                <h3 className="text-[#E6E6FF] text-xl mb-4">Технические навыки</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-[rgba(255,255,255,0.05)] text-[#BFBFE0] rounded-full text-sm hover:bg-[#AA79FD]/20 transition-colors cursor-default"
                      style={{ animationDelay: `${100 + index * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Контакты */}
              <div className="animate-fade-in delay-200">
                <h3 className="text-[#E6E6FF] text-xl mb-4">Свяжитесь со мной</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="text-[#BFBFE0] hover:text-[#AA79FD] transition-colors flex items-center story-link">
                    <Github className="mr-2 w-5 h-5" />
                    <span>github.com/zondaxxx</span>
                  </a>
                  <a href="#" className="text-[#BFBFE0] hover:text-[#AA79FD] transition-colors flex items-center story-link">
                    <Linkedin className="mr-2 w-5 h-5" />
                    <span>linkedin.com/in/zondaxxx</span>
                  </a>
                  <a href="#" className="text-[#BFBFE0] hover:text-[#AA79FD] transition-colors flex items-center story-link">
                    <Mail className="mr-2 w-5 h-5" />
                    <span>zondaxxx@example.com</span>
                  </a>
                  <a href="#" className="text-[#BFBFE0] hover:text-[#AA79FD] transition-colors flex items-center story-link">
                    <Globe className="mr-2 w-5 h-5" />
                    <span>zondaxxx.dev</span>
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
