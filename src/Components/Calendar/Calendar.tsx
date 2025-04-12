import React, { useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import sendEmail from '../EmailSend';

import 'react-day-picker/style.css';
import './style/Calendar.css';

function Calendar() {
    const [selected, setSelected] = useState<Date>();

    //Alert spec datas
    const emailAddresRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    const setAlert = (event: React.FormEvent) => {
        event.preventDefault();
        const email = emailAddresRef.current?.value.trim() ?? "" ;
        const currentdate = new Date();

        if (email || email === "" || selected != undefined || (selected != undefined && (selected as Date).getDay() >= currentdate.getDay()) || (selected != undefined && (selected as Date).getMonth() >= currentdate.getMonth()) ||(selected != undefined && (selected as Date).getFullYear() >= currentdate.getFullYear())) {
            alert("Ok");
            console.log(emailAddresRef.current?.value);
            sendEmail("Notification setted to " + selected + " date", "We will notify you about the weather. " + descriptionRef , email, email);
        }
        else {
            alert("Please enter an email anddress or a valid date.");
        }
    }

    return (
        <div className="calendarContainer">
            <h1>Set an alert</h1>
            <br />
            <form action="submitButtom have been clickd">
                <div className="calendar">
                    <DayPicker mode="single" selected={selected} onSelect={setSelected} className="calendar"
                        footer={selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."} />
                </div>

                <br />
                <div>

                    <label>
                        <span className="alartText">Email: </span>
                        <input className="inputStyle" type="email" placeholder="Email" ref={emailAddresRef} />
                    </label>
                    <br />
                    <label>
                        <span className="alartText">Discription: </span>
                        <input className="inputStyle" type="text" placeholder="Discription" ref={descriptionRef} />
                    </label>
                    <br />
                    <br />
                    <button className="alartButtom" type="submit" onClick={setAlert}>
                        Set Alart
                    </button>
                </div>
            </form>
            <br />
        </div>
    )
}

export default Calendar;