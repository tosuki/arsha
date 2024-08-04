import ContainerPrototype from "../prototype";

import GetStartedButton from "../../buttons/getStarted";
import HeroImage from "../../../../assets/img/hero-img.png"

import "./styles.css"

export default function HomeContainer() {
    return (
        <ContainerPrototype>
            <div className="home-container">
                <div className="home-text-container">
                    <h1>Better solution for your business</h1>
                    <p>
                        We are team of talented designers making websites with React
                    </p>
                    <GetStartedButton 
                        navigateTo="#about"
                    />
                </div>
                <img src={ HeroImage } alt="hero-img" />
            </div>
        </ContainerPrototype>
    )
}