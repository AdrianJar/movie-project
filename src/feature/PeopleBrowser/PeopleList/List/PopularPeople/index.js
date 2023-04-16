import Data from "./Data";
import ErrorBox from "./ErrorBox";
import Loading from "./Loading";

const PopularPeople = ({ status, people }) => {
    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />;

        case "error":
            return <ErrorBox />

        case "success":
            return <Data people={people} />;

        default:
            throw new Error (`incorrect status: ${status}`);
    }
};

export default PopularPeople