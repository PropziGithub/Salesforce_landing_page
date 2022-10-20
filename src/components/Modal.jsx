import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Modal = ({ show, closeModal, openModal, title, children, className}) => {

  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-green-500  hover:bg-opacity-50 duration-300 shadow-xl sr-only"
        >
          Open Me
        </button>
      </div>

      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[99999] overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={className}>
                <Dialog.Title
                  as="div"
                  className="flex flex-row justify-between px-4"
                >
                  <div className="font-[600] text-[18px] leading-[24px] text-[#222]">{title}</div>
                  <div className="cursor-pointer" onClick={closeModal}>
                  <svg className="w-[30px] h-[30px] text-[#222] hover:text-blue-600"  fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
                    <path d="M278.6,256l68.2-68.2c6.2-6.2,6.2-16.4,0-22.6c-6.2-6.2-16.4-6.2-22.6,0L256,233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6,0
	                c-3.1,3.1-4.7,7.2-4.7,11.3c0,4.1,1.6,8.2,4.7,11.3l68.2,68.2l-68.2,68.2c-3.1,3.1-4.7,7.2-4.7,11.3c0,4.1,1.6,8.2,4.7,11.3
	                c6.2,6.2,16.4,6.2,22.6,0l68.2-68.2l68.2,68.2c6.2,6.2,16.4,6.2,22.6,0c6.2-6.2,6.2-16.4,0-22.6L278.6,256z"></path>
                    </svg>
                    </div>
                </Dialog.Title>
                <div className="mt-2">
                  {children}
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="sr-only inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Modal;