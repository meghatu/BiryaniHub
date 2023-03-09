import Image from 'next/image'
import css from '../styles/Hero.module.css'
import Tasty from '../assets/Tasty.png'

export default function Hero(){
    return(
        <div className={css.container}>
            {/* left side */}
            <div className={css.left}>
                <div className={css.cherryDiv}>
                   <span>Biryani Bliss</span>
                   <Image src={Tasty} alt="" width={40} height={25}/>
                </div>
            

            <div className={css.heroText}>
                <span>Be the Fastest</span>
                <span>In Delivery</span>
                <span>
                    Your <span style={{color: "var(--themeRed)"}}>Biryani</span>
                </span>
            </div>

            <span className={css.miniText}>
                Our Mission is to filling your tummy with delicious food and with free delivery
            </span>

            <button className={'btn ${css.btn}'}>
                Get Started
            </button>
            </div>
            {/* right side */}

            <div className={css.rightSide}>
                21
            </div>
        </div>
    )
};