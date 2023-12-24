import Image from "next/image";
import images from "./gg.png";
import android from "./android.png";
import ios from "./appstore.png";
import Link from "next/link";
import dynamic from "next/dynamic";

export default function Home() {
  const targetDate = "2024-12-12T00:00:00";

  return (
    <main className="contain">
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
        <div className="grid grid-cols-4 mt-48">
          <Link
            target="_blank"
            href={
              "https://play.google.com/store/apps/details?id=mn.santa&pcampaignid=web_share"
            }
            passHref
            className="cursor-pointer "
          >
            <Image src={android} width={250} height={100} alt="android" />
          </Link>
          <Link
            target="_blank"
            href={"https://apps.apple.com/mn/app/santa-mn/id6474072247"}
            passHref
            className="cursor-pointer "
          >
            <Image src={ios} width={250} height={100} alt="ios" />
          </Link>
        </div>
      </div>
    </main>
  );
}
