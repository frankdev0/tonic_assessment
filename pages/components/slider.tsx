
import Slider from "react-slick";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






export default function Sliderr () {

  const testimonials = [
    {
      text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      image: "/slideone.png",
      name: "Albus Dumbledore",
      designation:"Manager @ Howarts"
    },
    {
      text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      image: "/slidetwo.png",
      name: "Severus Snape",
      designation:"Manager @ Howarts"
    },
    {
      text: "“Release facebook responsive web design business model canvas seed money monetization.”",
      image: "/slide3.png",
      name: "Harry Potter",
      designation:"Team Leader @ Gryffindor"
    },
    {
      text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      image: "/slidetwo.png",
      name: "Severus Snape",
      designation:"Manager @ Howarts"
    },
    {
      text: "“Release facebook responsive web design business model canvas seed money monetization.”",
      image: "/slide3.png",
      name: "Harry Potter",
      designation:"Team Leader @ Gryffindor"
    },
  ]

 

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerPadding: "50px",
  //   autoplay: true,
  //   autoplaySpeed: 3000,
   
  // };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "150px",
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <IoArrowBackCircle className={styles.previcon} />,
    nextArrow: <IoArrowForwardCircle className={styles.previcon} />,
    responsive: [
      {
        breakpoint: 768, // adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
          centerPadding: "50px", // adjust padding for smaller screens
        },
      },
      {
        breakpoint: 576, // adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
          centerPadding: "20px", // adjust padding for even smaller screens
        },
      },
    ],
  };

    return (
<div>
          <div className={styles.slidecontainer}>
            <div className={styles.slidertop}>
            <h3 className={styles.sliderheader}>An enterprise template to ramp up your company website</h3>
            <div className='d-flex mt-5'>
            <IoArrowBackCircle className={styles.previcon}  />
            <IoArrowForwardCircle className={styles.previcon}  />
           
            </div>
            </div>
            <div className={styles.slidercontiner}>
            <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.sliderbody}>
            <div className={`${styles.eachslider} mx-3`}>
              <p className={styles.slidertext}>{testimonial.text}</p>
              <div className='d-flex'>
              <Image src={testimonial.image} alt='logoone' width={30} height={30} className={styles.sliderimg}/>
              <div>
                <h6 className={styles.slidername}>{testimonial.name}</h6>
                <p className={styles.rank}>{testimonial.designation}</p>
              </div>
              </div>
            </div>
           
            </div>
              ))}
            </Slider>
            </div>
           
          </div>
        </div>
    )
}
