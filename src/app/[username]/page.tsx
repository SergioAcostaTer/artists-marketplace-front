import Portfolio from "@/components/Portfolio/Portfolio";

const userDefault = {
  name: "Dani Acosta",
  username: "daniacosta",
  avatar: "https://i.scdn.co/image/ab67616d00001e02a452b66bc93c1dfca6cd643d",
  banner: "https://i.scdn.co/image/ab67618600001016fe34b817adcfef3e76e4e2c7",
  socialLinks: {
    spotify: {
      url: "https://open.spotify.com/artist/3IfsgBb93KlSIBNVQOIsHH",
      monthlyListeners: "810,885",
    },
    instagram: {
      url: "https://www.instagram.com/daniacostatnf/?hl=en",
      username: "daniacostatnf",
      followers: "1.2M",
    },
  },
  tracks: [
    {
      title: "Voy a Olvidarte",
      artist: "Dani Acosta",
      cover: "https://i.scdn.co/image/ab67616d00001e02a452b66bc93c1dfca6cd643d",
    },
    {
      title: "Voy a Olvidarte",
      artist: "Dani Acosta",
      cover: "https://i.scdn.co/image/ab67616d00001e02a452b66bc93c1dfca6cd643d",
    },
    {
      title: "Voy a Olvidarte",
      artist: "Dani Acosta",
      cover: "https://i.scdn.co/image/ab67616d00001e02a452b66bc93c1dfca6cd643d",
    },
  ],
};

export default async function Profile({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  console.log(username);
  return (
    <div>
      <Portfolio initialUser={userDefault} />
    </div>
  );
}
