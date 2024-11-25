import Image from "next/image";

export const spotifyVerified = (
  <svg
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="inline w-4 h-4"
    fill="#4cb3ff"
  >
    <path
      d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5z"
      fill="#4cb3ff"
    ></path>
    <path
      d="M17.398 9.62a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"
      fill="#ffffff"
    ></path>
  </svg>
);

export const instagramVerified = (
  <svg
    aria-label="Verified"
    fill="#4cb3ff"
    role="img"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    className="inline w-4 h-4"
  >
    <title>Verified</title>
    <path
      d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
      fillRule="evenodd"
    ></path>
  </svg>
);

export default function SocialsPortfolio({
  socialLinks,
}: {
  socialLinks: { [key: string]: { url: string } };
}) {
  return (
    <div className="flex mt-[.3rem] gap-2">
      {Object.entries(socialLinks).map(([name, { url }]) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-lg flex items-center gap-1 py-1 px-1"
        >
          <Image
            src={`/logos/${name}.svg`}
            alt={`${name} logo`}
            width={30}
            height={30}
            className="w-6 h-6"
          />

          {name === "spotify" && spotifyVerified}
          {name === "instagram" && instagramVerified}
        </a>
      ))}
    </div>
  );
}
