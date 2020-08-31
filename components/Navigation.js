import Link from "next/Link";

const Navigation = () => {
    return (
        <div>

            <nav>
                <div className="logo">
                    <Link href="/">
                        <img src="logo.svg" alt="" />
                    </Link>
                </div>
                <ul>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <Link href="#howTo">
                        <a >HOW TO</a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/faq">
                            <a>FAQS</a>
                        </Link>
                    </li>
                </ul>
                <a href="#" className="btn">Contact us</a>
            </nav>
            <style jsx>{`
            nav {
                display: flex;
                align-items: baseline;
                color: white
            }
            ul {
                display: flex;
                color: white;
             
            }
            li {
                list-style: none;
                padding-right: 4em
            }
            .logo {
                margin-right: 15em;
                display: inline-block
            }
          .btn {
            background: #EE4D47;
            border-radius: 5px;
            padding: 0.5em 2em;
            margin-left: 38em;
          }
            `
            }

            </style>
        </div>
    );
}

export default Navigation;