import { setupAerogelNodeEvents } from "@aerogel/cypress/config";
export default {
    e2e: {
        baseUrl: "http://localhost:5001",
        video: false,
        retries: {
            runMode: 3,
            openMode: 0,
        },
        setupNodeEvents: setupAerogelNodeEvents,
    },
};
