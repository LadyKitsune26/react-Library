import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Book = () => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img
            src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg"
            alt=""
            className="book__img"
          />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          Atomic Habits
        </a>
      </div>
      <div className="book__ratings">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
      </div>
      <div className="book__price">
        <span className="book__price--normal">$15.00</span> $10.00
      </div>
    </div>
  );
};

export default Book;

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import Price from "./ui/Price";
// import Ratings from "./ui/Ratings";

// const Book = ({ book }) => {
//   const [img, setImg] = useState();

//   // When we switch routes dont set image to unmounted component
//   const mountedRef = useRef(true);

//   useEffect(() => {
//     const image = new Image();
//     image.src = book.url;
//     image.onload = () => {
//       setTimeout(() => {
//         if (mountedRef.current) {
//           setImg(image);
//         }
//       }, 300);
//     };
//     return () => {
//       // When the component unmounts
//       mountedRef.current = false;
//     };
//   }, [book.url]);

//   return (
//     <div className="book">
//       {!img ? (
//         <>
//           <div className="book__img--skeleton"></div>
//           <div className="skeleton book__title--skeleton"></div>
//           <div className="skeleton book__rating--skeleton"></div>
//           <div className="skeleton book__price--skeleton"></div>
//         </>
//       ) : (
//         <>
//           <Link to={`/books/${book.id}`}>
//             <figure className="book__img--wrapper">
//               <img className="book__img" src={img.src} alt="" />
//             </figure>
//           </Link>
//           <div className="book__title">
//             <Link to={`/books/${book.id}`} className="book__title--link">
//               {book.title}
//             </Link>
//           </div>
//           <Ratings rating={book.rating} />
//           <Price
//             originalPrice={book.originalPrice}
//             salePrice={book.salePrice}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default Book;
