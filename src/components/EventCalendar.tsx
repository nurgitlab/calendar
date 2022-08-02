import {FC} from "react";
import {Badge, Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";

interface EventCalendarProps {
  events: IEvent[]
}

export const EventCalendar: FC<EventCalendarProps> = (props) => {
  function dateCallRender(value: Moment) {
    const formatedDate = formatDate(value.toDate())
    const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)

    return (
      <div>
        {currentDayEvents.map((ev, index) =>
          <div key={index}>
            {ev.description}
          </div>
        )}
      </div>
    )
  }
  return (
    <Calendar
      dateCellRender={dateCallRender}
    />
  )
}