import TravelHero from "@/components/travel/TravelHero";
import TravelDestinationGallery from "@/components/travel/TravelDestinationGallery";
import TravelEscapeGallery from "@/components/travel/TravelEscapeGallery";
import TravelDestinationPlan from "@/components/travel/TravelDestinationPlan";
import TravelGuides from "@/components/travel/TravelGuides";
import TravelICTA from "@/components/travel/TravelICTA";
import TravelFooter from "@/components/travel/TravelFooter";

const TravelPage = () => {
  return (
    <section>
      <TravelHero />
      <TravelDestinationGallery />
      <TravelEscapeGallery />
      <TravelDestinationPlan />
      <TravelGuides />
      <TravelICTA />
      <TravelFooter />
    </section>
  );
};

export default TravelPage;
