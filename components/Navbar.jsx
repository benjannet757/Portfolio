export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-24 py-6 bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b">

      <h1 className="text-lg font-semibold">Benjannet.</h1>

      <ul className="hidden md:flex gap-10 text-gray-600">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Works</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="hover:text-black cursor-pointer">Services</li>
        <li className="hover:text-black cursor-pointer">Testimonial</li>
      </ul>

      <button className="bg-black text-white px-6 py-2 rounded-full">
        Contact
      </button>
    </nav>
  );
}