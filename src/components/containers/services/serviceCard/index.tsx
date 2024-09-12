import "./styles.css"

export type ServiceCardProperties = {
    title: string
    description: string
    icon: string
}

export default function ServiceCard(properties: ServiceCardProperties) {
    return (
        <div className="service-card translateY-animation">
            <div className="thumb">
                <img src={ properties.icon } alt="icon"/>
            </div>
            <div className="info-text">
                <h1>{ properties.title }</h1>
                <p>{ properties.description }</p>
            </div>
        </div>
    )
}