import HeroSection from "@/components/home/HeroSection";
import SearchBar from "@/components/search/SearchBar";
import TrendingColleges from "@/components/home/TrendingColleges";
import Recruiters from "@/components/home/Recruiters";
import FilterSidebar from "@/components/FilterSidebar";
import ExamCalendar from "@/components/ExamCalendar";
import CollegeCard from "@/components/college/CollegeCard";
import ScholarshipFinder from "@/components/ScholarshipFinder";
import AIRecommender from "@/components/AIRecommender";
import StatCard from "@/components/common/StatCard";
import DarkModeButton from "@/components/common/DarkModeButton";

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