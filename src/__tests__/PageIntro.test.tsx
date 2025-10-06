import {render, screen} from "@testing-library/react"
import PageIntro from "@/components/PageIntro"

describe('PageIntro Component', () => {
    test('renders page title with getByRole', () => {
        const props = {title: 'Code Playground', description: 'Test Description'}
        render(<PageIntro {...props} />)
        expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(props.title)
    });

    test('renders description with getByText', () => {
        const props = {title: 'Test Title', description: 'Play, experiment, and tinker with programming concepts in an interactive way.'}
        render(<PageIntro {...props} />)
        expect(screen.getByText(props.description)).toBeInTheDocument();
    });

    test('renders home page data correctly', () => {
        const homeProps = {title: 'Code Playground', description: 'Play, experiment, and tinker with programming concepts in an interactive way.'}
        render(<PageIntro {...homeProps} />)
        expect(screen.getByRole('heading')).toHaveTextContent(homeProps.title)
        expect(screen.getByText(homeProps.description)).toBeInTheDocument();
    });

    test('renders courses page data correctly', () => {
        const coursesProps = {title: 'The Language Lab', description: 'Discover programming languages through real examples and see them in action.'}
        render(<PageIntro {...coursesProps} />)
        expect(screen.getByRole('heading')).toHaveTextContent(coursesProps.title)
        expect(screen.getByText(coursesProps.description)).toBeInTheDocument();
    });

    test('renders about page data correctly', () => {
        const aboutProps = {title: 'Behind the Screen', description: 'Meet the minds shaping our playground and learn why we code the way we do.'}
        render(<PageIntro {...aboutProps} />)
        expect(screen.getByRole('heading')).toHaveTextContent(aboutProps.title)
        expect(screen.getByText(aboutProps.description)).toBeInTheDocument();
    });
})