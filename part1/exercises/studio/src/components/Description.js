import styles from './Description.module.css';
import React from 'react';


export default function RecipeAuthor() {
    let authorLink = "https://www.marthastewart.com/338185/basic-pancakes";
    let authorPhoto = "https://www.marthastewart.com/thmb/hYBu4WxREoHdCZ4l_8ryGZjqMLQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j";
    let authorName = "martha stawat";
    
        return (
            <div className = {styles.recipeAuthorBlock}>
               <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
               <div>
                  <h3>{authorName}</h3>
                  <a href={authorLink}>Blog name</a> 
               </div>
            </div>
         );
        }
        