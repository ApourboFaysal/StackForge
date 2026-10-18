const Technologies = ({ technologies, stack, onAdd }) => {
  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
      {technologies.map((tech) => {
        const isAdded = stack.some((item) => item.id === tech.id);

        return (
          <div
            key={tech.id}
            className="p-5 rounded-2xl border border-gray-200 bg-white"
          >
            <div className="flex items-center justify-between">
              <img src={tech.logo} alt={tech.name} className="w-8 h-8" />
              <span className="px-2 py-1 rounded-full text-xs bg-pink-50 text-pink-600">
                {tech.badge}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-semibold">{tech.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{tech.desc}</p>

            <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs text-gray-500">
              <span className="px-2 py-1 rounded bg-gray-100">
                {tech.category}
              </span>
              <span>{tech.level}</span>
              <span>⭐ {tech.rating}</span>
            </div>

            <button
              onClick={() => onAdd(tech)}
              className={
                isAdded
                  ? "mt-4 w-full py-2.5 rounded-lg text-sm text-white bg-pink-600 cursor-not-allowed"
                  : "mt-4 w-full py-2.5 rounded-lg text-sm text-white bg-gray-900 hover:bg-gray-700"
              }
            >
              {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
