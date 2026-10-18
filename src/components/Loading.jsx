
const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 px-4">
      <div className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/4 px-10 py-12 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl">

       
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-indigo-400/10" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-indigo-400 border-r-purple-400" />

          <div className="h-12 w-12 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 opacity-20 blur-md" />

          <div className="absolute h-3 w-3 rounded-full bg-indigo-300 shadow-lg shadow-indigo-400/60" />
        </div>

       
        <h2 className="mt-8 text-xl font-semibold tracking-wide text-white">
          Getting things ready
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          Please wait a moment...
        </p>

       
        <div className="mt-6 flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-pink-400" />
        </div>

        <p className="mt-8 text-xs tracking-widest text-slate-500 uppercase">
          Powered by innovation
        </p>
      </div>
    </div>
  );
};

export default Loading;
