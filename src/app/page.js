import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={"Our Story"}
          mainHeader={"About Us"}
        />
      </section>
    </>
  );
}
