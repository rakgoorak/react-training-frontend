import { CheckCircle, X } from "lucide-react";

export const GlassNotification = ({ title, message, onClose, className }) => {
    return (
        <div
            className={(
                "relative max-w-sm w-full bg-white/10 backdrop-blur-xl border border-white/20",
                "rounded-2xl p-4 shadow-success animate-notification-in",
                "before:absolute before:inset-0 before:rounded-2xl before:p-[1px]",
                "before:bg-gradient-to-r before:from-white/20 before:to-transparent",
                "before:-z-10",
                className
            )}
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-success animate-bounce-gentle" />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm">{title}</h3>
                    <p className="text-white/80 text-xs mt-1">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="flex-shrink-0 text-white/60 hover:text-white transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};
