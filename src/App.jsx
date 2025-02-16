import TaskList from "./components/TaskList.jsx";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;