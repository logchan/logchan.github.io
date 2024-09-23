import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "./github-mark.svg";

export default function PersonalLinks() {
  return (
    <section className="flex flex-row">
      <Link href="https://github.com/logchan" target="_blank">
        <div className="flex flex-row items-center gap-2 hover:scale-110 transition-transform">
          <Image
            src={GitHubIcon}
            alt="GitHub icon"
            className="w-8 h-8"
          />
          <h2 className="text-xl font-mono -mb-1">GitHub</h2>
        </div>
      </Link>
    </section>
  );
}
