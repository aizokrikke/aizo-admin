// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export let environment: { apiUri: string; production: boolean, apiKey: string };
environment = {
  production: false,
  apiUri: 'https://api.aizo.nl/live',
  apiKey: '66f9a16c398521e27d9091f9e7eaba8f49bd194c1ad6403ded2407be710125ce0ca1673c641285e87d34a44851440105114d018374918c0707afe127c1b76d2b '
};

// In development mode, to ignore zone related logError stack frames such as
// `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
// import the following file, but please comment it out in production mode
// because it will have performance impact when throw logError
// import 'zone.js/dist/zone-logError';  // Included with Angular CLI.
