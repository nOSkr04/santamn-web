import Image from "next/image";
import images from "./gg.png";
import android from "./android.png";
import ios from "./appstore.png";
import Link from "next/link";
import Countdown, { CountdownRenderProps } from "react-countdown";
import mobileImage from "./ggwp.png";
export default function Home() {
  const Completionist = () => <span>You are good to go!</span>;
  const targetDate = new Date("2024-01-01T01:00:00");
  const checkNumberDigits = (number: number) => {
    // Check if the number is a one-digit number
    if (number >= 0 && number < 10) {
      return `0${number}`;
    }
    // Check if the number is a two-digit number
    else if (number >= 10 && number < 100) {
      return `${number}`;
    }
  };

  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <h1 className="text-center text-white text-xl">
          {checkNumberDigits(hours)}:{checkNumberDigits(minutes)}:
          {checkNumberDigits(seconds)}
        </h1>
      );
    }
  };
  const rendererWeb = ({
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <h1 className="text-center text-white text-4xl self-center">
          {checkNumberDigits(hours)}:{checkNumberDigits(minutes)}:
          {checkNumberDigits(seconds)}
        </h1>
      );
    }
  };
  return (
    <div style={{ position: "relative" }}>
      {/* mobile */}
      <div className="lg:hidden">
        <div
          style={{
            backgroundImage: `url(${mobileImage.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="grid grid-cols-1 mb-20">
            <Countdown date={targetDate} renderer={renderer} />
            <Link
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=mn.santa&pcampaignid=web_share"
              }
              passHref
              className="cursor-pointer mt-5"
            >
              <Image src={android} width={250} height={100} alt="android" />
            </Link>
            <Link
              target="_blank"
              href={"https://apps.apple.com/mn/app/santa-mn/id6474072247"}
              passHref
              className="cursor-pointer mt-5"
            >
              <Image src={ios} width={250} height={100} alt="ios" />
            </Link>
          </div>
        </div>
      </div>
      {/* web */}
      <div className="hidden lg:block">
        <div
          style={{
            backgroundImage: `url(${images.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="mt-24 absolute right-96 left-0">
            <Countdown date={targetDate} renderer={rendererWeb} />
          </div>
          <div className="grid grid-cols-4 mt-60">
            <Link
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=mn.santa&pcampaignid=web_share"
              }
              passHref
              className="cursor-pointer mr-5"
            >
              <Image src={android} width={250} height={100} alt="android" />
            </Link>
            <Link
              target="_blank"
              href={"https://apps.apple.com/mn/app/santa-mn/id6474072247"}
              passHref
              className="cursor-pointer"
            >
              <Image src={ios} width={250} height={100} alt="ios" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
