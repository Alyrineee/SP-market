
import axios from 'axios';
import { useEffect, useState, } from "react";
import Footer from '../Footer/Footer';

const Lots = () => {
   interface item {
      img: string;
      name: string;
      desc: string;
      amount: number;
      user:  {
         avatar:string;
         name:string;
      };
      price: number;
    }
   const [items, setItems] = useState<item>()
   
   useEffect(()=>{
         axios.get('http://127.0.0.1:8000/api/items').then(response => setItems(response.data))
   },[])
   const [value,setValue] = useState('')
   let filteredItems;
   if(Array.isArray(items)){
      filteredItems = items?.filter((item : { name: string; } ) => {
         return item.name.toLowerCase().includes(value.toLowerCase())
      })
   }
    return ( 
    <>
<main className="CollectionPage">
   <div className="PageHeaderCover">
      <div className="PageHeaderCover__wrapper">
         <div className="PageHeaderCover__cover PageHeaderCover__cover--blurred"></div>
      </div>
   </div>
   
   <div className="EntityNavBar">
      <div className="EntityNavBar__inner">
         <div className="LibraryInput LibraryInput--state-default LibraryInput--appearance-filled LibraryInput--size-m LibraryInput--after-clickable EntitySearch">
            <div className="LibraryInput__before">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.75 3.5a7.25 7.25 0 0 1 5.785 11.62l4.172 4.173a1 1 0 0 1-1.414 1.414l-4.173-4.172A7.25 7.25 0 1 1 10.75 3.5zm0 2a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5z" fill="currentColor"></path>
               </svg>
            </div>
            <div className="LibraryTypography LibraryTypography--w-regular LibraryText LibraryInput__typography">
               <input className="LibraryInput__element" onChange={(event) => {setValue(event.target.value)}} autoCapitalize="off" autoComplete="off" placeholder="Название товара"/>
               <div className="LibraryInput__border"></div>
               
            </div>
         </div>
         <button className="LibraryButton LibraryButton--sz-m LibraryButton--tp-dropdown LibraryButton--apr-secondary LibraryButton--act-default LibraryButton--br-default">
         </button>
      </div>
   </div>

   <div className="EntityContainer">

   <div className="EntityContentContainer">
   <div className="Grid">
      <div className="Grid__grid">
         {filteredItems?.map((items: any) => {
            return(
                  <div className="NftItemContainer NftItemContainer--surface-none">
                     <a href={"/item/"+items.id}>
                        <div className="NftItemContainer__content-container">
                           <div className="NftItemContainer__content"><img src={items.img} loading="lazy" alt="" className="LibraryImg LibraryMedia LibraryMedia--fill-container NftContent--scalable"/></div>
                           <div className="NftItemContentBar">
                              <div className="NftItemContentBar__left">
 
                              </div>

                           </div>
                        </div>
                        <div className="NftItemContainer__bottom">
                           <div className="NftItemBottom--top">
                              <div className="NftItemName">
                                 <div className="LibraryTypography LibraryTypography--w-regular LibraryTypography--ellipsis LibraryText">{items.name}</div>
                              </div>
                           </div>
                           <div className="NftItemBottom--bottom">
                              <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryLabel">
                                 <span className="CryptoPrice">
                                    <div className="CryptoPrice__inner">
                                       <div className="CryptoPrice__amount">{items.price} АР</div>
                                    </div>
                                 </span>
                              </div>
                              <div className="LibraryBadge LibraryBadge--sz-s LibraryBadge--st-color LibraryBadge--color-var(--dynamic_purple) LibraryBadge--background-var(--dynamic_purple_alpha_10)" style={{color: "var(--dynamic_purple)",background:"var(--dynamic_purple_alpha_10)"}}>
                           <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryTypography--ellipsis LibraryCaption LibraryCaption--l-2">
                              <div className="LibraryBadge__text">{items.location}</div>
                           </div>
                        </div>
                           </div>
                        </div>

                     </a>
                     <div className="NftItemContainer__overlay">
                        <div className="NftItemContainer__overlay-inner">
                           <div className="NftItemContentControl NftItemContentControl--position-top-right NftItemContentControl--spacing-6px"></div>
                           <div className="NftItemContainer__hover-content">
                              <div className="NftItemContentControl NftItemContentControl--position-bottom-center NftItemContentControl--spacing-12px">
                                 <div className="LibraryButtonsGroup LibraryButtonsGroup--spacing-16px">
                                    <div className="LibraryButtonsGroup__line"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
            );
            
         })}
         
      </div>
   </div>
</div>
</div>
    </main>
    <Footer/>
    </> );
}
 
export default Lots;