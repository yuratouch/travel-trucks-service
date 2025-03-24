import { EQUIPMENT_FILTER_OPTIONS, TYPE_FILTER_OPTIONS } from "./filterOptions";

export const CARDS_TO_SHOW = 4;
export const CARDS_HEIGHT_TO_SCROLL = 740;

export const FEATURE_TAG_OPTIONS =
  EQUIPMENT_FILTER_OPTIONS.concat(TYPE_FILTER_OPTIONS);

export const CAMPER_DETAILS_CONFIG = [
  { label: "Form", key: "form" },
  { label: "Length", key: "length" },
  { label: "Width", key: "width" },
  { label: "Height", key: "height" },
  { label: "Tank", key: "tank" },
  { label: "Consumption", key: "consumption" },
];

export const SEARCH_PARAMS_CONFIG = {
  booleanOptions: [
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
    "gas",
    "water",
  ],
  engineOptions: ["diesel", "petrol", "hybrid"],
  transmissionOptions: ["automatic", "manual"],
};
