import React from "react";
import { Svg, Props } from "./Svg";

export const SaveIcon = (props: Props) => {
  return (
    <Svg {...props}>
      <title>Save</title>
      <path
        fill="currentColor"
        d="M465.94 119.76l-73.7-73.7A47.68 47.68 0 00358.3 32H96a64 64 0 00-64 64v320a64 64 0 0064 64h320a64 64 0 0064-64V153.7a47.68 47.68 0 00-14.06-33.94zM120 112h176a8 8 0 018 8v48a8 8 0 01-8 8H120a8 8 0 01-8-8v-48a8 8 0 018-8zm139.75 319.91a80 80 0 1176.16-76.16 80.06 80.06 0 01-76.16 76.16z"
      />
      <circle fill="currentColor" cx="256" cy="352" r="48" />
    </Svg>
  );
};
