import Heading from "../heading/Heading";
import Deal from "./components/Deal";

const Deals = ({ title, subTitle, deals }) => {

    console.log(deals[0]);
    return (
        <div className="text-center p-4 md:p-8  max-w-7xl mx-auto">
            <Heading subTitle={subTitle} title={title} />

            <div className="flex flex-wrap justify-center gap-12 md:px-6 lg:px-12 text-start mt-6 lg:mt-12">
                {
                    deals.map((deal, index) => (
                        <Deal
                            image={deal.image}
                            name={deal.title}
                            description={deal.description}
                            alt={deal.description}
                            key={index}
                            reference={deal.reference}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Deals;
