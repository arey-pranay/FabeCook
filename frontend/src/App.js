function App() {
  const get = async () => {
    const res = await fetch("http://localhost:8000"); //backend is hosted at this address, and you'll need to wait for the request to process before fetching it
    console.log(res);
  };
  get();
  return <div>welcome to frontend</div>;
}

export default App;
