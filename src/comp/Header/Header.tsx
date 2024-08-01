import axios from 'axios';
import { useEffect, useState } from 'react';
import useLocalStorage from "../../hooks/useLocalStorage"


const Header = () => {
    const [_access_token, setToken] = useLocalStorage('access_token','')
    const [_refresh_token, setRefresh] = useLocalStorage('refresh_token','')
    function isLogin(){ 

        if (localStorage.getItem('access_token')?.length != 0 && localStorage.getItem('refresh_token')?.length != 0){
            const [photo, setPhoto] = useState()   
            useEffect(()=>{
                axios.get('https://api.openspm.store/api/data',{headers:{'Authorization':'Bearer '+JSON.stringify(localStorage.getItem('access_token')).slice(1, -1).replace(/\W|_/g, '')}}).then((response) =>{setPhoto(response.data['avatar'])}).catch(
                    (response) =>{
                        if(response.code == 401){
                            axios.post('https://api.openspm.store/auth/token', {'grant_type':'refresh_token','client_id':'SiXLou63B14CAr4PaIaygjFnQRh0yfL9sEkZScGF','refresh_token':JSON.stringify(localStorage.getItem('refresh_token')).slice(1, -1).replace(/\W|_/g, '')}).then((response)=>{setToken(response.data['access_token']);setRefresh(response.data['refresh_token']);location.replace('https://openspm.store/')})
                        }
                    }
                )
            }) 

            if(photo != undefined)
            {
                return(
                        <img alt="Меню" width="80" height="80" className="h-10 w-10 cursor-pointer rounded-lg transition-transform hover:scale-105" src={photo}/>
                )
            }
            else
            {
                return(
                    <button className="LibraryButton LibraryButton--sz-m LibraryButton--tp-default LibraryButton--apr-primary LibraryButton--act-default LibraryButton--br-default" onClick={()=>{location.replace('https://discord.com/oauth2/authorize?client_id=1264855689780793354&response_type=code&redirect_uri=https%3A%2F%2Fopenspm.store&scope=identify')}}>
                        <div className="LibraryButton__inner">
                            <div className="LibraryTypography LibraryTypography--w-semi-bold LibrarySubhead LibraryButton__in">
                                <div className="LibraryButton__text" >Подключить дискорд</div>
                            </div>
                        </div>
        
                    </button>
                )
            
            }

        }
        else
        {
            return(
                <button className="LibraryButton LibraryButton--sz-m LibraryButton--tp-default LibraryButton--apr-primary LibraryButton--act-default LibraryButton--br-default" onClick={()=>{location.replace('https://discord.com/oauth2/authorize?client_id=1264855689780793354&response_type=code&redirect_uri=https%3A%2F%2Fopenspm.store&scope=identify')}}>
                    <div className="LibraryButton__inner">
                        <div className="LibraryTypography LibraryTypography--w-semi-bold LibrarySubhead LibraryButton__in">
                            <div className="LibraryButton__text" >Подключить дискорд</div>
                        </div>
                    </div>
    
                </button>
            )
        
        }


    }
    return (
                
                    <header className="PanelHeader">
                        <div className="PanelHeader__left">
                            <div className="PanelHeader__logo">
                                <a className="Logo Logo--adaptive" href="/">
                                    <div className="Logo__icon Logo__icon--l">
                                        <svg width="50" height="50" viewBox="0 0 50 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#full_logo_svg__clip0_5161_199826)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.0179 0C14.0179 7.74185 7.74185 14.0179 0 14.0179C0 6.276 6.276 0 14.0179 0ZM14.0179 28.0357C6.276 28.0357 0 21.7597 0 14.0179C7.74185 14.0179 14.0179 20.2939 14.0179 28.0357ZM28.0357 14.0179C28.0357 21.7597 21.7597 28.0357 14.0179 28.0357C14.0179 20.2939 20.2939 14.0179 28.0357 14.0179ZM26.8675 1.16818C26.8675 7.61969 21.6375 12.8497 15.186 12.8497C15.186 6.39817 20.416 1.16818 26.8675 1.16818Z" fill="currentColor"></path>                                               
                                            </g>
                                            <defs>
                                                <clipPath id="full_logo_svg__clip0_5161_199826">
                                                    <rect width="157" height="28" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="Logo__icon Logo__icon--s">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14 2c0 6.627-5.373 12-12 12C2 7.373 7.373 2 14 2zm0 24C7.373 26 2 20.627 2 14c6.627 0 12 5.373 12 12zm12-12c0 6.627-5.373 12-12 12 0-6.627 5.373-12 12-12zm-11-1c5.523 0 10-4.477 10-10-5.523 0-10 4.477-10 10z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="PanelHeader__middle">
                                <div className="PanelHeaderTabs">
                                    <div className="LibraryTabs LibraryTabs--tab-w-adjustable LibraryTabs--spacing-none">
                                        <div className="LibraryTabs__inner">
                                            <div className="HorizontalScroll LibraryTabs__scroll">
                                                <div className="HorizontalScroll__in">
                                                    <div className="LibraryTabs__tabs">
                                                        <div className="LibraryTabs__spacing"></div>
                                                        <div className="LibraryTabsItem LibraryTabsItem--state-normal LibraryTabsItem--no-indicator" data-value="">
                                                            <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryLabel LibraryTabsItem__text" onClick={() => window.scrollTo({top: document.body.scrollHeight,behavior: 'smooth'})}>ЧаВо</div>
                                                            
                                                        </div>
                                                        <div className="LibraryTabs__spacing"></div>
                                                        <div style = {{"marginLeft":"20px"}}className="LibraryTabsItem LibraryTabsItem--state-normal LibraryTabsItem--no-indicator" data-value="">
                                                            <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryLabel LibraryTabsItem__text">Поддержка</div>
                                                            <a className="LibraryTabsItem__url" href="https://discord.com/users/724519112499265608"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="LibraryTabs__indicator"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="PanelHeader__right">
                                {isLogin()}
                            </div>
                        </header>
                    

    );
}
 
export default Header;
