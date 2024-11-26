import Portfolio from "@/components/Portfolio/Portfolio";
import { PortfolioRepository } from "@/services/PortfolioRepository";

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
    return (
      <div>
        <Portfolio initialUser={user} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching the user portfolio:", error);

    return (
      <div>
        <p>Error loading profile. Please try again later.</p>
      </div>
    );
  }
}
