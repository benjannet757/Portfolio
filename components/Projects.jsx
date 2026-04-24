export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-24 bg-white">

      {/* TITLE */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-16 tracking-tight">
        RECENT PROJECTS
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* CARD 1 */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/ProjectUnity.png"
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </div>

        {/* CARD 2 */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/Hackaton.png"
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}