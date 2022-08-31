import React from "react";
import Nav from "./Components/Nav";
import Carousel from "./Components/Utils/Carousel";
import Catagories from "./Components/Catagories";
import Promotion from "./Components/Promotion";
import Slider from "./Components/Slider";
import RedeemReward from "./Components/RedeemReward";
import Footer from "./Components/Footer";

import firstCarouselBanner from "./assets/Banner & ad/web banner.png";
import secondCarouselBanner from "./assets/Banner & ad/web ad_1.png";
import test from "./assets/download/randedBox.jpeg";
import doctorForSale from "./assets/download/doctorForSale.jpg";
import accessories from "./assets/download/randedBox.jpeg";
import nurse from "./assets/download/nurse-uniforms.webp";
import littmann from "./assets/download/littmannSale.jpg";
import security from "./assets/download/GuardUniform.jpg";

function App() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      <Nav windowSize={windowWidth} />
      <Carousel banner={firstCarouselBanner} />
      <Catagories />
      <Promotion />
      <Slider
        windowSize={windowWidth}
        sliderTitle={"New Arrivals"}
        item_src={test}
        bgColor="gray-200"
      />
      <Slider
        windowSize={windowWidth}
        sliderTitle={"Buy 1 Get !"}
        item_src={test}
        bgColor="gray-50"
      />
      <RedeemReward windowSize={windowWidth} sliderTitle={"Rewards"} />
      <Carousel windowSize={windowWidth} banner={secondCarouselBanner} />
      <Slider
        windowSize={windowWidth}
        sliderTitle={"Family Uniform"}
        item_src={doctorForSale}
        bgColor="gray-50"
      />
      <Slider
        windowSize={windowWidth}
        sliderTitle={"Accessories"}
        item_src={accessories}
        bgColor="gray-200"
      />
      <Slider
        windowSize={windowWidth}
        sliderTitle={"Family Hostipal Uniform"}
        item_src={nurse}
        bgColor="gray-50"
      />
      <Slider
        windowSize={windowWidth}
        sliderTitle={"Littmann"}
        item_src={littmann}
        bgColor="gray-200"
      />
      <Slider
        windowSize={windowWidth}
        sliderTitle={"Security Uniform"}
        item_src={security}
        bgColor="gray-50"
      />
      <Footer />
    </>
  );
}

export default App;
