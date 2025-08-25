import { Crown, X } from "lucide-react";

export const FloatingNotification = ({
    title,
    message,
    onClose,
    className
}) => {
    return (
        <div
            className={(
                "relative max-w-sm w-full animate-notification-in",
                "transform hover:scale-105 transition-transform duration-300",
                className
            )}
        >
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-premium rounded-2xl blur-lg opacity-30 animate-pulse-glow" />

            {/* Main card */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 
                     border border-premium/20 shadow-premium">
                {/* Header with premium badge */}
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-gradient-premium rounded-full">
                            <Crown className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xs font-medium text-premium bg-premium/10 px-2 py-1 rounded-full">
                            PREMIUM
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Content */}
                <div>
                    <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
                    <p className="text-gray-600 text-xs mt-1">{message}</p>
                </div>

                {/* Progress bar */}
                <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gradient-premium h-1 rounded-full w-3/4 animate-pulse" />
                </div>
            </div>
        </div>
    );
};