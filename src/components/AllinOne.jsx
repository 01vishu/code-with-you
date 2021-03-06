import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

export const AllinOne = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-4xl font-bold text-center">All-In-One Plateform</h2>
        <p className="text-xl text-gray-500 py-8 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
          dolores laborum sint id facere quibusdam similique cumque ducimus
          perspiciatis totam?
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600 " />
            </div>
            <div>
              <h3 className="text-lg font-bold ">ReactJS</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                quis doloribus dolorem autem alias in dolorum dignissimos
                distinctio fugit quo exercitationem accusantium consequatur,
                nisi veniam vitae commodi? Enim, rerum eos.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600 " />
            </div>
            <div>
              <h3 className="text-lg font-bold ">NextJS</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                quis doloribus dolorem autem alias in dolorum dignissimos
                distinctio fugit quo exercitationem accusantium consequatur,
                nisi veniam vitae commodi? Enim, rerum eos.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600 " />
            </div>
            <div>
              <h3 className="text-lg font-bold ">MongoDB</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                quis doloribus dolorem autem alias in dolorum dignissimos
                distinctio fugit quo exercitationem accusantium consequatur,
                nisi veniam vitae commodi? Enim, rerum eos.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600 " />
            </div>
            <div>
              <h3 className="text-lg font-bold ">Python</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                quis doloribus dolorem autem alias in dolorum dignissimos
                distinctio fugit quo exercitationem accusantium consequatur,
                nisi veniam vitae commodi? Enim, rerum eos.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600 " />
            </div>
            <div>
              <h3 className="text-lg font-bold ">JAVA</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                quis doloribus dolorem autem alias in dolorum dignissimos
                distinctio fugit quo exercitationem accusantium consequatur,
                nisi veniam vitae commodi? Enim, rerum eos.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600 " />
            </div>
            <div>
              <h3 className="text-lg font-bold ">C++</h3>
              <p className="text-lg pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                quis doloribus dolorem autem alias in dolorum dignissimos
                distinctio fugit quo exercitationem accusantium consequatur,
                nisi veniam vitae commodi? Enim, rerum eos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
