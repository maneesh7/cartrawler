import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AppProvider } from '../../../context';
import FilterTransmission from '../FilterTransmission';

describe('Vendors Filter', () => {
  jest.mock('../../../context', () => ({
    __esModule: true,
    useGlobalContext: {
      func: jest.fn(),
    },
  }));

  it('validate transmission list', () => {
    const { getByLabelText } = render(
      <AppProvider value={null}>
        <FilterTransmission />
      </AppProvider>
    );
    const hertzCB = getByLabelText('Automatic');
    expect(hertzCB).toBeTruthy();
    const alamoCB = getByLabelText('Manual');
    expect(alamoCB).toBeTruthy();
  });

  it('validate default selected transmissions', () => {
    const { getByLabelText } = render(
      <AppProvider value={null}>
        <FilterTransmission />
      </AppProvider>
    );
    const cb_auto = getByLabelText('Automatic');
    expect(cb_auto.checked).toEqual(true);

    const cb_manual = getByLabelText('Manual');
    expect(cb_manual.checked).toEqual(false);
  });
});
