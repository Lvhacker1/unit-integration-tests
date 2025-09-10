import { render, screen } from '@testing-library/react';
import AboutSection from '@/components/AboutSection';

describe('AboutSection Component', () => {
    test('renders creator name as h2 heading with getByRole', () => {
        render(<AboutSection />);
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Lava Sharif');
    });

    test('renders role as h3 heading with getByRole', () => {
        render(<AboutSection />);
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Creator & Developer');
    });

    test('renders description text', () => {
        render(<AboutSection />);
        expect(screen.getByText('Code Playground was born when I realized I was talking more to my Red Bull than to people, and it still makes more sense than this almost nonexistent page. Right now the site is like a student apartment. A table, a chair and a microwave, technically livable but you really wish for a few more pieces of furniture.')).toBeInTheDocument();
    });
})