import { useState, useEffect } from "react";
import axios from "axios";
import { TokenResponse } from "@react-oauth/google";

const useGoogle = () => {
  const [googleUser, setGoogleUser] = useState<TokenResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any | null>(null);

  useEffect(() => {
    const fetchGoogleUser = async (user: TokenResponse) => {
      if (!user?.access_token) {
        console.error("No access token provided.");
        setError("Invalid Google user access token.");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo",
          {
            headers: { Authorization: `Bearer ${user.access_token}` },
          }
        );

        alert(JSON.stringify(data));

        setUserInfo(data);
      } catch (err) {
        const errorMessage = getErrorMessage(err);
        console.error(errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (googleUser) fetchGoogleUser(googleUser);
  }, [googleUser]);

  const getErrorMessage = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return `Server responded with status ${error.response.status}: ${
          error.response.data?.error || error.response.statusText
        }`;
      }
      if (error.request) {
        return "No response received from Google API.";
      }
      return `Request setup error: ${error.message}`;
    }
    return `Unexpected error: ${
      error instanceof Error ? error.message : String(error)
    }`;
  };

  return {
    setGoogleUser,
    userInfo,
    loading,
    error,
  };
};

export default useGoogle;
