
import MenuBar from "@/components/Menubar";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/looogo.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <p className="text-xl mb-8">Experience the best dining in town</p>
          <a href="#menu" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full">View Menu</a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <MenuBar />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Contact />
        </div>
      </section>
    </div>
  );
}