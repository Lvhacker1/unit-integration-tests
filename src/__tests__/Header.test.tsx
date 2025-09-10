import {render, screen} from "@testing-library/react"
import Header from "@/components/Header"

jest.mock('../components/NavLinks', () => {
    return function MockNavLinks() {
        return <nav>Mock Navigation</nav>
    };
})

describe('Header Component', () => {

    test('renders header with getByRole', () => {
        render(<Header />)
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    test('renders NavLinks component inside Header', () => {
        render(<Header />)
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    })
})