const Thanks = () => {
    const queryString = window.location.search;

    // Создаем объект URLSearchParams
    const urlParams = new URLSearchParams(queryString);
    let  where = urlParams.get('where');
    if(where == 'gl 87'){
        where = 'ЗВ 87(Хейвен)'
    }
    return ( 

    <main>
        <div className="EntityContainer" style={{display: "flex",justifyContent: "center",textAlign: "center",alignItems: "center",height: "50vh"}}>
            <h1 style={{marginBottom: "20px"}}>Спасибо за покупку<p><img src="https://c.tenor.com/_t0sHU9OPmsAAAAC/tenor.gif" style={{width:100,height:100}}/></p><a style={{fontWeight:400}}>Мы уже обрабатываем Ваш заказ</a>
                <a style={{marginTop:"50px",}} href='https://openspm.store/'className="LibraryButton LibraryButton--sz-l LibraryButton--tp-default LibraryButton--apr-primary LibraryButton--act-default LibraryButton--br-default LibraryButton--stretched">
                    <div className="LibraryButton__inner">
                        <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryLabel LibraryButton__in">
                            <div className="LibraryButton__text">Вернуться на главную</div>
                        </div>
                    </div>
                </a>  
                <a style={{marginTop:"10px"}} href='https://discord.com/users/724519112499265608' className="LibraryButton LibraryButton--sz-l LibraryButton--tp-default LibraryButton--apr-outline LibraryButton--act-default LibraryButton--br-default LibraryButton--stretched">
                    <div className="LibraryButton__inner">
                        <div className="LibraryTypography LibraryTypography--w-semi-bold LibraryLabel LibraryButton__in">
                            <div className="LibraryButton__text">Не нашли товар?</div>
                        </div>
                    </div>
                </a>       
            </h1>
            <br/>
           
        </div>
    </main>
    );
}
 
export default Thanks;