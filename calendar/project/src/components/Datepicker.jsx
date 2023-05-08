import { useState, useRef, useEffect } from "react";
import { Calendar } from "react-calendar";
import { dateFormarter } from "../helpers/formaters";

export const Datepicker = () => {
  const [isCalendarDisplayed, setIsCalendarDisplayed] = useState(false);
  const [value, onChange] = useState(new Date());

  const inputRef = useRef(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    !isCalendarDisplayed
      ? calendarRef.current.setAttribute("aria-hidden", true)
      : calendarRef.current.setAttribute("aria-hidden", false);
  }, [isCalendarDisplayed]);

  useEffect(() => {
    window.addEventListener("click", (event) => {
      console.log(event);
      if (event.target.localName === "main") {
        closeCalendar();

        if (inputRef.current.dataset.value === "") {
          setTimeout(() => {
            inputRef.current.classList.remove("focus");
            inputRef.current.blur();
          }, 100);
        }
      }
    });
  });

  function handleInputBlur(event) {
    console.log(event.target);
    const { id, value } = event.target;
    if (id === "calendar-js") {
      closeCalendar();
      if (value === "" || event.target.dataset.value === "") {
        setTimeout(() => {
          inputRef.current.classList.remove("focus");
        }, 100);
      } else {
        inputRef.current.focus();
      }
    }
  }

  function handleInputClick(event) {
    const { id } = event.target;
    if (id === "calendar-js") {
      setIsCalendarDisplayed(true);
      inputRef.current.focus();
      inputRef.current.classList.add("focus");
    }
  }

  function handleCalendarClickDay(event, value) {
    const target = event.target;
    console.log(target);
    inputRef.current.value = dateFormarter(event);
    inputRef.current.dataset.value = dateFormarter(event);
    inputRef.current.classList.add("focus");
    inputRef.current.focus();
    setIsCalendarDisplayed(false);
  }

  function handleCalendarClickMonth(event, value) {
    setIsCalendarDisplayed(true);
    inputRef.current.focus();
  }

  function closeCalendar() {
    setTimeout(() => {
      setIsCalendarDisplayed(false);
    }, 200);
  }

  return (
    <div className="calendar--container" data-calendar>
      <input
        type="text"
        className="calendar"
        id="calendar-js"
        name="calendar"
        placeholder="Select a date from the calendar"
        readOnly
        onClick={(event) => handleInputClick(event)}
        data-value=""
        ref={inputRef}
      />
      <label htmlFor="calendar-js">Choose date</label>

      <Calendar
        onChange={onChange}
        value={value}
        className={isCalendarDisplayed ? "visible" : "hidden"}
        locale="en-GB"
        inputRef={calendarRef}
        onClickDay={(event, value) => handleCalendarClickDay(event, value)}
        onClickMonth={(event, value) => handleCalendarClickMonth(event, value)}
      />
    </div>
  );
};
