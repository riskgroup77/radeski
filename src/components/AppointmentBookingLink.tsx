import type { AnchorHTMLAttributes, ReactNode } from 'react';
import {
  APPOINTMENT_BOOKING_URL,
  APPOINTMENT_LINK_REL,
  APPOINTMENT_LINK_TARGET,
} from '../config/links';
import { incrementClientCount } from '../utils/clientCount';

type AppointmentBookingLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'target' | 'rel'
> & {
  children: ReactNode;
};

export default function AppointmentBookingLink({
  children,
  className,
  onClick,
  ...props
}: AppointmentBookingLinkProps) {
  return (
    <a
      href={APPOINTMENT_BOOKING_URL}
      target={APPOINTMENT_LINK_TARGET}
      rel={APPOINTMENT_LINK_REL}
      className={className}
      onClick={(event) => {
        incrementClientCount();
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
