import { EnvelopeIcon, LockIcon } from 'components/shared/Icons/icons';

export const loginFields = [
  {
    name: 'email',
    type: 'email',
    text: 'E-mail',
    icon: <EnvelopeIcon />,
    placeholder: 'E-mail',
  },
  {
    name: 'password',
    type: 'password',
    text: 'Password',
    icon: <LockIcon />,
    placeholder: 'Password',
  },
];
