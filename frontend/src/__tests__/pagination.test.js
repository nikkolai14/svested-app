import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Pagination from '../components/pagination';
import '@testing-library/jest-dom'

afterEach(cleanup);

test('prev button should not be clickable if page number is 1', () => {
	render(<Pagination onPageChange={() => {}} />);

	expect(screen.getByTestId('prevBtn')).toHaveProperty('disabled')
});

test('next button should update the page from 1 to 2', () => {
	let pageNumber = 1;

	const handlePageChange = (page) => {
		pageNumber = page
	}

	render(<Pagination onPageChange={handlePageChange} />);

	fireEvent.click(screen.getByTestId('nextBtn'))

	expect(pageNumber).toBe(2)
});

test('prev button should update the page from 2 to 1', () => {
	let pageNumber = 1;

	const handlePageChange = (page) => {
		pageNumber = page
	}

	render(<Pagination onPageChange={handlePageChange} />);

	fireEvent.click(screen.getByTestId('nextBtn'))
	expect(pageNumber).toBe(2)

	fireEvent.click(screen.getByTestId('prevBtn'))
	expect(pageNumber).toBe(1)
});

test('page number should be displayed in the screen', () => {
	render(<Pagination onPageChange={() => {}} />);

	expect(screen.getByTestId('pageNumber')).toHaveTextContent('Page 1')
});
