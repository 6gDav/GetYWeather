import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "./style/Calendar.css";

function Calendar() {
    const [selected, setSelected] = useState<Date>();

    return (
        <div className="calendarContainer">
            <h1>Set an alart</h1>
            <br />
            <form action="">
                <div className="calendar">
                    <DayPicker mode="single" selected={selected} onSelect={setSelected} className="calendar"
                        footer={selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."}/>
                </div>

                <br />
                <div>
                    <label>
                        <span className="alartText">Phone number: </span>
                        <input className="inputStyle" type="number" placeholder="Phone number" />
                    </label>
                    <br />
                    <label>
                        <span className="alartText">Email: </span>
                        <input className="inputStyle" type="email" placeholder="Email" />
                    </label>
                    <br />
                    <label>
                        <span className="alartText">Discription: </span>
                        <input className="inputStyle" type="text" placeholder="Discription" />
                    </label>
                    <br />
                    <br />
                    <button className="alartButtom">
                        Set Alart
                    </button>
                </div>
            </form>
            <br />
        </div>
    )
}

export default Calendar;