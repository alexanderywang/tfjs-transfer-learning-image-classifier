import "./App.css";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import loadModel from "./model/MobileNetInference";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        {/* <div>
          <img
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="dog"
            width="200"
            height="200"
          />
        </div> */}
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
  console.log("image", image);

  return <button onClick={() => loadModel(image)}>Classify</button>;
};
