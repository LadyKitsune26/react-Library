import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Book from './Book';
import { books } from '../data'

 const Featured = () => {
  console.log(books)
  return(
    <section id='features'>
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>
    </section>
  )
 }

 export default Featured




// import React from "react";
// import Book from "./Book";
// import BestBooks from "./ui/BestBooks";

// const Featured = () => {
//   return (
//     <section id="features">
//       <div className="container">
//         <div className="row">
//           <h2 className="section__title">
//             Featured <span className="purple">Books</span>
//           </h2>
//           <BestBooks />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Featured;
