import React from "react";
import RecordCard from "./components/RecordCard";
import List from "./components/RecordCardList";

interface RecordCardProps {
  bookingId: string;
  bookingDate: Date;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  bookingStatus: "pending" | "confirmed" | "cancelled";
}

const bookings = [
  {
    bookingId: "1234",
    bookingDate: new Date("2023-04-23"),
    customerName: "John Doe",
    customerEmail: "johndoe@example.com",
    customerPhone: "555-123-4567",
    bookingStatus: "confirmed",
  },
  {
    bookingId: "5678",
    bookingDate: new Date("2023-04-24"),
    customerName: "Jane Smith",
    customerEmail: "janesmith@example.com",
    customerPhone: "555-555-5555",
    bookingStatus: "pending",
  },
  {
    bookingId: "9012",
    bookingDate: new Date("2023-04-25"),
    customerName: "Bob Johnson",
    customerEmail: "bobjohnson@example.com",
    customerPhone: "555-987-6543",
    bookingStatus: "cancelled",
  },
];

const renderCard = (booking: RecordCardProps) => {
  return <RecordCard {...booking} />;
};

const Record: React.FC = () => {
  return (
    <div>
      <List
        items={bookings}
        renderItem={renderCard}
        keyField="bookingId"
      ></List>
    </div>
  );
};

export default Record;
