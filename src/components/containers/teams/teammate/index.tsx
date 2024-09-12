import "./styles.css"

export type TeammateProperties = {
    name: string
    role: string
    img?: string
    description: string
    socialMedias?: {
        facebook?: string
        twitter?: string
        instagram?: string
        linkedin?: string
    }
}

export default function TeammateCard(properties: TeammateProperties) {
    return (
        <div className="teammate-container transformY-animation">
            { properties.name }
        </div>
    )
}