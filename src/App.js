import React from "react"
import Card from "./components/Card.js"
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import data from "./data.js"

function App() {
    const cards = data.map(item => {
        return (
            <>
                <Card 
                key={item.id}
                {...item}
                />
                <hr/>
            </>
            )
    })
    return (
        <div className="container">
            <Navbar />
            {cards}
            <Footer />
        </div>
    ) 
}

export default App;