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
                <DayPicker mode="single" selected={selected} onSelect={setSelected}
                    footer={selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."} />
                <br />
                <div>
                    <label htmlFor="">
                        Phone number:
                        <input type="number" placeholder="Phone number" />
                    </label>
                    <br />
                    <label htmlFor="">
                        Email:
                        <input type="email" placeholder="Email" />
                    </label>
                    <br />
                    <label htmlFor="">
                        Discription:
                        <input type="text" placeholder="Discription" />
                    </label>
                </div>

            </form>
            <br />
        </div>
    )
}

export default Calendar;