'use client';
import ArrowUpIcon from "@heroicons/react/24/outline/esm/ArrowUpIcon";
import { FaPinterest, FaInstagram, FaSnapchat, FaTiktok } from "react-icons/fa";
import NavSections from '../../assets/data/navSections.json'
import PaymentContainer from "./FooterPayment";


function FooterLogo() {
    return (
        <span className="flex flex-col w-full m-0 space-x-16 ">
            <p className="p-0 m-0 text-[5rem] leading-[3.9rem] tracking-widest text-black uppercase font-bagel">
                Super</p>
            <p className="p-0 m-0 text-[5rem] leading-[3.9rem] tracking-widest text-black uppercase font-bagel">
                Stack</p>
        </span>
    );
}

function backToTop() {
    window.scrollTo(0, 0);
}

function ScrollTopBtn() {
    return (
        <button
            className='absolute z-10 flex items-center justify-center w-8 h-8 font-bold translate-x-[17rem] -translate-y-24 border border-black rounded-full bg-mint '
            onClick={backToTop}
            id="footer-to-top-button"
            title="Go To Top">
            <ArrowUpIcon className="w-4 h-4" strokeWidth={3.5} />
        </button>);
}

function LogoBtn({ children }) {
    return (
        <button>
            {children}
        </button>
    );
}

function SocialMediaContainer() {
    return (
        <div className="flex flex-row items-center self-center gap-6">
            <LogoBtn>
                <FaPinterest className="w-5 h-5" />
            </LogoBtn>
            <LogoBtn>
                <FaInstagram className="w-5 h-5" />
            </LogoBtn>
            <LogoBtn>
                <FaTiktok className="w-5 h-5" />
            </LogoBtn>
            <LogoBtn>
                <FaSnapchat className="w-5 h-5" />
            </LogoBtn>
        </div>
    );
}



function NavSection({ section }) {

    return (
        <nav
            className="w-1/2 font-semibold tracking-wide"
            aria-label="footer-navigation-shop"
            role='footer-navigation-shop'>
            <h3 className="py-2 mb-3 text-xl border-b border-black">
                {section.title}
            </h3>
            <ul className="flex flex-col gap-1 ">
                {
                    section.links.map((navItem) => (
                        <li key={navItem.id}>
                            <a href={navItem.url}>{navItem.title}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

function ExtRessourcesWrapper({ children }) {
    return (
        <div className="flex flex-col items-center gap-4 mt-8">
            {children}
        </div>
    );
}

function FooterPolicy() {
    return (
        <ul className="flex justify-around w-full mt-4 text-sm font-bold tracking-wider">
            <li>Impressum</li>
            <li>AGB</li>
            <li>Datenschutz</li>
        </ul>
    );
}

function FooterCredits() {
    return (
        <p className="px-16 py-6 text-[0.6rem] font-bold text-center text-black bg-white ">
            © 2023 SUPERSTACK. Alle Preise inkl. Mwst. zzgl. Versand.
        </p>
    );
}


function Footer() {
    return (
        <>
            <footer
                role='contentinfo'
                className="relative flex flex-col w-full gap-10 px-4 py-20 border-t border-black bg-footer-mauve">
                <FooterLogo />
                <ScrollTopBtn />
                <NavSection section={NavSections.Shop} />
                <NavSection section={NavSections.Company} />
                <NavSection section={NavSections.Support} />
                <ExtRessourcesWrapper>
                    <PaymentContainer />
                    <SocialMediaContainer />
                    <FooterPolicy />
                </ExtRessourcesWrapper>
            </footer>
            <FooterCredits />
        </>
    )
}




export default Footer