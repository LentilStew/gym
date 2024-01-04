"use client";
import { StrictMode } from "react";
import { PlaceForm } from "./components/placeForm";
import { Graphs } from "./graphs/graphs"
import { useState } from "react";

export default function Home() {
  let [placesSelected, setPlacesSelected] = useState(undefined);
  function onPlaceSelected(places) {
    setPlacesSelected(places)
  }
  if (placesSelected === undefined) {
    return <StrictMode>
      <PlaceForm onPlaceSelected={onPlaceSelected} />
    </StrictMode>
  }
  return <StrictMode>
    <Graphs places={placesSelected} />
  </StrictMode>

}
