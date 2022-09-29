import { render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { TodaysActivity } from './TodaysActivity';

const args: ComponentProps<typeof TodaysActivity> = {
  userName: 'Ahmed Elsakaan',
  userCourse: 'Computer Science',
  userAvatar: 'https://avatars.githubusercontent.com/u/20271968?v=4',
  quote:
    '"Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings." - Arthur Rubinstein',
  recentModules: [
    {
      href: '/modules/1',
      icon: '🧠',
      name: 'Algorithms and Complexity',
      code: 'CS2860',
      tasks: 3,
      color: 'red',
      progress: 45,
    },
  ],
  recentNotebooks: [
    {
      href: '/notebooks/1',
      emoji: '✨',
      title: 'Week 1 - Introduction to IT Project Management',
      lastEdited: '6 hours ago',
      label: {
        name: 'IT Project Management',
        color: 'green',
      },
      defaultStarred: false,
    },
  ],
};

describe("Today's Activity page", () => {
  it('renders the user name', () => {
    render(<TodaysActivity {...args} />);
    expect(screen.getByText(args.userName)).toBeInTheDocument();
  });

  it('renders the user course', () => {
    render(<TodaysActivity {...args} />);
    expect(screen.getByText(args.userCourse)).toBeInTheDocument();
  });

  it('renders the user avatar', () => {
    render(<TodaysActivity {...args} />);
    expect(screen.getByAltText(args.userName)).toBeInTheDocument();
  });

  it('renders the quote', () => {
    render(<TodaysActivity {...args} />);
    expect(screen.getByText(args.quote)).toBeInTheDocument();
  });

  it('renders the recent modules', () => {
    render(<TodaysActivity {...args} />);
    expect(screen.getByText(args.recentModules[0].name)).toBeInTheDocument();
  });

  it('renders the recent notebooks', () => {
    render(<TodaysActivity {...args} />);
    expect(screen.getByText(args.recentNotebooks[0].title)).toBeInTheDocument();
  });
});
