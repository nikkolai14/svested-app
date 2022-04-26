import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Grid from '../components/grid';

afterEach(cleanup);

test('displays text properly', () => {
	const datas = [
		{
      randAlphabet: 'a'
		},
		{
      randAlphabet: 'b'
		}
	];

  render(<Grid datas={datas} />);

  expect(screen.getByText(/A/i)).toBeTruthy();
  expect(screen.getByText(/A/i)).toBeTruthy();
});
