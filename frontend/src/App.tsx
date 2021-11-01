import DataTabel from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Ola mundo</h1>
        <DataTabel />
      </div>
      <Footer />
    </>
  );
}

export default App;
