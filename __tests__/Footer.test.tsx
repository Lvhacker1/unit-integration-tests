import {render, screen} from "@testing-library/react"
import Footer from "@/components/Footer"

describe('Footer Component', () => {

    test('renders footer with getByRole', () => {
        render(<Footer />)
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    test('dispalys correct copyright symbol', () => {
        render(<Footer />)
        expect(screen.getByText('©')).toBeInTheDocument();
    });

    test('dispalys current year', () => {
        render(<Footer />)
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(currentYear.toString())).toBeInTheDocument();
    });

    test('dispalys description text', () => {
        render(<Footer />)
        expect(screen.getByText('Code Playground | All rights reserved.')).toBeInTheDocument();
    });
})