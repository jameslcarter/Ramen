import type { FC, PropsWithChildren } from 'react';
import { UserButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useRouter } from 'next/navigation';

import { Brand, Button } from '@noodle/ui';

import { ActiveLink } from '@/components/ActiveLink';
import { Icon } from '@/components/Icon';
import { FeedbackDialog } from './feedback';
import { pageLinks } from './static-data';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen gap-6 p-6">
      <aside className="flex min-w-[220px] flex-col justify-between">
        <div>
          <div className="pl-4">
            <Brand size={35} />
          </div>

          <ul className="mt-8 flex flex-col gap-2">
            {pageLinks.map((link) => (
              <li key={link.href}>
                <Button asChild variant="muted" className="w-full">
                  <ActiveLink
                    href={link.href}
                    activeClassName="text-gray-12 dark:text-graydark-12"
                  >
                    <Icon name={link.icon} />
                    <span>{link.label}</span>
                  </ActiveLink>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FeedbackDialog />
        </div>
      </aside>

      <div className="border-gray-3 dark:border-graydark-3 flex flex-1 flex-col rounded-2xl border px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button type="button" variant="muted" size="icon">
              <Icon name="panel-left-close" />
            </Button>
            <div className="flex items-center">
              <Button
                type="button"
                variant="muted"
                size="icon"
                onClick={() => {
                  router.back();
                }}
              >
                <Icon name="chevron-left" />
              </Button>
              <Button
                type="button"
                variant="muted"
                size="icon"
                onClick={() => {
                  router.forward();
                }}
              >
                <Icon name="chevron-right" />
              </Button>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center gap-4">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: dark,
              }}
            />
            <Button type="button" variant="muted" size="icon">
              <Icon name="bell-ring" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="gap-2 px-2.5 py-1.5"
            >
              <Icon name="plus" size={16} />
              <Icon
                name="chevron-down"
                size={11}
                className="text-gray-10 dark:text-graydark-10"
              />
            </Button>
          </div>
        </nav>
        <div className="flex flex-1">{children}</div>
      </div>
    </div>
  );
};

export { DashboardLayout };
