export interface SocialLinks {
  spotify?: {
    url: string;
    monthlyListeners?: string;
  };
  instagram?: {
    url: string;
    username?: string;
    followers?: string;
  };
  [key: string]:
    | {
        url: string;
        [key: string]: string | undefined;
      }
    | undefined;
}

export interface UserPortfolio {
  name: string;
  username: string;
  avatar: string | null;
  banner: string | null;
  mainColor: string;
  secondaryColor: string;
  socialLinks: SocialLinks;
  userId: string;
}
