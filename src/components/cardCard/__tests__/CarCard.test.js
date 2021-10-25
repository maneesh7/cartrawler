import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { AppProvider } from "../../../context";
import CarCard from "../CarCard";

const carData = {
  id: 1,
  seats: 4,
  carModel: "Test Model",
  baggageQuantity: 3,
  totalAmount: "1223.56555",
  currencyCode: "EUR",
  transmissionType: "Manunal",
  fuelType: "Petrol",
  vendorData: {
    id: 1,
    name: "Hertz",
    code: 2338,
    rating: 4.5,
    reviews: 1000,
  },
};

describe("Car Card", () => {
  jest.mock("../../../context", () => ({
    __esModule: true,
    useGlobalContext: {
      func: jest.fn(),
    },
  }));

  it.only("validate Car Card Fields", () => {
    const { getByTestId } = render(
      <AppProvider value={null}>
        <Router>
          <CarCard {...carData} />
        </Router>
      </AppProvider>
    );
    const moreDetails = getByTestId("moreDetails");
    expect(moreDetails).toBeTruthy();
    const transmissionType = getByTestId("transmissionType");
    expect(transmissionType).toHaveTextContent("Manunal");
    const carModel = getByTestId("carModel");
    expect(carModel).toHaveTextContent("Test Model");
    const seats = getByTestId("seats");
    expect(seats).toHaveTextContent("4");
    const baggageQuantity = getByTestId("baggageQuantity");
    expect(baggageQuantity).toHaveTextContent("3");
    const fuelType = getByTestId("fuelType");
    expect(fuelType).toHaveTextContent("Petrol");
  });

  it.only("validate rating with half star", () => {
    const { getAllByTestId } = render(
      <AppProvider value={null}>
        <Router>
          <CarCard {...carData} />
        </Router>
      </AppProvider>
    );
    const starOutlinedIcon = getAllByTestId("StarOutlinedIcon");
    expect(starOutlinedIcon).toHaveLength(4);
    const starHalfOutlinedIcon = getAllByTestId("StarHalfOutlinedIcon");
    expect(starHalfOutlinedIcon).toHaveLength(1);
  });

  it.only("validate rating with 3 star", () => {
    const data = { ...carData, vendorData: { rating: 3 } };
    const { getAllByTestId } = render(
      <AppProvider value={null}>
        <Router>
          <CarCard {...data} />
        </Router>
      </AppProvider>
    );
    const starOutlinedIcon = getAllByTestId("StarOutlinedIcon");
    expect(starOutlinedIcon).toHaveLength(3);
  });
});
