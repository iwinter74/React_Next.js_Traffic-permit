
class Faq extends React.Component {
    state = { 
        hidden: true,
        hidden1: true
    }
    myFunction = () => {
        // this.state.hidden ? this.setState({ hidden: false }) : this.setState({ hidden: true });; 
        this.setState({ hidden:  !this.state.hidden});
    }
    myFunction1 = () => { 
        this.setState({ hidden1:  !this.state.hidden1});
    }
    render() { 
        return ( 
            <section>
                <article>
                <h1>What is a professional traffic permit? </h1><span onClick={this.myFunction}>{this.state.hidden ? "+" : "-"}</span>
                <p className={this.state.hidden ? "isHidden" : "isShown"}>Traffic permits are a requirement for conducting professional traffic.</p>

                </article>

                        <article>
                <h1>How to check the traffic condition? </h1><span onClick={this.myFunction1}>{this.state.hidden1 ? "+" : "-"}</span>
                <p className={this.state.hidden1 ? "isHidden" : "isShown"}>Traffic permits are a requirement for conducting professional traffic.</p>

                </article>
                
                <style jsx>{`
                .isHidden {
                    display: none
                }
                .isShown {
                    display: block
                }
                
                `}

                </style>
            </section>
         );
    }
}
 
export default Faq;