import Container from "@/components/_layout/Container";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-[#262626] py-6">
            <Container>

                <div className="flex justify-between items-center">
                    <Link href="/" className="text-white text-3xl font-bold uppercase font-lato">Aurelian S</Link>

                    <div className="flex space-x-7 text-white">
                        <a href="tel:0000" className="flex items-center space-x-4">
                            <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                            <span className="text-lg font-roboto-slab">Mobile</span>
                        </a>
                        <a href="mailto:aurelianxspodarec@gmail.com" className="flex items-center space-x-4">
                            <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
                            <span className="text-lg font-roboto-slab">Email Me</span>
                        </a>
                    </div>
                </div>

                <hr className="my-6" />

                <div className="flex justify-between items-center">
                    <p className="text-white text-sm">&copy; Aurelian Spodarec {new Date().getFullYear()}. All rights reserved</p>

                    <nav className="text-white text-sm space-x-7">
                        <Link href="https://www.linkedin.com/in/aurelianspodarec/">LinkedIn</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="https://aurelianspodarec.co.uk/blog">Blog</Link>
                        <Link href="https://github.com/AurelianSpodarec">Github</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                </div>

            </Container>
        </footer>
    )
}

export default Footer;