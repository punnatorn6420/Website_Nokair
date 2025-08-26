import React from "react";
import Booking from "./Booking";
import Offer from "./Offer";
import Teaser from "./Teaser";
import List from "./List";
import Benefit from "./Benefit";
import News from "./News";

export default function Home() {
  return (
    <main>
      <Booking />
      <Offer />
      <Teaser />
      <List />
      <Benefit />
      <News />
    </main>
  );
}
