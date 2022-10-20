import React from 'react';

import { Fragment } from 'react';
// import { Popover, Transition } from '@headlessui/react';
import {
  PopperUnstyled,
  ButtonUnstyled,
  MenuUnstyled,
  MenuItemUnstyled,
} from '@mui/base';

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  ChartBarIcon,
  CheckCircleIcon,
  CursorArrowRaysIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

const solutions = [
  {
    name: 'Analítica',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Marketing',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Seguridad',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integraciones',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
];
const callsToAction = [
  { name: 'Ver Demo', href: '#', icon: PlayIcon },
  { name: 'Mostrar todos los productos', href: '#', icon: CheckCircleIcon },
  { name: 'Contactar con ventas', href: '#', icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <>
      <MenuUnstyled
        components={{ Root: 'nav', Listbox: 'ol' }}
        componentsProps={{
          root: { className: 'relative z-10 bg-white shadow' },
          listbox: {
            className: 'mx-auto flex max-w-7xl px-4 py-6 sm:px-6 lg:px-8',
          },
        }}
        // className="relative z-10 bg-white shadow"
      >
        <MenuItemUnstyled
        // className="mx-auto flex max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
        >
          <ButtonUnstyled
            className={classNames(
              'text-gray-500',
              'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            )}
          >
            <span>Productos</span>
            <ChevronDownIcon
              className={classNames(
                'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500'
              )}
              aria-hidden="true"
            />
          </ButtonUnstyled>
        </MenuItemUnstyled>
      </MenuUnstyled>
    </>
  );
}
