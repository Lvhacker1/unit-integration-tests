import {render, screen} from "@testing-library/react"
import PageIntro from "@/components/PageIntro"

describe('PageIntro Component', () => {
    test('renders page title with getByRole', () => {
        const props= {title: 'Code Playground', description: 'Test Description'}
        render(<PageIntro {...props} />)
        expect(screen.getByRole('heading', {level : 1})).toHaveTextContent('Code Playground')
    });

    test('renders description with getByText', () => {
        const props = {title: 'Test Title', description: 'Play, experiment, and tinker with programming concepts in an interactive way.'}
        render(<PageIntro {...props} />)
        expect(screen.getByText('Play, experiment, and tinker with programming concepts in an interactive way.')).toBeInTheDocument();
    });

    test('renders home page data correctly', () => {
        const homeProps = {title: 'Code Playground', description: 'Play, experiment, and tinker with programming concepts in an interactive way.'}
        render(<PageIntro {...homeProps} />)
        expect(screen.getByRole('heading')).toHaveTextContent('Code Playground')
        expect(screen.getByText('Play, experiment, and tinker with programming concepts in an interactive way.')).toBeInTheDocument();
    });

    test('renders home page data correctly', () => {
        const coursesProps = {title: 'The Language Lab', description: 'Discover programming languages through real examples and see them in action.'}
        render(<PageIntro {...coursesProps} />)
        expect(screen.getByRole('heading')).toHaveTextContent('The Language Lab')
        expect(screen.getByText('Discover programming languages through real examples and see them in action.')).toBeInTheDocument();
    });

    test('renders home page data correctly', () => {
        const aboutProps = {title: 'Behind the Screen', description: 'Meet the minds shaping our playground and learn why we code the way we do.'}
        render(<PageIntro {...aboutProps} />)
        expect(screen.getByRole('heading')).toHaveTextContent('Behind the Screen')
        expect(screen.getByText('Meet the minds shaping our playground and learn why we code the way we do.')).toBeInTheDocument();
    });
})