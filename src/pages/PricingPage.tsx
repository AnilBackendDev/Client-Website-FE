import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Building2, Rocket, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
    const plans = [
        {
            name: 'Starter',
            price: '$99',
            period: '/month',
            description: 'Perfect for small businesses and startups',
            icon: <Zap className="w-8 h-8" />,
            color: 'from-blue-500 to-blue-600',
            features: [
                'Up to 50 active candidates',
                'Basic AI matching',
                '5 job postings per month',
                'Email support',
                'Basic analytics dashboard',
                'Mobile app access'
            ],
            popular: false
        },
        {
            name: 'Professional',
            price: '$299',
            period: '/month',
            description: 'Most popular for growing companies',
            icon: <Building2 className="w-8 h-8" />,
            color: 'from-brand-primary to-brand-accent',
            features: [
                'Up to 200 active candidates',
                'Advanced AI matching',
                'Unlimited job postings',
                'Priority email & chat support',
                'Advanced analytics & reporting',
                'Custom workflows',
                'Interview scheduling',
                'Background check integration'
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'For large organizations with custom needs',
            icon: <Rocket className="w-8 h-8" />,
            color: 'from-purple-500 to-purple-600',
            features: [
                'Unlimited candidates',
                'Custom AI model training',
                'Unlimited job postings',
                'Dedicated account manager',
                'Custom integrations',
                'Advanced security & compliance',
                'API access',
                'White-label options',
                'SLA guarantee'
            ],
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
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

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
                    <Link to="/pricing" className="hover:text-brand-primary transition-colors text-brand-primary">Pricing</Link>
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
            <section className="pt-32 pb-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6 border border-brand-primary/20">
                        <Star className="w-4 h-4 fill-brand-primary" />
                        <span>Simple, Transparent Pricing</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-black mb-6 bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                        Choose Your Perfect Plan
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                        Scale your hiring with flexible plans designed for businesses of all sizes. All plans include a 14-day free trial.
                    </p>
                </motion.div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 flex flex-col h-full ${plan.popular
                                ? 'bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-2xl shadow-brand-primary/30 scale-105'
                                : 'glass border border-gray-200/50 dark:border-gray-700/50 shadow-xl'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-primary px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                                {plan.icon}
                            </div>

                            <h3 className={`text-2xl font-display font-bold mb-2 ${plan.popular ? 'text-white' : ''}`}>
                                {plan.name}
                            </h3>
                            <p className={`text-sm mb-6 ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                                {plan.description}
                            </p>

                            <div className="flex items-baseline mb-8">
                                <span className={`text-5xl font-black ${plan.popular ? 'text-white' : ''}`}>{plan.price}</span>
                                <span className={`ml-2 ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-brand-primary'}`} />
                                        <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/demo-request"
                                className={`block w-full py-4 rounded-2xl text-center font-bold transition-all mt-auto ${plan.popular
                                    ? 'bg-white text-brand-primary hover:bg-gray-100 shadow-xl'
                                    : 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/25'
                                    }`}
                            >
                                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-display font-black mb-6">Frequently Asked Questions</h2>
                    <div className="grid gap-6 text-left mt-12">
                        {[
                            {
                                q: 'Can I switch plans later?',
                                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
                            },
                            {
                                q: 'What payment methods do you accept?',
                                a: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.'
                            },
                            {
                                q: 'Is there a setup fee?',
                                a: 'No setup fees. You only pay for your chosen plan. Enterprise customers get free onboarding support.'
                            },
                            {
                                q: 'Can I cancel anytime?',
                                a: 'Absolutely. Cancel anytime with no penalties. Your data remains accessible for 30 days after cancellation.'
                            }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="glass p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50"
                            >
                                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
                        Ready to transform your hiring?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
                        Join 2000+ companies already using OnboardAI to streamline their recruitment process.
                    </p>
                    <Link
                        to="/demo-request"
                        className="inline-block bg-brand-primary text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all shadow-2xl shadow-brand-primary/40"
                    >
                        Book Your Demo Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;
