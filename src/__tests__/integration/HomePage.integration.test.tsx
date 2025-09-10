import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('HomePage Integration', () => {
  test('integrates PageIntro and ActionButtons components', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Code Playground');
    expect(screen.getByText('Play, experiment, and tinker with programming concepts in an interactive way.')).toBeInTheDocument();

    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByRole('link', { name: /Start Experimenting/ })).toHaveAttribute('href', '/courses');
    expect(screen.getByRole('link', { name: /Meet the Mind/ })).toHaveAttribute('href', '/about');
  });
});