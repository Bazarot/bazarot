import { usePathname } from 'next/navigation';
const getLinks = () =>{
    pathname = usePathname();
    if(pathname === '/'){
        return[
            {
              label: 'About',
              route: '/about'
            },
        ]
    }
}
export default getLinks;