import { createContext } from "react";

interface RecordCardProps {
  _id: string;
  createDate: Date;
  start: Date;
  end: Date;
  campsite: { _id: string; image: string };
  totalPrice: number;
}

interface BookingListState {
  bookingRecordList: RecordCardProps[];
  setBookingRecordList: React.Dispatch<React.SetStateAction<RecordCardProps[]>>;
}

// Create a new context for the hook's state
export const BookingsContext = createContext<BookingListState>({
  bookingRecordList: [],
  setBookingRecordList: () => {},
});
