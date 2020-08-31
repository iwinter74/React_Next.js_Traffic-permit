const About = () => {
    return ( 
        <section id="about">
            <h1>About us</h1>
            <p>
                The occupational traffic permit is one of the most important things in the company when carrying out freight transport. In fact, it is a prerequisite for doing business traffic at all.
            </p>
            <img className="illustration" src="/Illustration.png" alt="" />
            <img className="rectangle" src="/Rectangle19" alt="" />
            <p className="rectangle_text">
            How do you do when you need to obtain a commercial traffic permit for freight transport to your business?
            </p>
            <style jsx>{`
            h1 {
                position: absolute;
                width: 166px;
                height: 50px;
                left: 245px;
                top: 1000px;
                
                font-family: Rubik;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 40px;
                /* or 167% */
                
                display: flex;
                align-items: center;
                letter-spacing: 0.1em;
                
                color: #EE4D47;

            }
            
 p {
    position: absolute;
    width: 470px;
    height: 156px;
    left: 245px;
    top: 1100px;
    
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 40px;
    /* or 222% */
    
    
    /* text */
    
    color: #402B2B;
 }
 .illustration {

position: absolute;
width: 575.11px;
height: 480px;
left: 840.69px;
top: 1000px;
 }
 .rectangle {

position: absolute;
width: 570px;
height: 160px;
left: 245px;
top: 1300px;

background: #FCDDD4;
opacity: 0.4;
 }
 .rectangle_text {
    position: absolute;
    width: 460px;
    height: 100px;
    left: 300px;
    top: 1300px;
    
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    /* or 150% */
    
    
    /* text */
    
    color: #402B2B;
 }

            `}

            </style>
        </section>
     );
}
 
export default About;