const Footer = () => {
    return (  
<>
        
   <div className="Footer__height" style={{height: "0px"}}></div>
   <div className="Footer">
      <div className="Container__inner">
         <div className="FaqSection__header">
            <div className="LibraryTypography LibraryTypography--w-bold LibraryDisplay LibraryDisplay--l-2 FaqSection__title">ЧаВо</div>
         </div>
      <div className="HorizontalScroll FaqSection__list HorizontalScroll--with-offsets HorizontalScroll--inside-container"  itemType="https://schema.org/FAQPage">
         <div className="HorizontalScroll__in">
            <div className="FaqQuestion FaqQuestion--ton FaqQuestion--expanded" itemProp="mainEntity" itemType="https://schema.org/Question">
               <div className="FaqQuestion__content">
                  <div className="FaqQuestion__header">
                     <div className="FaqQuestion__img"></div>
                     <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryDisplay LibraryDisplay--l-3 FaqQuestion__title" itemProp="name">Что такое OpenMarket?</div>
                  </div>
                  <div className="LibraryTypography LibraryTypography--w-regular LibraryText FaqQuestion__text" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                     <div itemProp="text" className="FaqQuestion__text_content" style={{"WebkitLineClamp": "12"}}>
                        <div className="Markdown Markdown--em-pow">
                           <p>OpenMarket - это маркетплейс для моментальной и удобной покупки товаров на сервере СПм</p>
                           <p>OpenMarket поможет безопасно приобрести товар с минимальной задержкой</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="FaqQuestion FaqQuestion--nft FaqQuestion--expanded" itemProp="mainEntity" itemType="https://schema.org/Question">
               <div className="FaqQuestion__content">
                  <div className="FaqQuestion__header">
                     <div className="FaqQuestion__img"></div>
                     <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryDisplay LibraryDisplay--l-3 FaqQuestion__title" itemProp="name">Я хочу продавать</div>
                  </div>
                  <div className="LibraryTypography LibraryTypography--w-regular LibraryText FaqQuestion__text" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                     <div itemProp="text" className="FaqQuestion__text_content" style={{"WebkitLineClamp": "12"}}>
                        <div className="Markdown Markdown--em-pow">
                           <p>Стать продавцом OpenMarket очень просто. Для этого необходимо оставить тикет на нашем discord-сервере и следовать инструкции ; )</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="FaqQuestion FaqQuestion--wallet FaqQuestion--expanded"  itemProp="mainEntity" itemType="https://schema.org/Question">
               <div className="FaqQuestion__content">
                  <div className="FaqQuestion__header">
                     <div className="FaqQuestion__img"></div>
                     <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryDisplay LibraryDisplay--l-3 FaqQuestion__title" itemProp="name">
                        <div className="Markdown Markdown--em-pow">
                           <p>Я пришел а товара нету, что делать?</p>
                        </div>
                     </div>
                  </div>
                  <div className="LibraryTypography LibraryTypography--w-regular LibraryText FaqQuestion__text"  itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                     <div itemProp="text" className="FaqQuestion__text_content" style={{"WebkitLineClamp": "10"}}>
                        <div className="Markdown Markdown--em-pow">
                        <p>Сначала проверьте туда ли Вы пришли. Если Вы пришли в правильный ПВЗ и не нашли товара напишите в поддержку</p>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="FaqQuestion FaqQuestion--purchase FaqQuestion--expanded"  itemProp="mainEntity" itemType="https://schema.org/Question">
               <div className="FaqQuestion__content">
                  <div className="FaqQuestion__header">
                     <div className="FaqQuestion__img"></div>
                     <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryDisplay LibraryDisplay--l-3 FaqQuestion__title" itemProp="name">Остались вопросы?</div>
                  </div>
                  <div className="LibraryTypography LibraryTypography--w-regular LibraryText FaqQuestion__text"  itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                     <div itemProp="text" className="FaqQuestion__text_content">
                        <div className="Markdown Markdown--em-pow">
                           <p>Вы можете получить поддержку у сообщества на нашем discord-сервере, либо написать нам</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      <div className="HorizontalScroll__arrows HorizontalScroll__arrows--desktop-only">
         <div className="HorizontalScroll__arrow HorizontalScroll__arrow--right">
            <div className="HorizontalScroll__arrow_icon">
               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.086 14l-5.793 5.793a1 1 0 0 0 1.414 1.414l6.5-6.5a1 1 0 0 0 0-1.414l-6.5-6.5a1 1 0 1 0-1.414 1.414L17.086 14z" fill="currentColor"></path>
               </svg>
            </div>
         </div>
      </div>
   </div>
</div>
            <div className="Footer__container">
               <div className="Footer__info">
                  <div className="Footer__info-inner">
                     <div>   
                        <div className="Footer__logo">
                           <a className="Logo" href="/">        
                              <svg width="157" height="28" viewBox="0 0 157 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g clipPath="url(#full_logo_svg__clip0_5161_199826)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0179 0C14.0179 7.74185 7.74185 14.0179 0 14.0179C0 6.276 6.276 0 14.0179 0ZM14.0179 28.0357C6.276 28.0357 0 21.7597 0 14.0179C7.74185 14.0179 14.0179 20.2939 14.0179 28.0357ZM28.0357 14.0179C28.0357 21.7597 21.7597 28.0357 14.0179 28.0357C14.0179 20.2939 20.2939 14.0179 28.0357 14.0179ZM26.8675 1.16818C26.8675 7.61969 21.6375 12.8497 15.186 12.8497C15.186 6.39817 20.416 1.16818 26.8675 1.16818Z" fill="currentColor"></path>
                                    
                                 </g>          
                                 <defs>
                                    <clipPath id="full_logo_svg__clip0_5161_199826">
                                       <rect width="157" height="28" fill="white"></rect>
                                    </clipPath>
                                 </defs>
                              </svg>                              
                           </a>
                        </div>
                     </div>
                     <div className="LibraryTypography LibraryTypography--w-regular LibraryText Footer__subtitle">Добро пожаловать в OpenMarket. Покупайте и продавайте вещи на СПм с комфортом.</div>
                  </div>
                  <div className="Footer__social">
                     <a className="LibraryButton LibraryButton--sz-m LibraryButton--tp-default LibraryButton--apr-outline LibraryButton--act-default LibraryButton--br-default" target="_blank" rel="noreferrer noopener" href="https://discord.gg/AReKxffcXy">
                        <div className="LibraryButton__inner">
                           <div className="LibraryTypography LibraryTypography--w-semi-bold LibrarySubhead LibraryButton__in">
                              <div className="LibraryButton__before">
                                    <svg fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 12.65625 4.90625 L 11.875 5 C 11.875 5 8.371094 5.382813 5.8125 7.4375 L 5.78125 7.4375 L 5.75 7.46875 C 5.175781 7.996094 4.925781 8.644531 4.53125 9.59375 C 4.136719 10.542969 3.714844 11.753906 3.34375 13.09375 C 2.601563 15.777344 2 19.027344 2 22 L 2 22.25 L 2.125 22.5 C 3.050781 24.125 4.695313 25.160156 6.21875 25.875 C 7.742188 26.589844 9.058594 26.96875 9.96875 27 L 10.5625 27.03125 L 10.875 26.5 L 11.96875 24.5625 C 13.128906 24.824219 14.464844 25 16 25 C 17.535156 25 18.871094 24.824219 20.03125 24.5625 L 21.125 26.5 L 21.4375 27.03125 L 22.03125 27 C 22.941406 26.96875 24.257813 26.589844 25.78125 25.875 C 27.304688 25.160156 28.949219 24.125 29.875 22.5 L 30 22.25 L 30 22 C 30 19.027344 29.398438 15.777344 28.65625 13.09375 C 28.285156 11.753906 27.863281 10.542969 27.46875 9.59375 C 27.074219 8.644531 26.824219 7.996094 26.25 7.46875 L 26.21875 7.4375 L 26.1875 7.4375 C 23.628906 5.382813 20.125 5 20.125 5 L 19.34375 4.90625 L 19.0625 5.625 C 19.0625 5.625 18.773438 6.355469 18.59375 7.1875 C 17.460938 7.035156 16.535156 7 16 7 C 15.464844 7 14.539063 7.035156 13.40625 7.1875 C 13.226563 6.355469 12.9375 5.625 12.9375 5.625 Z M 11.28125 7.1875 C 11.324219 7.328125 11.367188 7.449219 11.40625 7.5625 C 10.113281 7.882813 8.734375 8.371094 7.46875 9.15625 L 8.53125 10.84375 C 11.125 9.234375 14.851563 9 16 9 C 17.148438 9 20.875 9.234375 23.46875 10.84375 L 24.53125 9.15625 C 23.265625 8.371094 21.886719 7.882813 20.59375 7.5625 C 20.632813 7.449219 20.675781 7.328125 20.71875 7.1875 C 21.652344 7.375 23.433594 7.804688 24.90625 8.96875 C 24.898438 8.972656 25.28125 9.550781 25.625 10.375 C 25.976563 11.222656 26.367188 12.351563 26.71875 13.625 C 27.394531 16.066406 27.925781 19.039063 27.96875 21.65625 C 27.339844 22.617188 26.171875 23.484375 24.9375 24.0625 C 23.859375 24.566406 23.007813 24.75 22.5 24.84375 L 22 24 C 22.296875 23.890625 22.589844 23.769531 22.84375 23.65625 C 24.382813 22.980469 25.21875 22.25 25.21875 22.25 L 23.90625 20.75 C 23.90625 20.75 23.34375 21.265625 22.03125 21.84375 C 20.71875 22.421875 18.714844 23 16 23 C 13.285156 23 11.28125 22.421875 9.96875 21.84375 C 8.65625 21.265625 8.09375 20.75 8.09375 20.75 L 6.78125 22.25 C 6.78125 22.25 7.617188 22.980469 9.15625 23.65625 C 9.410156 23.769531 9.703125 23.890625 10 24 L 9.5 24.84375 C 8.992188 24.75 8.140625 24.566406 7.0625 24.0625 C 5.828125 23.484375 4.660156 22.617188 4.03125 21.65625 C 4.074219 19.039063 4.605469 16.066406 5.28125 13.625 C 5.632813 12.351563 6.023438 11.222656 6.375 10.375 C 6.71875 9.550781 7.101563 8.972656 7.09375 8.96875 C 8.566406 7.804688 10.347656 7.375 11.28125 7.1875 Z M 12.5 14 C 11.726563 14 11.042969 14.441406 10.625 15 C 10.207031 15.558594 10 16.246094 10 17 C 10 17.753906 10.207031 18.441406 10.625 19 C 11.042969 19.558594 11.726563 20 12.5 20 C 13.273438 20 13.957031 19.558594 14.375 19 C 14.792969 18.441406 15 17.753906 15 17 C 15 16.246094 14.792969 15.558594 14.375 15 C 13.957031 14.441406 13.273438 14 12.5 14 Z M 19.5 14 C 18.726563 14 18.042969 14.441406 17.625 15 C 17.207031 15.558594 17 16.246094 17 17 C 17 17.753906 17.207031 18.441406 17.625 19 C 18.042969 19.558594 18.726563 20 19.5 20 C 20.273438 20 20.957031 19.558594 21.375 19 C 21.792969 18.441406 22 17.753906 22 17 C 22 16.246094 21.792969 15.558594 21.375 15 C 20.957031 14.441406 20.273438 14 19.5 14 Z M 12.5 16 C 12.554688 16 12.625 16.019531 12.75 16.1875 C 12.875 16.355469 13 16.648438 13 17 C 13 17.351563 12.875 17.644531 12.75 17.8125 C 12.625 17.980469 12.554688 18 12.5 18 C 12.445313 18 12.375 17.980469 12.25 17.8125 C 12.125 17.644531 12 17.351563 12 17 C 12 16.648438 12.125 16.355469 12.25 16.1875 C 12.375 16.019531 12.445313 16 12.5 16 Z M 19.5 16 C 19.554688 16 19.625 16.019531 19.75 16.1875 C 19.875 16.355469 20 16.648438 20 17 C 20 17.351563 19.875 17.644531 19.75 17.8125 C 19.625 17.980469 19.554688 18 19.5 18 C 19.445313 18 19.375 17.980469 19.25 17.8125 C 19.125 17.644531 19 17.351563 19 17 C 19 16.648438 19.125 16.355469 19.25 16.1875 C 19.375 16.019531 19.445313 16 19.5 16 Z"></path></g></svg>
                              </div>
                              <div className="LibraryButton__text">Discord</div>
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
               
            </div>

         </div>
         </>
    );
}
 
export default Footer;