import ContainerPrototype from "../prototype"
import Separator from "../../separator"

import "./styles.css"

export default function AboutContainer() {
    return (
        <ContainerPrototype>
            <div className="about-container" id="about">
                <div className="header">
                    <h1>About us</h1>
                    <Separator />
                </div>
                <div className="paragraphs">
                    <p>
                        <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                        <ul>
                            <li>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li>
                                Duis aute irure dolor in reprehenderit in voluptate velit.
                            </li>
                            <li>
                                Ullamco laboris nisi ut aliquip ex ea commodo
                            </li>
                        </ul>
                    </p>
                    <p>
                        <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                        <button className="read-more-btn">Read more :D</button>
                    </p>
                </div>
            </div>
        </ContainerPrototype>
    )
}