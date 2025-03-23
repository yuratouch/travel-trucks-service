import styles from "./CamperBookingForm.module.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useForm, Controller } from "react-hook-form";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useState } from "react";
import Button from "@/components/Button/Button";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function CamperBookingForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [showCalendar, setShowCalendar] = useState(false);

  function onSubmit() {
    iziToast.success({
      message:
        "Your camper's ready to roll! We'll contact you soon for the details!",
      position: "topRight",
      timeout: 5000,
    });
    reset();
  }

  function handleOpenCalendar(field, value) {
    if (!value.startDate || !value.endDate) {
      field.onChange({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      });
    }
    setShowCalendar(true);
  }

  function handleApply() {
    setShowCalendar(false);
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Book your campervan now</h3>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          type="text"
          placeholder="Name*"
          {...register("name", { required: "Name is required" })}
          className={styles.input}
        />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}

        <input
          type="email"
          placeholder="Email*"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
          })}
          className={styles.input}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}

        <Controller
          name="dateRange"
          control={control}
          defaultValue={{
            startDate: null,
            endDate: null,
            key: "selection",
          }}
          rules={{
            validate: (value) =>
              (value.startDate && value.endDate) || "Booking date is required",
          }}
          render={({ field }) => (
            <div className={styles.dateInputWrapper}>
              <input
                type="text"
                readOnly
                value={
                  field.value.startDate && field.value.endDate
                    ? `${format(
                        field.value.startDate,
                        "dd MMM yyyy"
                      )} - ${format(field.value.endDate, "dd MMM yyyy")}`
                    : ""
                }
                onClick={() => handleOpenCalendar(field, field.value)}
                placeholder="Booking date*"
                className={styles.input}
              />

              {showCalendar && (
                <div className={styles.datePickerWrapper}>
                  <DateRange
                    editableDateInputs={true}
                    onChange={(ranges) => field.onChange(ranges.selection)}
                    moveRangeOnFirstSelection={false}
                    ranges={[field.value]}
                    className={styles.dateRange}
                    showDateDisplay={false}
                  />
                  <button
                    type="button"
                    onClick={handleApply}
                    className={styles.applyBtn}
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>
          )}
        />
        {errors.dateRange && (
          <span className={styles.error}>{errors.dateRange.message}</span>
        )}

        <textarea
          placeholder="Comment"
          {...register("comment")}
          className={styles.textarea}
        />

        <Button
          className={styles.submitButton}
          buttonText="Send"
          type="submit"
        />
      </form>
    </div>
  );
}

export default CamperBookingForm;
