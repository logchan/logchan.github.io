export default function Footer() {
  return (
    <section className="pb-8 font-mono">
      &copy;
        <span className="group border-b-gray-400 border-dashed border-b-2 cursor-pointer relative">
          logchan
          <div className="absolute -top-8 left-0 pl-2 pr-2 w-fit whitespace-nowrap border-gray-200 border-2 opacity-0 group-hover:opacity-100 transition-all">aka. Geng Lin</div>
        </span>
        , 2024
    </section>
  );
}
