import type { AnchorHTMLAttributes, ReactNode } from 'react';
import {
  APPOINTMENT_BOOKING_URL,
  APPOINTMENT_LINK_REL,
  APPOINTMENT_LINK_TARGET,
} from '../config/links';

type AppointmentBookingLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'target' | 'rel'
> & {
  children: ReactNode;
};

export default function AppointmentBookingLink({
  children,
  className,
  ...props
}: AppointmentBookingLinkProps) {
  return (
    <a
      href={APPOINTMENT_BOOKING_URL}
      target={APPOINTMENT_LINK_TARGET}
      rel={APPOINTMENT_LINK_REL}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
