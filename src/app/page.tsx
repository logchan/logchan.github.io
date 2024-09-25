import Footer from "./footer";
import Gear from "./gear";
import PersonalLinks from "./personal-links";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center min-h-svh">
      <section className="flex flex-col gap-12 items-center">
        <div className="h-40 flex flex-col-reverse sm:h-48">
          <h1 className="text-8xl font-mono hover:text-9xl transition-all items-end border-b-2 border-b-orange-600 pb-4">logchan</h1>
        </div>
        <PersonalLinks />
      </section>
      <section>
        <h2 className="text-gray-200 text-6xl mt-20">Coming Soon</h2>
      </section>
      <Footer />
      <Gear />
    </main>
  );
}
