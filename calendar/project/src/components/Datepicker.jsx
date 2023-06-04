import { useState, useRef, useEffect } from "react";
import { Calendar } from "react-calendar";
import { XCircle } from "@phosphor-icons/react";
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

  function handleInputClick(event) {
    const { id } = event.target;
    if (id === "calendar-js") {
      inputRef.current.focus();
      inputRef.current.classList.add("focus");
      setIsCalendarDisplayed(true);
    }
  }

  function handleCalendarClickDay(event, value) {
    inputRef.current.value = dateFormarter(event);
    inputRef.current.dataset.value = dateFormarter(event);
    inputRef.current.classList.add("focus");
    inputRef.current.focus();
    setIsCalendarDisplayed(false);
  }

  function handleCalendarClickMonth(event, value) {
    inputRef.current.focus();
    setIsCalendarDisplayed(true);
  }

  function handleCloseCalendar(event) {
    if (
      inputRef.current.dataset.value === null ||
      inputRef.current.dataset.value === ""
    ) {
      inputRef.current.classList.remove("focus");
      inputRef.current.blur();
    }
    closeCalendar();
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

      <div
        className={[
          "calendar",
          isCalendarDisplayed ? "visible" : "hidden",
        ].join(" ")}
      >
        <button
          type="button"
          className="calendar--button-close"
          onClick={(event) => {
            handleCloseCalendar(event);
          }}
        >
          <span className="sr-only">Close Calendar</span>
          <XCircle size={32} />
        </button>

        <Calendar
          onChange={onChange}
          value={value}
          className={isCalendarDisplayed ? "visible" : "hidden"}
          locale="en-GB"
          inputRef={calendarRef}
          nextAriaLabel="next month"
          next2AriaLabel="next year"
          prevAriaLabel="previous month"
          prev2AriaLabel="previous year"
          onClickDay={(event, value) => handleCalendarClickDay(event, value)}
          onClickMonth={(event, value) =>
            handleCalendarClickMonth(event, value)
          }
        />
      </div>
    </div>
  );
};
