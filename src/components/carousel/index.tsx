import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "./styles";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <img
              src={
                "https://st2.depositphotos.com/4370503/6436/i/950/depositphotos_64364335-stock-photo-three-race-cars.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://2.bp.blogspot.com/-0LOtLL0eKsU/W6jOFd3MFwI/AAAAAAACVEU/rdRNIcCft54iFyIDaZARaVXt9F_6uGHWgCLcBGAs/s1600/IMG_1338.JPG"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://4.bp.blogspot.com/-if7SPFHuI74/UKVd3_8SUTI/AAAAAAAAo_s/mRx1Aqn_pGE/s1600/Fiat-Uno-Vivace-2013-Italia+(2).JPG"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://img-integrador.autoavaliar.com.br/fotosVeiculos/FJJ6997/4a88d92f48.jpeg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://jmotors.com.br/wp-content/uploads/2019/01/hb20s-sedan-2019-branco-nova-frente-mesh-type-colmeia.jpg"
              }
            />
          </div>
        </Slider>
      </Container>
    );
  }
}
