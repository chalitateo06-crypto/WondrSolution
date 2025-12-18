
import React from 'react';
import { Target, Landmark, PieChart, ShieldCheck } from 'lucide-react';
import { LevelData, RewardInfo, ProductInfo } from './types';

export const LEVELING_DATA: LevelData[] = [
  { level: "Rookie", range: "1-10 User", reward: "Rp17.500", extra: "E-Voucher Belanja Rp10rb" },
  { level: "Rising Star", range: "11-30 User", reward: "Rp18.500", extra: "E-Voucher Lifestyle Rp30rb" },
  { level: "Pro-Influencer", range: "31-70 User", reward: "Rp20.000", extra: "wondr Worker/Student Kit" },
  { level: "Iconic Legend", range: ">70 User", reward: "Rp22.500", extra: "Prioritas Magang BNI" }
];

export const REWARDS: Record<string, RewardInfo> = {
  VOUCHER: {
    title: "E-Voucher Belanja & Lifestyle",
    desc: "Voucher digital hingga Rp30.000 untuk Indomaret, Alfamart, Grab, atau Gojek. Langsung cair di menu 'Promo Saya'.",
    visual: "🎟️",
    color: "from-[#FF8800] to-[#FFA500]",
    shadow: "shadow-[#FF8800]/40"
  },
  KIT: {
    title: "wondr Student/Worker Kit",
    desc: "Merchandise fisik eksklusif berupa Stainless Tumbler & Heavy Canvas Totebag dengan desain limited edition untuk menunjang produktivitasmu.",
    visual: "👜",
    color: "from-[#00CED1] to-[#20B2AA]",
    shadow: "shadow-[#00CED1]/40"
  },
  CAREER: {
    title: "Kesempatan Karier BNI",
    desc: "Jalur prioritas seleksi Magang (Internship) atau program karier resmi di Bank BNI bagi para top achiever di program wondr-Nation.",
    visual: "🏢",
    color: "from-[#005E6A] to-[#008B8B]",
    shadow: "shadow-[#005E6A]/40"
  }
};

export const GROWTH_PRODUCTS: ProductInfo[] = [
  { tag: "Nabung otomatis", title: "Life Goals", desc: "Capai impianmu dengan diproteksi asuransi.", icon: <Target className="text-teal-500" /> },
  { tag: "Bunga menarik", title: "Deposito", desc: "Bunga sampai 4% p.a.", icon: <Landmark className="text-orange-500" /> },
  { tag: "Banyak pilihan", title: "Reksa Dana", desc: "Mulai dari Rp100.000.", icon: <PieChart className="text-purple-500" /> },
  { tag: "Dijamin negara", title: "Obligasi/Sukuk", desc: "Mulai dari Rp1.000.000.", icon: <ShieldCheck className="text-blue-500" /> }
];

export const SYSTEM_INSTRUCTION = `You are "wondr AI Mentor", a financial assistant for BNI wondr application users, specifically targeting students (Mahasiswa) and First Jobbers in Indonesia. 
Your tone is friendly, helpful, professional, and uses a mix of Indonesian and casual "Anak Muda" vibes (but keep it professional).
You explain products like Life Goals (auto-savings), Deposito (fixed deposits with 4% interest), Mutual Funds (Reksa Dana starting 100k), and Bonds (Obligasi/Sukuk starting 1M).
Encourage users to join the 'wondr-Nation' referral program to earn rewards like Vouchers, Merch Kits, and Career opportunities.
Always be concise and encouraging. If someone asks for a simulation, explain the benefits.`;
