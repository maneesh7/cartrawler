import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AppProvider } from "../../../context";
import Pickup from "../Pickup";

describe.only("Pickup", () => {
  jest.mock("../../../context", () => ({
    __esModule: true,
    useGlobalContext: {
      func: jest.fn(),
    },
  }));

  it.only("verify pickup details", () => {
    const { getByTestId } = render(
      <AppProvider value={null}>
        <Pickup />
      </AppProvider>
    );
    const pickUpLocation = getByTestId("pickUpLocation");
    expect(pickUpLocation).toHaveTextContent("Las Vegas - Airport");
    const returnLocation = getByTestId("returnLocation");
    expect(returnLocation).toHaveTextContent("Las Vegas - Airport");
    const pickUpDateTime = getByTestId("pickUpDateTime");
    expect(pickUpDateTime).toHaveTextContent("Sun Mar 2020 10:00:00");
    const returnDateTime = getByTestId("returnDateTime");
    expect(returnDateTime).toHaveTextContent("Mon Apr 2020 11:00:00");
  });
});
