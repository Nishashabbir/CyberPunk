
import ContactSystem from "./contactSystem";
import { useEffect, useRef, useState } from "react";
import "./App.css";

import myImage from "./assets/img4.png";

export default function CinematicPortfolioDemo() {

  

  const [activeProject, setActiveProject] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
<div className="min-h-screen bg-[#070A12] text-[#EAEAEA] overflow-hidden relative font-sans">
      {/* BACKGROUND EFFECTS */}
     {/* CLEAN CYBER GLOW BACKGROUND */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(122,92,255,0.18),transparent_60%)]" />
  
  <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(122,92,255,0.12),transparent_60%)]" />
</div>
      {/* LOADER */}
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md animate-fadeOut">
        <div className="w-full max-w-2xl px-6">
          <div className="border border-white/10 bg-[#0b0b10]/80 rounded-2xl p-6 shadow-2xl shadow-[#FF2E88]/10">

            <div className="flex gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF2E88]" />
              <span className="w-2 h-2 rounded-full bg-[#7A5CFF]" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>

            <div className="font-mono text-xs md:text-sm tracking-[0.22em] uppercase space-y-3 text-white/70">
              <p className="opacity-0 animate-line2">&gt;&gt; installing nisha.exe</p>
              <p className="opacity-0 animate-line1">&gt;&gt; boot sequence initiated</p>
              <p className="opacity-0 animate-line3">&gt;&gt; synchronizing visual layer</p>
              <p className="opacity-0 animate-line4">&gt;&gt; establishing secure channel</p>

              <div className="pt-6 border-t border-white/10 opacity-0 animate-identity">
                <p className="text-[#FF2E88] tracking-[0.3em]">identity confirmed!</p>
                <h1 className="text-1xl md:text-5xl font-semibold tracking-[0.3em] text-white">
                  YOU'RE AUTHORIZED!
                </h1>
              </div>
            </div>

            <div className="mt-8 h-[2px] bg-white/10 overflow-hidden rounded">
              <div className="h-full w-full bg-gradient-to-r from-[#FF2E88] via-[#7A5CFF] to-[#FF2E88] animate-scan" />
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-8 md:px-20 mt-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full z-10">

          {/* LEFT */}
          <div className="space-y-8 animate-hero">
            <p className="font-mono text-[#FF2E88] tracking-[0.5em] text-xs">
              // FRONTEND DEVELOPER
            </p>
{/* from here  */}
<div ref={(el) => (cardsRef.current[11] = el)} className="appear relative inline-block">
<p className="font-mono text-[#FF2E88] tracking-[0.6em] text-xs mb-2 mt-3">
  {/* the shadow for the title  */}
</p>
  {/* glitch layer behind */}
  <h1 className="absolute top-0 left-0 text-6xl md:text-7xl font-black leading-[0.9] tracking-tight text-[#FF2E88] opacity-40 blur-[1px] animate-glitchText">
    NISHA<br/>SHABBIR
  </h1>

  {/* main clean layer */}
  <h1 className="relative text-6xl md:text-7xl font-black leading-[0.9] tracking-tight text-white">
    NISHA
    <br />
    SHABBIR
  </h1>

</div>

            <p className="text-white/60 max-w-xl text-lg leading-relaxed">
              Crafting immersive digital experiences where interfaces feel alive and intentional.
            </p>

            <div className="flex gap-4">
              <button  className="px-7 py-3 bg-[#9c0346]  hover:scale-105 transition rounded-xl shadow-lg shadow-[#FF2E88]/25">
              <a href="#system">Enter System</a>  
              </button>
              <button className="px-7 py-3 border border-white/10    hover:bg-white/5 rounded-xl">
              <a href="#git"> View Logs</a> 
              </button>
              
            </div>
          </div>

          {/* RIGHT - IMAGE PANEL */}
          <div ref={(el) => (cardsRef.current[12] = el)} className="appear relative h-[600px] flex items-center justify-center animate-float">

            <div className="absolute w-[420px] h-[420px] bg-[#FF2E88]/15 blur-[140px] rounded-full" /> 
            <div className="absolute w-[320px] h-[320px] bg-[#7A5CFF]/15 blur-[140px] translate-x-10 translate-y-10 rounded-full" />

