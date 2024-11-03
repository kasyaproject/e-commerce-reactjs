import { Carousel } from "flowbite-react";
import { promocarousel } from "../data";

const carousel = () => {
  return (
    <div className="flex justify-center w-full h-auto p-2 bg-blue-">
      <div className="flex justify-center w-full h-full">
        <Carousel indicators={false}>
          {promocarousel.map((promo) => (
            <div className="w-full h-auto" key={promo.id}>
              <img
                src={promo.image}
                alt={promo.title}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default carousel;
