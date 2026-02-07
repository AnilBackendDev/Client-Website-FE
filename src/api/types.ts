// Type definitions for Demo Request API

export interface DemoRequestPayload {
    // Company Information
    companyName: string;
    industry: string;
    companySize: string;
    website?: string;

    // Contact Details
    fullName: string;
    jobTitle: string;
    email: string;
    phone?: string;

    // Requirements (optional extended fields)
    useCase?: string;
    challenges?: string;
    timeline?: string;

    // Demo Scheduling
    preferredDate?: string;
    preferredTime?: string;
    additionalNotes?: string;
}

export interface DemoRequestResponse {
    success: boolean;
    message: string;
    requestId: string;
    scheduledDate?: string;
    data?: DemoRequestPayload;
}

export interface Industry {
    id: string;
    name: string;
    icon?: string;
}

export interface CompanySize {
    id: string;
    label: string;
    range: string;
}

export interface TimeSlot {
    id: string;
    label: string;
    startTime: string;
    endTime: string;
    available: boolean;
}

export interface ContactFormPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ApiError {
    success: false;
    error: string;
    code: string;
    details?: Record<string, string[]>;
}
