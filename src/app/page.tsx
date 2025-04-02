import HomeContent from "@/components/HomeContent";
import StoryModal from "@/components/StoryModal";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="-mt-[20svh] xs:-mt-[15svh] z-30 bg-gradient-to-t from-lime-50 to-white">
        <HomeContent />
        <div className="flex w-full justify-center">
          <StoryModal />
        </div>
      </div>
    </>
  );
}
