import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AppProvider } from '../../../context';
import FilterVendors from '../FilterVendors';

describe('Vendors Filter', () => {
  jest.mock('../../../context', () => ({
    __esModule: true,
    useGlobalContext: {
      func: jest.fn(),
    },
  }));

  it('validate vendor list', () => {
    const { getByLabelText } = render(
      <AppProvider value={null}>
        <FilterVendors />
      </AppProvider>
    );
    const hertzCB = getByLabelText('Hertz');
    expect(hertzCB).toBeTruthy();
    const alamoCB = getByLabelText('Alamo');
    expect(alamoCB).toBeTruthy();
  });

  it('validate default selected vendors', () => {
    const { getByLabelText } = render(
      <AppProvider value={null}>
        <FilterVendors />
      </AppProvider>
    );
    const cb_Hertz = getByLabelText('Hertz');
    expect(cb_Hertz.checked).toEqual(false);
    const cb_Alamo = getByLabelText('Alamo');
    expect(cb_Alamo.checked).toEqual(false);
    const cb_europcar = getByLabelText('Europcar');
    expect(cb_europcar.checked).toEqual(false);
  });

  // const setSearchFilter = jest.fn();
  // const searchFilter = '';
  // const useGlobalContextMock = (useGlobalContext) => [searchFilter, setSearchFilter]'
  // jest.spyOn(React, 'useGlobalContext').mockImplementation(useGlobalContextMock);

  it('validate default selected vendors', () => {
    const { getByLabelText } = render(
      <AppProvider value={null}>
        <FilterVendors />
      </AppProvider>
    );
    const cb_Hertz = getByLabelText('Hertz');
    expect(cb_Hertz.checked).toEqual(false);
    const cb_Alamo = getByLabelText('Alamo');
    expect(cb_Alamo.checked).toEqual(false);
    const cb_europcar = getByLabelText('Europcar');
    expect(cb_europcar.checked).toEqual(false);
  });
});
