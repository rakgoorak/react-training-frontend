import { X } from "lucide-react";

const variantConfig = {
  success: {
    icon: '✨',
    gradient: 'bg-gradient-success',
    shadow: 'shadow-success'
  },
  error: {
    icon: '⚠️',
    gradient: 'bg-gradient-error',
    shadow: 'shadow-error'
  },
  warning: {
    icon: '⚡',
    gradient: 'bg-gradient-warning',
    shadow: 'shadow-warning'
  },
  info: {
    icon: '💡',
    gradient: 'bg-gradient-info',
    shadow: 'shadow-info'
  },
  premium: {
    icon: '🚀',
    gradient: 'bg-gradient-premium',
    shadow: 'shadow-premium'
  }
};

export const GradientNotification = ({ 
  title, 
  message, 
  variant, 
  onClose, 
  className 
}) => {
  const config = variantConfig[variant];
  
  return (
    <div
      className={(
        "relative max-w-sm w-full rounded-2xl p-4 animate-notification-in",
        config.gradient,
        config.shadow,
        "text-white overflow-hidden",
        className
      )}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
          style={{ backgroundSize: "200% 100%" }}
        />
      </div>
      
      <div className="relative flex items-start gap-3">
        <div className="flex-shrink-0 text-xl animate-bounce-gentle">
          {config.icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-sm">{title}</h3>
          <p className="text-white/90 text-xs mt-1">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};