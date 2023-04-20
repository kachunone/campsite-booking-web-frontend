import React from "react";

interface RecordCardProps {
  bookingId: string;
  bookingDate: Date;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  bookingStatus: "pending" | "confirmed" | "cancelled";
}

const RecordCard: React.FC<RecordCardProps> = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h5>Booking #{props.bookingId}</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <p>Booking Date: {props.bookingDate.toLocaleDateString()}</p>
            <p>Customer Name: {props.customerName}</p>
            <p>Customer Email: {props.customerEmail}</p>
            <p>Customer Phone: {props.customerPhone}</p>
          </div>
          <div className="col-6">
            <p>Status: {props.bookingStatus}</p>
            {/* Add other status-related info here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordCard;
