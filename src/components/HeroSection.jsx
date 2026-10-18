import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Build Your Ideal
          <span className="block bg-linear-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-6 text-gray-600 md:text-lg">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
          Best of Luck
        </p>
        <div className="mt-8 flex justify-center md:justify-start gap-3">
          <button
            className="px-5 py-3 rounded-lg bg-linear-to-r
           from-orange-500 to-pink-600 text-white text-sm font-medium"
          >
            Explore Technologies
          </button>
          <button className="px-5 py-3 rounded-lg border border-gray-200 text-gray-700 text-sm">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={heroImage} alt="Dev stack" />
      </div>
    </section>
  );
};

export default Hero;
