//style
import styles from "./ProductCard.module.css"

function ProductCard ({title,price,img,isDiscount,quantity,rate,sp}){

    return(
        <div className={styles.container}>
            { sp && <p className={styles.sp}>SPECIAL OFFER</p>}
            <img className={styles.img} src={img} />
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.detail}>
                <p className={styles.rate}>
                    <img src="/images/star.png"/>
                    {rate}
                </p>

                { quantity < 10 && quantity > 0 ?

                 <p className={styles.quantity}>تنها {quantity}عدد در انبار باقی مانده  </p>
                : <p> </p>
                }
            </div>

            <div className={styles.takhfif}>
                    {isDiscount ? 
                    <p className={styles.newPriceBox}>  
                        <h3 className={styles.newPrice}> {price - ((price / 100)*20)} $</h3>
                        <h3 className={styles.darsad}>20% </h3>
                    </p>
                    : <h3 className={styles.ordinaryPrice}> {price} $ </h3>}
            </div>

            { isDiscount && <p className={styles.oldPrice}>{price} $</p> }
        </div>
    );
}

export default ProductCard;