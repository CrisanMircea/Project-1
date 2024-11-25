import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <header className="text-center max-w-4xl">
        <h2 className="text-4xl font-bold mb-4">
          Despre <span className="text-red-500">Sange</span>
        </h2>
        <p className="text-lg md:text-xl font-sans-serif mb-8">
          Sistemul Rh cuprinde doua grupe de sange diferentiate prin prezenta
          sau absenta antigenului D, care determina Rh-ul pozitiv, iar absenta
          sa determina, Rh-ul negativ. Un individ este considerat Rh pozitiv
          dacă eritrocitele sale exprima antigenul D, iar termenul Rh negativ se
          refera la absenta antigenului D.
        </p>
      </header>

      {/* Features Section */}
      <section className="mt-16  text-gray-900 w-full max-w-6xl p-8 rounded-lg ">
        <h2 className="text-3xl font-bold text-center mb-6">
          Compatibilitatile Grupelor Sanguine
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-green-400 text-5xl mb-4">A+</div>
            <h3 className="text-xl font-semibold mb-2">A Rh pozitiv</h3>
            <p>Poate dona pentru grupele: A+ AB+</p>
            <p>Poate primi de la grupele: A+ A- 0+ 0-</p>
          </div>
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-red-500 text-5xl mb-4">A-</div>
            <h3 className="text-xl font-semibold mb-2">A Rh negativ</h3>
            <p>Poate dona pentru grupele: A+ A- AB+ AB-</p>
            <p>Poate primi de la grupele: A- 0-</p>
          </div>
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-green-400 text-5xl mb-4">B+</div>
            <h3 className="text-xl font-semibold mb-2">B Rh pozitiv</h3>
            <p>Poate dona pentru grupele: B+ AB+</p>
            <p>Poate primi de la grupele: B+ B- 0+ 0-</p>
          </div>
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-red-500 text-5xl mb-4">B-</div>
            <h3 className="text-xl font-semibold mb-2">B Rh negativ</h3>
            <p>Poate dona pentru grupele: B+ B- AB+ AB-</p>
            <p>Poate primi de la grupele: B- 0-</p>
          </div>
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-green-400 text-5xl mb-4">AB+</div>
            <h3 className="text-xl font-semibold mb-2">AB Rh pozitiv</h3>
            <p>Poate dona pentru grupele: AB+</p>
            <p>Poate primi de la grupele: TOATE</p>
          </div>
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-red-500 text-5xl mb-4">AB-</div>
            <h3 className="text-xl font-semibold mb-2">AB Rh negativ</h3>
            <p>Poate dona pentru grupele: AB+ AB-</p>
            <p>Poate primi de la grupele: AB- A- B- 0-</p>
          </div>
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-green-400 text-5xl mb-4">0+</div>
            <h3 className="text-xl font-semibold mb-2">0 Rh pozitiv</h3>
            <p>Poate dona pentru grupele: 0+ A+ B+ AB+</p>
            <p>Poate primi de la grupele: 0+ 0-</p>
          </div>
          <div className="bg-blue-500 p-6 rounded-md text-center">
            <div className="text-red-500 text-5xl mb-4">0-</div>
            <h3 className="text-xl font-semibold mb-2">0 Rh negativ</h3>
            <p>Poate dona pentru grupele: TOATE</p>
            <p>Poate primi de la grupele: 0-</p>
          </div>
        </div>
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

export default About;
