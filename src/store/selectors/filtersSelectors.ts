import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Camper } from "../slices/campersSlice";

const booleanOptions = [
  "AC",
  "bathroom",
  "kitchen",
  "TV",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water",
] as const;
const engineOptions = ["diesel", "petrol", "hybrid"] as const;
const transmissionOptions = ["automatic", "manual"] as const;

export const selectFilteredCampers = createSelector(
  [
    (state: RootState) => state.campers.items,
    (state: RootState) => state.filters,
  ],
  (campers, filters): Camper[] => {
    const { location, equipment, type } = filters;

    return campers.filter((camper) => {
      const locationMatch = location
        ? camper.location.toLowerCase().includes(location.toLowerCase())
        : true;

      const typeMatch = type ? camper.form === type : true;

      const booleanMatch = equipment
        .filter((item) => (booleanOptions as readonly string[]).includes(item))
        .every((key) => camper[key as keyof Camper] === true);

      const engineMatch = equipment.some((item) =>
        (engineOptions as readonly string[]).includes(item)
      )
        ? engineOptions.some(
            (engine) => equipment.includes(engine) && camper.engine === engine
          )
        : true;

      const transmissionMatch = equipment.some((item) =>
        (transmissionOptions as readonly string[]).includes(item)
      )
        ? transmissionOptions.some(
            (trans) =>
              equipment.includes(trans) && camper.transmission === trans
          )
        : true;

      return (
        locationMatch &&
        typeMatch &&
        booleanMatch &&
        engineMatch &&
        transmissionMatch
      );
    });
  }
);
