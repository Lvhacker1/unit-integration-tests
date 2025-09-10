import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';

describe('AboutPage Integration', () => {
  test('integrates PageIntro and AboutSection components', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Behind the Screen');
    expect(screen.getByText('Meet the minds shaping our playground and learn why we code the way we do.')).toBeInTheDocument();

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Lava Sharif');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Creator & Developer');
    expect(screen.getByText(/Code Playground was born when I realized/)).toBeInTheDocument();
  });
});