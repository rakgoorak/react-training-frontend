import { CheckCircle2, X } from "lucide-react";

export const MinimalNotification = ({
    title,
    message,
    onClose,
    className
}) => {
    return (
        <div
            className={(
                "relative max-w-sm w-full bg-white rounded-lg p-4 animate-notification-in",
                "border-l-4 border-success shadow-lg hover:shadow-xl transition-shadow duration-300",
                "before:absolute before:top-0 before:left-0 before:w-full before:h-0.5",
                "before:bg-gradient-to-r before:from-success before:to-success/50",
                className
            )}
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">{title}</h3>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};