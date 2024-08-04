import { useState } from "react"

import Burger from "../burger"

import "./styles.css"
import GetStartedButton from "../buttons/getStarted"

export default function Navbar() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false)

    return (
        <div className="navbar-container">
            <div className="left">
                <h1>arsha</h1>
            </div>
            <div className="right">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portifolio</li>
                    <li>Team</li>
                    <li>Pricing</li>
                    <li>Dropdown</li>
                    <li>Contact</li>
                    <GetStartedButton 
                        navigateTo="#about"
                    />
                </ul>
                <Burger 
                    isOpen={ isModalOpen }
                    setOpen={ setModalOpen }
                />
            </div>
        </div>
    )
}