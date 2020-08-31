

class Faq_item extends React.Component {
    state = {
        hidden: true
    }
    myFunction = () => { 
    this.setState({ hidden:  !this.state.hidden});
    }
    render() { 
        return (    <section>
            <article>
                <h1>{this.props.question}</h1><span onClick={this.myFunction}>{this.state.hidden ? "+" : "-"}</span>
                <p className={this.state.hidden ? "isHidden" : "isShown"}>{this.props.answer}</p>

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
        </section> );
    }
}
 
export default Faq_item;

