import HeroSection from "@/components/home/HeroSection";
import SearchBar from "@/components/search/SearchBar";

import TrendingColleges from "@/components/TrendingColleges";
import Recruiters from "@/components/Recruiters";

import ExamCalendar from "@/components/ExamCalendar";

import ScholarshipFinder from "@/components/ScholarshipFinder";
import AIRecommender from "@/components/AIRecommender";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <HeroSection />
      <SearchBar />
    
      <TrendingColleges />
      <Recruiters />
      
      <ExamCalendar />
      <ScholarshipFinder />
      
      <AIRecommender />
    </main>
  );
}