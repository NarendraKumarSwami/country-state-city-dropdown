import { Country, State, City } from "../types/locations";

export const countries: Country[] = [
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
];

export const states: State[] = [
  { code: "MH", name: "Maharashtra", countryCode: "IN" },
  { code: "CA", name: "California", countryCode: "US" },
];

export const cities: City[] = [
  { name: "Mumbai", stateCode: "MH", countryCode: "IN" },
  { name: "Los Angeles", stateCode: "CA", countryCode: "US" },
];
