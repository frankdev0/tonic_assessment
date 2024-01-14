
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";





export default function Slider () {
    return (
<div>
          <div className={styles.slidercontainer}>
            <div className={styles.slidertop}>
            <h3 className={styles.sliderheader}>An enterprise template to ramp up your company website</h3>
            <div className='d-flex mt-5'>
            <IoArrowBackCircle  className={styles.previcon}/>
            <IoArrowForwardCircle className={styles.previcon}/>
            
           
            </div>
            </div>
            <div className={styles.slidergrid}>
            <div className={styles.eachslider}>
              <p className={styles.slidertext}>“Buyer buzz partner network disruptive non-disclosure agreement business”</p>
              <div className='d-flex'>
              <Image src="/slideone.png" alt='logoone' width={30} height={30} className={styles.sliderimg}/>
              <div>
                <h6 className={styles.slidername}>Albus Dumbledore</h6>
                <p className={styles.rank}>Manager @ Howarts</p>
              </div>
              </div>
            </div>
            <div className={styles.eachslider}>
              <p className={styles.slidertext}>“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</p>
              <div className='d-flex'>
              <Image src="/slidetwo.png" alt='logoone' width={20} height={20} className={styles.sliderimg}/>
              <div>
                <h6 className={styles.slidername}>Severus Snape</h6>
                <p className={styles.rank}>Manager @ Slytherin</p>
              </div>
              </div>
            </div>
            <div className={styles.eachslider}>
              <p className={styles.slidertext}>“Release facebook responsive web design business model canvas seed money monetization.”</p>
              <div className='d-flex'>
              <Image src="/slide3.png" alt='logoone' width={10} height={10} className={styles.sliderimg}/>
              <div>
                <h6 className={styles.slidername}>Harry Potter</h6>
                <p className={styles.rank}>Team Leader @ Gryffindor</p>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    )
}
