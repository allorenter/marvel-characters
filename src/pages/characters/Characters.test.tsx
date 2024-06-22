import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import { Characters } from '@/pages/characters';
import RoutesWrapper from '@/tests/RoutesWrapper';

const Wrapper = () => {
  return (
    <RoutesWrapper>
      <MemoryRouter initialEntries={['']}>
        <Routes>
          <Route path={''} element={<Characters />} />
        </Routes>
      </MemoryRouter>
    </RoutesWrapper>
  );
};

describe('Characters tests', () => {
  beforeEach(() => {
    render(<Wrapper />);
  });

  test('should initially render 50 elements', async () => {
    const element = await waitFor(() => screen.getByText('50 RESULTS'));

    expect(element).toBeDefined();
  });

  test('should render 2 elements after the search', async () => {
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'adam' } });

    const element = await waitFor(() => screen.getByText('2 RESULTS'));

    -expect(element).toBeDefined();
  });
});