{/* from here  */}

<div className="group relative w-[320px] h-[500px] overflow-visible rounded-3xl">

  {/* BASE IMAGE */}
  <img
    src={myImage}
    alt="Nisha Shabbir"
    className="glitch-image absolute  w-full h-80 object-cover rounded-full mt-20"
  />
  

  <div className="absolute bottom-62 right-4 text-xs text-[#FF2E88] tracking-[0.3em]">
    -ACTIVE <br /> <div className="ml-3.5">MODE</div> 
  </div>
  {/* WARNING TEXT */}
  <div className="
    absolute right-[-85px] top-1/2 -translate-y-1/2
    opacity-0 transition duration-200
    group-hover:opacity-100
  ">
   
  </div>

</div>



          </div>
        </div>

        
      </section>

      {/* ABOUT ME */}
<section ref={(el) => (cardsRef.current[13] = el)} className="appear relative px-8 md:px-20 py-24 border-t border-white/5">
  <div className="max-w-5xl mx-auto space-y-8">

    <div>
      <p className="font-mono text-[#7A5CFF] tracking-[0.3em] text-xs">
        // ABOUT ME
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        Who I Am
      </h2>
    </div>

    <p className="text-white/60 leading-relaxed max-w-2xl text-lg">
     I’m a frontend developer and cloud technician working at the intersection of user interfaces and cloud systems. I build responsive web experiences while also understanding the infrastructure behind them, focusing on performance, clarity, and scalability. </p>

    <p className="text-white/60 leading-relaxed max-w-2xl text-lg">
My goal is to create fast, scalable, and user-focused websites — especially for e-commerce, personal brands, and business platforms that need both strong visuals and practical functionality. </p>

  </div>
</section>


{/* EDUCATION */}
<section className="relative px-8 md:px-20 py-28 border-t border-white/5">

  <div className="max-w-6xl mx-auto space-y-14">

    {/* HEADER */}
    <div>
      <p className="font-mono text-[#FF2E88]  tracking-[0.3em] text-xs">
        // SYSTEM TRAINING LOG
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        Education Protocol
      </h2>
      <p className="text-white/50 mt-4 max-w-2xl">
        My academic background and technical foundation.
      </p>
    </div>

    {/* TIMELINE */}
    <div className="space-y-8 border-l border-white/10 pl-6">

      {/* ITEM 1 */}
      <div ref={(el) => (cardsRef.current[5] = el)} className="appear relative group">
        <div className="absolute -left-[34px] top-1 w-3 h-3 bg-[#FF2E88] rounded-full shadow-[0_0_10px_#FF2E88]" />
        
        <h3 className="text-lg font-semibold text-white group-hover:text-[#FF2E88] transition">
          Bachelor of Computer Science (BSCS)
        </h3>

        <p className="text-white/60 text-sm mt-1">
          Government Sadiq College Women University ,  Bahawalpur
        </p>

        <p className="text-white/40 text-xs mt-2">
          2024 – Present • Focus: Software Engineering, Operating System ,  Mathematics,  Logics
        </p>
      </div>

      {/* ITEM 2 */}
      <div ref={(el) => (cardsRef.current[6] = el)} className="appear relative group">
        <div className="absolute -left-[34px] top-1 w-3 h-3 bg-[#7A5CFF] rounded-full shadow-[0_0_10px_#7A5CFF]" />
        
        <h3 className="text-lg font-semibold text-white group-hover:text-[#7A5CFF] transition">
          Certificate in IT Web Development
        </h3>

        <p className="text-white/60 text-sm mt-1">
          National Vocational and technical training commission (NAVTTC) , Pakistan
        </p>

        <p className="text-white/40 text-xs mt-2">
           2025 • Focus: HTML, CSS, JavaScript, React.js , Database , deployment
        </p>
      </div>

      {/* ITEM 3 */}
      <div ref={(el) => (cardsRef.current[7] = el)} className="appear relative group">
        <div className="absolute -left-[34px] top-1 w-3 h-3 bg-white/70 rounded-full" />
        
        <h3 className="text-lg font-semibold text-white group-hover:text-white transition">
          Certificate in Microsoft Azure Fundamentals
        </h3>

        <p className="text-white/60 text-sm mt-1">
          Technical College Bahawalpur , Pakistan
        </p>

        <p className="text-white/40 text-xs mt-2">
            2026 • Focus: Cloud Concepts, Azure Services, virtual machines , Active Directory/ Microsoft Entra ID , Networking Basics
        </p>
      </div>

    </div>
  </div>
