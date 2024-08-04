import "./styles.css"

import BrandOneImg from "../../../../assets/img/clients/client-1.png"
import BrandTwoImg from "../../../../assets/img/clients/client-2.png"
import BrandThreeImg from "../../../../assets/img/clients/client-3.png"
import BrandFourImg from "../../../../assets/img/clients/client-4.png"
import BrandFiveImg from "../../../../assets/img/clients/client-5.png"
import BrandSixImg from "../../../../assets/img/clients/client-6.png"

export default function Brands() {
    return (
        <div className="brands-container">
            <div className="brands-content">
                <div className="brand">
                    <img src={ BrandOneImg } alt="brand-one" />
                </div>
                <div className="brand">
                    <img src={ BrandTwoImg } alt="brand-one" />
                </div>
                <div className="brand">
                    <img src={ BrandThreeImg } alt="brand-one" />
                </div>
                <div className="brand">
                    <img src={ BrandFourImg } alt="brand-one" />
                </div>
                <div className="brand">
                    <img src={ BrandFiveImg } alt="brand-one" />
                </div>
                <div className="brand">
                    <img src={ BrandSixImg } alt="brand-one" />
                </div>
            </div>
        </div>
    )
}