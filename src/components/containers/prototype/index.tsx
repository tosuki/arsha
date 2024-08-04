import { ReactNode } from "react"

import "./styles.css"

export type ContainerPrototypeProperties = {
    children: ReactNode
}

export default function ContainerPrototype(properties: ContainerPrototypeProperties) {
    return (
        <div className="container-prototype">
            { properties.children }
        </div>
    )
}