import Contact from "./Contact";
import Links from "./Links";

const Footer = () => {
    return (
        <footer className="text-stone-200 bg-primary mt-12 lg:mt-24">
            <div className="mx-auto w-full md:max-w-7xl p-6 md:p-12">
                <div className="flex flex-col md:flex-row md:justify-between max-lg:px-6 gap-6">

                    <a href="/" className="text-2xl md:text-4xl font-bold tracking-wid">
                        Golfresor
                    </a>

                    <Links />

                    <Contact />

                </div>
            </div>
        </footer >

    );
}

export default Footer;
