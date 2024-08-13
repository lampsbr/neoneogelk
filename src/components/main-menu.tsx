import Image from 'next/image';
import './main-menu.css';
export default async function MainMenu() {
    return (
        <nav className="neogelkNav z-10 w-full h-12 fixed bottom-0 flex flex-row justify-between items-center px-4 bg-yellow-300 text-black">
            <div className="profileMenu">profile menu</div>
            <div className="menuOptions">menu options</div>
            <Image src="/logo/piglogo.jpeg" width={300} height={100} alt="NeoGelk" />
        </nav>
    )
}