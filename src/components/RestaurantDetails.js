import { RESTAURANT_LIST_IMAGE_URL } from "../../utils/Constants";
import { Link } from "react-router-dom";

const RestaurantDetails = (props) => {
  const {
    name,
    id,
    avgRating,
    sla,
    cuisines,
    locality,
    areaName,
    cloudinaryImageId,
  } = props.restData.info;
  return (
    <div className="rest-container w-[280] mr-8 mb-8 rounded-2xl  ">
      <div className="img-cont object-cover h-52  overflow-hidden rounded-xl">
        <img
          className="img"
          src={`${RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
          alt="Image"
          width="100%"
        />
      </div>
      <div className="px-1">
        <Link className="name" to={`/details/${id}`}>
          <h3 className="font-sans text-lg font-bold">{name}</h3>
        </Link>
        <p className="font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline"
            fill="green"
            width="20"
            height="20"
          >
            <path d="M10.044 20.087A10.044 10.044 0 1 0 0 10.043a10.044 10.044 0 0 0 10.044 10.044zM8.534 8.193l1.4-4.313 1.4 4.313h4.533L12.2 10.858l1.4 4.312-3.666-2.665-3.666 2.665 1.4-4.312L4 8.193z" />
          </svg>{" "}
          {avgRating} <span className="ml-4">{sla.slaString}</span>
        </p>
        <p className="">{cuisines.join(", ")}</p>
        <p className="">{`${locality}, ${areaName}`}</p>
      </div>
    </div>
  );
};

export default RestaurantDetails;
