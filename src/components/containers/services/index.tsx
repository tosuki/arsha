import ContainerPrototype from "../prototype"
import ServiceCard from "./serviceCard"

import CalendarIcon from "../../../../assets/img/services/calendar4-week.svg"

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
                        title="Lorem ipsum"
                        description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
                        icon={ CalendarIcon }
                    />
                    <ServiceCard
                        title="Lorem ipsum"
                        description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
                        icon={ CalendarIcon }
                    />
                    <ServiceCard
                        title="Lorem ipsum"
                        description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
                        icon={ CalendarIcon }
                    />
                    <ServiceCard
                        title="Lorem ipsum"
                        description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
                        icon={ CalendarIcon }
                    />
                </div>
            </div>
        </ContainerPrototype>
    )
}
