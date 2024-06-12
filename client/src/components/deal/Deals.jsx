import useFetch from "../../hooks/useFetch";
import Heading from "../heading/Heading";
import Deal from "./components/Deal";

const Deals = ({ title, subTitle }) => {
    let { data } = useFetch(`*[_type == "hotel" && deal.isDeal == true]`);

    return (
        <div className="text-center p-4 md:p-8  max-w-7xl mx-auto">
            <Heading subTitle={subTitle} title={title} />

            <div className="flex flex-wrap justify-center gap-12 md:px-6 lg:px-12 text-start mt-6 lg:mt-12">
                {
                    data?.map((deal, index) => (
                        <Deal
                            deal={deal}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Deals;
