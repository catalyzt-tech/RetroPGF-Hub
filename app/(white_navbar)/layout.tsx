import Navbar from "../component/Navbar";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="font-inter flex flex-col h-screen">
          <Navbar bgColor="bg-white"/>
          <div className="flex-grow overflow-y-auto">
            {children}
          </div>
      </div>
    );
  }
  