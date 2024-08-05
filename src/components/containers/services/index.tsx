import { ReactNode } from "react"
import ContainerPrototype from "../prototype"

import "./styles.css"

export function ServiceCard(properties: {
    title: string
    icon: ReactNode
    description: string
}) {
    return (
        <div className="service-card">
            { properties.icon }
            <h1>{ properties.title }</h1>
            <p>{ properties.description }</p>
        </div>
    )
}

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
                        icon={(<span>test</span>)}
                        title="hello"
                        description="testando alguma coisa"
                    />
                </div>
            </div>
        </ContainerPrototype>
    )
}
