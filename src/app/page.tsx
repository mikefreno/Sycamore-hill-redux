import HomeContent from "@/components/HomeContent";
import StoryModal from "@/components/StoryModal";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="-mt-[10%] z-30">
        <HomeContent />
        <div className="flex w-full justify-center">
          <StoryModal />
        </div>
      </div>
    </>
  );
}
