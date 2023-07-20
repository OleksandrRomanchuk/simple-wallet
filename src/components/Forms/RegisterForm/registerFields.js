import {
  EnvelopeIcon,
  LockIcon,
  UserIcon,
} from 'components/shared/Icons/icons';

export const registerFields = [
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
  {
    name: 'confirm password',
    type: 'password',
    text: 'Confirm password',
    icon: <LockIcon />,
    placeholder: 'Confirm password',
  },
  {
    name: 'name',
    type: 'text',
    text: 'First name',
    icon: <UserIcon />,
    placeholder: 'First name',
  },
];
