export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Experience & Skills</h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-semibold">Design</h3>
          <p className="text-gray-600">Figma, UI/UX, Prototyping</p>
        </div>

        <div>
          <h3 className="font-semibold">Development</h3>
          <p className="text-gray-600">React, Next.js, Tailwind</p>
        </div>

        <div>
          <h3 className="font-semibold">Tools</h3>
          <p className="text-gray-600">Git, Vercel, VS Code</p>
        </div>
      </div>
    </section>
  );
}