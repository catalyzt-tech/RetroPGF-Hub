import Navbar from "../component/Navbar";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="font-inter">
          <Navbar
          shadow={false}
          />
          {children}
      </div>
    );
  }
  