import { render, screen, fireEvent } from '@testing-library/react';
import CodeBlock from '@/components/CodeBlock';

describe('CodeBlock Component', () => {
    const mockProps = {
        code: "console.log('Hello, world!');",
        language: 'Javascript'
    };

    const availableLanguages = ['Javascript', 'Python', 'TypeScript', 'C++', 'Java', 'C'];

    test('renders language heading with getByRole', () => {
        render(<CodeBlock {...mockProps} />);
        expect(screen.getByRole('heading')).toHaveTextContent('Javascript');
    });

    test('renders button with initial Run text', () => {
        render(<CodeBlock {...mockProps} />);
        expect(screen.getByRole('button')).toHaveTextContent('Run');
    });

    test('shows code after click event', () => {
        render(<CodeBlock {...mockProps} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(screen.getByText("console.log('Hello, world!');")).toBeInTheDocument();
    });

    test('changes button text to Hide after click event', () => {
        render(<CodeBlock {...mockProps} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(button).toHaveTextContent('Hide');
    });

    test('codeBlockProps array contains 6 programming languages', () => {
        expect(availableLanguages).toHaveLength(6);
    });
})