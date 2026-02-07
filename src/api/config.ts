// API Configuration
// Environment-based configuration for DEV, QA, and PROD deployments

// Environment type
export type Environment = 'local' | 'development' | 'qa' | 'production';

// Get current environment
export const getEnvironment = (): Environment => {
    const env = import.meta.env.VITE_APP_ENV as Environment;
    return env || 'development';
};

// Check if we're in production
export const isProduction = (): boolean => {
    return getEnvironment() === 'production';
};

// Check if debug mode is enabled
export const isDebugMode = (): boolean => {
    return import.meta.env.VITE_DEBUG_MODE === 'true';
};

export const API_CONFIG = {
    // Current environment
    ENV: getEnvironment(),

    // API Base URL - configured per environment
    BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',

    // Mock API toggle - use mock data in development
    USE_MOCK: import.meta.env.VITE_USE_MOCK === 'true',

    // App name
    APP_NAME: import.meta.env.VITE_APP_NAME || 'OnboardAI',

    // Debug mode
    DEBUG: isDebugMode(),

    // API Endpoints
    ENDPOINTS: {
        DEMO_REQUESTS: '/demo-requests',
        INDUSTRIES: '/industries',
        COMPANY_SIZES: '/company-sizes',
        TIMESLOTS: '/timeslots',
        CONTACT: '/contact',
    },

    // Request timeout in milliseconds
    TIMEOUT: 30000,
};

// Log configuration in debug mode
if (API_CONFIG.DEBUG) {
    console.log('🔧 API Configuration:', {
        environment: API_CONFIG.ENV,
        baseUrl: API_CONFIG.BASE_URL,
        useMock: API_CONFIG.USE_MOCK,
        appName: API_CONFIG.APP_NAME,
    });
}

export default API_CONFIG;
