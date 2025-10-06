import { render, screen, fireEvent } from '@testing-library/react';
import CoursesPage from '@/app/courses/page';

describe('CoursesPage Integration', () => {

    test('integrates PageIntro, CourseCards and CodeBlocks with state changes', () => {
        render(<CoursesPage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Language Lab');
    expect(screen.getByText('Discover programming languages through real examples and see them in action.')).toBeInTheDocument();

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6);
    expect(screen.getAllByRole('heading', { level: 4 })).toHaveLength(18);

    const allButtons = screen.getAllByRole('button');
    expect(allButtons).toHaveLength(12);

    expect(screen.queryByText(/JavaScript runs both in the browser/i)).not.toBeInTheDocument();
    fireEvent.click(allButtons[0]);
    expect(screen.getByText(/JavaScript runs both in the browser/i)).toBeInTheDocument();
    expect(allButtons[0]).toHaveTextContent('Read Less');
    
    fireEvent.click(allButtons[0]);
    expect(screen.queryByText(/JavaScript runs both in the browser/i)).not.toBeInTheDocument();
    expect(allButtons[0]).toHaveTextContent('Read More');

    expect(screen.queryByText(/console.log/i)).not.toBeInTheDocument();
    fireEvent.click(allButtons[6]);
     expect(screen.getByText(/console.log/i)).toBeInTheDocument();
    expect(allButtons[6]).toHaveTextContent('Hide');

    fireEvent.click(allButtons[6]);
    expect(screen.queryByText(/console.log/i)).not.toBeInTheDocument();
    expect(allButtons[6]).toHaveTextContent('Run');

    expect(screen.queryByText(/Python has a simple syntax and a large ecosystem/i)).not.toBeInTheDocument();
    fireEvent.click(allButtons[1]);
    expect(screen.getByText(/Python has a simple syntax and a large ecosystem/i)).toBeInTheDocument();
    expect(allButtons[1]).toHaveTextContent('Read Less');

    fireEvent.click(allButtons[1]);
    expect(screen.queryByText(/Python has a simple syntax and a large ecosystem/i)).not.toBeInTheDocument();
    expect(allButtons[1]).toHaveTextContent('Read More');

    expect(screen.queryByText(/print\('Hello'\)/i)).not.toBeInTheDocument();
    fireEvent.click(allButtons[7]);
    expect(screen.getByText(/print\('Hello'\)/i)).toBeInTheDocument();
    expect(allButtons[7]).toHaveTextContent('Hide');

    fireEvent.click(allButtons[7]);
    expect(screen.queryByText(/print\('Hello'\)/i)).not.toBeInTheDocument();
    expect(allButtons[7]).toHaveTextContent('Run');
    });
});