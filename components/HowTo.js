const HowTo = () => {
    return ( 
        <section id="howTo">
            <img className="illustrations" src="/illustrations.svg" alt="" />
            <h1>How to apply</h1>
            <p>When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.</p>
            <style jsx>{`
            // section{
            //     height: 50vh;
            //     display: grid;
            //     grid-template-columns: repeat(2,1fr);
            //     padding: 50px 10%
            // }
            // img{
            //     width: 100%
            // }
            .illustrations {

position: absolute;
width: 720.19px;
height: 678.76px;
left: 127.55px;
top: 1500px;
            }
            h1 {
                position: absolute;
width: 265px;
height: 50px;
left: 905px;
top: 1600px;

font-family: Rubik;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 40px;
/* or 167% */

display: flex;
align-items: center;
letter-spacing: 0.1em;
text-transform: uppercase;

color: #EE4D47;
            }
            p {

position: absolute;
width: 455px;
height: 287px;
left: 905px;
top: 1700px;

font-family: Rubik;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 40px;
/* or 222% */


/* text */

color: #402B2B;
            }
            
            `}


            </style>
        </section>
     );
}
 
export default HowTo;