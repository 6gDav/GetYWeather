import React, { useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import sendEmail from '../EmailSend';

import 'react-day-picker/style.css';
import './style/Calendar.css';

function Calendar() {
    const [selected, setSelected] = useState<Date>();

    //Alert spec datas
    const emailAddresRef = useRef<HTMLInputElement>(null); //email input
    const descriptionRef = useRef<HTMLInputElement>(null); //description 

    const setAlert = (event: React.FormEvent) => {
        event.preventDefault();

        const email = emailAddresRef.current?.value.trim() ?? ""; //process email if undefiend or null its set to an an empty string

        //#region process the selected date 
        const stringConvertedSelected = selected?.toLocaleString() || ""; //convert ot string if nul or undefined set to an empty sting
        const splitedstringConvertedSelected = stringConvertedSelected.split(","); //split along , 
        const selectedNumbers = splitedstringConvertedSelected[0].split("/"); //split along /

        const splitedMount = +selectedNumbers[0]; //the list first value convert ot number 
        const splitedDay = +selectedNumbers[1]; //the list seond value convert ot number 
        const splitedYear = +selectedNumbers[2]; //the list threed value convert ot number 
        //#endregion

        //#region chack and compare the currend date 
        const currentdate = new Date(); //the current date instance to get acces to the date parts

        const year = currentdate.getFullYear();
        const month = currentdate.getMonth() + 1;
        const day = currentdate.getDate();

        // in the lower parts the program step by step compare the given date to the current date 

        const yearLessThen = splitedYear > year; //if the selcted year bigger then the actual year but not equal
        const yearEqualThen = splitedYear === year; //if the selected year equal with the curent year it is necesarry to make continious compares with the mounth and days

        let mounthLessThen = false;
        let mounthEqualThen = false;
        let dayLessThen = false;
        let dayEquaThen = false;

        if (yearEqualThen) {
            mounthLessThen = splitedMount < month; //if the selected month less then the ectual is not proper in this case 
            mounthEqualThen = splitedMount === month //if the selcted month equal with the current it is necesary too to make compares with the days in the month 
        }
        if (mounthEqualThen) {
            dayLessThen = splitedDay < day; //slected less then 
            dayEquaThen = splitedDay === day; //selcted equal with
        }

        const ullDateChack2 = (yearEqualThen || yearLessThen) && (mounthEqualThen || !mounthLessThen) && (!dayEquaThen && !dayLessThen);
        //#endregion

        if ((email !== "" && ullDateChack2))  // if the entered email is valid and the given date is proper too
        {
            alert("Notofication email sent.");
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

                {/* the actual calendar UI */}
                <div className="calendar">
                    <DayPicker mode="single" selected={selected} onSelect={setSelected} className="calendar"
                        footer={selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."} />
                </div>

                <br />

                {/* User data reguest UI */}
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