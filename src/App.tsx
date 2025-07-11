import Layout from "./components/layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout />
    </>
  );
}

export default App;
