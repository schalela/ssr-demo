import Link from 'next/link';

export default ({ to, children }) => <Link href={to}>{children}</Link>;
