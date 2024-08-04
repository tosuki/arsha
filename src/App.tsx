import Navbar from "./components/navbar"

import {
    AboutContainer,
    Brands,
    HomeContainer,
    ServicesContainer
} from "./components/containers"

import "./styles/globals.css"

export default function App() {
    return (
        <div className="page">
            <Navbar />
            <HomeContainer />
            <Brands />
            <AboutContainer />
            <ServicesContainer />
        </div>
    )
}