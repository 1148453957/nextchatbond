"use client";
import React, { useEffect, useState } from "react";
import { useBoolean } from "react-use";
import { authenticate } from "./action";
import { Form, Input, Button } from "antd";
import { sendTA } from "@/lib/js/TA";
import Cookies from "js-cookie";
import Link from "next/link";
import { message } from "antd";
import { emailLogin } from "@/api/login";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function LoginPage() {
  const { data: session } = useSession();
  const isLoggedIn = session?.user?.userId;
  // 已经登录过，自动跳转首页
  if (isLoggedIn) {
    redirect("/");
  }

  const [scroll, setScroll] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const updateWindowHeight = () => {
    setScroll(window.innerHeight > 750);
  };
  useEffect(() => {
    setScroll(window.innerHeight > 750);

    window.addEventListener("resize", updateWindowHeight);
    return () => {
      window.removeEventListener("resize", updateWindowHeight);
    };
  });

  const [formD, setFormD] = useState({
    email: "",
    password: "",
    short: "",
    getShortLoading: false,
    registerLoading: false,
    loginLoading: false,
    agree: false,
  });

  const [loginLoading, setLoginLoading] = useState(false);

  const [form] = Form.useForm();
  const emailValue = Form.useWatch("email", form);
  const passwordValue = Form.useWatch("password", form);
  const shortValue = Form.useWatch("short", form);
  const onFinish = async (values: any) => {
    // 密码框敲击回车的时候，也会自动触发
    console.log("Success:", values);
    sendTA("XWEB_CLICK", {
      name: "login",
      style: "sign_in",
      container: Cookies.get("userId"),
    });

    if (!values.email) {
      messageApi.error("Please enter your email address");
      return;
    }
    if (!values.password) {
      messageApi.error("Please enter your password");
      return;
    }
    try {
      let res: any = await emailLogin(values);
      if (+res.data.error_code === 0) {
        authenticate()
          .then((res) => {
            console.log("成功了", Date.now(), res);
          })
          .catch((error) => {
            messageApi.error("Login failed, please try again later");
          });
      } else {
        throw res.data?.error_msg;
      }
    } catch (err: any) {
      messageApi.error(err || "Login failed, please try again later");
    }
  };

  const [googleLoading, toggleGoogleLoading] = useBoolean(false);
  /**谷歌登录 */
  function gooogleLoginFn() {}

  return (
    <>
      {contextHolder}
      <div className="w-full h-100vh !absolute left-0 top-0 bg-[#fff] pt-16">
        <img
          className="w-35.7vw absolute top-0 right-0 z-2"
          src="/assets/img/login/login_bg1.svg"
        />
        <img
          className="w-19.58vw absolute bottom-0 left-0 z-2"
          src="/assets/img/login/login_bg2.png"
        />
        <div
          className={`w-full h-full overflow-y-auto flex justify-center ${
            scroll ? "items-center" : ""
          } relative z-3`}
        >
          <div className="w-full px-5 md:w-100 md:px-0 mx-auto">
            <h2
              className={`w-full text-8 h-10 text-[#040608] fw-700 text-center mb-5 ${
                scroll ? "" : "mt-2"
              }`}
            >
              Welcome Back
            </h2>
            <Form
              className="w-full"
              layout="vertical"
              form={form}
              onFinish={onFinish}
            >
              <Form.Item label="Email" name="email">
                <Input
                  autoComplete=""
                  placeholder="name@example.com"
                  className="!bg-[#F0F0F0] !rounded-2 w-full !px-5 !h-10 !leading-10 !text-[#040608] !text-4 !fw-500 !focus:shadow-none !b-2 !b-[#F0F0F0] !focus:b-[#040608]"
                />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input.Password
                  autoComplete=""
                  placeholder="Password"
                  className="!bg-[#F0F0F0] !rounded-2 w-full !px-5  !h-10 !leading-10 !text-[#040608] !text-4 !fw-500 !focus:shadow-none !b-2 !b-[#F0F0F0] !focus:b-[#040608]"
                />
              </Form.Item>

              <Form.Item>
                <Link
                  href="/resetPassword"
                  className="w-full block !text-[#040608] !text-4 !fw-500 text-right cursor-pointer"
                >
                  Forgot password?
                </Link>
              </Form.Item>

              <Form.Item>
                <Button
                  style={{
                    background:
                      "linear-gradient(90deg, #83e10a 0%, #0ac655 100%)",
                  }}
                  htmlType="submit"
                  loading={formD.registerLoading || formD.loginLoading}
                  className="w-full !h-10 !text-4 !text-white !fw-700 !rounded-2 text-center !b-0"
                >
                  Sign in
                </Button>
              </Form.Item>
            </Form>
            <div className="w-full h-12 mb-1 text-[#040608] text-4 fw-300 flex flex-justify-center">
              Don't have an account?
              <Link
                href="/signup"
                className="fw-700 ml-5 cursor-pointer mt--0.25"
              >
                Sign up
              </Link>
            </div>

            <div className="w-full h-0.25 mb-8 bg-[#E6E6E6] flex">
              <span className="px-2 bg-[#fff] text-3 fw-400 text-[#818283] w-35 h-3.25 leading-3.25 mt--1.5 ml-[calc(50%-70px)]">
                OR CONTINUE WITH
              </span>
            </div>

            <Button
              style={{
                background: "linear-gradient(90deg, #83e10a 0%, #0ac655 100%)",
              }}
              className="w-full !h-10 !mb-4 !text-4 !text-white !fw-700 !rounded-2 text-center !b-0 !fcc"
              onClick={gooogleLoginFn}
              loading={googleLoading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 48 48"
                className="mr-2 h-5 w-5"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  ></path>
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible"></use>
                </clipPath>
                <path
                  clipPath="url(#b)"
                  fill="#FBBC05"
                  d="M0 37V11l17 13z"
                ></path>
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                ></path>
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                ></path>
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                ></path>
              </svg>

              <span className="h-5 leading-5">Google</span>
            </Button>
            <div className="w-80 mx-auto h-12 mb-8 text-[#040608] text-3.5 fw-300 flex flex-justify-center flex-wrap">
              By continuing, you agree to our
              <br />
              <a href="user.html" className="ml-1 underline">
                Terms of Service
              </a>{" "}
              and
              <a href="privacy.html" className="ml-1 underline">
                Privacy Policy
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
