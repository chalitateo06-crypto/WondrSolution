
import React, { useState } from 'react';
import { 
  ArrowRight, Sparkles, Calculator,
} from 'lucide-react';
import { LEVELING_DATA, REWARDS, GROWTH_PRODUCTS } from './constants';
import AIMentor from './components/AIMentor';

const App: React.FC = () => {
  const [activeReward, setActiveReward] = useState('VOUCHER');
  const [depositoAmount, setDepositoAmount] = useState(10000000);

  const monthlyProfit = (depositoAmount * 0.04) / 12;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-[#D9FA50] selection:text-[#005E6A]">
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#D9FA50]/15 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#00CED1]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#005E6A_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75 border-b border-white/20 px-6 sm:px-8 h-20 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-12">
          <div className="flex flex-col cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-3xl font-black italic text-[#00CED1] group-hover:text-[#005E6A] transition-colors">wondr</span>
            <div className="flex items-center gap-1 -mt-1">
               <span className="text-[10px] font-bold text-[#FF8800] uppercase tracking-tighter">by BNI</span>
               <div className="h-[3px] w-6 bg-[#D9FA50] rounded-full transition-all group-hover:w-10"></div>
            </div>
          </div>
          <nav className="hidden lg:flex gap-10 font-bold text-[11px] uppercase tracking-widest text-[#005E6A]/70">
            <button onClick={() => scrollToSection('rewards')} className="hover:text-[#00CED1] transition-colors">Reward</button>
            <button onClick={() => scrollToSection('ai-mentor')} className="hover:text-[#00CED1] transition-colors">AI Mentor</button>
            <button onClick={() => scrollToSection('growth')} className="hover:text-[#00CED1] transition-colors">Growth</button>
          </nav>
        </div>
        <button 
          onClick={() => window.open('https://bni.co.id/id-id/personal/wondr', '_blank')}
          className="bg-[#00CED1] text-white px-6 sm:px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl shadow-[#00CED1]/20 hover:scale-105 transition-transform active:scale-95"
        >
          Download App
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-white/80 border border-[#D9FA50] px-6 py-2.5 rounded-full mb-10 shadow-sm animate-bounce">
          <Sparkles size={14} className="text-[#FF8800]" />
          <span className="text-[11px] font-black uppercase tracking-[0.25em]">Level Up Your Finance</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic text-[#005E6A]">
          AJAK TEMAN, <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8800] via-[#D9FA50] to-[#00CED1] not-italic">RAIH CUAN & INVESTASI.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed italic">
          "Jadilah bagian dari ekosistem eksklusif Mahasiswa & First Jobbers bersama wondr by BNI."
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('ai-mentor')}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest bg-[#D9FA50] flex items-center justify-center gap-3 shadow-2xl hover:bg-[#c9e846] transition-all group"
            >
              Mulai Konsultasi <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
               onClick={() => scrollToSection('rewards')}
               className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest bg-white border-2 border-[#00CED1] text-[#00CED1] hover:bg-[#00CED1] hover:text-white transition-all"
            >
              Lihat Reward
            </button>
        </div>
      </section>

      {/* Rewards & Table Section */}
      <section id="rewards" className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase italic text-[#005E6A]">Skema Progres Reward</h2>
          <div className="w-24 h-2 bg-[#FF8800] mx-auto rounded-full"></div>
        </div>
        
        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-[40px] border border-white shadow-2xl bg-white/50 backdrop-blur-md mb-20">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="bg-[#005E6A] text-white font-black uppercase text-[10px] tracking-[0.2em]">
              <tr>
                <th className="p-8">Level Progres</th>
                <th className="p-8 text-center">User Baru</th>
                <th className="p-8 text-center">Reward/Akun</th>
                <th className="p-8">Bonus Tambahan</th>
              </tr>
            </thead>
            <tbody>
              {LEVELING_DATA.map((t, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-[#D9FA50]/10 transition-colors">
                  <td className="p-8 font-black italic text-[#FF8800]">{t.level}</td>
                  <td className="p-8 text-center font-bold text-slate-500">{t.range}</td>
                  <td className="p-8 text-center font-black text-[#00CED1]">{t.reward}</td>
                  <td className="p-8 italic text-slate-400 font-medium">{t.extra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reward Detail Tabs */}
        <div className="bg-white rounded-[60px] p-10 md:p-20 shadow-2xl border border-slate-50 relative overflow-hidden">
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {Object.keys(REWARDS).map((key) => (
              <button 
                key={key} 
                onClick={() => setActiveReward(key)} 
                className={`px-8 sm:px-12 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all transform ${activeReward === key ? 'bg-[#005E6A] text-white shadow-2xl scale-110' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-500 ease-out">
            <div className={`text-8xl sm:text-9xl p-12 sm:p-16 rounded-[40px] sm:rounded-[60px] shadow-2xl bg-gradient-to-br ${REWARDS[activeReward].color} ${REWARDS[activeReward].shadow} transform hover:scale-110 hover:rotate-6 transition-transform`}>
              {REWARDS[activeReward].visual}
            </div>
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-3xl sm:text-4xl font-black mb-6 uppercase tracking-tighter italic text-[#005E6A]">{REWARDS[activeReward].title}</h3>
              <p className="text-lg text-slate-500 italic leading-relaxed font-medium">"{REWARDS[activeReward].desc}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Mentor Integration */}
      <AIMentor />

      {/* Growth Section */}
      <section id="growth" className="py-24 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase italic text-[#005E6A]">Maksimalkan Tabunganmu</h2>
              <div className="w-24 h-2 bg-[#D9FA50] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <h2 className="text-2xl font-black italic mb-8 uppercase border-l-8 border-[#D9FA50] pl-4">Produk Pilihan</h2>
                {GROWTH_PRODUCTS.map((prod, idx) => (
                  <div key={idx} className="group flex items-center justify-between p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <span className="bg-[#D1F2F2] text-[#008080] text-[9px] font-black px-3 py-1 rounded-full w-fit uppercase tracking-widest">{prod.tag}</span>
                      <h4 className="text-xl font-black text-[#005E6A]">{prod.title}</h4>
                      <p className="text-xs text-slate-400 italic font-medium">{prod.desc}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-[#D9FA50]/20 transition-colors">
                      {prod.icon}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deposito Calculator */}
              <div className="bg-[#005E6A] p-10 rounded-[60px] text-white shadow-2xl border-4 border-[#D9FA50] relative overflow-hidden sticky top-24">
                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                    <Calculator size={180} />
                </div>
                <h3 className="text-2xl font-black italic mb-10 flex items-center gap-3 relative z-10 uppercase tracking-widest">
                  <Calculator className="text-[#D9FA50]" /> Simulasi Deposito
                </h3>
                <div className="space-y-10 relative z-10">
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]">Modal Investasi</label>
                      <span className="text-xl font-black text-[#D9FA50]">Rp {depositoAmount.toLocaleString('id-ID')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000000" 
                      max="100000000" 
                      step="1000000" 
                      value={depositoAmount} 
                      onChange={(e) => setDepositoAmount(parseInt(e.target.value))} 
                      className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer accent-[#D9FA50]" 
                    />
                    <div className="flex justify-between mt-2 text-[10px] font-bold opacity-40">
                      <span>1 JT</span>
                      <span>100 JT</span>
                    </div>
                  </div>

                  <div className="p-8 bg-white/10 rounded-[40px] border border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-colors">
                    <div className="text-[10px] uppercase font-black opacity-60 tracking-[0.2em]">Estimasi Bunga (4% p.a.) / Bulan</div>
                    <div className="text-5xl sm:text-6xl font-black text-[#D9FA50] mt-3 drop-shadow-lg">
                      Rp {Math.round(monthlyProfit).toLocaleString('id-ID')}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10 text-[9px] font-medium italic opacity-50">
                      *Estimasi belum termasuk pajak sesuai ketentuan yang berlaku.
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#005E6A] pt-40 pb-16 px-6 sm:px-10 text-white relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF8800] via-[#D9FA50] to-[#00CED1]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col">
            <span className="text-5xl font-black italic text-[#00CED1]">wondr</span>
            <span className="text-sm font-bold text-[#FF8800] uppercase mt-1 tracking-[0.3em]">by BNI</span>
            <p className="mt-8 text-xs text-white/50 leading-relaxed max-w-xs">
              Masa depan finansialmu dimulai dari sini. Satu aplikasi untuk segala kebutuhan perbankan dan investasimu.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h5 className="font-black text-xs uppercase tracking-widest text-[#D9FA50]">Navigasi</h5>
            <nav className="flex flex-col gap-3 text-sm text-white/60 font-medium">
              <button onClick={() => scrollToSection('rewards')} className="hover:text-white text-left transition-colors">Program Reward</button>
              <button onClick={() => scrollToSection('ai-mentor')} className="hover:text-white text-left transition-colors">AI Mentor</button>
              <button onClick={() => scrollToSection('growth')} className="hover:text-white text-left transition-colors">Investasi & Growth</button>
              <a href="https://bni.co.id" target="_blank" rel="noreferrer" className="hover:text-white">Portal BNI</a>
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="font-black text-xs uppercase tracking-widest text-[#D9FA50]">Lokasi</h5>
            <div className="text-white/40 text-xs font-medium italic leading-loose">
              Gedung Grha BNI, <br/>Jl. Jend. Sudirman Kav. 1, <br/>Jakarta Pusat, 10220.
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="font-black text-xs uppercase tracking-widest text-[#D9FA50]">Legalitas</h5>
            <div className="text-white/30 text-[11px] font-medium italic leading-relaxed">
              PT Bank Negara Indonesia (Persero) Tbk. berizin dan diawasi oleh OJK & BI, serta peserta penjaminan LPS.
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black opacity-30 tracking-[0.3em] uppercase">
            © 2025 PT BANK NEGARA INDONESIA (PERSERO) TBK.
          </div>
          <div className="flex gap-8 text-[10px] font-black opacity-30 tracking-[0.1em] uppercase">
            <button className="hover:opacity-100 transition-opacity">Kebijakan Privasi</button>
            <button className="hover:opacity-100 transition-opacity">Syarat & Ketentuan</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
