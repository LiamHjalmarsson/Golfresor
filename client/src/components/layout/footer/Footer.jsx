import { NavLink } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Contact from "./Contact";
import Links from "./Links";
import Logo from "../logo/Logo";

const Footer = () => {
    let { data: navigation } = useFetch(`*[_type == "navigation" && title == "Footer"]{
        title,
        logo,
        links[]{
            title,
            linkType,
            internalLink->{
                title,
                "slug": slug.current
            },
            externalLink
        },
        contact {
            email,
            phone
        }
    }`);

    return (
        <footer className="text-stone-200 bg-primary mt-24 lg:mt-48">
            <div className="mx-auto w-full md:max-w-7xl p-6 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 max-lg:px-6 gap-0 lg:gap-12">
                    <NavLink to="/" className={"w-full relative"}>
                        {navigation && <Logo logo={navigation[0].logo} />}
                    </NavLink>

                    {navigation && <Links links={navigation[0].links} />}

                    {navigation && <Contact contact={navigation[0].contact} />}
                </div>
            </div>
        </footer >

    );
}

export default Footer;
