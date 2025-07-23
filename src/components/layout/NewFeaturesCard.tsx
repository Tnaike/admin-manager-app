import React from "react";

export function NewFeaturesCard() {
    return (
        <div className="bg-[#F9FAFB] rounded-lg p-4 py-5 mb-6">
            <p className="text-xs sm:text-sm font-medium mb-1">New features available!</p>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">Check out the new dashboard view. Pages now load faster.</p>
            <img
                src="https://res.cloudinary.com/dt9rspla9/image/upload/v1753239917/sidebar-features_t7myfn.jpg"
                alt="New feature"
                className="w-full h-32 object-cover rounded-md my-2 sm:my-3"
            />
            <div className="flex items-center gap-3 text-xs">
                <button className="text-xs sm:text-sm font-medium text-[#667085]">Dismiss</button>
                <button className="text-primary sm:text-sm font-medium">What's new?</button>
            </div>
        </div>
    );
} 