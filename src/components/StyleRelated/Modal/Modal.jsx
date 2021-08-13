import React from "react";
import Transition from "../Transition/Transition";

function Modal(props) {
  return (
    <div className="" onClick={props.click}>
      <Transition
        className="fixed  inset-0 bg-black bg-opacity-50 z-10 transition-opacity"
        show={props.openModal}
        appear={props.openModal}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      <Transition
        id="search-modal"
        className=" w-full fixed overflow-hidden inset-0 z-50 overflow-hidden top-14 flex items-start mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={props.openModal}
        appear={props.openModal}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="rounded-b-2xl  bg-white p-8 w-full min-h-1/2
        border-t-2 border-gray md:w-1/3 lg:w-1/2"
        >
          {props.children}
        </div>
      </Transition>
    </div>
  );
}

export default Modal;
