import { Button } from '@mui/material';
import React, { useState } from 'react';
import { GlassNotification } from '../components/Notifications/GlassNotification';
import { GradientNotification } from '../components/Notifications/GradientNotification';
import { FloatingNotification } from '../components/Notifications/FloatingNotification';
import { NeumorphismNotification } from '../components/Notifications/NeumorphismNotification';
import { MinimalNotification } from '../components/Notifications/MinimalNotification';

function MockNotifications() {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (type, variant) => {
        const notificationData = {
            glass: {
                title: "Glass Effect Success!",
                message: "Your action completed with beautiful glass morphism design."
            },
            gradient: {
                success: { title: "Success! ✨", message: "Task completed successfully with gradient magic!" },
                error: { title: "Error Alert! ⚠️", message: "Something went wrong, please try again." },
                warning: { title: "Warning! ⚡", message: "Please check your inputs before proceeding." },
                info: { title: "Info Update! 💡", message: "New features are now available to explore." },
                premium: { title: "Premium! 🚀", message: "Unlock exclusive features with our premium plan." }
            },
            neumorphism: {
                title: "Neumorphic Design",
                message: "Soft UI notification with elegant shadows and depth."
            },
            minimal: {
                title: "Clean & Simple",
                message: "Minimalist notification focusing on clarity and readability."
            },
            floating: {
                title: "Premium Experience",
                message: "Floating notification with premium styling and animations."
            }
        };

        let title, message;
        if (type === 'gradient' && variant) {
            const data = notificationData.gradient[variant];
            title = data.title;
            message = data.message;
        } else {
            const data = notificationData[type];
            if (data && typeof data === 'object' && 'title' in data && 'message' in data) {
                title = data.title;
                message = data.message;
            } else {
                title = "Notification";
                message = "Something happened!";
            }
        }

        const newNotification = {
            id: Date.now().toString(),
            type,
            variant: variant || 'success',
            title,
            message
        };

        setNotifications(prev => [...prev, newNotification]);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
        }, 5000);
    };

    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Beautiful Popup Notifications
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        5 unique, stunning notification designs with smooth animations
                    </p>
                </div>

                {/* Control Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                    <Button
                        onClick={() => addNotification('glass')}
                        className="h-20 flex flex-col gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                    >
                        <span className="text-2xl">🌟</span>
                        <span className="text-sm">Glass Effect</span>
                    </Button>

                    <Button
                        onClick={() => addNotification('neumorphism')}
                        className="h-20 flex flex-col gap-2 bg-gray-100 shadow-[8px_8px_16px_#c8c8c8,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#c8c8c8,-4px_-4px_8px_#ffffff]"
                    >
                        <span className="text-2xl">💫</span>
                        <span className="text-sm">Neumorphism</span>
                    </Button>

                    <Button
                        onClick={() => addNotification('minimal')}
                        className="h-20 flex flex-col gap-2 bg-white border-l-4 border-success hover:shadow-lg"
                    >
                        <span className="text-2xl">✨</span>
                        <span className="text-sm">Minimal</span>
                    </Button>

                    <Button
                        onClick={() => addNotification('floating')}
                        className="h-20 flex flex-col gap-2 bg-gradient-premium text-white hover:scale-105 transition-transform"
                    >
                        <span className="text-2xl">👑</span>
                        <span className="text-sm">Floating</span>
                    </Button>

                    <Button
                        onClick={() => addNotification('gradient', 'premium')}
                        className="h-20 flex flex-col gap-2 bg-gradient-info text-white hover:shadow-info"
                    >
                        <span className="text-2xl">🚀</span>
                        <span className="text-sm">Gradient</span>
                    </Button>
                </div>

                {/* Gradient Variants */}
                <div className="flex flex-wrap gap-2 justify-center mb-12">
                    {(['success', 'error', 'warning', 'info', 'premium']).map((variant) => (
                        <Button
                            key={variant}
                            onClick={() => addNotification('gradient', variant)}
                            variant="outline"
                            size="sm"
                            className={`capitalize`}
                        >
                            {variant}
                        </Button>
                    ))}
                </div>

                {/* Notifications Container */}
                <div className="fixed top-4 right-4 z-50 space-y-4 max-w-sm">
                    {notifications.map((notification) => {
                        switch (notification.type) {
                            case 'glass':
                                return (
                                    <GlassNotification
                                        key={notification.id}
                                        title={notification.title}
                                        message={notification.message}
                                        onClose={() => removeNotification(notification.id)}
                                    />
                                );
                            case 'gradient':
                                return (
                                    <GradientNotification
                                        key={notification.id}
                                        title={notification.title}
                                        message={notification.message}
                                        variant={notification.variant}
                                        onClose={() => removeNotification(notification.id)}
                                    />
                                );
                            case 'neumorphism':
                                return (
                                    <NeumorphismNotification
                                        key={notification.id}
                                        title={notification.title}
                                        message={notification.message}
                                        onClose={() => removeNotification(notification.id)}
                                    />
                                );
                            case 'minimal':
                                return (
                                    <MinimalNotification
                                        key={notification.id}
                                        title={notification.title}
                                        message={notification.message}
                                        onClose={() => removeNotification(notification.id)}
                                    />
                                );
                            case 'floating':
                                return (
                                    <FloatingNotification
                                        key={notification.id}
                                        title={notification.title}
                                        message={notification.message}
                                        onClose={() => removeNotification(notification.id)}
                                    />
                                );
                            default:
                                return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default MockNotifications;