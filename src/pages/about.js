import React from "react";
import Contact from "../components/contactPage";
import Services from "../components/servicesPage";

function Main() {
    return (
        <div>
            <h1>About Org Page</h1>
            <Services />
            <Contact />
            <a href="/store" target="_blank"><h1>store</h1></a>
        </div>
    )
}

export default Main;