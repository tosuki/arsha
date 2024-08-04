import "./styles.css"

export type GetStartedButtonProperties = {
    navigateTo: string
}

export default function GetStartedButton(properties: GetStartedButtonProperties) {
    return (
        <a
            className="navigate-button get-started-btn"
            href={ properties.navigateTo }
        >
            Get started
        </a>
    )
}
