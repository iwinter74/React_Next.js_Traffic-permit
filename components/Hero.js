import Link from 'next/link';

const Hero = () => {
    return ( 
        <main>
            <section className="top">
                <h1>Your awesome traffic permit consultant.</h1>
                <Link href="#"><a className="btn">Get started<img className="union" src="/Union.svg" alt="" /></a></Link>
                <img className="mobel" src="/mobel.png" alt=""/>
                

            </section>
            <style jsx>{`
            main{
                height:100vh
            }
            .top h1 {
                position: absolute;
                width: 741px;
                height: 145px;
                left: 240px;
                top: 190px;
                
                font-family: DM Serif Display;
                font-style: normal;
                font-weight: normal;
                font-size: 100px;
                line-height: 100%;
                /* or 100px */
                
                display: flex;
                align-items: center;
                
                color: #FFFFFF;

            }
            .btn {
                background: #EE4D47;
                border-radius: 5px;
                color: white;
                position: absolute;
                padding: 0.5em 1em;

left: 240px;
top: 550px;
              }
              .union {
                  padding-left: 1em
              }

              .big_image {
                  width: 50%
              }
            .mobel {
                width: 20%;
                position: absolute;
left: 0%;
top: 75%;
            }
            `}
            
</style>
        </main>
     );
}
 
export default Hero;