function App() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <div className="bg-amber-600 p-4 text-white text-center">Nav</div>

      {/* Container for Aside and Main */}
      <div className="flex flex-col lg:flex-row">
        {/* Aside - Hidden on screens smaller than 1024px */}
        <div className="hidden lg:block lg:w-1/4 bg-blue-400 p-4 text-white">
          Aside
        </div>

        {/* Main - Full width on small screens, 3/4 width on larger screens */}
        <div className="w-full lg:w-3/4 bg-red-600 p-4 text-white">Main</div>
      </div>
    </div>
  );
}

export default App;
