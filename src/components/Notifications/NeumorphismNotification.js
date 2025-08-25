import { Info, X } from "lucide-react";

export const NeumorphismNotification = ({
    title,
    message,
    onClose,
    className
}) => {
    return (
        <div
            className={(
                "relative max-w-sm w-full bg-gray-100 rounded-3xl p-4 animate-notification-in",
                "shadow-[8px_8px_16px_#c8c8c8,-8px_-8px_16px_#ffffff]",
                "border border-gray-200/50",
                className
            )}
        >
            <div className="flex items-start gap-3">
                <div
                    className="flex-shrink-0 p-2 rounded-full bg-info/10 
                     shadow-[inset_4px_4px_8px_#c8c8c8,inset_-4px_-4px_8px_#ffffff]"
                >
                    <Info className="h-4 w-4 text-info" />
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
                    <p className="text-gray-600 text-xs mt-1">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="flex-shrink-0 p-1 rounded-full text-gray-500 hover:text-gray-700
                     shadow-[2px_2px_4px_#c8c8c8,-2px_-2px_4px_#ffffff]
                     hover:shadow-[inset_2px_2px_4px_#c8c8c8,inset_-2px_-2px_4px_#ffffff]
                     transition-all duration-200"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};