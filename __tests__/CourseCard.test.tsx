import {fireEvent, render, screen} from "@testing-library/react"
import CourseCard from "@/components/CourseCard"

describe('CourseCard Component', () => {
    const mockProps = {
        language: 'JavaScript',
        topic: 'Web Development',
        role: 'Websites, Frontend, Backend (Node.js)',
        description: 'JavaScript is a versatile language used for interactive web development.',
        fullDescription: 'JavaScript runs both in the browser and on servers via Node.js. It supports object-oriented, imperative, and functional programming styles, making it suitable for almost any type of web project.'
    };

    const availableLanguages = ['JavaScript', 'Python', 'TypeScript', 'C++', 'Java', 'C'];

    test('renders programming language as h3 heading with getByRole', () => {
        render(<CourseCard {...mockProps} />);
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('JavaScript');
    });

    test('renders topic as h4 heading using getAllByRole', () => {
        render(<CourseCard {...mockProps} />);
        const headings = screen.getAllByRole('heading');
        expect(headings[1]).toHaveTextContent('Web Development');
    });

    test('renders role as h4 heading using getAllByRole', () => {
        render(<CourseCard {...mockProps} />);
        const headings = screen.getAllByRole('heading');
        expect(headings[2]).toHaveTextContent('Websites, Frontend, Backend (Node.js)');
    });

    test('renders description with getByText', () => {
        render(<CourseCard {...mockProps} />);
        expect(screen.getByText('JavaScript is a versatile language used for interactive web development.')).toBeInTheDocument();
    })

    test('renders button with text "Read More" using getByRole', () => {
        render(<CourseCard {...mockProps} />);
        expect(screen.getByRole('button')).toHaveTextContent('Read More');
    })

    test('shows full description when "Learn More" button is clicked', () => {
        render(<CourseCard {...mockProps} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(screen.getByText(mockProps.fullDescription)).toBeInTheDocument();
    })

    test('changes button text to Read Less after click event', () => {
        render(<CourseCard {...mockProps} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(button).toHaveTextContent('Read Less');
    });

    test('courseCards array contains 6 programming languages', () => {
        expect(availableLanguages).toHaveLength(6);
    });
})