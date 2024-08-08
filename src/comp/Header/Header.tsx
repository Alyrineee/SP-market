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
                                        <svg width="50" height="57" viewBox="0 0 50 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <rect width="50" height="57" fill="url(#pattern0_419_2)"/>
                                            <defs>
                                            <pattern id="pattern0_419_2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_419_2" transform="matrix(0.00970874 0 0 0.00851644 0 -0.355902)"/>
                                            </pattern>
                                            <image id="image0_419_2" width="103" height="201" xlinkHref="data:image/png;base64,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"/>
                                            </defs>
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
