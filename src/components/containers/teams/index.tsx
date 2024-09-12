import ContainerPrototype from "../prototype"
import TeammateCard from "./teammate"
import Separator from "../../separator"

import "./styles.css"

export default function Teams() {
    return (
        <ContainerPrototype>
            <div className="teams-container">
                <div className="teams-header">
                    <h1>Teams</h1>
                    <Separator />
                </div>
                <div className="teams-teammates">
                    <TeammateCard 
                        name="Sarah Jhonson"
                        description="Aut maiores voluptates amet et quis praesentium qui senda para"
                        role="Product Manager"
                    />
                </div>
            </div>
        </ContainerPrototype>
    )
}
