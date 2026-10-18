import AllThing from "./AllThing";

const TechCatalog = ({ dataPromise }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Explore the{" "}
        <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="mt-2 text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <AllThing dataPromise={dataPromise} />
    </section>
  );
};

export default TechCatalog;