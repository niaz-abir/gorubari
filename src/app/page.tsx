import Footer from "@/components/Footer";
import ProductCap from "@/components/ProductCap";
import Shirt from "@/components/Shirt";

import Testimonial from "@/components/Testimonial";
import { Banner } from "@/components/banner";
import ChooseUs from "@/components/chooseUs";
import Services from "@/components/services";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto">
      <Banner />
      <Services />
      <ProductCap />
      <Shirt />
      <Testimonial />
      <ChooseUs />
      <Footer />
    </section>
  );
}
