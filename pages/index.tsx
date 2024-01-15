import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { IoMdArrowForward } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FiFeather } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { BsBrightnessHigh } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Footer from './components/footer'
import Sliderr from './components/slider'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    // Close other dropdowns if needed
    setShowDropdown2(false);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    // Close other dropdowns if needed
    setShowDropdown1(false);
  };

  return (
    <>
      <Head>
        <title>Tonic Technologies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <nav>
        <div className={styles.navcontainer}>
        <Image src="/logo.png" alt='logo' width={100} height={30} />
        <div className={styles.rightnav}>
          <div className={styles.respnav}>
          <Link href="#" className={styles.menuitem}>Product </Link>
          <Link href="#" className={styles.menuitem}>Services</Link>
          <Link href="#" className={styles.menuitem}>About</Link>
          
          
        <button className={styles.navbtn}>Log In</button>
    
    
    </div>
    <div className={styles.btnmedia}>
    <div className={styles.barscontainer} onClick={openMobileMenu}>
    <FaBars className={styles.fabars}/>
    </div>
    </div>
          
        </div>
        

    {isMobileMenuOpen && (
    <div className={styles.mobilemenu}>
      <div className={styles.mobileheader}>
      <button className={styles.mobilenavbtn}>Log In</button>
      <div className={styles.close} onClick={closeMobileMenu}>
      <IoClose className={styles.closeicon}/>
      </div>
     
      </div>
      
      <div className={styles.mobilelinks}>
      <Link href='/#' className={styles.mobilelink}>Product</Link>
      <Link href='/#' className={styles.mobilelink}>Services</Link>
      <Link href='/#' className={styles.mobilelink}>About</Link>
      </div>
    
     </div>
    )}
        </div>
        </nav>
        
        {/* HERO SECTION */}
        <div>
          <div className='row'>
            <div className={`${styles.leftcontainer} col-12 col-md-6`}>
            <h3 className={styles.heroheader}>Save time by building  fast with Boldo Template </h3>
          <p className={styles.herotexts}>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
          <div className={styles.btncontainer}>
          <button className={styles.headerbtn}>Buy template</button>
          <button className={styles.explorebtn}>Explore</button>
          </div>
            </div>
            <div className={`${styles.rightcontainer} col-12 col-md-6`}>
            <Image src="/hero.png" alt='logo' width={450} height={300} />
            </div>
          </div>
        </div>
        {/* SPONSOR SECTION */}
        <div className={styles.logosection}>
        <Image src="/logoone.png" alt='logoone' width={100} height={30} />
        <Image src="/logotwo.png" alt='logoone' width={100} height={30} />
        <Image src="/logoone.png" alt='logoone' width={100} height={30} />
        <Image src="/logotwo.png" alt='logoone' width={100} height={30} />
        <Image src="/logothree.png" alt='logoone' width={100} height={30} />
        <Image src="/logotwo.png" alt='logoone' width={100} height={30} />
        </div>

        {/* CARD SECTION */}
        <div className={styles.sectionthree}>
          <div>
            <div className={styles.servicestext}>
            <h6 className={styles.serviceheader}>Our Services</h6>
            <div className='d-flex justify-content-center'>
            <h3 className={styles.servicesubtext}>Handshake infographic mass market crowdfunding iteration.</h3>
            </div>
            
            </div>
            
            <div className={styles.servicegrid}>
                <div className={styles.eachgrid}>
                <Image src="/cardone.png" alt='logoone' width={250} height={300} />
                <p className={styles.cardtext}>Cool feature title</p>
                <div className={`${styles.explore} d-flex align-items-center`}>
                <Link href="#" className={styles.cardlink}>Explore page</Link>
                <IoMdArrowForward className={styles.arrow}/>
                </div>
                </div>
                <div className={styles.eachgrid}>
                <Image src="/cardtwo.png" alt='logoone' width={250} height={300} />
                <p className={styles.cardtext}>Cool feature title</p>
                <div className={`${styles.explore} d-flex align-items-center`}>
                <Link href="#" className={styles.cardlink}>Explore page</Link>
                <IoMdArrowForward className={styles.arrow} />
                </div>
                </div>
                <div className={styles.eachgrid}>
                <Image src="/cardthree.png" alt='logoone' width={250} height={300} />
                <p className={styles.cardtext}>Cool feature title</p>
                <div className={`${styles.explore} d-flex align-items-center`}>
                <Link href="#" className={styles.cardlink}>Explore page</Link>
                <IoMdArrowForward className={styles.arrow} />
                </div>
                </div>
            </div>
          </div>
        </div>

        {/* SECTION FIVE */}
        <div>
          <div className={`${styles.fifth}  row align-items-center`}>
            <div className='d-flex justify-content-center align-items-center col-12 col-lg-6'>
            <Image src="/group.png" alt='logoone' width={500} height={500} />
            </div>
            <div className='col-12 col-lg-6 align-items-center justify-content-center'>
              <h3 className={styles.fifthheader}>We connect our customers with the best, and help them keep up-and stay open.</h3>
              <div className='my-4'>
              <div className='d-flex align-items-center my-2'>
              <IoCheckmarkCircle className={styles.goodicon}/>
              <p className='my-0 py-0 mx-0 px-3'>We connect our customers with the best.</p>
              </div>
              <div className='d-flex align-items-center'>
              <IoCheckmarkCircle className={styles.goodicon}/>
              <p className='my-0 py-0 mx-0 px-3'>Advisor success customer launch party.</p>
              </div>
              <div className='d-flex align-items-center my-2'>
              <IoCheckmarkCircle className={styles.goodicon}/>
              <p className='my-0 py-0 mx-0 px-3'>Business-to-consumer long tail.</p>
              
              </div>
              <div>
                <button className={styles.headerbtn}>Start now</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* SLIDER SECTION */}
        <Sliderr/>
        {/* SECTION SIX */}
        <div>
          <div className={`${styles.sixth}  row align-items-center`}>
            <div className='col-12 col-lg-6'>
            <h3 className={styles.fifthheader}>We connect our customers with the best, and help them keep up-and stay open.</h3>
            <div>
            <div className='d-flex align-items-center my-2'>
              <div className={styles.box}>
              <FiFeather />
              <p className={`${styles.bo} my-0 py-0 mx-0 px-3`}>We connect our customers with the best.</p>
              </div>
              </div>
            <div className='d-flex align-items-center my-1'>
              <div className={styles.boxx}>
              <FiEye />
              <p className={`${styles.bo} my-0 py-0 mx-0 px-3`}>Advisor success customer launch party.</p>
              </div>
              </div>
            <div className='d-flex align-items-center my-2'>
              <div className={styles.boxx}>
              <BsBrightnessHigh />
              <p className={`${styles.bo} my-0 py-0 mx-0 px-3`}>Business-to-consumer long tail.</p>
              </div>
              </div>
              
            </div>
            </div>
            <div className='d-flex justify-content-center align-items-center col-12 col-lg-6'>
            <Image src="/group2.png" alt='logoone' width={500} height={500} />
            </div>
          </div>
        </div>
        {/* SEVENTH SECTION */}

        <div>
          <div className='d-flex justify-content-center'>
          <Image src="/group3.png" alt='logoone' width={500} height={300} className={styles.img}/>
          </div>
          <div className={`${styles.sixth}  row align-itms-center mb-5`}>
            <div className='col-12 col-lg-6'>
              <h3 className={styles.fifthheader}>We connect our customers with the best, and help them keep up-and stay open.</h3>
            </div>
            <div className='col-12 col-lg-6 '>
              <div>
               
               <div className='d-flex align-items-center my-2 justify-content-end '>
              <p className='my-0 pb-2 mx-0 px-3'>We connect our customers with the best?</p>
              <IoIosArrowDropdownCircle className={styles.dropicon} onClick={toggleDropdown1}/>
              </div>
                    {showDropdown1 && (
              <div className='d-flex align-items-center justify-content-end'>
                <p>Your dropdown content here...</p>
              </div>
            )}
              <div className='d-flex align-items-center justify-content-end '>
              <div className={styles.borderr}/>
              </div>
                <div className='d-flex align-items-center my-2 justify-content-end pt-4'>
              <p className='my-0 pb-2 mx-0 px-3'>Android research & development rockstar?</p>
              <IoIosArrowDropdownCircle className={styles.dropicon} onClick={toggleDropdown2} />
              </div>
                    {showDropdown2 && (
              <div className='d-flex align-items-center justify-content-end'>
                
                <p>Your dropdown content here...</p>
              </div>
            )}
              <div className='d-flex align-items-center justify-content-end '>
              <div className={styles.borderr}/>
              </div>
             
              </div>
            </div>
          </div>
        </div>
        {/* SECTION EIGHT */}

        <div className={styles.sectionseven}>
          <div>
            <div className={styles.servicestext}>
            <h6 className={styles.blogheader}>Our Blog</h6>
            <div className='d-flex justify-content-center'>
            <h3 className={styles.blogsubtext}>Value proposition accelerator product management venture.</h3>
            </div>
            
            </div>
            
            <div className={styles.servicegrid}>
                <div className={styles.eachgrid}>
                <Image src="/blog1.png" alt='logoone' width={300} height={150} />
                <div className='d-flex mt-3'>
                <p className={styles.blogtext}>Category</p>
                <p className={styles.blogtime}>November 22, 2021</p>
                </div>
                <div className={`${styles.blogtexts}`}>
                <p className='mx-0 my-0 py-0'>Pitch termsheet backing validation focus release.</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                <Image src="/pic1.png" alt='logoone' width={10} height={10} className={styles.blogimg}/>
                  <p className={styles.blogger}>Chandler Bling</p>
                </div>
                </div>
                <div className={styles.eachgrid}>
                <Image src="/blog2.png" alt='logoone' width={300} height={150} />
                <div className='d-flex mt-3'>
                <p className={styles.blogtext}>Category</p>
                <p className={styles.blogtime}>November 22, 2021</p>
                </div>
                <div className={`${styles.blogtexts}`}>
                <p className='mx-0 my-0 py-0'>Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                <Image src="/pic2.png" alt='logoone' width={10} height={10} className={styles.blogimg}/>
                  <p className={styles.blogger}>Rachel Green</p>
                </div>
                </div>
                <div className={styles.eachgrid}>
                <Image src="/blog3.png" alt='logoone' width={300} height={150} />
                <div className='d-flex mt-3'>
                <p className={styles.blogtext}>Category</p>
                <p className={styles.blogtime}>November 22, 2021</p>
                </div>
                <div className={`${styles.blogtexts}`}>
                <p className='mx-0 my-0 py-0'>Beta prototype sales iPad gen-z marketing network effects value proposition</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                <Image src="/pic3.png" alt='logoone' width={10} height={10} className={styles.blogimg}/>
                  <p className={styles.blogger}>Monica Geller</p>
                </div>
                </div>
                
      
            </div>
            <div className='d-flex justify-content-center my-4'>
              <button className={styles.explorebtn}>Load more</button>
            </div>
          </div>
        </div>
        {/* SECTION NINE */}
        <div className='d-flex justify-content-center my-5'>
          <div className={styles.banner}>
          <h6 className={styles.bannerheader}>An enterprise template to ramp up your company website</h6> 
          <div className={styles.calltoaction}>
            <input placeholder='Your email address' type='text' className={styles.inputfield}/>
            <button className={styles.startbtn}>Start Now</button>
            </div> 
          </div>
        </div>
          {/* FOOTER */}
        <Footer/>
      </main>
    </>
  )
}
