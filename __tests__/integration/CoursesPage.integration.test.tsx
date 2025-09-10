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

    fireEvent.click(allButtons[0]);
    expect(allButtons[0]).toHaveTextContent('Read Less');

    fireEvent.click(allButtons[6]);
    expect(allButtons[6]).toHaveTextContent('Hide');
    });
});