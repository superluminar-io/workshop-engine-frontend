import React from 'react';

export enum UserRole {
  Admin = 'ADMIN',
  Attendee = 'ATTENDEE'
}

export interface User {
  emailAddress: string;
  role: UserRole;
}

export const UserContext = React.createContext<User>({
  emailAddress: '',
  role: UserRole.Attendee
})
