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

        const currentdate = new Date();

        const email = emailAddresRef.current?.value.trim() ?? "";
        const selectedIsValidDate = selected instanceof Date && !isNaN(selected.getTime());

        const year = currentdate.getFullYear();
        const month = currentdate.getMonth() + 1;
        const day = currentdate.getDate(); 

        const stringConvertedSelected = selected?.toLocaleString() || '';
        const splitedstringConvertedSelected = stringConvertedSelected.split(',');
        console.log(splitedstringConvertedSelected[0]);

        const selectedNumbers = splitedstringConvertedSelected[0].split('/');

        const splitedMount = +selectedNumbers[0];
        const splitedDay = +selectedNumbers[1];
        const splitedYear = +selectedNumbers[2];

        console.log(splitedMount + " splitedmounth");
        console.log(splitedDay + " splitedday");
        console.log(splitedYear + " splitedYear");

        console.log(year + " current year");
        console.log(month + " current month");
        console.log(day + " current day");


        console.log(splitedDay >= day, `${splitedDay} ${day}`);
        console.log(splitedMount >= month, `${splitedMount} ${month}`);
        console.log(splitedYear >= year, `${splitedYear} ${year}`);

        const fullDateChack = splitedDay >= day && splitedMount >= month && splitedYear >= year;
        console.log(fullDateChack);

        if ((email !== "" && fullDateChack)) {
            alert("Ok");
            console.log(emailAddresRef.current?.value);
            sendEmail("Notification set for " + selected, "We will notify you about the weather. " + descriptionRef.current?.value, email, email);
        } else {
            alert("Please enter a valid email address or a valid date.");
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