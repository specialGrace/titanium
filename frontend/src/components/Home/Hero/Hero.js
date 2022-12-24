import React from "react";
import styles from "./Hero.module.css";
import home_bg from "../../../asset/images/home_bg.png";
import HeroSelecBar from "./HeroSelecBar";
import SimpleImageSlider from "react-simple-image-slider";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Hero() {
  const images = [
    { url: "images/home_bg.png" },
    { url: "images/about1.png" },
    { url: "images/properties1.png" },
    { url: "images/properties2.png" },
  ];
  // const images = [
  //     'images/slide_2.jpg',
  //     'images/slide_3.jpg',
  //     'images/slide_4.jpg',
  //     'images/slide_5.jpg',
  //     'images/slide_6.jpg',
  //     'images/slide_7.jpg'
  // ];
  return (
    <div className={styles.container}>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${home_bg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <h1 className={styles.hero_heading}>
          Lofty heigths one, Eco-friendly <br />
          homes customized your tastes!
        </h1>
        <p className={styles.hero_message}>
          Sound Proofed, Energy Efficient, But With Green Materials
        </p>
        <div className={styles.hero__cta}>
          <span>get a quote now</span>
        </div>
        {/* <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                /> */}
        {/* <div className="slide-container">
                    <Zoom scale={0.4}>
                        {
                            images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                        }
                    </Zoom>
                </div> */}

        <HeroSelecBar />
      </div>
    </div>
  );
}

export default Hero;
