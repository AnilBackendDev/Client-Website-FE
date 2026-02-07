import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Users,
    BarChart3,
    Zap,
    ChevronRight,
    Play,
    X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/onboardai-hero.png';


const LandingPage: React.FC = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const [playingTestimonial, setPlayingTestimonial] = useState<number | null>(null);

    // Video files
    const demoVideoUrl = '/demo-video.mp4';
    const testimonialVideoUrl = '/testimonial-video.mp4';

    const openVideoModal = (videoUrl: string) => {
        setCurrentVideoUrl(videoUrl);
        setShowVideoModal(true);
    };

    return (
        <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200/20 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
                        <Zap className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-display font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                        OnboardAI
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
                    <Link to="/pricing" className="hover:text-brand-primary transition-colors">Pricing</Link>
                    <a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        to="/demo-request"
                        className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/25"
                    >
                        Book a Demo
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Animated Mesh Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-primary/15 via-brand-accent/15 to-brand-primary/15 text-brand-primary text-sm font-bold mb-8 border border-brand-primary/30 shadow-lg shadow-brand-primary/10 backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 animate-pulse" />
                            <Zap className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">Next Gen AI-Powered Hiring Platform</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-6xl md:text-8xl font-display font-black leading-[1.05] mb-8 tracking-tight"
                        >
                            <span className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                                Revolutionize Your
                            </span>
                            <br />
                            <span className="relative inline-block mt-2">
                                <span className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary blur-2xl opacity-40 animate-pulse" />
                                <span className="relative bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent">
                                    Recruitment Lifecycle
                                </span>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
                        >
                            Unlock efficiency with <span className="text-brand-primary font-bold">OnboardAI</span>, your all-in-one AI-powered hiring journey. Automate job posting, candidate matching, and employee readiness in one seamless platform.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8"
                        >
                            <Link to="/demo-request" className="relative group bg-gradient-to-r from-brand-primary to-blue-600 text-white px-10 py-5 rounded-2xl text-lg font-bold overflow-hidden shadow-2xl shadow-brand-primary/40 hover:shadow-brand-primary/60 transition-all inline-block">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started Today
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <button
                                onClick={() => openVideoModal(demoVideoUrl)}
                                className="glass px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all border-2 border-gray-200/50 dark:border-gray-700/50 shadow-xl flex items-center gap-3 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                                </div>
                                <span>Watch Demo</span>
                            </button>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-brand-primary" />
                                <span className="font-semibold">2000+ Companies</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-emerald-500" />
                                <span className="font-semibold">AI-Powered</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BarChart3 className="w-4 h-4 text-brand-accent" />
                                <span className="font-semibold">Real-Time Analytics</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Image with Floating Elements */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative mx-auto max-w-6xl"
                    >
                        {/* Spotlight Effect */}
                        <div className="absolute -inset-40 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent blur-3xl" />

                        {/* Floating Card - Top Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="absolute -left-8 top-20 z-20 hidden lg:block"
                        >
                            <div className="glass p-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Active Candidates</p>
                                        <p className="text-xl font-black text-gray-900 dark:text-white">12,543</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                                    <ChevronRight className="w-3 h-3" />
                                    <span>+23% this month</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Card - Top Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="absolute -right-8 top-40 z-20 hidden lg:block"
                        >
                            <div className="glass p-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                        <BarChart3 className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Hiring Success Rate</p>
                                        <p className="text-xl font-black text-gray-900 dark:text-white">94.2%</p>
                                    </div>
                                </div>
                                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '94%' }}
                                        transition={{ duration: 1.5, delay: 1.2 }}
                                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Card - Bottom Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="absolute -left-8 bottom-32 z-20 hidden lg:block"
                        >
                            <div className="glass p-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">AI Matches Today</p>
                                        <p className="text-xl font-black text-gray-900 dark:text-white">847</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Main Image Container */}
                        <div className="relative rounded-[32px] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.4)] border-8 border-white/50 dark:border-gray-800/50 bg-white dark:bg-gray-900">
                            {/* Gradient Overlay on edges for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 z-10 pointer-events-none" />

                            <motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.5 }}
                                src={heroImage}
                                alt="OnboardAI AI-Powered Hiring Journey"
                                className="w-full h-auto relative z-0"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-brand-accent/30 to-brand-primary/30 blur-3xl rounded-full -z-10" />
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-brand-primary/30 to-emerald-400/30 blur-3xl rounded-full -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Trust built on 2000+ global partnerships.</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
                        {/* Logos Placeholders with simple text for demo */}
                        {['Apex Fusion', 'Nebula Dynamics', 'Virtuoso', 'Quantum', 'Pinnacle Nexus', 'Kyros Global'].map((logo) => (
                            <span key={logo} className="text-xl font-display font-black text-gray-400">{logo}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section id="features" className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Key Features</h2>
                        <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                title: 'Candidate Tracking',
                                desc: 'Effortlessly manage your hiring process with real-time candidate tracking and AI evaluation.',
                                icon: <Users className="w-10 h-10 text-orange-500" />,
                                bg: 'bg-orange-50 dark:bg-orange-500/10'
                            },
                            {
                                title: 'Analytics Dashboard',
                                desc: 'Make data-driven decisions and foster professional growth with our performance analytics dashboard.',
                                icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
                                bg: 'bg-blue-50 dark:bg-blue-500/10'
                            },
                            {
                                title: 'Employee Management',
                                desc: 'Simplify TA tasks with efficient employee information management through our centralized database.',
                                icon: <Zap className="w-10 h-10 text-emerald-500" />,
                                bg: 'bg-emerald-50 dark:bg-emerald-500/10'
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-10 rounded-3xl glass border border-gray-200/50 dark:border-gray-800/50 shadow-xl shadow-gray-200/20 dark:shadow-none hover:shadow-2xl transition-all"
                            >
                                <div className={`${feature.bg} w-20 h-20 rounded-2xl flex items-center justify-center mb-8`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{feature.desc}</p>
                                <a href="#" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all">
                                    Learn More <ChevronRight className="w-4 h-4" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-24 px-6 bg-gradient-to-br from-brand-primary to-brand-accent text-white rounded-[40px] mx-6 my-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <span className="text-sm font-black uppercase tracking-widest text-white/80 mb-12 block text-center">What Our Clients Say</span>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Testimonial 1 - John Anderson */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-6">
                                "Since using OnboardAI, our Talent Acquisition processes have become more efficient and organized. It's a game-changer!"
                            </h3>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-white/20 border border-white/40 flex items-center justify-center overflow-hidden">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">John Anderson</p>
                                    <p className="text-white/70 text-sm">TA Director, Apex Solutions</p>
                                </div>
                            </div>
                            <div className="aspect-video bg-black/40 rounded-2xl border border-white/20 overflow-hidden relative group">
                                <video
                                    src={testimonialVideoUrl}
                                    controls={playingTestimonial === 1}
                                    className="w-full h-full object-cover"
                                    preload="metadata"
                                />
                                {playingTestimonial !== 1 && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 hover:bg-black/20 transition-all group-hover:bg-black/30"
                                        onClick={(e) => {
                                            const video = e.currentTarget.parentElement?.querySelector('video');
                                            if (video) video.play();
                                            setPlayingTestimonial(1);
                                        }}
                                    >
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                            <Play className="w-10 h-10 text-white fill-white ml-1" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Testimonial 2 - Sarah Mitchell */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-6">
                                "OnboardAI transformed how we hire. The AI matching is incredibly accurate and saved us countless hours in screening candidates."
                            </h3>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-white/20 border border-white/40 flex items-center justify-center overflow-hidden">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Sarah Mitchell</p>
                                    <p className="text-white/70 text-sm">VP of HR, TechVentures Inc.</p>
                                </div>
                            </div>
                            <div className="aspect-video bg-black/40 rounded-2xl border border-white/20 overflow-hidden relative group">
                                <video
                                    src={testimonialVideoUrl}
                                    controls={playingTestimonial === 2}
                                    className="w-full h-full object-cover"
                                    preload="metadata"
                                />
                                {playingTestimonial !== 2 && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 hover:bg-black/20 transition-all group-hover:bg-black/30"
                                        onClick={(e) => {
                                            const video = e.currentTarget.parentElement?.querySelector('video');
                                            if (video) video.play();
                                            setPlayingTestimonial(2);
                                        }}
                                    >
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                            <Play className="w-10 h-10 text-white fill-white ml-1" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-display font-black mb-8 leading-tight">Let's grow together</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                        Discover the complete capabilities of our platform with a complimentary 15-day trial. Manage job postings, attract candidates, and facilitate employee onboarding, all within a single, integrated space.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/demo-request" className="bg-brand-primary text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all shadow-2xl shadow-brand-primary/40 inline-block text-center">
                            Get Started Today
                        </Link>
                        <Link to="/demo-request" className="glass px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all shadow-xl inline-block text-center">
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="pt-24 pb-12 px-6 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                                    <Zap className="text-white w-5 h-5" />
                                </div>
                                <span className="text-xl font-display font-bold">OnboardAI</span>
                            </div>
                            <p className="text-gray-500 max-w-xs mb-8">
                                Empowering TA teams with next-generation AI hiring and onboarding solutions.
                            </p>
                            <div className="flex gap-4">
                                {/* Social Placeholders */}
                                {[1, 2, 3, 4].map(s => <div key={s} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-brand-primary hover:text-white transition-all text-gray-400" />)}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Product</h4>
                            <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-brand-primary">Features</a></li>
                                <li><a href="#" className="hover:text-brand-primary">Pricing</a></li>
                                <li><a href="#" className="hover:text-brand-primary">Security</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Resources</h4>
                            <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-brand-primary">Blog</a></li>
                                <li><a href="#" className="hover:text-brand-primary">User Guides</a></li>
                                <li><a href="#" className="hover:text-brand-primary">Webinars</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Company</h4>
                            <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-brand-primary">About Us</a></li>
                                <li><a href="#" className="hover:text-brand-primary">Careers</a></li>
                                <li><a href="#" className="hover:text-brand-primary">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-400 font-medium">
                        <p>© 2026 OnboardAI, Inc. • Privacy • Terms • Sitemap</p>
                        <div className="flex gap-6">
                            <select className="bg-transparent outline-none cursor-pointer">
                                <option>English (US)</option>
                                <option>French</option>
                                <option>German</option>
                            </select>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Video Modal */}
            <AnimatePresence>
                {showVideoModal && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowVideoModal(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed inset-4 md:inset-10 lg:inset-20 z-[101] flex items-center justify-center"
                        >
                            <div className="relative w-full h-full max-w-6xl mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl">
                                {/* Close Button */}
                                <button
                                    onClick={() => setShowVideoModal(false)}
                                    className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>

                                {/* Video Player */}
                                <video
                                    src={currentVideoUrl}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LandingPage;
