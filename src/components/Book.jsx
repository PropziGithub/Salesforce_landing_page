/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import {Helmet} from "react-helmet";

const BookAppointment = () => {
  return (
    <>
    <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/sparknspur/sparkforce?embed=true"></div>
      <Helmet>
      <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>
    </Helmet>
    </>
      
  );
};

export default BookAppointment;