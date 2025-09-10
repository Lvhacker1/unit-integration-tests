import { render, screen } from '@testing-library/react';
import ActionButtons from '@/components/ActionButtons';

jest.mock('next/link', () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  };
});

describe('ActionButtons Component', () => {
  test('renders 2 action buttons using getAllByRole', () => {
    render(<ActionButtons />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });

  test('renders correct links with getByRole', () => {
    render(<ActionButtons />);
    expect(screen.getByRole('link', { name: /Start Experimenting/ })).toHaveAttribute('href', '/courses');
    expect(screen.getByRole('link', { name: /Meet the Mind/ })).toHaveAttribute('href', '/about');
  });

  test('renders complete descriptions using queryBy', () => {
    render(<ActionButtons />);
    expect(screen.queryByText('Where 6 programming languages wait to confuse and enlighten you')).toBeInTheDocument();
    expect(screen.queryByText('Meet the developer who has more browser tabs open than brain cells functioning')).toBeInTheDocument();
  });
})