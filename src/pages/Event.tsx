import React, {FC} from "react";
import {EventCalendar} from "../components/EventCalendar";


export const Event: FC = () => {
  return (
    <div>
      <EventCalendar events={[]}/>
    </div>
  )
}