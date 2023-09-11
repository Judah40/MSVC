import React from "react";
import {FaStop} from "react-icons/fa"
function CourseModal1() {
  return (
    <div
      className="popup-container fixed inset-0 flex justify-center
    items-center bg-gray-900 bg-opacity-70 z-50 overflow-y-auto"
    >
      <div className="popup p-6 flex justify-center rounded-lg shadow-md bg-white w-5/6 relative">
        <div className="w-full  h-12 bg-red-500">
      <FaStop/>
        </div>
      </div>{" "}
    </div>
  );
}

export default CourseModal1;
