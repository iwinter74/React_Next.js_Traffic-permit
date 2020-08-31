const data = [
    {
        question: 'What is a professional traffic permit?',
        answer: 'Traffic permits are a requirement for conducting professional traffic.'
    },
    {
        question: 'How to check the traffic condition?',
        answer: 'Traffic permits are a requirement for conducting professional traffic.'
    },
    {
        question: 'What are the requirements for a professional traffic permit?',
        answer: 'Traffic permits are a requirement for conducting professional traffic.'
    },
    {
        question: 'Are there professional traffic permit training courses at a distance?',
        answer: 'Traffic permits are a requirement for conducting professional traffic.'
    },
    {
        question: 'When is a professional traffic permit needed?',
        answer: 'Traffic permits are a requirement for conducting professional traffic.'
    },
    {
        question: 'Where to look for a traffic permit?',
        answer: 'Traffic permits are a requirement for conducting professional traffic.'
    },
    {
        question: 'Are there differences between a traffic permit and a professional traffic permit?',
        answer: 'Traffic permits are a requirement for conducting professional traffic.'
    },
    {
        question: 'How much does a commercial traffic permit cost for goods?',
        answer: 'Traffic permits are a requirement for conducting professional traffic.'
    },
    {
        question: 'How to plug in for the traffic permit test?',
        answer: 'Traffic permits are a requirement for conducting professional traffic.'
    },
    {
        question: 'How is the sample for a professional traffic permit booked?',
        answer: 'Traffic permits are a requirement for conducting professional traffic.'
    }

    
]

import Faq_item from "../components/Faq_item";

class Faq extends React.Component {
    state = { 
        // hidden: true,
        // hidden1: true
        newdata: data.slice()
    }
    // myFunction = () => {
    //     // this.state.hidden ? this.setState({ hidden: false }) : this.setState({ hidden: true });; 
    //     this.setState({ hidden:  !this.state.hidden});
    // }
    // myFunction1 = () => { 
    //     this.setState({ hidden1:  !this.state.hidden1});
    // }
    myFunction = (elt) => {
        elt.hidden = !elt.hidden
    }
    render() { 
        return ( 
            <section>
                {this.state.newdata.map((elt, i) => 
        
                    <Faq_item
                        key={i}
                        question={elt.question}
                        answer={elt.answer}
                    />
                )
                }
                {/* <article>
                <h1>What is a professional traffic permit? </h1><span onClick={this.myFunction}>{this.state.hidden ? "+" : "-"}</span>
                <p className={this.state.hidden ? "isHidden" : "isShown"}>Traffic permits are a requirement for conducting professional traffic.</p>

                </article>

                        <article>
                <h1>How to check the traffic condition? </h1><span onClick={this.myFunction1}>{this.state.hidden1 ? "+" : "-"}</span>
                <p className={this.state.hidden1 ? "isHidden" : "isShown"}>Traffic permits are a requirement for conducting professional traffic.</p>

                </article> */}
                
                {/* <style jsx>{`
                .isHidden {
                    display: none
                }
                .isShown {
                    display: block
                }
                
                `}

                </style> */}
            </section>
         );
    }
}
 
export default Faq;