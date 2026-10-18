import { X } from "lucide-react";

const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="lg:w-72 p-5 rounded-2xl border border-gray-200 bg-white self-start lg:sticky lg:top-20">
      <h3 className="text-base font-semibold text-gray-900">Your Stack</h3>
      <p className="mt-1 text-sm text-gray-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 py-6 rounded-lg border border-dashed border-gray-300 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-5 flex flex-col gap-1.5">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between px-3 py-2 rounded-md border border-gray-200 bg-white"
              >
                <div className="flex items-center gap-2">
                  <img src={tech.logo} alt={tech.name} className="w-7 h-7" />
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900">
                      {tech.name}
                    </p>
                    <p className="text-[8px] text-gray-400">{tech.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(tech)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={onRemoveAll}
            className="mt-12 w-full py-1.5 rounded-sm border border-red-300 bg-white text-red-600 text-sm font-medium hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;
