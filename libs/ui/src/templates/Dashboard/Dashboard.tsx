import { ComponentProps, FC, PropsWithChildren } from 'react';
import { FiBook, FiCheck, FiGrid, FiHome } from 'react-icons/fi';
import { Greeting } from '../../molecules/Greeting';
import { Sidebar } from '../../organisms/Sidebar';

type DashboardProps = {
  userName: ComponentProps<typeof Sidebar>['user']['name'];
  userAvatar: ComponentProps<typeof Sidebar>['user']['avatar'];
  userCourse: ComponentProps<typeof Sidebar>['user']['course'];
};

export const Dashboard: FC<PropsWithChildren<DashboardProps>> = ({
  children,
  userName,
  userAvatar,
  userCourse,
}) => {
  return (
    <main className="flex flex-col h-screen gap-3 p-3 lg:p-6 lg:flex-row lg:gap-6">
      <Sidebar
        user={{ name: userName, avatar: userAvatar, course: userCourse }}
        links={[
          {
            label: "Today's Activity",
            href: '/dashboard',
            icon: <FiHome />,
          },
          {
            label: 'Modules',
            href: '/dashboard/modules',
            icon: <FiGrid />,
          },
          {
            label: 'Task list',
            href: '/dashboard/tasks',
            icon: <FiCheck />,
          },
          {
            label: 'Notebooks',
            href: '/dashboard/notebooks',
            icon: <FiBook />,
          },
        ]}
      />
      <div className="flex-1 p-8 rounded-2xl ring-1 dark:ring-zinc-800 ring-zinc-100">
        <Greeting
          name="Ahmed"
          quote='"Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings." - Arthur Rubinstein'
        />
        {children}
      </div>
    </main>
  );
};
