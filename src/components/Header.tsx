import IgniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className="bg-gray-800 h-20 flex justify-center py-5">
      <img src={IgniteLogo} alt="Ignite" className="h-8" />
    </header>
  );
}
