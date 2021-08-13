import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Bell from "../../../components/icons/Bell";
import { Link } from "react-router-dom";


  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

function NotifMenu() {
  return (
    <Menu as="div" className="cursor-pointer mx-2 md:mx-4 relative">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className=" flex text-sm rounded-full focus:outline-none ">
              <span className="sr-only">Open user menu</span>
              {/* IMAGE-PROFILE */}
              <div className="relative">
                <span className="absolute -top-2 -right-2 rounded-md font-semibold shadow-sm px-1 bg-secondary text-white">
                  4
                </span>
                <Bell />
              </div>
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right border absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Your Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Settings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Sign out
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

export default NotifMenu;
