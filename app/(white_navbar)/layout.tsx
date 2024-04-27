import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="font-inter flex flex-col min-h-screen">
      <Navbar shadow={true} bgColor="bg-white sticky top-0" />
      <div className="">{children}</div>
    </div>
  )
}
