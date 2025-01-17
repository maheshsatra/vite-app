import React from "react";
import Title from "../../feachers/Titel";
import axios from "axios";
import { user } from "../../feachers/apis";
import { toast } from "react-toastify";

export const SignupForm = ({ data, setData }) => {
  const onSignup = () => {
    const postObj = {
      firstName: data.firstName,
      password: data.password,
      email: data.email,
      lastName: data.lastName,
      userName: data.userName,
    };
    console.log(postObj)
        axios.post(`http://10.10.10.23:3030/api/users/createUser`,postObj)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          toast.error("error,please try again!")
        });
  };
  return (
    <div className="w-full h-screen bg-green-100 flex justify-center items-center">
      <div className="w-[50%] p-2 bg-white rounded-md">
        <Title name="Sign Up" tag="h1" align="center" />
        <div className="flex justify-center items-center mt-2">
          <div className="w-full flex gap-4 p-2">
            <div className="w-1/2">
              <div className="w-full flex gap-2">
                {/* first Name */}
                <div className="w-full mb-4">
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    first Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={data.firstName}
                    onChange={(e) =>
                      setData({ ...data, firstName: e.target.value })
                    }
                  />
                </div>
                {/* last Name */}
                <div className="w-full mb-4">
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={data.lastName}
                    onChange={(e) =>
                      setData({ ...data, lastName: e.target.value })
                    }
                  />
                </div>
              </div>
              {/* User Name */}
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  user Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your User Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={data.userName}
                  onChange={(e) =>
                    setData({ ...data, userName: e.target.value })
                  }
                />
              </div>

              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  password
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <button
                class="bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={onSignup}
              >
                Create
              </button>
              <div className="w-full mt-5">
                Login your Account.{" "}
                <span
                  className="text-green-500 cursor-pointer font-semibold"
                  onClick={() =>
                    setData({
                      ...data,
                      isLogin: true,
                      name: "",
                      email: "",
                      password: "",
                      captcha:"",
                    })
                  }
                >
                  Click Me
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <img src="/signup.png" alt="Login Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
