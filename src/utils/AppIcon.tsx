import React from 'react';
import { Icon, createIcon } from '@chakra-ui/icons';

const AppIcon = ({ icon, ...props }: { icon: string; color?: string; }) => {
    switch (icon) {
        case 'edmused':
            return <EdmusedIcon {...props} />;
        case 'dashboard':
            return <DashboardIcon {...props} />;
        case 'lesson':
            return <LessonIcon {...props} />;
        case 'teachers':
            return <TeachersIcon {...props} />;
        case 'calender':
            return <CalenderIcon {...props} />;
        case 'chat':
            return <ChatIcon {...props} />;
        default:
            return <Icon />;
    }
};
export default AppIcon;

// icons
export const EdmusedIcon = createIcon({
    displayName: 'EdmusedIcon',
    viewBox: '0 0 23 21',
    path: [
        <rect x="0.5" y="0.5" width="13" height="13" fill="#232323" stroke="#C4C4C4" />,
        <rect x="13.8389" y="4" width="12" height="12" transform="rotate(44.6504 13.8389 4)" fill="#F3F3F3" />
    ],
});

export const DashboardIcon = createIcon({
    displayName: 'DashboardIcon',
    viewBox: '0 0 18 18',
    path: [
        <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM6 14H4V7H6V14ZM10 14H8V4H10V14ZM14 14H12V10H14V14Z" fill="black" />

    ],
});

export const LessonIcon = createIcon({
    displayName: 'LessonIcon',
    viewBox: '0 0 18 18',
    path: [
        <path d="M16 0H2C0.9 0 0 0.9 0 2V9C0 10.1 0.9 11 2 11H16C17.1 11 18 10.1 18 9V2C18 0.9 17.1 0 16 0ZM16 6H12C12 7.62 10.62 9 9 9C7.38 9 6 7.62 6 6H2V2H16V6ZM12 13H18V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V13H6C6 14.66 7.34 16 9 16C10.66 16 12 14.66 12 13Z" fill="#E3E3E3" />

    ],
});


export const TeachersIcon = createIcon({
    displayName: 'TeachersIcon',
    viewBox: '0 0 22 14',
    path: [
        <path d="M15.5 8C14.3 8 12.43 8.34 11 9C9.57 8.33 7.7 8 6.5 8C4.33 8 0 9.08 0 11.25V14H22V11.25C22 9.08 17.67 8 15.5 8ZM11.5 12.5H1.5V11.25C1.5 10.71 4.06 9.5 6.5 9.5C8.94 9.5 11.5 10.71 11.5 11.25V12.5ZM20.5 12.5H13V11.25C13 10.79 12.8 10.39 12.48 10.03C13.36 9.73 14.44 9.5 15.5 9.5C17.94 9.5 20.5 10.71 20.5 11.25V12.5ZM6.5 7C8.43 7 10 5.43 10 3.5C10 1.57 8.43 0 6.5 0C4.57 0 3 1.57 3 3.5C3 5.43 4.57 7 6.5 7ZM6.5 1.5C7.6 1.5 8.5 2.4 8.5 3.5C8.5 4.6 7.6 5.5 6.5 5.5C5.4 5.5 4.5 4.6 4.5 3.5C4.5 2.4 5.4 1.5 6.5 1.5ZM15.5 7C17.43 7 19 5.43 19 3.5C19 1.57 17.43 0 15.5 0C13.57 0 12 1.57 12 3.5C12 5.43 13.57 7 15.5 7ZM15.5 1.5C16.6 1.5 17.5 2.4 17.5 3.5C17.5 4.6 16.6 5.5 15.5 5.5C14.4 5.5 13.5 4.6 13.5 3.5C13.5 2.4 14.4 1.5 15.5 1.5Z" fill="#C4C4C4" />

    ],
});


export const CalenderIcon = createIcon({
    displayName: 'CalenderIcon',
    viewBox: '0 0 20 22',
    path: [
        <path d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V7H18V20Z" fill="#C4C4C4" />
    ],
});


export const ChatIcon = createIcon({
    displayName: 'ChatIcon',
    viewBox: '0 0 20 20',
    path: [
        <path d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H4L2 16V2H18V14Z" fill="#C4C4C4" />
    ],
});


