"use client";
import "./home.scss";

import { sendTA } from "@/lib/js/TA";
import Cookies from "js-cookie";
import Link from "next/link";
import animationData from "./lottie.json";
import Lottie from "lottie-react";
import Image from "next/image";

export default function Home({ session, searchParams }: any) {
  const isLoggedIn = session?.user?.userId;

  const sendTAFn = (style: string) => {
    sendTA("XWEB_CLICK", {
      name: "home_page",
      style,
      container: Cookies.get("userId"),
    });
    console.log(111111,gtag);
    
    gtag('event', 'screen_view', {
      'app_name': 'myAppName',
      'screen_name': 'Home',
      'user_id': 'USER_ID'
    });
    gtag('event', 'qwe', {
      'app_name': 'myAppName',
      'screen_name': 'Home',
      'user_id': 'USER_ID'
    });
    gtag('event', 'test2', {
      'app_name': 'myAppName',
      'screen_name': 'Home',
      'user_id': 'USER_ID'
    });
  };
  const stepList = [
    {
      title: "Import data",
      desc: "Connect your data sources, upload files, or add a website for crawling, and Chatbond will use all of that data to train your chatbot.",
    },
    {
      title: "Customize robot",
      desc: "Make your chatbot look like it's part of your website with custom colors and logos and make it match your brand's personality with custom instructions",
    },
    {
      title: "Embed website",
      desc: "Add a chat widget to any website with a simple embed code.",
    },
    {
      title: "Integrate with tools",
      desc: "Connect your chatbot to your favorite tools like Slack, Zapier, and more.",
    },
  ];
  return (
    <>
      <div className="mx-auto text-#040608 font-[Inter] relative">
        <Image
          className="w-35.7vw absolute top-0 right-0"
          src="/assets/img/login/login_bg1.svg"
          alt="Chatbond logo"
          width={100}
          height={100}
        />
        <section
          className="py-10 md:py-20 md:px-14vw px-6 text-center "
          style={{
            background: "linear-gradient(180deg, #eafce7 0%, #fff 100%)",
          }}
        >
          <div className="text-center"></div>
          <p className="buffer md:text-16 text-10 fw-bold max-w-[65rem] mx-auto relative z-2 md:lh-23 lh-7vh">
            Response Customers Instantly
          </p>
          <p className="buffer md:text-16 text-10 fw-bold max-w-[65rem] mx-auto relative z-2">
            With <span className="text-#0AC655">GPT-driven</span> Chatbot
          </p>
          <p className="lh-24px text-#040608 max-w-[800px] mt-5 fw-300 mx-auto">
            Engagement increased by 270%, conversion rates improved by 240%, and
            CPA reduced by 70%.
          </p>
          <Link href="/center">
            <div
              className="w-328px h-16 mt-10 text-center mx-auto"
              onClick={() => sendTAFn("try for free")}
            >
              <Lottie animationData={animationData} />
            </div>
          </Link>
          <div className="tip text-12px font-400 mx-auto fcc mt-4 font-[Inter] text-#818283">
            <span className="mr-4 flex">
              <Image
                className="w-8px mr-1"
                src="/assets/img/home/icon_right.png"
                alt="chatbot"
                width={100}
                height={100}
              />
              <span>No credit card required</span>
            </span>
          </div>
        </section>

        <section className="py-14 md:mx-14vw px-6 rounded-5">
          <p className="text-12 fw-700 text-center">
            Get started with Chatbond
          </p>
          <div className="flex flex-col items-start justify-center gap-16 mt-10">
            <ul className="grid grid-cols-1 flex-wrap items-start justify-center gap-10 lg:grid-cols-4">
              {stepList.map((item, index) => (
                <li
                  className="relative flex flex-col overflow-hidden rounded-md transition-all duration-500 ease-in-out hover:shadow-md border-1 border-#040608 rounded-4"
                  key={index}
                >
                  <p className="linearBg text-#fff text-center py-3 fw-500">
                    Step{index + 1}
                  </p>
                  <div className="xl:h-[12rem] h-[8rem] md:h-[18rem]">
                    <h4 className="text-5 fw-700 px-4 mt-3">{item.title}</h4>
                    <p className="text-#686A6B fw-500 px-4 text-14px lh-5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="py-10 md:py-20 px-6 flex flex-items-center w-full max-w-300 mx-auto flex-col lg:flex-row">
          <video
            preload="auto"
            autoPlay
            muted
            className="w-full lg:w-[67%] max-w-200 rounded-6 mb-10 lg:mb-0"
          >
            <source src="/assets/caseVideo.mp4" type="video/mp4" />
          </video>

          <div className="w-full lg:w-[33%] lg:pl-10 flex flex-col">
            <div className="w-full flex flex-justify-evenly py-8 px-4 b-1 b-[#d3dbe5] rounded-4 gap-8 mb-10">
              <div className="w-40 flex flex-col">
                <span className="text-8 fw-bold flex items-start gap-2">
                  270%
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="#64ED80"
                    style={{
                      minWidth: "20px",
                      minHeight: "20px",
                      color: "#64ed80",
                    }}
                  >
                    <path
                      d="M16 20H5V7L12 0L13.25 1.25C13.3667 1.36667 13.4625 1.525 13.5375 1.725C13.6125 1.925 13.65 2.11667 13.65 2.3V2.65L12.55 7H19C19.5333 7 20 7.2 20.4 7.6C20.8 8 21 8.46667 21 9V11C21 11.1167 20.9833 11.2417 20.95 11.375C20.9167 11.5083 20.8833 11.6333 20.85 11.75L17.85 18.8C17.7 19.1333 17.45 19.4167 17.1 19.65C16.75 19.8833 16.3833 20 16 20ZM7 18H16L19 11V9H10L11.35 3.5L7 7.85V18ZM5 7V9H2V18H5V20H0V7H5Z"
                      fill="#64ED80"
                    ></path>
                  </svg>
                </span>
                <span className="text-4 mt-5">Increase in engagement</span>
              </div>
              <div className="w-40 flex flex-col">
                <span className="text-8 fw-bold flex items-start gap-2">
                  240%
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#64ED80"
                    style={{
                      minWidth: "20px",
                      minHeight: "20px",
                      color: "#64ed80",
                    }}
                  >
                    <path
                      fill="#64ED80"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0001 1.67535C5.39781 1.67535 1.66675 5.40641 1.66675 10.0087C1.66675 12.2185 2.54478 14.3382 4.10766 15.9011C5.67054 17.464 7.79023 18.342 10.0001 18.342C12.2099 18.342 14.3296 17.464 15.8925 15.9011C17.4554 14.3382 18.3334 12.2185 18.3334 10.0087C18.3334 9.04202 18.1584 8.08369 17.8251 7.18369L16.4917 8.51702C16.6084 9.00869 16.6667 9.50869 16.6667 10.0087C16.6667 13.6905 13.6819 16.6754 10.0001 16.6754C6.31826 16.6754 3.33341 13.6905 3.33341 10.0087C3.33341 6.32687 6.31826 3.34202 10.0001 3.34202C10.5001 3.34202 11.0001 3.40035 11.4917 3.51702L12.8334 2.17535C11.9251 1.85035 10.9667 1.67535 10.0001 1.67535ZM15.8334 1.67535L12.5001 5.00869V6.25869L10.3751 8.38369C10.2501 8.34202 10.1251 8.34202 10.0001 8.34202C9.07963 8.34202 8.33342 9.08823 8.33342 10.0087C8.33342 10.9291 9.07963 11.6754 10.0001 11.6754C10.9205 11.6754 11.6667 10.9291 11.6667 10.0087C11.6667 9.88369 11.6667 9.75869 11.6251 9.63369L13.7501 7.50869H15.0001L18.3334 4.17535L15.8334 4.17535V1.67535ZM10.0001 5.00869C7.23872 5.00869 5.00008 7.24732 5.00008 10.0087C5.00008 12.7701 7.23872 15.0087 10.0001 15.0087C11.3258 15.0087 12.5978 14.4822 13.5357 13.5443C14.4736 12.6064 15.0001 11.3344 15.0001 10.0087H13.3334C13.3334 11.8496 11.841 13.342 10.0001 13.342C8.15917 13.342 6.66675 11.8496 6.66675 10.0087C6.66675 8.16778 8.15917 6.67535 10.0001 6.67535V5.00869Z"
                    ></path>
                  </svg>
                </span>
                <span className="text-4 mt-5">
                  Increase in conversion rates
                </span>
              </div>
            </div>
            <div className="w-full flex flex-justify-evenly flex-col py-8 px-4 b-1 b-[#d3dbe5] rounded-4 gap-10 bg-[#EFF2F6]">
              <span className="tracking-wide leading-6">
                “My main goal was to find an easy-to-teach website that covered
                all the tasks needed for our customer service. Chatbond, from
                the beginning, was the perfect one. Right now, more than a third
                of our ecommerce revenue is made thanks to Chatbond.”
              </span>
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                <Image
                  width={40}
                  height={40}
                  className="rounded-full text-transparent"
                  src="/assets/img/businesses/Bartosz.png"
                  alt="Bartosz Kaczmarczyk"
                />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col items-start gap-2 text-sm text-zinc-900 md:flex-row md:items-center md:gap-1">
                    <p className="font-medium text-zinc-900">
                      Bartosz Kaczmarczyk
                    </p>
                  </div>
                  <p className="text-xs text-zinc-500">Ecommerce Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 md:py-20 md:px-14vw px-6 fcc flex-col bg-#f6f6f6">
          <p className="text-7 md:text-9 fw-700 text-black text-center">
            Enterprises around the world use Chatbond to provide assistance to
            customers.
          </p>
          <div className="flex gap-10 md:gap-50 flex-row">
            <div className="text-center text-8 mt-10 fcc flex-col">
              <Image
                width={100}
                height={100}
                className="w-25 h-25 md:w-50 md:h-50"
                src="/assets/img/BUSINESSES.svg"
                alt=""
              />
              <h4 className="fw-bold mt-10 fcc flex-col text-5 md:text-7">
                <span>6000+</span> <span>businesses</span>
              </h4>
            </div>

            <div className="text-center text-8 mt-10 fcc flex-col">
              <Image
                width={100}
                height={100}
                className="w-25 h-25 md:w-50 md:h-50"
                src="/assets/img/countrys.svg"
                alt=""
              />
              <h4 className="fw-bold mt-10 fcc flex-col text-5 md:text-7">
                <span>150</span> <span>countries/regions</span>
              </h4>
            </div>
          </div>
          <p className="text-12 fw-700 text-center mt-10">Trusted by</p>

          <div className="w-full flex justify-evenly overflow-hidden mt-10">
            <Image
              width={100}
              height={100}
              className="w-[140px]"
              src="/assets/img/businesses/praktiker.svg"
              alt=""
            />
            <Image
              width={100}
              height={100}
              className="w-[140px]"
              src="/assets/img/businesses/utear.png"
              alt=""
            />
            <Image
              width={100}
              height={100}
              className="hidden md:block w-[140px]"
              src="/assets/img/businesses/paypal.png"
              alt=""
            />
            <Image
              width={100}
              height={100}
              className="hidden md:block w-[140px] mt--4"
              src="/assets/img/businesses/glovo.svg"
              alt=""
            />
          </div>
        </section>

        <section className="py-14 md:mx-14vw bg-#fff px-6 lg:px-0">
          <p className="text-12 fw-700 text-center">Powerful Features</p>
          <div className="grid grid-cols-2 gap-16 md:grid-cols-3 lg:grid-cols-4 mt-10">
            <div className="flex flex-col items-start gap-1">
              <img
                className="w-11 h-11"
                src="/assets/img/home/icon_0.png"
                alt="Powerful Features"
              />
              <h5 className="pt-1 text-lg font-medium">
                Multiple Data Sources
              </h5>
              <p className="text-sm font-normal text-zinc-700">
                Import data from multiple sources to train your chatbot.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img
                className="w-11 h-11"
                src="/assets/img/home/icon_1.png"
                alt="Customizations"
              />
              <h5 className="pt-1 text-lg font-medium">Customizations</h5>
              <p className="text-sm font-normal text-zinc-700">
                Customize your chatbot’s look and feel to match your brand’s
                style and website design.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img
                className="w-11 h-11"
                src="/assets/img/home/icon_2.png"
                alt="Whitelabel"
              />
              <h5 className="pt-1 text-lg font-medium">Whitelabel</h5>
              <p className="text-sm font-normal text-zinc-700">
                Remove Chatbond branding and use a custom domain.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img
                className="w-11 h-11"
                src="/assets/img/home/icon_3.png"
                alt="Privacy&Security"
              />
              <h5 className="pt-1 text-lg font-medium">
                Privacy &amp; Security
              </h5>
              <p className="text-sm font-normal text-zinc-700">
                Your data is hosted on secure servers with robust encryption and
                access control.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img
                className="w-11 h-11"
                src="/assets/img/home/icon_4.png"
                alt="Auto-Retrain"
              />
              <h5 className="pt-1 text-lg font-medium">Auto-Retrain</h5>
              <p className="text-sm font-normal text-zinc-700">
                Set your chatbot to retrain automatically and always be synced
                with your data.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img
                className="w-11 h-11"
                src="/assets/img/home/icon_5.png"
                alt="Integrations"
              />
              <h5 className="pt-1 text-lg font-medium">Integrations</h5>
              <p className="text-sm font-normal text-zinc-700">
                Connect your chatbot to your favorite tools like Slack, Zapier,
                and more.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img
                className="w-11 h-11"
                src="/assets/img/home/icon_6.png"
                alt="Powerful AI Models"
              />
              <h5 className="pt-1 text-lg font-medium">Powerful AI Models</h5>
              <p className="text-sm font-normal text-zinc-700">
                Choose from a variety of AI models, including GPT-3.5-turbo and
                GPT-4.
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              <img
                className="w-11 h-11"
                src="/assets/img/home/icon_7.png"
                alt="Languanges"
              />
              <h5 className="pt-1 text-lg font-medium">80+ Languanges</h5>
              <p className="text-sm font-normal text-zinc-700">
                Reach your customers in their native language even if your data
                is in a different language.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-20 md:px-14vw px-6 fcc flex-col bg-#f6f6f6 mb-20">
          <p className="text-7 md:text-10 fw-700 text-black text-center mb-5">
            Simplify your work:
          </p>
          <p className="text-7 md:text-10 fw-700 text-black text-center">
            Connect Chatbond to your tech stack
          </p>
          <img
            src="/assets/img/businesses/tools.png"
            className="w-full mt-10 mb-30"
            alt=""
          />
          <video
            preload="auto"
            autoPlay
            muted
            loop
            className="w-full max-w-200 rounded-6"
          >
            <source src="/homeVideo.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="w-full text-center relative">
          <p className="text-12 fw-700 text-black text-center">
            Resolve up to 80% of customer questions with AI
          </p>

          <Link href="/center">
            <div
              className="w-328px h-16 mt-10 text-center mx-auto mb-18"
              onClick={() => sendTAFn("try for free")}
            >
              <Lottie animationData={animationData} />
            </div>
          </Link>
        </section>

        <section className="md:px-14vw px-6 bg-#1D1F21 flex justify-center items-center">
          <a
            className="block w-250px"
            href="https://www.producthunt.com/posts/chatbond-free-ai-chatbot-builder?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatbond&#0045;free&#0045;ai&#0045;chatbot&#0045;builder"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=473852&theme=light"
              alt="ChatBond&#0032;&#0124;&#0032;Free&#0032;AI&#0032;Chatbot&#0032;Builder - Response&#0032;Customers&#0032;Instantly&#0032;&#0032;With&#0032;GPT&#0045;driven&#0032;Chatbot&#0046; | Product Hunt"
              width="250"
              height="54"
            />
          </a>
          <a
            className="text-#818283 my-6 block"
            href="https://www.toolpilot.ai"
            target="_blank"
          >
            <img
              className="w-230px"
              src="/assets/img/home/toolpilot.png"
              alt="toolpilot"
            />
          </a>
          <a href="https://www.aitoolnet.com/" target="_blank">
            <img
              src="https://www.aitoolnet.com/static/assets/images/logo.svg"
              alt="aitoolnet.com"
              className="w-37.5"
            />
          </a>
          <a
            className="text-#818283 my-6 block ml-5"
            href="https://toolsfine.com"
            target="_blank"
          >
            <img
              className="w-160px"
              src="/assets/img/home/toolsfine.jpg"
              alt="toolsfine"
            />
          </a>
        </section>

        <footer className="py-10 md:px-14vw px-6 bg-#000 text-#fff">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-10 mb-5">
            <div className="text-center md:text-left">
              <img
                src="/assets/img/home/logo_text.png"
                className="w-136px mb-3 mx-auto md:mx-0"
                alt="logo"
              />
              <p className="mb-5 text-#818283">
                Custom ChatGPT for your website
              </p>
              <div className="grid w-full grid-cols-4 gap-4 md:w-auto md:grid-cols-6">
                <a
                  className="contents"
                  target="_blank"
                  href={isLoggedIn ? "/help" : "/login"}
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 px-4 py-1 col-span-4 h-11 text-base md:col-span-2">
                    Contact
                  </button>
                </a>
                <a
                  className="contents"
                  target="_blank"
                  href="https://www.linkedin.com/company/chatbond"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border bg-transparent shadow-sm dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 disabled:bg-zinc-100/60 h-11 rounded-xl border-zinc-800 p-3 text-zinc-400 md:col-span-1 hover:bg-zinc-800/90 hover:text-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </a>
                <a
                  className="contents"
                  target="_blank"
                  href="https://www.instagram.com/chatbond.co/"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border bg-transparent shadow-sm dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 disabled:bg-zinc-100/60 h-11 rounded-xl border-zinc-800 p-3 text-zinc-400 md:col-span-1 hover:bg-zinc-800/90 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram size-6"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </button>
                </a>
                <a
                  className="contents"
                  target="_blank"
                  href="https://x.com/Chatbond_co"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border bg-transparent shadow-sm dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 disabled:bg-zinc-100/60 h-11 rounded-xl border-zinc-800 p-3 text-zinc-400 md:col-span-1 hover:bg-zinc-800/90 hover:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6 !w-6 !h-6"
                    >
                      <g>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </g>
                    </svg>
                  </button>
                </a>
                <a
                  className="contents"
                  target="_blank"
                  href="https://www.youtube.com/@chatbod"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border bg-transparent shadow-sm dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 disabled:bg-zinc-100/60 h-11 rounded-xl border-zinc-800 p-3 text-zinc-400 md:col-span-1 hover:bg-zinc-800/90 hover:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6 !w-6 !h-6"
                    >
                      <title>YouTube Icon</title>
                      <path d="M23.498 6.186a2.966 2.966 0 00-2.084-2.084C19.654 3.333 12 3.333 12 3.333s-7.654 0-9.414.769A2.966 2.966 0 00.502 6.186C0 8.102 0 12 0 12s0 3.898.502 5.814a2.966 2.966 0 002.084 2.084c1.76.769 9.414.769 9.414.769s7.654 0 9.414-.769a2.966 2.966 0 002.084-2.084C24 15.898 24 12 24 12s0-3.898-.502-5.814zM9.545 15.568v-7.136L15.545 12l-6 3.568z"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className="text-#818283 text-4">
              <p className="text-#fff fw-700 text-18px">Company</p>
              <a
                className="text-#818283 my-6 block"
                href="privacy.html"
                target="_blank"
              >
                Privacy Policy
              </a>
              <a
                className="text-#818283 my-6 block"
                href="user.html"
                target="_blank"
              >
                Terms of Service
              </a>
              <a
                className="text-#818283 my-6 block"
                href="dpa.html"
                target="_blank"
              >
                DPA
              </a>
              <a
                className="text-#818283 my-6 block md:my-0"
                href="cookie.html"
                target="_blank"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </footer>
        <footer className="md:px-14vw px-6 bg-#1D1F21 flex justify-center">
          <p className="text-#CDCDCE text-12px py-14px">
            ©️2024 Chatbond All rights reserved
          </p>
        </footer>
      </div>
    </>
  );
}
