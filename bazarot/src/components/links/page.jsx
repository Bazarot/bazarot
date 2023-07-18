'use client'
import { usePathname } from 'next/navigation';
//Este componente realiza la selección de los botones de la navbar según el endpoint
const getLinks = () =>{
    const pathname = usePathname();
    if (pathname === '/') {
        return [
            {
              label: 'About',
              route: '/about'
            },
            {
                label: 'Signup',
                route: '/api/auth/signin'
            },
            {
                label: 'Login',
                route: '/login'
            }
        ];
    } 
    else if (pathname === '/home') {
        return [
            {
                label: 'Profile',
                route: '/profile'
            },
            {
                label: 'Games',
                route: '/games'
            },
            {
              label: 'About',
              route: '/about'
            },
            {
              label: 'Logout',
              route: '/api/auth/signout'
            },
        ];
    }
    else if (pathname === '/about') {
        return [
            {
              label: 'Home',
              route: '/home'
            },
            {
                label: 'Profile',
                route: '/profile'
            },
            {
              label: 'Logout',
              route: '/api/auth/signout'
            },
            {
                label: 'Logout',
                route: '/'
            }
        ];
    }
    else{
        return [
            {
              label: 'Home',
              route: '/home'
            },
        ];
    }
    
}
export default getLinks;