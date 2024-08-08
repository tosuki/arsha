import ContainerPrototype from "../prototype"
import ServiceCard from "./serviceCard"

import "./styles.css"


export default function ServicesContainer() {
    return (
        <ContainerPrototype>
            <div className="services-container" id="services">
                <div className="header">
                    <h1>Services</h1>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className="services">
                    <ServiceCard
                        title="test"
                        description="test"
                    >
                        <div className="square" />
                    </ServiceCard>
                </div>
            </div>
        </ContainerPrototype>
    )
}
