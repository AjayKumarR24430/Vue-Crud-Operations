# client-crud

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Overview

- The App component is a container with router-view. It has navbar that links to routes paths.
- ClientsList component gets and displays Clients.
- Client component has form for editing Client’s details based on :id.
- AddClient component has form for submission new Client.
- These Components call ClientDataService and ProviderDataService methods which use axios to make HTTP requests and receive responses.

### Technology

    * vue
    * vue-router
    * axios


- package.json contains 3 main modules: vue, vue-router, axios.
- There are 3 components: ClientsList, Client, AddClient.
- router.js defines routes for each component.
- http-common.js initializes axios with HTTP base Url and headers.
- ClientDataService and ProviderDataService has methods for sending HTTP requests to the Apis.
- vue.config.js configures port for this Vue Client.

### Run the app with the following commands:
* npm install
* npm run serve

If the process is successful, open Browser with Url: http://localhost:8081/ and check it.