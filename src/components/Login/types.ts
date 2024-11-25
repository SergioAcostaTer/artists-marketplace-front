export const roles = [
  "beatmaker",
  "photographer",
  "mastering-mixing",
  "film-maker",
  "musician",
  "designer",
];

export const rolesMap = {
  beatmaker: "Beatmaker",
  photographer: "Fotógrafo",
  "mastering-mixing": "Mastering/Mixing",
  "film-maker": "Film Maker",
  musician: "Músico",
  designer: "Diseñador",
};

export type Role = typeof roles[number];

export interface IUser {
  google: string; // Optional Google ID for OAuth login
  username: string;
  email: string;
  fullName: string;
  avatarUrl?: string; // Optional profile picture URL
  bannerUrl?: string; // Optional banner image URL
  bio?: string; // Optional short biography
  location?: string; // Optional location
  socialLinks?: {
    website?: string;
    twitter?: string;
    instagram?: string;
    [key: string]: string | undefined;
  }; // Optional social media links
  genres?: string[]; // List of genres the user is interested in or works with
  instruments?: string[]; // List of instruments the user plays
  roles?: Role[]; // List of roles the user performs
  createdAt: Date; // Account creation date
  updatedAt: Date; // Last account update date
  subscriptionPlan: "free" | "pro" | "premium"; // Current subscription plan
  paymentMethod?: {
    cardNumber: string;
    expiryDate: string;
    cardHolderName: string;
  };
  isActive: boolean; // Whether the user's account is active
  isAdmin?: boolean; // Optional flag for admin users
}

export interface GoogleUser {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  authuser: string;
  prompt: string;
}

export interface GoogleUserInfo {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
}

export interface UserResponse {
  avatarUrl: string;
  email: string;
  fullName: string;
  google: string;
  username: string;
  roles: string[];
}

export type Attachment = {
  id: string;
  type: "image" | "pdf" | "video" | "other";
  url: string;
  filename: string;
  size: number; // Size in bytes
};

export type Reaction = {
  user_id: string;
  reaction: "like" | "love" | "thumbs_up" | "smile" | "other";
  timestamp: string; // ISO 8601 format
};

export type ReadReceipt = {
  status: "read" | "unread";
  timestamp: string | null; // ISO 8601 format or null if unread
};

export type Message = {
  id: string;
  sender: {
    id: string;
    name: string;
    email: string;
  };
  recipient: {
    id: string;
    name: string;
    email: string;
  };
  timestamp: string; // ISO 8601 format
  content: {
    text: string;
    attachments: Attachment[];
  };
  status: "sent" | "delivered" | "failed";
  tags: string[];
  read_receipt: ReadReceipt;
  reactions: Reaction[];
};

export type Conversation = {
  messages: Message[];
};