</section>

{/* SKILLS */}
<section className="relative px-8 md:px-20 py-28 border-t border-white/5">

  <div className="max-w-6xl mx-auto space-y-14">

    {/* HEADER */}
    <div>
      <p className="font-mono text-[#FF2E88] tracking-[0.3em] text-xs">
        // SKILL MATRIX 
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        Systems I Work With
      </h2>
      <p className="text-white/50 mt-4 max-w-2xl">
        Frontend development combined with cloud understanding and deployment awareness.
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* FRONTEND */}
      <div ref={(el) => (cardsRef.current[8] = el)} className="appear p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition group">

        <h3 className="text-lg font-semibold text-[#FF2E88] tracking-widest">
           CORE Languages
        </h3>

        <div className="mt-6 space-y-3 text-sm text-white/70">

          <p className="hover:text-white transition">HTML5 </p>
          <p className="hover:text-white transition">Tailwind CSS</p>
          <p className="hover:text-white transition">C ++ </p>
          <p className="hover:text-white transition">JavaScript (ES6+)</p>
          <p className="hover:text-white transition">Python  </p>


          <p>Backend very soon </p>
        

        </div>

        <div className="mt-6 h-[2px] bg-gradient-to-r from-[#FF2E88] to-transparent opacity-40" />
      </div>

      {/* CLOUD */}
      <div ref={(el) => (cardsRef.current[9] = el)} className="appear p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition group">

        <h3 className="text-lg font-semibold text-[#7A5CFF] tracking-widest">
          CLOUD & SYSTEMS
        </h3>

        <div className="mt-6 space-y-3 text-sm text-white/70">

          <p className="hover:text-white transition">
            Microsoft Azure <span className="text-[#FF2E88] text-xs">(Certified)</span>
          </p>

          <p className="hover:text-white transition">VMs</p>
          <p className="hover:text-white transition">Microsoft Entra ID / Azure AD</p>
          <p className="hover:text-white transition">Azure Services and Storage</p>
          <p className="hover:text-white transition">Networking Fundamentals</p>

        </div>

        <div className="mt-6 h-[2px] bg-gradient-to-r from-[#7A5CFF] to-transparent opacity-40" />
      </div>

      {/* TOOLS */}
      <div ref={(el) => (cardsRef.current[10] = el)} className="appear p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition group">

        <h3 className="text-lg font-semibold text-white tracking-widest">
          DEVELOPMENT TOOLS
        </h3>

        <div className="mt-6 space-y-3 text-sm text-white/70">

          <p className="hover:text-white transition">Figma</p>
          <p className="hover:text-white transition">Cursor AI </p>
          <p className="hover:text-white transition">VS Code</p>
          <p className="hover:text-white transition">Docker Basics</p>
          <p className="hover:text-white transition">Git / GitHub Desktop</p>

        </div>

        <div className="mt-6 h-[2px] bg-gradient-to-r from-white/20 to-transparent opacity-40" />
      </div>

    </div>

  </div>
</section>

{/* PROJECTS */}

{/* PROJECTS */}
<section className="relative px-8 md:px-20 py-32 border-t border-white/5 overflow-hidden">

  {/* background glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#7A5CFF]/10 blur-[160px] pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="mb-20">
      <p className="font-mono text-[#7A5CFF] tracking-[0.35em] text-xs uppercase">
        // PROJECT ARCHIVE
      </p>

      <h2 id="system" className="mt-5 text-5xl md:text-7xl font-black leading-none tracking-[-0.05em]">
       
        Selected
        <br />
        Systems
    
      </h2>

      <p className="mt-6 text-white/45 max-w-xl text-lg leading-relaxed">
        Interfaces, experiments, interaction systems, and visual concepts
        focused on immersive frontend engineering.
      </p>
    </div>

    {/* MASONRY */}
    <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">

      {/* CARD 1 */}
      <div ref={(el) => (cardsRef.current[0] = el)} className="appear break-inside-avoid rounded-[2rem] border border-white/10 bg-white/[0.03] overflow-hidden group hover:bg-white/[0.05] transition duration-500">

        <div className="h-[320px] overflow-hidden">
          <img
            src={myImage}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        <div className="p-7">
          <p className="text-[#FF2E88] text-xs tracking-[0.25em] font-mono uppercase">
            CINEMATIC UI
          </p>

          <h3 className="mt-4 text-2xl font-bold leading-tight">
            NIIR MOTORS
            <br />
            Aesthetic Car Website
          </h3>

          <p className="mt-4 text-white/50 leading-relaxed text-sm">
           NIIR is a futuristic AI-driven car platform that recommends vehicles based on user needs and budget. It delivers a cinematic, luxury showroom experience with interactive browsing and smooth UI animations.
          </p>

