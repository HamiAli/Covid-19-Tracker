import React, { useState, useEffect } from "react";

import Global from "./Global";

import AllCountreis from "./AllCountreis";

export default function Body({ currentScreen }) {
  if (currentScreen === 0) return <Global />;
  else if (currentScreen === 1) return <AllCountreis />;
  
}
