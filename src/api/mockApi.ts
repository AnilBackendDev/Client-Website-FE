// Mock API Service
// This simulates API responses for development
// Will be bypassed when USE_MOCK is set to false in config

import type {
    DemoRequestPayload,
    DemoRequestResponse,
    Industry,
    CompanySize,
    TimeSlot
} from './types';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generate unique request ID
const generateRequestId = (): string => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `DR-${timestamp}-${random}`;
};

// Mock Industries Data
export const mockIndustries: Industry[] = [
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'finance', name: 'Finance & Banking', icon: '🏦' },
    { id: 'retail', name: 'Retail & E-commerce', icon: '🛒' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'consulting', name: 'Consulting', icon: '💼' },
    { id: 'real-estate', name: 'Real Estate', icon: '🏢' },
    { id: 'hospitality', name: 'Hospitality', icon: '🏨' },
    { id: 'other', name: 'Other', icon: '📋' },
];

// Mock Company Sizes Data
export const mockCompanySizes: CompanySize[] = [
    { id: '1-50', label: 'Startup', range: '1-50 employees' },
    { id: '51-200', label: 'Small Business', range: '51-200 employees' },
    { id: '201-500', label: 'Mid-Market', range: '201-500 employees' },
    { id: '501-1000', label: 'Large', range: '501-1000 employees' },
    { id: '1000+', label: 'Enterprise', range: '1000+ employees' },
];

// Mock Time Slots Data
export const mockTimeSlots: TimeSlot[] = [
    { id: '9-10am', label: '9:00 AM - 10:00 AM', startTime: '09:00', endTime: '10:00', available: true },
    { id: '10-11am', label: '10:00 AM - 11:00 AM', startTime: '10:00', endTime: '11:00', available: true },
    { id: '11-12pm', label: '11:00 AM - 12:00 PM', startTime: '11:00', endTime: '12:00', available: false },
    { id: '1-2pm', label: '1:00 PM - 2:00 PM', startTime: '13:00', endTime: '14:00', available: true },
    { id: '2-3pm', label: '2:00 PM - 3:00 PM', startTime: '14:00', endTime: '15:00', available: true },
    { id: '3-4pm', label: '3:00 PM - 4:00 PM', startTime: '15:00', endTime: '16:00', available: true },
    { id: '4-5pm', label: '4:00 PM - 5:00 PM', startTime: '16:00', endTime: '17:00', available: false },
];

// In-memory storage for demo requests (simulates database)
const demoRequestsStore: Array<DemoRequestPayload & { id: string; createdAt: string }> = [];

export const mockApi = {
    /**
     * Submit a demo request
     * POST /api/demo-requests
     */
    submitDemoRequest: async (payload: DemoRequestPayload): Promise<DemoRequestResponse> => {
        await delay(1500); // Simulate network latency

        // Validation
        if (!payload.companyName || !payload.email || !payload.fullName) {
            throw {
                success: false,
                error: 'Missing required fields',
                code: 'VALIDATION_ERROR',
                details: {
                    companyName: !payload.companyName ? ['Company name is required'] : [],
                    email: !payload.email ? ['Email is required'] : [],
                    fullName: !payload.fullName ? ['Full name is required'] : [],
                }
            };
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(payload.email)) {
            throw {
                success: false,
                error: 'Invalid email format',
                code: 'VALIDATION_ERROR',
                details: { email: ['Please enter a valid email address'] }
            };
        }

        // Generate request ID and store
        const requestId = generateRequestId();
        const createdAt = new Date().toISOString();

        demoRequestsStore.push({
            ...payload,
            id: requestId,
            createdAt,
        });

        console.log('📧 [Mock API] Demo request submitted:', {
            requestId,
            company: payload.companyName,
            email: payload.email,
            scheduledFor: payload.preferredDate,
        });

        return {
            success: true,
            message: 'Your demo request has been submitted successfully! Our team will contact you within 24 hours.',
            requestId,
            scheduledDate: payload.preferredDate
                ? `${payload.preferredDate}T${payload.preferredTime?.split('-')[0] || '10:00'}:00Z`
                : undefined,
            data: payload,
        };
    },

    /**
     * Get available industries
     * GET /api/industries
     */
    getIndustries: async (): Promise<Industry[]> => {
        await delay(500);
        return mockIndustries;
    },

    /**
     * Get company size options
     * GET /api/company-sizes
     */
    getCompanySizes: async (): Promise<CompanySize[]> => {
        await delay(300);
        return mockCompanySizes;
    },

    /**
     * Get available time slots for a specific date
     * GET /api/timeslots?date=YYYY-MM-DD
     */
    getTimeSlots: async (date?: string): Promise<TimeSlot[]> => {
        await delay(400);
        console.log('📅 [Mock API] Fetching time slots for:', date || 'any date');

        // Randomly mark some slots as unavailable based on date
        if (date) {
            return mockTimeSlots.map(slot => ({
                ...slot,
                // Simulate some slots being booked based on random availability
                available: slot.available && Math.random() > 0.3,
            }));
        }

        return mockTimeSlots;
    },

    /**
     * Get all demo requests (for admin purposes)
     * GET /api/demo-requests
     */
    getDemoRequests: async (): Promise<typeof demoRequestsStore> => {
        await delay(800);
        return [...demoRequestsStore];
    },
};

export default mockApi;
