import React from "react";
import {ImCancelCircle} from "react-icons/im"
function CourseModal1(action:any) {
  return (
    <div
      className="popup-container fixed inset-0 flex justify-center
    items-center bg-gray-900 bg-opacity-70 z-50 overflow-y-auto"
    >
      <div className="popup p-6 flex justify-center rounded-lg shadow-md bg-white w-5/6 relative">
        <div className="w-11/12  h-12  flex items-center justify-end">
          <button 
          onClick={()=>
            action
          }
          >
          <ImCancelCircle className="text-2xl text-red-500 hover:text-red-800"/>
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default CourseModal1;
