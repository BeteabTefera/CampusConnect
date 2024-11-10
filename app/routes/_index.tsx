import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "CampusConnect - Building Community on Campus" },
    { name: "description", content: "Connect with peers, find events, and combat loneliness on your university campus." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="bg-blue-600 py-4 sm:py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div className="text-center sm:text-left mb-4 sm:mb-0">
        <h1 className="text-3xl sm:text-4xl font-bold">CampusConnect</h1>
        <p className="mt-1 sm:mt-2 text-lg sm:text-xl">Building Community on Campus</p>
      </div>
      <Link
        to="/home"
        className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-2 px-4 rounded transition duration-300 text-sm sm:text-base"
      >
        Go to Dashboard
      </Link>
    </div>
  </div>
</header>


      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Say Goodbye to Campus Loneliness</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find study buddies, event companions, and friends who share your interests – all within your university community.
          </p>
          <Link to="/home" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            Join CampusConnect
          </Link>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Call To Action Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
          <p className="mb-8 text-xl">Join CampusConnect today and start building meaningful connections on your campus.</p>
          <div className="space-x-4">
            <Link to="/home" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Log In
            </Link>
            <Link to="/home" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Sign Up
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2023 CampusConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Event Discovery",
    description: "Search, host, and register for campus events that match your interests.",
  },
  {
    title: "Interest Matching",
    description: "Connect with peers who share your passions and academic goals.",
  },
  {
    title: "Smart Reminders",
    description: "Never miss an event with our personalized notification system.",
  },
];