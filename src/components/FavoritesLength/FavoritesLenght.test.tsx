import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Favorites } from '@/pages/favorites';
import { Characters } from '@/pages/characters';
import RoutesWrapper from '@/tests/RoutesWrapper';

const Wrapper = () => {
  return (
    <RoutesWrapper>
      <MemoryRouter initialEntries={['']}>
        <Routes>
          <Route path={'/favorites'} element={<Favorites />} />
          <Route path={''} element={<Characters />} />
        </Routes>
      </MemoryRouter>
    </RoutesWrapper>
  );
};

describe('Favorites length', () => {
  test('click number of favorites goes to favorites', async () => {
    render(<Wrapper />);

    const element = await waitFor(() => screen.getAllByLabelText('Number of favorites'));
    fireEvent.click(element[0]);

    const favorites = await waitFor(() => screen.getByText('Favorites'));

    expect(favorites).toBeDefined();
  });

  test('show the number of favorites', async () => {
    render(<Wrapper />);

    const element = await waitFor(() => screen.getAllByLabelText('Number of favorites'));
    const textContent = element[0].textContent;
    -expect(textContent).toBe('0');
  });
});
