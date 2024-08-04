import "./styles.css"

export type BurgerProperties = {
    isOpen: boolean
    setOpen: (value: boolean) => unknown
}

export default function Burger(properties: BurgerProperties) {
    return (
        <div
            onClick={() => properties.setOpen(!properties.isOpen)}
            className="burger-container"
        >
            <div className="bar"/>
            <div className="bar"/>
            <div className="bar"/>
        </div>
    )
}
