declare module "country-state-city" {
  export interface Country {
    getAllCountries(): any[];
  }

  export interface State {
    getStatesOfCountry(countryCode: string): any[];
  }

  export interface City {
    getCitiesOfState(countryCode: string, stateCode: string): any[];
  }

  const Country: Country;
  const State: State;
  const City: City;

  export { Country, State, City };
}
