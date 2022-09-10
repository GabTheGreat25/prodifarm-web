// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ASSETS: "../../../../assets/",
  API_URL: "http://localhost:3333/api/v1/",
  TOKEN_NAME: "pf-user",
  ASSETS_URL: "https://raw.githubusercontent.com/mackignacio/promdifarm-cdn/main/",
  GOOGLE_API_URL: "https://maps.googleapis.com/maps/api/js?key=",
  GOOGLE_API_KEY: "AIzaSyCYdqgotwJlkRmOUPjtKaZxPta5jQocCJA",
  DEFAULT_COORDS: {
    lat: 14.599512,
    lng: 120.984222,
  },
};
