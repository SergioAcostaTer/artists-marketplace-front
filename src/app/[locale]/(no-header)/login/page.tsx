import LoginForm from "@/components/Login/LoginForm";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen relative p-2">
      <video
        className="absolute top-0 left-0 z-0 object-cover w-full h-full p-2 rounded-lg md:hidden"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: "brightness(0.5)", borderRadius: "4rem" }}
      >
        <source src="/videos/login.mp4" type="video/mp4" />
      </video>
      <LoginForm />
    </div>
  );
}
