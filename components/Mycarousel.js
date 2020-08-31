import Carousel from 'react-multi-carousel';

 
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Mycarousel = () => {
  return (
<Carousel
  responsive={responsive}
  infinite={true}
>
      <div> Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.
             <img src="/isak.png" alt=""/>
</div>
      <div>From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.
             <img src="/simon.png" alt=""/>
</div>
      <div>An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct
             <img src="/isak.png" alt=""/>
</div>
</Carousel>
  )
}


export default Mycarousel;

