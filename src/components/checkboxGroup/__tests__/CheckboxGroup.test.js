import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AppProvider } from "../../../context";
import CheckboxGroup from "../CheckboxGroup";

const testData = [
  {
    name: "Test Data 1",
    id: 101
  },
  {
    name: "Test Data 2",
    id: 102
  }
];

describe.only("Checkbox group", () => {
  jest.mock("../../../context", () => ({
    __esModule: true,
    useGlobalContext: {
      func: jest.fn()
    },
    handleData: jest.fn()
  }));

  const handleChange = jest.fn();

  it.only("verify checkboxes label", () => {
    const { getByTestId } = render(
      <AppProvider value={null}>
        <CheckboxGroup
          data={testData}
          handleData={handleChange}
          selectedItem={[100]}
        />
      </AppProvider>
    );

    const test_1 = getByTestId("101");
    expect(test_1).toHaveTextContent("Test Data 1");
    const test_2 = getByTestId("102");
    expect(test_2).toHaveTextContent("Test Data 2");
  });

  it.only("verify no checkbox is present when data is empty", () => {
    const { queryAllByRole } = render(
      <AppProvider value={null}>
        <CheckboxGroup
          data={[]}
          handleData={handleChange}
          selectedItem={[100]}
        />
      </AppProvider>
    );

    const noCB = queryAllByRole("checkbox");
    expect(noCB).toHaveLength(0);
  });
});
