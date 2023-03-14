import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import LeftFighter from "assets/left-removebg-preview.png";
import Ambulance from "assets/ambulance.png";
import Police from "assets/police.png";

const boxImages = [
  require("assets/birinci-removebg-preview.png"),
  require("assets/ikinci-removebg-preview.png"),
  require("assets/ucuncu-removebg-preview.png"),
  require("assets/dorduncu-removebg-preview.png"),
  require("assets/besinci-removebg-preview.png"),
  require("assets/altinci-removebg-preview.png"),
  require("assets/yedinci-removebg-preview.png"),
  require("assets/sekizinci-removebg-preview.png"),
  require("assets/dokuzuncu-removebg-preview.png"),
];

const FirstSection = () => {
  const [boxImage, setBoxImage] = useState(0);
  const [fightStart, setFightStart] = useState(false);
  const [fightIsEnd, setFightIsEnd] = useState(false);
  const [fightStartButton, setFightStartButton] = useState(false);
  const [fighterIsHidden, setFighterIsHidden] = useState(false);

  const handleStartFight = () => {
    setFightStart(true);
    setFightStartButton(true);
  };

  const handleBgColor = useMemo(() => {
    if (fightStart) {
      return "bg-yellow-50";
    } else if (fightIsEnd && !fighterIsHidden) {
      return "bg-red-400";
    } else {
      return "bg-yellow-50";
    }
  }, [fighterIsHidden, fightIsEnd, fightStart]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (boxImage === 8) {
        setBoxImage(0);
        setFightStart(false);
        setFightIsEnd(true);
      } else if (!fightIsEnd) {
        setBoxImage((prev) => prev + 1);
      }
    }, 600);

    !fightStart && clearInterval(timer);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxImage, fightStart]);

  useEffect(() => {
    if (!fightIsEnd) return;
    const timer2 = setInterval(() => {
      setFighterIsHidden(true);
    }, 4000);

    return () => clearInterval(timer2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fightIsEnd]);

  return (
    <div
      className={`transition-colors duration-150 min-h-screen overflow-hidden ${handleBgColor}`}
    >
      <nav className="h-16 w-full pt-6 text-black-50">
        <div className="flex container mx-auto justify-between">
          <div className="hidden sm:block">
            <p className="text-4xl font-semibold whitespace-nowrap">H E</p>
          </div>
          <ul className="flex w-full justify-between sm:justify-end sm:gap-2.5 md:gap-8 text-sm font-semibold items-center">
            <li>
              <a
                href="#about"
                className="p-2 hover:text-blue-50 duration-150 transition-colors border-b-2 border-b-transparent hover:border-b-blue-50"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="p-2 hover:text-blue-50 duration-150 transition-colors border-b-2 border-b-transparent hover:border-b-blue-50"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="p-2 hover:text-blue-50 duration-150 transition-colors border-b-2 border-b-transparent hover:border-b-blue-50"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="py-2 px-3 hover:bg-blue-50 hover:text-white duration-150 transition-colors border-2 border-blue-50 rounded-md cursor-pointer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="flex justify-center lg:mt-14 items-center text-black-50">
        <div className="grid lg:grid-cols-2 container py-20 lg:gap-20">
          <div className="flex flex-col justify-center gap-3 max-w-7xl">
            <p className="text-sm text-blue-50">Hey there, my name is</p>
            <p className="text-6xl font-semibold">Hüseyin Erkal.</p>
            <p className="text-3xl italic font-normal">
              A passionate Front-End Developer{" "}
            </p>

            <p className="my-4 text-lg font-medium">
              I&apos;m a front-end developer building scalable, cross-browser
              compatible, performant, and responsive websites located in
              İstanbul. Feel free to take a look at my latest projects a little
              bit below this page. Currently, I&apos;m producing valuable,
              user-friendly websites at{" "}
              <a
                target="_blank"
                href="https://www.entererp.com"
                rel="noreferrer"
                className="text-blue-50 font-medium hover:underline"
              >
                EnterERP
              </a>
            </p>
          </div>
          <div className="aspect-h-14 aspect-w-16 max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 873 528.67134"
              className="h-full w-full"
            >
              <path
                d="M1022.88857,185.66433h-607a8.72766,8.72766,0,0,0-8.71972,8.72V605.70431a8.72766,8.72766,0,0,0,8.71972,8.72h607a8.71242,8.71242,0,0,0,6.63037-3.06,2.04507,2.04507,0,0,0,.19-.24,8.16654,8.16654,0,0,0,1.25-2.11005,8.50717,8.50717,0,0,0,.65966-3.31V194.38436A8.72953,8.72953,0,0,0,1022.88857,185.66433Zm6.24024,420.04a6.17524,6.17524,0,0,1-1.03028,3.42,6.44578,6.44578,0,0,1-2.35986,2.12,6.1843,6.1843,0,0,1-2.8501.69h-607a6.23758,6.23758,0,0,1-6.23-6.23V194.38436a6.23758,6.23758,0,0,1,6.23-6.23h607a6.23945,6.23945,0,0,1,6.24024,6.23Z"
                transform="translate(-163.5 -185.66433)"
                fill="#3f3d56"
              />
              <rect
                x="244.91149"
                y="34.94921"
                width="621.95676"
                height="2.49281"
                fill="#3f3d56"
              />
              <circle cx="266.1004" cy="18.6961" r="7.47844" fill="#3f3d56" />
              <circle cx="287.60091" cy="18.6961" r="7.47844" fill="#3f3d56" />
              <circle cx="309.10142" cy="18.6961" r="7.47844" fill="#3f3d56" />
              <path
                d="M956.61417,401.33567h-485a17.01916,17.01916,0,0,1-17-17v-103a17.01917,17.01917,0,0,1,17-17h485a17.01917,17.01917,0,0,1,17,17v103A17.01916,17.01916,0,0,1,956.61417,401.33567Zm-485-135a15.017,15.017,0,0,0-15,15v103a15.017,15.017,0,0,0,15,15h485a15.017,15.017,0,0,0,15-15v-103a15.017,15.017,0,0,0-15-15Z"
                transform="translate(-163.5 -185.66433)"
                fill="#f2f2f2"
              />
              <path
                d="M578.61417,587.33567h-107a17.01916,17.01916,0,0,1-17-17v-76a17.01917,17.01917,0,0,1,17-17h107a17.01917,17.01917,0,0,1,17,17v76A17.01916,17.01916,0,0,1,578.61417,587.33567Zm-107-108a15.017,15.017,0,0,0-15,15v76a15.017,15.017,0,0,0,15,15h107a15.017,15.017,0,0,0,15-15v-76a15.017,15.017,0,0,0-15-15Z"
                transform="translate(-163.5 -185.66433)"
                fill="#f2f2f2"
              />
              <path
                d="M956.61417,587.33567h-107a17.01916,17.01916,0,0,1-17-17v-76a17.01917,17.01917,0,0,1,17-17h107a17.01917,17.01917,0,0,1,17,17v76A17.01916,17.01916,0,0,1,956.61417,587.33567Zm-107-108a15.017,15.017,0,0,0-15,15v76a15.017,15.017,0,0,0,15,15h107a15.017,15.017,0,0,0,15-15v-76a15.017,15.017,0,0,0-15-15Z"
                transform="translate(-163.5 -185.66433)"
                fill="#f2f2f2"
              />
              <path
                d="M775.61417,587.33567h-107a17.01916,17.01916,0,0,1-17-17v-76a17.01917,17.01917,0,0,1,17-17h107a17.01917,17.01917,0,0,1,17,17v76A17.01916,17.01916,0,0,1,775.61417,587.33567Zm-107-108a15.017,15.017,0,0,0-15,15v76a15.017,15.017,0,0,0,15,15h107a15.017,15.017,0,0,0,15-15v-76a15.017,15.017,0,0,0-15-15Z"
                transform="translate(-163.5 -185.66433)"
                fill="#f2f2f2"
              />
              <rect
                x="715.47077"
                y="68.96771"
                width="1.9997"
                height="527.39706"
                transform="translate(59.56218 763.88528) rotate(-76.25179)"
                fill="#f2f2f2"
              />
              <rect
                x="452.66318"
                y="331.83562"
                width="522.90198"
                height="2.00009"
                transform="translate(-222.58199 -4.17702) rotate(-13.91411)"
                fill="#f2f2f2"
              />
              <path
                d="M976.61426,435.83545h-485a16.51867,16.51867,0,0,1-16.5-16.5v-103a16.51866,16.51866,0,0,1,16.5-16.5h485a16.519,16.519,0,0,1,16.5,16.5v103A16.519,16.519,0,0,1,976.61426,435.83545Z"
                transform="translate(-163.5 -185.66433)"
                fill="#fff"
              />
              <rect
                x="720.78333"
                y="451.35523"
                width="2.00006"
                height="162.54779"
                transform="matrix(0.61507, -0.78848, 0.78848, 0.61507, -305.62597, 588.47188)"
                fill="#f2f2f2"
              />
              <rect
                x="642.28271"
                y="532.23806"
                width="161.99326"
                height="1.99991"
                transform="translate(-338.11403 383.11648) rotate(-38.66636)"
                fill="#f2f2f2"
              />
              <rect
                x="523.78333"
                y="451.35523"
                width="2.00006"
                height="162.54779"
                transform="matrix(0.61507, -0.78848, 0.78848, 0.61507, -381.45807, 433.1421)"
                fill="#f2f2f2"
              />
              <rect
                x="445.28271"
                y="532.23806"
                width="161.99326"
                height="1.99991"
                transform="translate(-381.29695 260.03396) rotate(-38.66636)"
                fill="#f2f2f2"
              />
              <rect
                x="901.78333"
                y="451.35523"
                width="2.00006"
                height="162.54779"
                transform="matrix(0.61507, -0.78848, 0.78848, 0.61507, -235.95283, 731.18604)"
                fill="#f2f2f2"
              />
              <rect
                x="823.28271"
                y="532.23806"
                width="161.99326"
                height="1.99991"
                transform="translate(-298.43835 496.20245) rotate(-38.66636)"
                fill="#f2f2f2"
              />
              <path
                d="M790.61417,659.83567h-107a16.51867,16.51867,0,0,1-16.5-16.5v-76a16.51868,16.51868,0,0,1,16.5-16.5h107a16.51867,16.51867,0,0,1,16.5,16.5v76A16.51866,16.51866,0,0,1,790.61417,659.83567Z"
                transform="translate(-163.5 -185.66433)"
                fill="#3a10e5"
              />
              <path
                d="M846.5,661.33567h-219a1,1,0,0,1,0-2h219a1,1,0,0,1,0,2Z"
                transform="translate(-163.5 -185.66433)"
                fill="#ccc"
              />
              <path
                d="M383.5,714.33567h-219a1,1,0,0,1,0-2h219a1,1,0,0,1,0,2Z"
                transform="translate(-163.5 -185.66433)"
                fill="#ccc"
              />
              <path
                d="M751.06693,599.83567h-28a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Z"
                transform="translate(-163.5 -185.66433)"
                fill="#fff"
              />
              <path
                d="M767.61417,626.83567h-61a8,8,0,0,1,0-16h61a8,8,0,0,1,0,16Z"
                transform="translate(-163.5 -185.66433)"
                fill="#fff"
              />
              <path
                d="M595.61417,601.83567h-107a16.51867,16.51867,0,0,1-16.5-16.5v-76a16.51868,16.51868,0,0,1,16.5-16.5h107a16.51867,16.51867,0,0,1,16.5,16.5v76A16.51866,16.51866,0,0,1,595.61417,601.83567Z"
                transform="translate(-163.5 -185.66433)"
                fill="#3a10e5"
              />
              <path
                d="M556.06693,541.83567h-28a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Z"
                transform="translate(-163.5 -185.66433)"
                fill="#fff"
              />
              <path
                d="M572.61417,568.83567h-61a8,8,0,1,1,0-16h61a8,8,0,0,1,0,16Z"
                transform="translate(-163.5 -185.66433)"
                fill="#fff"
              />
              <path
                d="M979.61417,630.83567h-107a16.51867,16.51867,0,0,1-16.5-16.5v-76a16.51868,16.51868,0,0,1,16.5-16.5h107a16.51867,16.51867,0,0,1,16.5,16.5v76A16.51866,16.51866,0,0,1,979.61417,630.83567Z"
                transform="translate(-163.5 -185.66433)"
                fill="#e6e6e6"
              />
              <path
                d="M940.06693,570.83567h-28a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Z"
                transform="translate(-163.5 -185.66433)"
                fill="#fff"
              />
              <path
                d="M956.61417,597.83567h-61a8,8,0,0,1,0-16h61a8,8,0,0,1,0,16Z"
                transform="translate(-163.5 -185.66433)"
                fill="#fff"
              />
              <polygon
                points="301.345 346.608 301.345 334.348 254.057 328.515 254.058 346.61 301.345 346.608"
                fill="#a0616a"
              />
              <path
                d="M449.5198,508.19005h38.53073a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H464.40666a14.88686,14.88686,0,0,1-14.88686-14.88686v0A0,0,0,0,1,449.5198,508.19005Z"
                transform="translate(820.89725 -138.83954) rotate(89.99738)"
                fill="#2f2e41"
              />
              <polygon
                points="90.755 514.923 103.015 514.922 108.847 467.634 90.753 467.635 90.755 514.923"
                fill="#a0616a"
              />
              <path
                d="M251.62834,697.0835h38.53073a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H266.5152a14.88686,14.88686,0,0,1-14.88686-14.88686v0a0,0,0,0,1,0,0Z"
                transform="translate(378.31956 1223.37718) rotate(179.99738)"
                fill="#2f2e41"
              />
              <path
                d="M269.41666,683.54661c-.14575,0-.293-.00684-.44091-.01953L252.278,682.13645a5.1392,5.1392,0,0,1-4.67261-5.77832l8.66553-67.39843a3.12648,3.12648,0,0,0,.00049-.78907L242.50626,499.54075a5.1414,5.1414,0,0,1,5.02784-5.78613l48.69311-.69043a5.96065,5.96065,0,0,1,.74219.043l.133.03711,9.366,4.05371,136.16211,14.99609a5.15989,5.15989,0,0,1,4.48364,5.09961v17.53125a5.1426,5.1426,0,0,1-5.73462,5.10742l-78.66211-9.16894a3.04256,3.04256,0,0,0-1.18676.09082l-62.20459,17.14355a3.11972,3.11972,0,0,0-2.23706,2.46L274.46867,679.29466A5.1261,5.1261,0,0,1,269.41666,683.54661Z"
                transform="translate(-163.5 -185.66433)"
                fill="#2f2e41"
              />
              <circle
                cx="101.92655"
                cy="175.41285"
                r="33.56647"
                fill="#2f2e41"
              />
              <circle
                cx="90.18453"
                cy="140.08443"
                r="13.88957"
                fill="#2f2e41"
              />
              <path
                d="M235.16509,318.22524a13.891,13.891,0,0,1,12.44275-13.81447,14.04162,14.04162,0,0,0-1.44678-.0751,13.88958,13.88958,0,0,0,0,27.77915,14.04163,14.04163,0,0,0,1.44678-.07511A13.891,13.891,0,0,1,235.16509,318.22524Z"
                transform="translate(-163.5 -185.66433)"
                fill="#2f2e41"
              />
              <path
                d="M269.38077,512.00559c-8.33813,0-17.613-2.30859-27.26855-8.74609l-.16357-.10938-.04541-.19042c-.08985-.377-8.97339-37.97754-9.14844-67.09961a32.06833,32.06833,0,0,1,13.19946-26.26856,31.12926,31.12926,0,0,1,28.15186-4.7334h0q.9375.29736,1.87988.6377a31.97955,31.97955,0,0,1,20.66943,32.77441c-1.2666,15.3877-1.77417,43.41309,9.05542,58.21973l.25342.34668-.3042.30273C305.45133,497.34739,290.39,512.00559,269.38077,512.00559Z"
                transform="translate(-163.5 -185.66433)"
                fill="#ccc"
              />
              <circle
                cx="101.83071"
                cy="186.09654"
                r="24.56103"
                fill="#a0616a"
              />
              <path
                d="M235.24607,370.14a10.05578,10.05578,0,0,1-9.10343,12.44522l-9.47681,34.45532-12.23616-13.96819L215.305,372.4945A10.11028,10.11028,0,0,1,235.24607,370.14Z"
                transform="translate(-163.5 -185.66433)"
                fill="#a0616a"
              />
              <path
                d="M197.99186,446.06126a9.51912,9.51912,0,0,1-8.93262-12.709l18.01611-50.62109a5.04218,5.04218,0,0,1,6.00513-3.165l13.12915,3.47559a5.01331,5.01331,0,0,1,3.417,6.58984l-11.57861,31.21,19.63965-6.24707a12.77147,12.77147,0,1,1,5.75269,24.80274l-44.01563,6.55664A9.6247,9.6247,0,0,1,197.99186,446.06126Z"
                transform="translate(-163.5 -185.66433)"
                fill="#ccc"
              />
              <ellipse
                cx="105.83127"
                cy="168.29587"
                rx="23.14929"
                ry="13.88957"
                fill="#2f2e41"
              />
              <path
                d="M339.79819,520.17065a10.05576,10.05576,0,0,1-6.44927-14.00581l-25.50131-25.03323,18.15524-3.90137,21.43308,24.3701a10.11027,10.11027,0,0,1-7.63774,18.57031Z"
                transform="translate(-163.5 -185.66433)"
                fill="#a0616a"
              />
              <path
                d="M328.02677,506.55052a4.62214,4.62214,0,0,1-3.57593-1.67676l-27.83838-33.77442-21.78881-41.84472a13.83978,13.83978,0,0,1,2.06738-12.53809,13.28911,13.28911,0,0,1,11.02637-5.41016,17.42636,17.42636,0,0,1,3.21386.36817,13.31123,13.31123,0,0,1,9.56079,8.35254l18.45752,43.36328,22.12085,27.9043a4.639,4.639,0,0,1-.72094,6.47461l-9.626,7.76269A4.59969,4.59969,0,0,1,328.02677,506.55052Z"
                transform="translate(-163.5 -185.66433)"
                fill="#ccc"
              />
              <path
                d="M1035.5,632.33567h-219a1,1,0,0,1,0-2h219a1,1,0,0,1,0,2Z"
                transform="translate(-163.5 -185.66433)"
                fill="#ccc"
              />
              <path
                d="M842.88419,434.071v1.26468H629.184v-1.3235l1.15039-1.62749,67.75-95.6471a3.3846,3.3846,0,0,1,5.48974,0l45.43018,64.13727L781.34415,355.62a3.38541,3.38541,0,0,1,5.48,0l54.91016,76.83336Z"
                transform="translate(-163.5 -185.66433)"
                fill="#3a10e5"
              />
              <circle
                cx="465.24084"
                cy="159.89522"
                r="24.87333"
                fill="#3a10e5"
              />
              <path
                d="M976.61417,436.33567h-485a17.01916,17.01916,0,0,1-17-17v-103a17.01917,17.01917,0,0,1,17-17h485a17.01917,17.01917,0,0,1,17,17v103A17.01916,17.01916,0,0,1,976.61417,436.33567Zm-485-135a15.017,15.017,0,0,0-15,15v103a15.017,15.017,0,0,0,15,15h485a15.017,15.017,0,0,0,15-15v-103a15.017,15.017,0,0,0-15-15Z"
                transform="translate(-163.5 -185.66433)"
                fill="#3f3d56"
              />
            </svg>
          </div>
        </div>
      </section>
      <div className="container h-48 relative mx-auto">
        <div className="flex items-end h-full absolute bottom-0 w-48 right-24 gap-2.5">
          {!fightStartButton && (
            <div
              className="absolute top-0 left-12 hover:opacity-90 duration-150 cursor-pointer py-2 px-6 bg-blue-50 text-white rounded-md"
              onClick={handleStartFight}
            >
              Fight
            </div>
          )}

          <div
            className={`relative transition duration-150 ${
              fightStart && "fight-animation"
            } `}
          >
            <Image
              width={90}
              height={20}
              src={LeftFighter}
              className={`z-10 ${fightIsEnd && "-rotate-90 translate-y-4"} 
                ${fighterIsHidden && "opacity-0 select-none"}
              `}
              alt="left-fighter"
            />

            <Image
              src={Ambulance}
              alt="ambulance"
              className={`absolute -bottom-12 w-56 h-40 z-[999] -translate-x-[100vw] ${
                fightIsEnd && "ambulance-animation"
              }`}
            />

            {!fightStartButton && (
              <p className="absolute -top-4 font-semibold text-xs -left-14">
                Menemen <br></br> soğansız olur.
              </p>
            )}
            {fightStart && (
              <div className="absolute w-9 h-1 rounded-md bg-white -top-4 left-7">
                {!fightIsEnd && (
                  <div className="w-9 healt-animation bg-green-500 h-full"></div>
                )}
              </div>
            )}
          </div>

          <div
            className={`relative transition-all duration-200 ${
              fightStart && "-translate-x-8"
            }`}
          >
            <Image
              width={90}
              height={10}
              src={boxImages[boxImage]}
              alt="left-fighter"
              className={`${fighterIsHidden && "opacity-0 select-none"}`}
            />

            <Image
              src={Police}
              alt="police"
              className={`absolute -translate-x-[100vw] -bottom-12 w-56 h-40 z-[999] ${
                fightIsEnd && "ambulance-animation"
              }`}
            />

            {!fightStartButton && (
              <p className="absolute -top-4 font-semibold text-xs -right-14">
                Hayır <br></br> soğanlı !!
              </p>
            )}
            {fightStart && (
              <div className="absolute w-9 h-1 rounded-md bg-white -top-4 right-6">
                <div className="w-9 bg-green-500 h-full"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
