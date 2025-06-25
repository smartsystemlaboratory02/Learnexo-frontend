import type React from "react";

type PageProgressProps = {
    step: number;
    totalSteps: number;
};

const PageProgress: React.FC<PageProgressProps> = ({ step, totalSteps }) => {
    // const widthPercentage = totalSteps > 0 ? (step / totalSteps) * 100 : 0;

    return (
        <div className="w-full flex gap-4">
            {
                Array.from({ length: totalSteps }).map((_, index) => (
                    <div key={index} className={`w-full h-[3px] rounded-full ${index+1 <= step ? 'bg-green-3' : 'bg-gray-4/30'}`}></div>
                ))
            }
        </div>
    )
}

export default PageProgress