<p className="text-[#7A5CFF]"><a href="https://nishashabbir.github.io/NIIR_CARS/" target="_blank">See Live</a></p>
          <div className="mt-6 flex gap-3 flex-wrap text-xs text-white/35">
            <span>HTML5</span>
            <span>•</span>
            <span>CSS</span>
            <span>•</span>
            <span>Javascript</span>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div ref={(el) => (cardsRef.current[1] = el)} className="appear break-inside-avoid rounded-[2rem] border border-white/10 bg-[#0b0b12] p-8 hover:border-[#FF2E88]/20 transition duration-500">

        <p className="text-[#7A5CFF] text-xs tracking-[0.3em] uppercase font-mono">
          Cart System 
        </p>

        <h3 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.05em]">
          nish
          <br />
          TECH
        </h3>

        <p className="mt-6 text-white/50 leading-relaxed">
          A responsive e-commerce cart system for tech devices that allows users to browse products, add items to cart, and manage quantities dynamically. 
        </p>
        <p className="text-[#7A5CFF]"><a href="https://nishashabbir.github.io/nishTEC/" target="_blank">View Live</a></p>


        <div className="mt-10 h-[1px] bg-gradient-to-r from-[#7A5CFF] to-transparent opacity-40" />

       <div className="mt-6 flex gap-3 flex-wrap text-xs text-white/35">
            <span>HTML5</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Javascript</span>
          </div>
      </div>

      {/* TALL CARD */}
      <div ref={(el) => (cardsRef.current[2] = el)} className="appear break-inside-avoid rounded-[2rem] overflow-hidden border border-white/10 relative min-h-[520px] group">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />

        <img
          src={myImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-1000"
        />

        <div className="relative z-20 p-8 flex flex-col justify-end min-h-[520px]">

          <p className="text-white/40 text-xs tracking-[0.3em] font-mono uppercase">
            VISUAL ENGINEERING
          </p>

          <h3 className="mt-5 text-4xl font-black leading-none">
            Interactive
            <br />
            SEO
            <br />
            Website
          </h3>

          <p className="mt-5 text-white/60 text-sm max-w-sm">
            A professional SEO and digital marketing website built with a modern, business-focused interface. Developed to demonstrate clean UI design and professional web presentation. </p>
            <p className="text-[#7A5CFF]"><a href="https://nishashabbir.github.io/seo-site/" target="_blank" rel="noopener noreferrer">View Live</a></p>
        </div>

       
      </div>

      {/* SMALL WIDE CARD */}
      <div ref={(el) => (cardsRef.current[3] = el)} className="appear break-inside-avoid rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition">

        <div className="flex items-center justify-between">
          <p className="text-white/40 text-xs font-mono tracking-[0.3em] uppercase">
            Dashboard
          </p>

          <div className="w-3 h-3 rounded-full bg-[#FF2E88] animate-pulse" />
        </div>

        <h3 className="mt-8 text-3xl font-bold leading-tight">
          Weather
          <br />
          Forcast APP
        </h3>

        <p className="mt-5 text-white/50 text-sm leading-relaxed">
          A sleek weather dashboard powered by live API data, delivering real-time forecasts with an aesthetic and minimal UI. It provides location-based weather insights. Built to demonstrate API integration and modern frontend dashboard design.
        </p>
                    <p className="text-[#7A5CFF]"><a href="https://nishashabbir.github.io/WEATHER_APP/" target="_blank" rel="noopener noreferrer">View Live</a></p>


      </div>

      {/* GLASS CARD */}
      <div ref={(el) => (cardsRef.current[4] = el)} className="appear break-inside-avoid rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">

        <p className="text-[#FF2E88] font-mono text-xs tracking-[0.3em] uppercase">
          FUTURE SYSTEMS
        </p>

        <h3 className="mt-5 text-3xl md:text-4xl font-black leading-[1]">
          AI +
          <br />
          Automation
        </h3>

        <p className="mt-6 text-white/50 leading-relaxed">
          Expanding toward intelligent interfaces, automation systems,
          AI-enhanced experiences, and modern business platforms.
        </p>

        <div className="mt-10 flex gap-2">
          <div className="h-1 w-10 bg-[#FF2E88]" />
          <div className="h-1 w-20 bg-white/10" />
          <div className="h-1 w-6 bg-[#7A5CFF]" />
        </div>
      </div>

    </div>
  </div>
</section>


<section className="relative px-8 md:px-20 py-32 border-t border-white/5 overflow-hidden">

  {/* glow */}
  <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#7A5CFF]/10 blur-[140px] rounded-full pointer-events-none" />

  <div className="max-w-6xl mx-auto">

    {/* small label */}
    <p className="font-mono text-[#FF2E88] tracking-[0.3em] text-xs">
      // OPEN SOURCE ARCHIVE
    </p>

    {/* giant heading */}
    <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-10">

      <div>
        <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight" id="git">
          More Projects
          <br />
          On GitHub
        </h2>

        <p className="mt-6 text-white/50 max-w-xl leading-relaxed">
          Explore experiments, frontend systems, UI architecture,
          motion concepts, and future full-stack builds currently
          evolving inside my development workspace.
        </p>
      </div>

      {/* github button */}
      <a
        href="https://github.com/NishaShabbir"
        target="_blank"
        className="
          group
          flex items-center gap-4
          px-8 py-5
          rounded-2xl
          border border-white/10
          bg-white/5
          hover:bg-white/10
          transition
          backdrop-blur-xl
        "
      >

        {/* github icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 text-white"
        >
          <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.84c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.46.11 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.03 10.03 0 0022 12.23C22 6.58 17.52 2 12 2z"/>
        </svg>

        <div>
          <p className="text-sm text-white/40">
            Access Repository
          </p>

          <p className="font-semibold tracking-wide group-hover:text-[#7A5CFF] transition">
            github.com/NishaShabbir
          </p>
        </div>

      </a>

    </div>
  </div>
</section>

{/* CASE STUDY FLOW */}
<section className="relative px-8 md:px-20 py-28 border-t border-white/5 text-white">

  <div className="max-w-6xl mx-auto space-y-14">

    {/* HEADER */}
    <div>
      <p className="font-mono text-[#7A5CFF] tracking-[0.3em] text-xs">
        // CASE FLOW
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        Thinking Process
      </h2>
    </div>

    {/* FLOW GRID */}
    <div className="grid md:grid-cols-5 gap-4 items-center text-center font-mono">

      <div className="p-4 rounded-xl border border-white/10 bg-white/5">
        <p className="text-[#FF2E88]">01</p>
        <p className="text-sm mt-1">Identify problem</p>
      </div>

      <div className="text-white/30">→</div>

      <div className="p-4 rounded-xl border border-white/10 bg-white/5">
        <p className="text-[#FF2E88]">02</p>
        <p className="text-sm mt-1">Scan </p>
      </div>

      <div className="text-white/30">→</div>

      <div className="p-4 rounded-xl border border-white/10 bg-white/5">
        <p className="text-[#FF2E88]">03</p>
        <p className="text-sm mt-1">Breakdown and simplify</p>
      </div>

    </div>

    <div className="grid md:grid-cols-5 gap-4 items-center text-center font-mono">

      <div className="p-4 rounded-xl border border-white/10 bg-white/5">
        <p className="text-[#FF2E88]">04</p>
        <p className="text-sm mt-1"> Find Solutions</p>
      </div>

      <div className="text-white/30">→</div>

      <div className="p-4 rounded-xl border border-white/10 bg-white/5">
        <p className="text-[#FF2E88]">05</p>
        <p className="text-sm mt-1">Tech</p>
      </div>

    </div>

  </div>

</section>


{/* INTERESTS */}
<section className="relative px-8 md:px-20 py-32 border-t border-white/5 overflow-hidden">

  <div className="max-w-6xl mx-auto">

    <p className="font-mono text-[#7A5CFF] tracking-[0.3em] text-xs mb-6">
      // FUTURE TECH  Directions
    </p>

    <div className="space-y-6">

      <h2 className="text-2xl md:text-4xl font-black leading-[0.95] tracking-tight text-white/90">

        AI AUTOMATION 

        <span className="block text-[#FF2E88]/90 italic font-light">
          Machine Learning
        </span>

        <span className="block text-white/40">
          
        </span>

        <span className="block text-[#7A5CFF]/80">
          Robotics
        </span>

      </h2>

      <p className="max-w-2xl text-white/50 text-lg leading-relaxed mt-10">
      I’m deeply interested in the future of intelligent systems —
especially AI automation, machine learning, and robotics
that can transform how humans interact with technology.
      </p>

      

    </div>
  </div>
</section>

{/* FUTURE DIRECTION */}
<section className="relative px-8 md:px-20 py-32 border-t border-white/5">

  <div className="max-w-5xl mx-auto">

    <p className="font-mono text-[#FF2E88]  tracking-[0.3em] text-xs mb-8">
      // BACKEND DEVELOPMENT SOON 
    </p>

    <div className="space-y-8">

      <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-white/85 max-w-4xl">

        Building the interface first.

        <span className="block text-white/35 mt-3">
          Engineering the systems behind it next.
        </span>

      </h2>

      <p className="text-white/45 text-base md:text-lg leading-relaxed max-w-2xl">
        Currently focused on frontend systems and immersive interfaces,
        while gradually expanding toward backend architecture,
        scalable applications, and intelligent technologies.
      </p>

    </div>

  </div>
</section>
 <ContactSystem />
 <footer className="py-10 text-center text-white/40 text-sm border-t border-white/10">
  <p>© 2026 Nisha Shabbir. All rights reserved.</p>
</footer>


      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes fadeOut {
          0%, 85% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }

        @keyframes hero {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes line {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes identity {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-scan { animation: scan 2.8s linear infinite; }
        .animate-fadeOut { animation: fadeOut 5s forwards; }
        .animate-hero { animation: hero 1.2s ease forwards; animation-delay: 3.5s; opacity: 0; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-line1 { animation: line 0.6s ease forwards; animation-delay: 0.4s; }
        .animate-line2 { animation: line 0.6s ease forwards; animation-delay: 0.9s; }
        .animate-line3 { animation: line 0.6s ease forwards; animation-delay: 1.4s; }
        .animate-line4 { animation: line 0.6s ease forwards; animation-delay: 1.9s; }
        .animate-identity { animation: identity 0.9s ease forwards; animation-delay: 2.5s; }
        @keyframes blinkGlitch {
  0%, 100% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }

  10% {
    opacity: 0;
    transform: translateX(-12px) scale(0.98);
  }

  20% {
    opacity: 1;
    transform: translateX(10px) scale(1.02);
  }

  30% {
    opacity: 0;
    transform: translateX(6px) scale(0.98);
  }

  45% {
    opacity: 1;
    transform: translateX(-5px) scale(1.01);
  }

  55% {
    opacity: 0;
    transform: translateX(-8px) scale(0.97);
  }

  70% {
    opacity: 1;
    transform: translateX(4px) scale(1.01);
  }

  82% {
    opacity: 0;
    transform: translateX(-3px) scale(0.98);
  }

  92% {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.group:hover .glitch-image {
  animation: blinkGlitch 0.6s ease infinite;
}
  @keyframes glitchText {
  0% {
    transform: translate(0,0);
  }
  20% {
    transform: translate(-2px, 1px);
  }
  40% {
    transform: translate(2px, -1px);
  }
  60% {
    transform: translate(-1px, 0px);
  }
  80% {
    transform: translate(1px, 1px);
  }
  100% {
    transform: translate(0,0);
  }
}

.animate-glitchText {
  animation: glitchText 2.5s infinite linear;
}
      `}</style>

    </div>
    
  );
}
