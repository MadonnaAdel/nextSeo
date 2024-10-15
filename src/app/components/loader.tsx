import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="loader" role="status" aria-label="Loading"></div>
      <style jsx>{`
        .loader {
          border: 6px solid rgba(255, 255, 255, 0.3);
          border-left-color: #fff;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
