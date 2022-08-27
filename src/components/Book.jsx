import React from "react";
import { InlineWidget } from "react-calendly";

const BookAppointment = () => {
  return (
    <div>
      <InlineWidget
        styles={{ width: "100%", height: "756px" }}
        url="https://calendly.com/devnetwork/sales-meeting" />
    </div>
  );
};

export default BookAppointment;