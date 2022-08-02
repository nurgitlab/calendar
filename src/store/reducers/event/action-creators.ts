import {IUser} from "../../../models/IUser";
import {EventActionEnum, SetEventsAction, SetGuestsAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import axios from "axios";

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
  setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),

  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const guest = await axios.get('./users.json')
    } catch (err) {
      console.log("err", err)
    }
  }
}