// import { forwardRef, useId } from 'react';
// import { classes } from 'utils/style';
// import styles from './Monogram.module.css';

// import monogramPng from '../../../public/icon-256.png';

// export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
//   const monogramStyle = {
//     width: '46px', // Set the desired width
//     height: '29px', // Set the desired height
//   };

//   return (
//     <img
//       aria-hidden
//       className={styles.monogram + ' ' + className}
//       src={monogramPng} // Use the imported PNG image
//       alt="Monogram"
//       ref={ref}
//       {...props}
//       style={monogramStyle}
//     />
//   );
// });

import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

import monogramPng from './ALogo.png'; // Update the path to your PNG image

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const monogramStyle = {
    width: '46px', // Set the desired width
    height: '29px', // Set the desired height
    font: '48'
  };

  return (
    <span
      aria-hidden
      className={styles.monogram + ' ' + className}
      alt="A"
      ref={ref}
      {...props}
      style={monogramStyle}
    >
      A
    </span>
  );
});
