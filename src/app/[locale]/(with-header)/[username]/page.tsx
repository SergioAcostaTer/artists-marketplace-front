import { IJwtUser } from "@/@types/Jwt";
import Portfolio from "@/components/Portfolio/Portfolio";
import { PortfolioRepository } from "@/services/PortfolioRepository";
import { getCookie } from "@/utils/cookie";
import { jwtVerify } from "@/utils/jwt";

// const userDefault = {
//   name: "Dani Acosta",
//   username: "daniacosta",
//   avatar: "https://i.scdn.co/image/ab67616d00001e02a452b66bc93c1dfca6cd643d",
//   banner: "https://i.scdn.co/image/ab67618600001016fe34b817adcfef3e76e4e2c7",
//   mainColor: "#c21202",
//   secondaryColor: "#191414",
//   socialLinks: {
//     spotify: {
//       url: "https://open.spotify.com/artist/3IfsgBb93KlSIBNVQOIsHH",
//       monthlyListeners: "810,885",
//     },
//     instagram: {
//       url: "https://www.instagram.com/daniacostatnf/?hl=en",
//       username: "daniacostatnf",
//       followers: "1.2M",
//     },
//   },
// };

export default async function Profile({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  try {
    const { username } = await params;
    const user = await PortfolioRepository.getPortfolio(username);
    let id = "";

    try {
      const token = await getCookie("token");
      const jwtResponse = jwtVerify(token || "") as IJwtUser;
      id = jwtResponse?.id;
    } catch (error) {
      console.log("Error fetching the user id:", error);
    }

    return (
      <div>
        <Portfolio user={user} userId={id} />
      </div>
    );
  } catch (error) {
    console.log("Error fetching the user portfolio:", error);

    return (
      <div className="text-center w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">User not found</h2>
        <p>This user does not exist</p>
      </div>
    );
  }
}
