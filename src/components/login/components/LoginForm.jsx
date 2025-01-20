import React, { useEffect } from "react";
import Title from "../../feachers/Titel";
import { toast } from "react-toastify";
import axios from "axios";
import { HiRefresh } from "react-icons/hi";
import axiosInstance from "../../utils/axiosInstance";

export const LoginForm = ({ data, setData }) => {

  // login function
// LoginForm.js

const onLogin = () => {
  const postObj = {
    captcha: data.captcha,
    txnId: data.captchaInfo.txnId,
    userName: data.userName,
    password: data.password,
  };
  axiosInstance
    .post(`/user/login`, postObj)
    .then((response) => {
      toast.success(response.data.message);
      localStorage.setItem("loginInfo", JSON.stringify(response.data));
    })
    .catch((error) => {
      toast.error("Error, please try again!");
      getCaptch();
    });
};


  // get Captch function
  const getCaptch = async () => {
    axios
      .get(`http://10.10.10.23:3030/api/user/getCaptcha`)
      .then((response) => {
        setData({ ...data, captchaInfo: response.data });
      })
      .catch((error) => {
        getCaptch();
        toast.error("error,please try again!");
      });
  };

  // checking user logined or not
  const navigateToHome = () => {
    var loginRes = localStorage.getItem("loginInfo");
    console.log(JSON.parse(loginRes));
}


  useEffect(() => {
    getCaptch();
    navigateToHome()
  }, []);
  return (
    <div className="w-full h-screen bg-green-100 flex justify-center items-center">
      <div className="w-[50%] p-2 bg-white rounded-md">
        <Title name="Login" tag="h1" align="center" />
        <div className="flex justify-center items-center mt-2">
          <div className="w-full flex gap-4 p-2">
            <div className="w-1/2">
              <img src="/login.png" alt="Login Image" />
            </div>
            <div className="w-1/2">
              <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  User Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your User Name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={data.userName}
                  onChange={(e) => setData({ ...data, userName: e.target.value })}
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
              <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 capitalize">
                captcha
                </label> 
                              <div className="w-full mb-2 flex gap-4 rounded-md">              
                <div className="w-[85%] relative">
                  <img
                    src="/bg.jpg"
                    alt="Login Image"
                    className="w-full h-[40px] rounded-md"
                  />
                  <span className="absolute top-1 left-[40%] text-[20px] font-semibold text-gray-600 tracking-wider">
                    {data?.captchaInfo?.captcha?.text}
                  </span>
                </div>
                <div className="w-auto">
                  <HiRefresh
                    className="w-6 h-6 mt-2 cursor-pointer"
                    onClick={getCaptch}
                  />
                </div>
              </div>
              <div className="w-full mb-4">
                {/* <label className="block text-sm font-medium text-gray-700 capitalize">
                captcha
                </label> */}
                <input
                  type="text"
                  placeholder="Enter your Captcha"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={data.captcha}
                  onChange={(e) =>
                    setData({ ...data, captcha: e.target.value })
                  }
                />
              </div>
              </div>

              <button
                class="bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={onLogin}
              >
                Submit
              </button>
              <div className="w-full mt-5">
                Create New Account.{" "}
                <span
                  className="text-green-500 cursor-pointer font-semibold"
                  onClick={() =>
                    setData({
                      ...data,
                      isLogin: false,
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
          </div>
        </div>
      </div>
    </div>
  );
};
