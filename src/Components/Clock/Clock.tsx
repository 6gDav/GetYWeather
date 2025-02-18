import React from 'react'
import "./Styles/ClockDesign.css"

const Clock: React.FC = () => {
    return (
        <div id="main-div">
            <h1 id="place-header">No place found</h1>
            <div id="clock-div">
                <h2 id="clock">00:00:00</h2>
            </div>
        </div>
    )
}

export default Clock;