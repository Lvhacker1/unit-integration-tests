import {render, screen} from "@testing-library/react"
import NavLinks from "@/components/NavLinks"

jest.mock('next/link', () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>
  }
})

describe('NavLinks Component', () => {

    test('renders navigation with getByRole', () => {
        render(<NavLinks />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    test('renders all links using getAllByRole', () => {
        render(<NavLinks />);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(3);
    });

    test('renders Home link correctly', () => {
        render(<NavLinks />);
        expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    });

    test('renders Courses link correctly', () => {
        render(<NavLinks />);
        expect(screen.getByRole('link', { name: 'Courses' })).toHaveAttribute('href', '/courses');
    });

    test('renders About link correctly', () => {
        render(<NavLinks />);
        expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    });
});