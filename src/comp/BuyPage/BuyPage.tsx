
import axios from 'axios';
import { useEffect, useState, } from "react";
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
const BuyPage = () => {
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
    const {id} = useParams();
    const [item, setItem] = useState<item>()
    useEffect(()=>{
          axios.get('http://127.0.0.1:8000/api/item/'+id).then(response => setItem(response.data))
    },[])

    return (  
      <>
         <div id="__next">
            <div className="App App--en">
               <div>
                  <main>
                     <div className="TwoColsPageBody">
                        <div className="TwoColsPageLeft">
                           <div className="NftPageContent">
                              <div className="NftPageContent__content">
                                 <div className="NftPageContent__content-inner"><img src={item?.img}  className="LibraryImg LibraryMedia LibraryMedia--contain-container"/></div>
                              </div>
                           </div>
                        </div>
                        <div className="TwoColsPageRight">
                           <div className="NftPageInfo">
                              <div className="LibraryTypography LibraryTypography--w-bold LibraryDisplay LibraryDisplay--l-2">{item?.name}</div>
                              <div className="NftPageInfo__collection">
                              </div>
                              <div className="Description Description--expanded">
                                 <div className="LibraryTypography LibraryTypography--w-regular LibraryText Description__text">{item?.desc}</div>
                              </div>
                              <div className="NftPageActionsCard">
                                 <div className="LibraryCellContainer LibraryCellContainer--spacing-20px LibraryCellContainer--surface-tint-card">
                                    <div className="NftPageActionsCard__info">
                                       <div className="NftPageAuction">
                                          <div className="NftPageAuctionActive">
                                             <div className="NftPageAuctionActive__header">
                                                <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryCaption LibraryCaption--l-1 LibraryCaption--caps NftPageAuctionActive__header-left">Всего доступно</div>
                                                <div className="NftPageAuctionActive__header-right">
                                                </div>
                                             </div>
                                             <div className="NftPageAuctionActive__timer">
                                                <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryDisplay LibraryDisplay--l-3 NftPageAuctionTimer"><span className="NftPageAuctionTimer__piece NftPageAuctionTimer__piece--days"><span className="NftPageAuctionTimer__count NftPageAuctionTimer__count--digit">{item?.amount}</span>&nbsp;шт.</span></div>
                                             </div>
                                             <div className="NftPageAuctionActive__params">                                    
                                                <div className="NftPageAuctionLastBid">
                                                   <div className="Avatar Avatar--size-48 Avatar--type-circe-image"><img src={item?.user?.avatar} loading="lazy" className="LibraryImg LibraryMedia Avatar__image"/></div>
                                                   <div className="NftPageAuctionLastBid__info">                                        
                                                      <div className="LibraryTypography LibraryTypography--w-medium LibraryText NftPageAuctionLastBid__title">
                                                         <span className="CryptoPrice">
                                                            <div className="CryptoPrice__inner">
                                                               <div className="CryptoPrice__amount">{item?.price} АР</div>
                                                            </div>
                                                         </span>
                                                      </div>
                                                      <div className="LibraryTypography LibraryTypography--w-regular LibraryCaption LibraryCaption--l-1 NftPageAuctionLastBid__subtitle">{item?.user?.name}</div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="LibrarySpacing LibrarySpacing--height-20px LibrarySpacing--spacing-16px LibrarySpacing--separator-position-top"></div>
                                       <div className="NftPageActions NftPageActionsCard__list">
                                       <div className="LibraryInput LibraryInput--state-default LibraryInput--appearance-outline LibraryInput--size-l PriceRangeGroup__input"><div className="LibraryTypography LibraryTypography--w-regular LibraryText LibraryInput__typography"><input className="LibraryInput__element" id="amount"autoCapitalize="off" autoComplete="off" inputMode="decimal" max="100000000000000" placeholder="Количество" type="text"/><div className="LibraryInput__border"></div></div></div> 
                                       <div style={{marginTop:"10px"}}className="LibraryInput LibraryInput--state-default LibraryInput--appearance-outline LibraryInput--size-l PriceRangeGroup__input"><div className="LibraryTypography LibraryTypography--w-regular LibraryText LibraryInput__typography">
                                          <select id="where" style={{width:"100%"}}>
                                             <option value="ЗВ 87">ЗВ 87 (Хейвен)</option>
                                          </select>
                                       <div className="LibraryInput__border"></div></div></div>
                                       <a style={{marginTop:"10px"}}className="LibraryButton LibraryButton--sz-l LibraryButton--tp-default LibraryButton--apr-primary LibraryButton--act-default LibraryButton--br-default LibraryButton--stretched" onClick={() => {
                                                   const data = {
                                                      'where':(document.getElementById('where') as HTMLInputElement).value
                                                   };
                                                   axios.post('http://localhost:8000/api/link/'+id+'/'+(document.getElementById('amount')as HTMLInputElement).value,data,{headers:{'Authorization':'Bearer '+JSON.stringify(localStorage.getItem('access_token')).slice(1, -1).replace(/\W|_/g, '')}}).catch().then((response) => (location.replace(response.data['url'])))
                                                }}>
                                          <div className="LibraryButton__inner">
                                             <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryLabel LibraryButton__in">
                                                <div className="LibraryButton__before">
                                                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M3.767 20a.9.9 0 0 1 .9-.9h8.666a.9.9 0 0 1 0 1.8H4.667a.9.9 0 0 1-.9-.9zm.551-12.01l4.903-4.902a2.667 2.667 0 0 1 3.771 0l2.074 2.074a2.667 2.667 0 0 1 0 3.771l-4.902 4.903a2.667 2.667 0 0 1-3.771 0L4.318 11.76a2.667 2.667 0 0 1 0-3.77zm1.273 1.273a.867.867 0 0 0 0 1.226l2.074 2.074a.867.867 0 0 0 1.226 0l4.903-4.903a.867.867 0 0 0 0-1.225L11.719 4.36a.867.867 0 0 0-1.225 0L5.59 9.263z" fill="currentColor"></path>
                                                      <path fillRule="evenodd" clipRule="evenodd" d="M11.578 10.818a.9.9 0 0 1 1.273 0l6.635 6.636a.9.9 0 0 1-1.272 1.273l-6.636-6.636a.9.9 0 0 1 0-1.273z" fill="currentColor"></path>
                                                   </svg>
                                                </div>
                                                <div className="LibraryButton__text " >Купить</div>
                                             </div>
                                          </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </main>
               </div>      
            </div>
         </div>
         <Footer/>
      </>
    );
}
 
export default BuyPage;