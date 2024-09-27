import FeaturedProject from "./featured-project";
import Footer from "./footer";
import Gear from "./gear";
import PersonalLinks from "./personal-links";

export default function Home() {
  return (
    <main className="flex flex-col justify-between gap-16 items-center min-h-svh">
      <section className="flex flex-col gap-12 items-center">
        <div className="h-40 flex flex-col-reverse sm:h-48">
          <h1 className="text-8xl font-mono hover:text-9xl transition-all items-end border-b-2 border-b-orange-600 pb-4">logchan</h1>
        </div>
        <PersonalLinks />
      </section>
      <section className="flex flex-col flex-grow gap-16">
        <FeaturedProject
          title="Closure Talk" src="home/closure-talk.jpg" alt="Screenshot of Closure Talk"
          links={[
            ["Website", "https://closuretalk.github.io/"],
            ["Source", "https://github.com/ClosureTalk/closure-talk"]
          ]}
        >
          <p>Create mobile game-style chat logs, like Blue Archive and Arknights.</p>
          <p>Supports custom characters.</p>
        </FeaturedProject>
        <FeaturedProject
          title="Snake Puzzles" src="home/snake-puzzles.jpg" alt="Screenshot of Snake Puzzles"
          links={[
            ["Download", "https://github.com/logchan/SnakePuzzles/releases"],
            ["Editor", "snake-puzzles-editor/index.html"],
            ["Source", "https://github.com/logchan/SnakePuzzles"],
          ]}
        >
          <p>Puzzle game inspired by Snake and The Witness.</p>
          <p>Personal testbed for Unity techniques.</p>
        </FeaturedProject>
      </section>
      <Footer />
      <Gear />
    </main>
  );
}
