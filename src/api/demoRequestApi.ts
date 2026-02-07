// Demo Request API Service
// This is the main API interface - uses mock or real API based on config

import API_CONFIG from './config';
import { mockApi } from './mockApi';
import type {
    DemoRequestPayload,
    DemoRequestResponse,
    Industry,
    CompanySize,
    TimeSlot,
    ApiError
} from './types';

// HTTP client wrapper
const httpClient = async <T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> => {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;

    const defaultHeaders: HeadersInit = {
        'Content-Type': 'application/json',
    };

    const config: RequestInit = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

        const response = await fetch(url, {
            ...config,
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw {
                success: false,
                error: errorData.message || `HTTP Error: ${response.status}`,
                code: errorData.code || 'HTTP_ERROR',
                details: errorData.details,
            } as ApiError;
        }

        return response.json();
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            throw {
                success: false,
                error: 'Request timeout',
                code: 'TIMEOUT_ERROR',
            } as ApiError;
        }
        throw error;
    }
};

// API Service
export const demoRequestApi = {
    /**
     * Submit a demo request
     */
    submitDemoRequest: async (payload: DemoRequestPayload): Promise<DemoRequestResponse> => {
        if (API_CONFIG.USE_MOCK) {
            console.log('🔶 Using Mock API for submitDemoRequest');
            return mockApi.submitDemoRequest(payload);
        }

        return httpClient<DemoRequestResponse>(API_CONFIG.ENDPOINTS.DEMO_REQUESTS, {
            method: 'POST',
            body: JSON.stringify(payload),
        });
    },

    /**
     * Get available industries
     */
    getIndustries: async (): Promise<Industry[]> => {
        if (API_CONFIG.USE_MOCK) {
            console.log('🔶 Using Mock API for getIndustries');
            return mockApi.getIndustries();
        }

        return httpClient<Industry[]>(API_CONFIG.ENDPOINTS.INDUSTRIES);
    },

    /**
     * Get company size options
     */
    getCompanySizes: async (): Promise<CompanySize[]> => {
        if (API_CONFIG.USE_MOCK) {
            console.log('🔶 Using Mock API for getCompanySizes');
            return mockApi.getCompanySizes();
        }

        return httpClient<CompanySize[]>(API_CONFIG.ENDPOINTS.COMPANY_SIZES);
    },

    /**
     * Get available time slots
     */
    getTimeSlots: async (date?: string): Promise<TimeSlot[]> => {
        if (API_CONFIG.USE_MOCK) {
            console.log('🔶 Using Mock API for getTimeSlots');
            return mockApi.getTimeSlots(date);
        }

        const queryParams = date ? `?date=${date}` : '';
        return httpClient<TimeSlot[]>(`${API_CONFIG.ENDPOINTS.TIMESLOTS}${queryParams}`);
    },
};

export default demoRequestApi;

// Re-export types for convenience
export * from './types';
