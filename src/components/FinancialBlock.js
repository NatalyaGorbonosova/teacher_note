function FinancialBlock() {
    return ( 
        <section className="financial-block">
            <div className="financial-block__header">
                <h2 className="financial-block__title">Учет финансов</h2>
            </div>
            <div className="financial-block__content">
                <h3 className="financial-block__subtitle">Заработок за месяц</h3>
                <p className="financial-block__text_green">12 000</p>
                <h3 className="financial-block__subtitle">Неоплаченные уроки</h3>
                <p className="financial-block__text_red">10 000</p>
            </div>
            
        </section>
     );
}

export default FinancialBlock;