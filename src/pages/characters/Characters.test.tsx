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
    const results = await waitFor(() => screen.getByText('50 RESULTS'));
    const character = await waitFor(() => screen.getByText('3-D Man'));

    expect(results).toBeDefined();
    expect(character).toBeDefined();
  });

  test('should render 2 elements after the search', async () => {
    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'adam' } });

    const results = await waitFor(() => screen.getByText('2 RESULTS'));
    const character = await waitFor(() => screen.getByText('Adam Warlock'));

    expect(results).toBeDefined();
    expect(character).toBeDefined();
  });
});
