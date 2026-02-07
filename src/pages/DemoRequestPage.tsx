import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Calendar,
    Check,
    Zap,
    ArrowRight,
    Users,
    BarChart3,
    Briefcase,
    Target,
    Video,
    CheckCircle2,
    X,
    Loader2,
    AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { demoRequestApi } from '../api';
import type { DemoRequestPayload, DemoRequestResponse } from '../api';

const DemoRequestPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<DemoRequestPayload>({
        companyName: '',
        industry: '',
        companySize: '',
        fullName: '',
        jobTitle: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [apiResponse, setApiResponse] = useState<DemoRequestResponse | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user starts typing
        if (error) setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            console.log('📤 Submitting demo request:', formData);
            const response = await demoRequestApi.submitDemoRequest(formData);
            console.log('✅ Demo request submitted successfully:', response);
            setApiResponse(response);
            setSubmitted(true);
        } catch (err: any) {
            console.error('❌ Error submitting demo request:', err);
            setError(err.error || 'Failed to submit demo request. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };


    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-3xl p-12 text-center shadow-2xl"
                >
                    <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-display font-black mb-4">Thank You!</h1>
                    {apiResponse?.requestId && (
                        <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                            Request ID: <span className="font-mono font-bold">{apiResponse.requestId}</span>
                        </p>
                    )}
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                        We've received your demo request for <span className="font-bold text-brand-primary">{formData.companyName}</span>.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Our team will contact you at <span className="font-bold">{formData.email}</span> within 24 hours to schedule your personalized demo.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            to="/"
                            className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg"
                        >
                            Back to Home
                        </Link>
                        <Link
                            to="/pricing"
                            className="glass px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all border border-gray-200"
                        >
                            View Pricing
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/20 px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
                        <Zap className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-display font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                        OnboardAI
                    </span>
                </Link>

                <Link to="/" className="text-sm font-medium hover:text-brand-primary transition-colors">
                    ← Back to Home
                </Link>
            </nav>

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-black mb-4">
                            <span className="bg-gradient-to-r from-brand-primary via-blue-600 to-brand-accent bg-clip-text text-transparent">
                                OnboardAI
                            </span>
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-display font-black mb-6">
                            How OnboardAI Works
                        </h2>
                    </motion.div>

                    {/* Main Dashboard Showcase */}
                    <div className="relative">
                        {/* Floating Feature Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute -left-4 top-8 z-20 hidden lg:block"
                        >
                            <div className="glass p-4 rounded-2xl shadow-2xl border border-white/40 backdrop-blur-xl max-w-xs">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center relative">
                                        <Users className="w-6 h-6 text-white" />
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                            3
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">New Candidates Matched (3)</p>
                                        <p className="text-sm font-bold text-emerald-600">Time to Hire: <span className="text-emerald-700">-25%</span></p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-4 top-12 z-20 hidden lg:block"
                        >
                            <div className="glass p-4 rounded-2xl shadow-2xl border border-white/40 backdrop-blur-xl max-w-xs">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800 dark:text-white">Candidate Accepted Offer!</p>
                                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full mt-1">
                                            Celebration
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="absolute left-8 -bottom-12 z-20 hidden lg:block"
                        >
                            <div className="glass p-4 rounded-2xl shadow-2xl border border-white/40 backdrop-blur-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="w-8 h-8 text-blue-500" />
                                    <ArrowRight className="w-5 h-5 text-gray-400" />
                                    <Video className="w-8 h-8 text-purple-500" />
                                </div>
                                <div className="text-center">
                                    <p className="text-xs font-bold text-gray-700 dark:text-gray-300">Automated Scheduling</p>
                                    <p className="text-xs text-gray-500 mt-1">Virtual Meetings</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="absolute right-8 bottom-16 z-20 hidden lg:block"
                        >
                            <div className="glass p-5 rounded-2xl shadow-2xl border border-white/40 backdrop-blur-xl text-center">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <p className="text-sm font-bold text-gray-800 dark:text-white mb-1">Instant Onboard Access</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Tools Ready</p>
                            </div>
                        </motion.div>

                        {/* Main Dashboard Mock */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative mx-auto max-w-5xl"
                        >
                            {/* Laptop Frame */}
                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl p-4 shadow-2xl">
                                {/* Dashboard Content */}
                                <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden">
                                    {/* Top Bar */}
                                    <div className="bg-gray-50 dark:bg-gray-900 px-6 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
                                                <Zap className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="font-bold text-sm">OnboardAI</span>
                                            <span className="text-sm text-gray-600 dark:text-gray-400 ml-4">Dashboard</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-12 min-h-[400px]">
                                        {/* Sidebar */}
                                        <div className="col-span-3 bg-gradient-to-b from-gray-900 to-gray-950 p-4">
                                            <div className="space-y-2">
                                                <div className="px-3 py-2 bg-brand-primary/20 rounded-lg flex items-center gap-2 text-brand-primary text-sm">
                                                    <BarChart3 className="w-4 h-4" />
                                                    <span>Dashboard</span>
                                                </div>
                                                <div className="px-3 py-2 text-gray-400 text-sm flex items-center gap-2">
                                                    <Users className="w-4 h-4" />
                                                    <span>Interview</span>
                                                </div>
                                                <div className="px-3 py-2 text-gray-400 text-sm flex items-center gap-2">
                                                    <Target className="w-4 h-4" />
                                                    <span>Permissions</span>
                                                </div>
                                                <div className="px-3 py-2 text-gray-400 text-sm flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span>Item Groups</span>
                                                </div>
                                            </div>

                                            {/* Candidate Pipeline Card */}
                                            <div className="mt-6 glass p-3 rounded-xl border border-white/10">
                                                <p className="text-xs font-semibold text-white mb-3">Candidate Pipeline</p>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
                                                            <User className="w-4 h-4 text-white" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-xs font-semibold text-white truncate">Sara Chen</p>
                                                            <p className="text-xs text-emerald-400">AI Match 95%</p>
                                                        </div>
                                                        <div className="px-2 py-1 bg-emerald-500/20 rounded text-xs font-bold text-emerald-400">95</div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                                            <User className="w-4 h-4 text-white" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-xs font-semibold text-white truncate">David Lee</p>
                                                            <p className="text-xs text-blue-400">AI Match 91%</p>
                                                        </div>
                                                        <div className="px-2 py-1 bg-blue-500/20 rounded text-xs font-bold text-blue-400">69</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Main Content */}
                                        <div className="col-span-9 p-6">
                                            <h3 className="font-bold text-sm mb-4">AI Matching</h3>

                                            {/* AI Matching Diagram */}
                                            <div className="flex items-center justify-center mb-8 relative">
                                                {/* Center Circle */}
                                                <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center relative z-10 shadow-xl">
                                                    <div className="text-center">
                                                        <Zap className="w-8 h-8 text-white mx-auto mb-1" />
                                                        <p className="text-xs font-bold text-white">Smart Match</p>
                                                    </div>
                                                </div>

                                                {/* Surrounding Circles */}
                                                {[0, 1, 2, 3, 4, 5].map((i) => {
                                                    const angle = (i * 60) * Math.PI / 180;
                                                    const radius = 80;
                                                    const x = radius * Math.cos(angle - Math.PI / 2);
                                                    const y = radius * Math.sin(angle - Math.PI / 2);

                                                    return (
                                                        <div
                                                            key={i}
                                                            className="absolute w-10 h-10 bg-gradient-to-br from-blue-400/60 to-purple-400/60 rounded-full flex items-center justify-center"
                                                            style={{
                                                                left: `calc(50% + ${x}px - 20px)`,
                                                                top: `calc(50% + ${y}px - 20px)`
                                                            }}
                                                        >
                                                            <Target className="w-5 h-5 text-white" />
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Pipeline Stages */}
                                            <div className="mb-6">
                                                <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3">Pipeline Stages</h4>
                                                <div className="grid grid-cols-5 gap-2">
                                                    {[
                                                        { icon: Briefcase, label: 'Job Posting', color: 'from-blue-500 to-blue-600' },
                                                        { icon: Target, label: 'AI Matching', color: 'from-purple-500 to-purple-600' },
                                                        { icon: Users, label: 'Interview', color: 'from-blue-500 to-blue-600' },
                                                        { icon: Check, label: 'Offer', color: 'from-purple-500 to-purple-600' },
                                                        { icon: CheckCircle2, label: 'Day 1 Ready', color: 'from-emerald-500 to-emerald-600' }
                                                    ].map((stage, i) => (
                                                        <div key={i} className="text-center">
                                                            <div className={`w-12 h-12 mx-auto bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center mb-2`}>
                                                                <stage.icon className="w-6 h-6 text-white" />
                                                            </div>
                                                            <p className="text-xs text-gray-600 dark:text-gray-400">{stage.label}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Progress Stats + Hand Pointer */}
                                            <div className="relative">
                                                <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3">Progress stats</h4>
                                                <div className="space-y-3">
                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1">
                                                            <span className="text-gray-600 dark:text-gray-400">Time to Hire</span>
                                                            <span className="font-bold">95%</span>
                                                        </div>
                                                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                                            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '95%' }}></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between text-xs mb-1">
                                                            <span className="text-gray-600 dark:text-gray-400">Ranking</span>
                                                            <span className="font-bold">97%</span>
                                                        </div>
                                                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                                            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '97%' }}></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Hand Pointer */}
                                                <div className="absolute -right-8 -bottom-4 text-6xl select-none pointer-events-none">
                                                    👆
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Laptop Base */}
                            <div className="h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl"></div>
                            <div className="h-2 bg-gray-800 rounded-b-3xl mx-16"></div>
                        </motion.div>
                    </div>

                    {/* Request Demo Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="text-center mt-16"
                    >
                        <button
                            onClick={() => setShowModal(true)}
                            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white text-xl font-black rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 transition-all"
                        >
                            <span>REQUEST DEMO</span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Demo Request Modal */}
            <AnimatePresence>
                {showModal && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setShowModal(false)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl z-50"
                        >
                            <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl max-h-[90vh] overflow-y-auto">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-3xl font-display font-black">Request Your Demo</h2>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Step 1: Company Info */}
                                    {step === 1 && (
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-semibold mb-2">Company Name *</label>
                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                                                    placeholder="Acme Corporation"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-semibold mb-2">Industry *</label>
                                                    <select
                                                        name="industry"
                                                        value={formData.industry}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="technology">Technology</option>
                                                        <option value="healthcare">Healthcare</option>
                                                        <option value="finance">Finance</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold mb-2">Company Size *</label>
                                                    <select
                                                        name="companySize"
                                                        value={formData.companySize}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="1-50">1-50</option>
                                                        <option value="51-200">51-200</option>
                                                        <option value="201-500">201-500</option>
                                                        <option value="1000+">1000+</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => setStep(2)}
                                                className="w-full bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2"
                                            >
                                                Continue
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}

                                    {/* Step 2: Contact Info */}
                                    {step === 2 && (
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold mb-2">Job Title *</label>
                                                    <input
                                                        type="text"
                                                        name="jobTitle"
                                                        value={formData.jobTitle}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold mb-2">Work Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold mb-2">Phone (Optional)</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                                                />
                                            </div>

                                            {error && (
                                                <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400">
                                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                                    <span className="text-sm">{error}</span>
                                                </div>
                                            )}

                                            <div className="flex gap-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setStep(1)}
                                                    disabled={isLoading}
                                                    className="px-8 py-4 rounded-2xl font-bold glass border border-gray-200 disabled:opacity-50"
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={isLoading}
                                                    className="flex-1 bg-gradient-to-r from-brand-primary to-brand-accent text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                                                >
                                                    {isLoading ? (
                                                        <>
                                                            <Loader2 className="w-5 h-5 animate-spin" />
                                                            Submitting...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Submit Request
                                                            <Check className="w-5 h-5" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DemoRequestPage;
