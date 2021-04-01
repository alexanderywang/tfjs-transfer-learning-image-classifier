import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App element renders", () => {
  test("renders App component", () => {
    render(<App />);
    // screen.debug();
  });
  test("loading on screen.", () => {
    render(<App />);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
  test("Search for Title What is this", () => {
    render(<App />);
    // implicit assertion
    screen.getByText("What Is This??");
    // explicit assertion recommended
    expect(screen.getByText("What Is This??")).toBeInTheDocument();
  });
});

// fire event
// describe("App event", () => {
//   test("camera loads videoConstraints", () => {
//     render(<App />);

//     screen.debug();
//     fireEvent.change(screen.getByRole("progressbar"), {
//       target: { "aria-valuenow": "0" }
//     });

//     screen.debug();
//   });
// });

// some syntax
describe("true is truthy and false is falsy", () => {
  test("true is truthy", () => {
    expect(true).toBe(true);
  });
  test("false is falsy", () => {
    expect(false).toBe(false);
  });
});
