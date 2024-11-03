import { Carousel } from "flowbite-react";
import { promocarousel } from "../data";
import { Link } from "react-router-dom";

const carousel = () => {
  return (
    <div className="flex justify-center w-full h-auto p-2 bg-blue-">
      <div className="flex justify-center w-full h-full">
        <Carousel indicators={false}>
          {promocarousel.map((promo) => (
            <Link
              to={`/promo/${promo.id}`}
              className="w-full h-auto"
              key={promo.id}
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="object-cover w-full h-full"
              />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default carousel;
