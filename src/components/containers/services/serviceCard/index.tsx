import { ReactNode } from "react"

import "./styles.css"

export type ServiceCardProperties = {
    title: string
    description: string
    children?: ReactNode
}

export default function ServiceCard(properties: ServiceCardProperties) {
    return (
        <div className="service-card">
            <div className="thumb">
                { properties.children }
            </div>
            <div>
                <h1>{ properties.title }</h1>
                <p>{ properties.description }</p>
            </div>
        </div>
    )
}