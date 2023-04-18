import React, { useState, useEffect, ChangeEvent } from "react";
import "./booking.css";
import { useLocation } from "react-router-dom";

interface Campsite {
  id: number;
  title: string;
  description: string;
  equipments: string[];
  region: string;
  price: number;
  image: string;
}

const Booking: React.FC = () => {
  const { state } = useLocation();
  const campsiteInfo: Campsite = state.campsite;

  return <div className="booking">{JSON.stringify(campsiteInfo)}</div>;
};

export default Booking;
