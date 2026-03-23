import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Heart, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Watch, 
  Zap,
  Fingerprint,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Gem
} from 'lucide-react';

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`bento-card ${className}`}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ cn, en, light = false }: { cn: string, en: string, light?: boolean }) => (
  <div className="mb-10">
    <h3 className={`font-serif text-3xl md:text-4xl tech-glow-text ${light ? 'text-white' : 'text-ink'} tracking-tight`}>
      {cn} <span className="font-sans font-light text-xs uppercase tracking-[0.4em] ml-4 opacity-50">{en}</span>
    </h3>
    <div className="h-[2px] w-16 bg-gradient-to-r from-coral to-transparent mt-4 rounded-full" />
  </div>
);

export default function App() {
  // Provided image URL (placeholder for the Sakura Enamel Necklace)
  const productImage = "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=2000";

  return (
    <div className="min-h-screen bg-ivory py-16 px-4 sm:px-6 lg:px-12 selection:bg-coral/20">
      {/* Energy Field Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] energy-field opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] energy-field opacity-40" />
      </div>

      <header className="max-w-[1400px] mx-auto mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-5xl md:text-7xl text-ink mb-6 tech-glow-text tracking-tight">
            Pulxing <span className="font-sans font-light text-3xl text-silver-dark tracking-[0.3em] uppercase ml-4">佩行</span>
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-coral to-transparent mx-auto mb-6" />
          <p className="text-silver-dark tracking-[0.4em] text-xs uppercase font-medium">Futuristic Elegance • Health OS</p>
        </motion.div>
      </header>

      <main className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[minmax(240px,auto)] grid-flow-row-dense relative z-10">
        
        {/* 1. Hero Block */}
        <BentoCard delay={0.1} className="md:col-span-2 lg:col-span-2 row-span-2 bg-white tech-glow-border justify-center overflow-visible">
          <div className="absolute -top-4 -left-4 w-24 h-24 energy-field opacity-60" />
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-coral mb-8 block">核心定位 | Core Positioning</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-8 tech-glow-text">
              将每日服药转化为<br/>一种<span className="gradient-text italic">空灵、优雅</span>的<br/>生活仪式
            </h2>
            <p className="text-silver-dark text-lg leading-relaxed max-w-md font-light">
              一款为都市女性避孕药依从性设计的可穿戴健康执行系统。通过触觉脉冲提醒、微型药仓与行动闭环，彻底解决“知道却做不到”的痛点。
            </p>
          </div>
        </BentoCard>

        {/* 2. Tagline Block */}
        <BentoCard delay={0.2} className="md:col-span-1 lg:col-span-2 row-span-1 bg-enamel-pink justify-center items-center text-center border-none">
          <div className="absolute inset-0 energy-field opacity-30" />
          <h3 className="font-serif italic text-2xl md:text-3xl lg:text-4xl mb-4 text-ink tech-glow-text relative z-10">
            "Turn daily medication into a ritual, not a task."
          </h3>
          <p className="text-silver-dark text-sm md:text-base tracking-[0.2em] font-light uppercase relative z-10">
            身体驱动的行为系统 | Body-Driven System
          </p>
        </BentoCard>

        {/* 3. Product Block */}
        <BentoCard delay={0.3} className="md:col-span-2 lg:col-span-2 row-span-3 bg-white tech-glow-border">
          <SectionTitle cn="产品形态" en="Product Form" />
          
          <div className="mb-10 flex-1 flex flex-col">
            <div className="flex-1 rounded-[2.5rem] bg-silver/10 overflow-hidden relative group border border-silver/20 shadow-inner">
              <img 
                src={productImage} 
                alt="Pulxing Necklace Design" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent" />
              <div className="absolute bottom-8 left-8 flex flex-wrap gap-3">
                <span className="bg-white/90 backdrop-blur-xl px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] text-ink font-bold shadow-sm">
                  珠宝级质感 | Jewelry Grade
                </span>
                <span className="bg-coral/90 backdrop-blur-xl px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] text-white font-bold shadow-sm">
                  内置药仓 | Built-in Compartment
                </span>
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            <li className="group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-8 rounded-full bg-enamel-pink flex items-center justify-center shrink-0">
                  <Gem className="w-4 h-4 text-coral" />
                </div>
                <h4 className="font-bold text-sm text-ink uppercase tracking-widest">时尚项链形态</h4>
              </div>
              <p className="text-xs text-silver-dark leading-relaxed pl-12">融入日常穿搭的极简设计，采用哑光金属与手工掐丝珐琅工艺。</p>
            </li>
            <li className="group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-8 rounded-full bg-enamel-pink flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-coral" />
                </div>
                <h4 className="font-bold text-sm text-ink uppercase tracking-widest">内置微型药仓</h4>
              </div>
              <p className="text-xs text-silver-dark leading-relaxed pl-12">隐秘收纳，支持随身携带。开启结构巧妙、克制且优雅。</p>
            </li>
            <li className="group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-8 rounded-full bg-enamel-pink flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-coral" />
                </div>
                <h4 className="font-bold text-sm text-ink uppercase tracking-widest">触觉脉冲提醒</h4>
              </div>
              <p className="text-xs text-silver-dark leading-relaxed pl-12">无声、私密、不依赖屏幕。通过身体感知触发，告别数字焦虑。</p>
            </li>
            <li className="group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-8 rounded-full bg-enamel-pink flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-coral" />
                </div>
                <h4 className="font-bold text-sm text-ink uppercase tracking-widest">行为闭环设计</h4>
              </div>
              <p className="text-xs text-silver-dark leading-relaxed pl-12">必须完成“取药动作”才能关闭提醒，确保每日依从性。</p>
            </li>
          </ul>
        </BentoCard>

        {/* 4. Experience Block */}
        <BentoCard delay={0.4} className="md:col-span-2 lg:col-span-2 row-span-2 bg-silver text-ink">
          <SectionTitle cn="使用体验" en="Experience" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/50">
              <Sparkles className="w-6 h-6 text-coral mb-4" />
              <h4 className="font-medium text-ink mb-2">无感且优雅</h4>
              <p className="text-xs text-silver-dark leading-relaxed">
                No screen dependency, 告别数字焦虑。仅对佩戴者可见的触觉反馈，保护绝对隐私。
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/50">
              <Activity className="w-6 h-6 text-coral mb-4" />
              <h4 className="font-medium text-ink mb-2">每日仪式感</h4>
              <p className="text-xs text-silver-dark leading-relaxed">
                将服药转化为享受的日常习惯。是时尚配饰，更是守护健康的亲密伙伴。
              </p>
            </div>
          </div>
        </BentoCard>

        {/* 5. User & Pain Block */}
        <BentoCard delay={0.5} className="md:col-span-2 lg:col-span-2 row-span-1 bg-white tech-glow-border">
          <div className="flex flex-col md:flex-row h-full gap-8">
            <div className="flex-1 md:border-r border-silver md:pr-8 flex flex-col justify-center">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-coral mb-4 block">目标用户 | Target User</span>
              <h3 className="font-serif text-2xl text-ink mb-2 tech-glow-text">都市女性 (20-40岁)</h3>
              <p className="text-sm text-silver-dark font-light leading-relaxed">日常服用避孕药，追求生活品质与隐私保护的现代女性。</p>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-coral mb-4 block">核心痛点 | Core Pain Points</span>
              <ul className="space-y-3">
                <li className="text-xs text-ink/80 flex items-center gap-3"><XCircle className="w-4 h-4 text-coral shrink-0"/> 漏服风险高 (可能导致意外怀孕)</li>
                <li className="text-xs text-ink/80 flex items-center gap-3"><XCircle className="w-4 h-4 text-coral shrink-0"/> 传统提醒极易被忽视</li>
                <li className="text-xs text-ink/80 flex items-center gap-3"><XCircle className="w-4 h-4 text-coral shrink-0"/> 对“被提醒”有心理负担</li>
              </ul>
            </div>
          </div>
        </BentoCard>

        {/* 6. Innovation Block */}
        <BentoCard delay={0.6} className="md:col-span-1 lg:col-span-1 row-span-2 bg-enamel-pink border-none">
          <div className="absolute inset-0 energy-field opacity-40" />
          <SectionTitle cn="核心创新" en="Innovation" />
          <div className="space-y-8 flex-1 relative z-10">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 line-through mb-2">提醒工具</p>
              <p className="font-medium text-sm flex items-center gap-3"><ArrowRight className="w-4 h-4 text-coral"/> 身体驱动的行为系统</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 line-through mb-2">认知执行</p>
              <p className="font-medium text-sm flex items-center gap-3"><ArrowRight className="w-4 h-4 text-coral"/> 触觉触发 (Embodied)</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-40 line-through mb-2">医疗器械</p>
              <p className="font-medium text-sm flex items-center gap-3"><ArrowRight className="w-4 h-4 text-coral"/> 生活方式 + 时尚配饰</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-ink/5 relative z-10">
            <p className="text-xs font-bold text-coral uppercase tracking-widest mb-2">让健康行为变成：</p>
            <p className="text-sm font-serif italic text-ink">可感知 · 可享受 · 可持续</p>
          </div>
        </BentoCard>

        {/* 7. Market Block */}
        <BentoCard delay={0.7} className="md:col-span-1 lg:col-span-1 row-span-2 bg-white tech-glow-border">
          <SectionTitle cn="市场机会" en="Market" />
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-10">
              <h3 className="font-serif text-6xl text-ink mb-2 tech-glow-text">1.6<span className="text-2xl">亿+</span></h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-silver-dark font-bold">全球避孕药用户</p>
            </div>
            <div className="space-y-4">
              <div className="bg-silver/10 p-4 rounded-2xl border border-silver/20">
                <p className="text-xs text-ink font-bold uppercase tracking-widest">中国蓝海市场</p>
                <p className="text-[10px] text-silver-dark mt-1">都市女性用户快速增长</p>
              </div>
              <div className="bg-silver/10 p-4 rounded-2xl border border-silver/20">
                <p className="text-xs text-ink font-bold uppercase tracking-widest">高商业价值</p>
                <p className="text-[10px] text-silver-dark mt-1">高风险感知 + 高付费意愿</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* 8. Moat Block */}
        <BentoCard delay={0.8} className="md:col-span-2 lg:col-span-2 row-span-1 bg-ivory border-dashed border-silver-dark/30">
          <SectionTitle cn="竞争壁垒" en="Moat" />
          <div className="flex flex-col md:flex-row gap-8 h-full items-center">
            <div className="flex-1 space-y-3 w-full opacity-50">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-2">现有产品</p>
              <p className="text-xs flex items-center gap-3"><XCircle className="w-4 h-4"/> App (只有提醒，无闭环)</p>
              <p className="text-xs flex items-center gap-3"><XCircle className="w-4 h-4"/> 药盒 (无交互，无美学)</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-silver"></div>
            <div className="flex-1 space-y-3 w-full">
              <p className="text-[10px] uppercase tracking-widest font-bold mb-2 text-coral">Pulxing 佩行</p>
              <p className="text-xs font-bold flex items-center gap-3 text-ink"><CheckCircle2 className="w-4 h-4 text-coral"/> 触觉提醒 + 行为闭环 + 时尚设计</p>
              <p className="text-xs font-bold flex items-center gap-3 text-ink"><CheckCircle2 className="w-4 h-4 text-coral"/> 高粘性 + 高情感价值</p>
            </div>
          </div>
        </BentoCard>

        {/* 9. Vision Block */}
        <BentoCard delay={0.9} className="md:col-span-2 lg:col-span-2 row-span-1 bg-white tech-glow-border overflow-visible">
          <div className="absolute -bottom-12 -right-12 w-48 h-48 energy-field opacity-40" />
          <div className="flex flex-col h-full justify-center relative z-10">
            <SectionTitle cn="产品愿景" en="Vision" />
            <h3 className="font-serif text-3xl text-ink mb-4 tech-glow-text">构建身体驱动的健康执行系统</h3>
            <p className="text-sm text-silver-dark mb-6 font-light leading-relaxed">从避孕药延展至：激素管理 / 慢性病依从性 / 日常健康习惯</p>
            <div className="inline-flex items-center gap-3 text-[10px] font-bold text-white bg-coral px-6 py-2.5 rounded-full uppercase tracking-[0.2em] w-fit">
              <Activity className="w-4 h-4" />
              长期目标：成为女性健康行为操作系统 (Health OS)
            </div>
          </div>
        </BentoCard>

        {/* 10. Business Block */}
        <BentoCard delay={1.0} className="md:col-span-2 lg:col-span-2 row-span-1 bg-silver">
          <SectionTitle cn="商业模式" en="Business" />
          <div className="grid grid-cols-3 gap-6 h-full items-center">
            <div className="text-center p-6 rounded-3xl bg-white/60 border border-white shadow-sm">
              <h4 className="font-bold text-xs text-ink mb-2 uppercase tracking-widest">硬件销售</h4>
              <p className="text-[10px] text-silver-dark">项链设备一次性购买</p>
            </div>
            <div className="text-center p-6 rounded-3xl bg-white/60 border border-white shadow-sm">
              <h4 className="font-bold text-xs text-ink mb-2 uppercase tracking-widest">耗材复购</h4>
              <p className="text-[10px] text-silver-dark">药仓补充与个性配件</p>
            </div>
            <div className="text-center p-6 rounded-3xl bg-white/60 border border-white shadow-sm">
              <h4 className="font-bold text-xs text-ink mb-2 uppercase tracking-widest">长期订阅</h4>
              <p className="text-[10px] text-silver-dark">数据驱动的个性化管理</p>
            </div>
          </div>
        </BentoCard>

        {/* 11. Team Block */}
        <BentoCard delay={1.1} className="md:col-span-3 lg:col-span-4 row-span-1 bg-white tech-glow-border">
          <SectionTitle cn="核心团队" en="Core Team" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-enamel-pink flex items-center justify-center shrink-0 text-coral font-serif text-2xl tech-glow-text">
                Y
              </div>
              <div>
                <h4 className="font-bold text-ink uppercase tracking-widest text-sm">Yanni Zhou <span className="text-[10px] text-coral ml-2 border border-coral/30 px-2 py-0.5 rounded-full">CEO</span></h4>
                <p className="text-[10px] text-silver-dark mt-2 mb-3 leading-relaxed">MPhil, Islamic Art and Architecture, University of Oxford</p>
                <p className="text-xs text-ink/70 leading-relaxed font-light">Background in art, culture, and high-end aesthetics. Focus: vision, brand, and product narrative.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-silver flex items-center justify-center shrink-0 text-ink font-serif text-2xl tech-glow-text">
                T
              </div>
              <div>
                <h4 className="font-bold text-ink uppercase tracking-widest text-sm">Tiffany Truong <span className="text-[10px] text-silver-dark ml-2 border border-silver-dark/30 px-2 py-0.5 rounded-full">Expert</span></h4>
                <p className="text-[10px] text-silver-dark mt-2 mb-3 leading-relaxed">Neuroscience, NYU | DPhil Health Economics, Oxford | Founder of MiChro</p>
                <p className="text-xs text-ink/70 leading-relaxed font-light">Focus: behavioral science, compliance systems, health strategy.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-enamel-pink flex items-center justify-center shrink-0 text-coral font-serif text-2xl tech-glow-text">
                A
              </div>
              <div>
                <h4 className="font-bold text-ink uppercase tracking-widest text-sm">Adithi Rajesh <span className="text-[10px] text-coral ml-2 border border-coral/30 px-2 py-0.5 rounded-full">CTO</span></h4>
                <p className="text-[10px] text-silver-dark mt-2 mb-3 leading-relaxed">MSc Chemistry, Imperial College London</p>
                <p className="text-xs text-ink/70 leading-relaxed font-light">Focus: hardware development, material systems, product engineering.</p>
              </div>
            </div>

          </div>
        </BentoCard>

      </main>

      <footer className="max-w-[1400px] mx-auto mt-24 pb-12 text-center border-t border-silver pt-12">
        <p className="text-silver-dark text-[10px] uppercase tracking-[0.5em] font-medium">© 2026 Pulxing 佩行 • All Rights Reserved</p>
      </footer>
    </div>
  );
}
