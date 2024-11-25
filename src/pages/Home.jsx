import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-6"
      style={{ backgroundImage: "url('/images/doctor-background.png')" }}
    >
      {/* Hero Section */}
      <header className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-red-500">Life Drops</span>
        </h1>
        <p className="text-lg md:text-xl font-sans-serif mb-8">
          Tracking Donors, Saving Lives, Embracing Modernity❗
        </p>
        <Link
          to="/App"
          className="bg-blue-500 hover:bg-red-500 text-white font-bold py-3 px-6
        rounded-md text-lg transition"
        >
          Get Started
        </Link>
      </header>

      {/* Features Section */}
      <section className="mt-16  text-gray-900 w-full max-w-6xl p-8 rounded-lg ">
        <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-blue-600 text-5xl mb-4">📁</div>
            <h3 className="text-xl font-semibold mb-2">Data Management</h3>
            <p>
              Stocati si gestionati datele personale, cum ar fi Numele, CNP-ul
              si Grupa de Sange fara efort.
            </p>
          </div>
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-purple-600 text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast Access</h3>
            <p>
              Gestionati datele donatorilor rapid cu actualizari in timp real si
              fara intreruperi.
            </p>
          </div>
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-yellow-500 text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
            <p>
              Datele dumneavoastra sunt stocate in siguranta si gestionate cu
              tehnici moderne.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Start Using Life Drops Today
        </h2>
        <p className="text-lg md:text-xl font-sans-serif mb-8">
          Join hundreds of hospitals who trust{" "}
          <span className="text-red-500">Life Drops</span> to manage their
          personal data.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Life Drops. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
