import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import Menu from '@/components/menu/menu';
interface LayoutProps {
    children: React.ReactNode;
}
let isActive = true;
export default function Layout({ children }: LayoutProps) {

    isActive;

    return (
        <>
            {
                isActive ?
                    <>
                        <Navbar />
                        <main className='container'>{children}</main>
                        <Footer />
                    </> :
                    <>
                        <Menu></Menu>
                    </>
            }
        </>
    );
}