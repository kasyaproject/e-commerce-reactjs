import { Dropdown, Rating } from "semantic-ui-react";

const timeAgo = (dateString) => {
  const now = new Date();
  const reviewDate = new Date(dateString);
  const timeDiff = now - reviewDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const monthsDiff = Math.floor(daysDiff / 30);

  if (monthsDiff > 0) {
    return `${monthsDiff} bulan yang lalu`;
  }
  return `${daysDiff} hari yang lalu`;
};

const cardUlasan = ({ review }) => {
  return (
    <div className="p-2 bg-blue-">
      <div className="flex items-center justify-between gap-2 mb-2 sm:justify-start">
        <Rating
          defaultRating={review.rating}
          icon="star"
          maxRating={5}
          disabled
        />
        <p className="font-semibold text-gray-600">{timeAgo(review.date)}</p>
      </div>

      {/* Detail Ulasan */}
      <div className="flex items-center gap-2 mb-2">
        <img
          src="../assets/react.svg"
          className="w-10 h-10 rounded-full"
          alt="nama_user"
        />
        <p className="text-xl font-bold">{review.reviewer}</p>
      </div>

      {/* Isi Ulasan */}
      <div>
        <p className="mb-4 font-semibold">{review.content}</p>
      </div>

      <hr className="h-px my-4 bg-gray-300 border-0" />
    </div>
  );
};

export default cardUlasan;
