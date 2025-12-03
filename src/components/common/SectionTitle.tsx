
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(
      "mb-10",
      centered ? "text-center" : "",
      className
    )}>
      <h2 className={cn(
        "section-title",
        centered ? "mx-auto after:left-1/4 after:right-1/4 after:w-1/2" : ""
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
