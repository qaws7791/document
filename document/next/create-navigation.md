# NavigationBar 만들기

```tsx
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
	const pathname = usePathname();
    
    return(
    	<div>
        	{links.map((link) => (
            	<Link
                    key={link.name}
                    href={link.href}
                    className={pathname === link.href ? 'active' : ''}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    )
}
```

