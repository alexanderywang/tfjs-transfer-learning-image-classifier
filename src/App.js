import "./App.css";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import loadModel from "./model/MobileNetInference";
import Webcam from "./components/Webcam";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Webcam />
        <Button />
      </Container>
    </div>
  );
}

export default App;

const Button = () => {
  // const image = document.getElementById("img");
  const image = new Image();
  image.src =
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  image.crossOrigin = "anonymous";


  return <button onClick={() => loadModel(image)}>Classify</button>;
};
