import React from "react";
import { toast } from "react-toastify";
import Title from "../../../components/feachers/Titel";
import createAxiosInstance from "../../../components/services/axiosInstance";

export const SignupForm = ({ data, setData }) => {
  const userAxios = createAxiosInstance("user");
  // on signup function
  const onSignup = () => {
    const postObj = {
      firstName: data.firstName,
      password: data.password,
      email: data.email,
      lastName: data.lastName,
      userName: data.userName,
    };
    userAxios
      .post(`/user/createUser`, postObj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        toast.error("Error, please try again!");
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
                class="w-full bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
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
                      captcha: "",
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
