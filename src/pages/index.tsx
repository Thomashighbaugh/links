import Header from "../components/Header/Header";
import Icon from "../components/Icon/Icon";
import Name from "../components/Name/Name";
import SocialLinks from "../components/SocialLinks"
export default function Home() {
  return (
    <div className="container flex items-center p-2 mx-auto min-h-screen justify-center">
      <main className="bg-gray-900 bg-opacity-90">
        <Header />
        <SocialLinks/>

      </main>
    </div>
  )
}
