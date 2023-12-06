import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHospital,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { faCapsules } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

export function SideBar() {
  const navigate = useNavigate();

  return (
    <Box>
      {/*<div>*/}
      {/*  <Flex direction="column" align="start" width="150px" height="300px">*/}
      {/*    <Button width="100%" bgColor="red.100" onClick={() => navigate("/")}>*/}
      {/*      <FontAwesomeIcon icon={faHospital} />*/}
      {/*    </Button>*/}

      {/*    <Button*/}
      {/*      width="100%"*/}
      {/*      bgColor="red.200"*/}
      {/*      onClick={() => navigate("map")}*/}
      {/*    >*/}
      {/*      병원*/}
      {/*    </Button>*/}

      {/*    <Button*/}
      {/*      width="100%"*/}
      {/*      bgColor="red.300"*/}
      {/*      onClick={() => navigate("/drug")}*/}
      {/*    >*/}
      {/*      영양제*/}
      {/*    </Button>*/}
      {/*  </Flex>*/}
      {/*</div>*/}
      <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-white h-full text-gray-600 transition-all duration-300 border-none z-10 sidebar">
        <div className="fixed flex flex-col top-15 left-0 w-64 bg-white h-full border-r">
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-7 space-y-2">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    메 뉴
                  </div>
                </div>
              </li>
              <li>
                <p
                  onClick={() => navigate("Hs")}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faHospital} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    병 원
                  </span>
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigate("drug")}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faCapsules} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    약국
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                    New
                  </span>
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigate("drug")}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faSquarePlus} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    보건소
                  </span>
                </p>
              </li>
              <li>
                {/*내꺼*/}
                <p
                  onClick={() => navigate("/drug")}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 cursor-pointer text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4"></span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    영양제 쇼핑몰
                  </span>
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigate("")}
                  className="relative flex flex-row items-center h-11 focus:outline-none cursor-pointer hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    알 림
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                    1.2k
                  </span>
                </p>
              </li>
              TODO: 나중에 써먹을수있을지도?
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Tasks
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Available Tasks
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Clients
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                    15
                  </span>
                </a>
              </li>
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    설 정
                  </div>
                </div>
              </li>
              <li>
                <p
                  onClick={() => navigate("")}
                  className="relative flex flex-row items-center h-11 focus:outline-none cursor-pointer hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    개인정보
                  </span>
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigate("")}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    옵 션
                  </span>
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigate("")}
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 cursor-pointer border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">
                    로그아웃
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );
}