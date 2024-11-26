import { Me } from "@/@types/Users";
import { UserRepository } from "@/services/UserRepository";
import { useState, useEffect } from "react";
import { create } from "zustand";

interface UserStore {
  user: Me | null;
  setUser: (user: Me) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export const useUserState = () => {
  const { user, setUser, clearUser } = useUserStore();
  return { user, setUser, clearUser };
};

export const useUser = (initialUser?: Me | null) => {
  const { user: globalUser, setUser, clearUser } = useUserState();
  const [user, setLocalUser] = useState<Me | null>(initialUser || globalUser);
  const [loading, setLoading] = useState(!initialUser && !globalUser);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialUser) {
      setLocalUser(initialUser);
      setUser(initialUser);
      return;
    }

    if (!globalUser) {
      const fetchUser = async () => {
        setLoading(true);
        setError(null);
        try {
          const fetchedUser = await UserRepository.me();
          setLocalUser(fetchedUser);
          setUser(fetchedUser);
        } catch (err: any) {
          setError(err?.message || "Failed to fetch user data");
          clearUser();
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }
  }, [initialUser, globalUser, setUser, clearUser]);

  return { user, loading, error };
};
