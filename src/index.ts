import { countries } from "./data/location.country";
import { states } from "./data/location.state";
import { cities } from "./data/locations.cities";
import { Country, State, City } from "./types/locations";

export const getCountries = (): Country[] => {
  return countries;
};

export const getStatesByCountry = (countryCode: string): State[] => {
  return states.filter((state) => state.countryCode === countryCode);
};

export const getCitiesByState = (
  countryCode: string,
  stateCode: string
): City[] => {
  return cities.filter(
    (city) => city.stateCode === stateCode && city.countryCode === countryCode
  );
};
