import styles from '../../styles/Home.module.css'
import ProductSmall from '../productSmall'

export default function ShopCustomer() {
  return (
    <div className={styles.mt_400}>
      <div className="container">
        <div className="row">
          <div className="col-sm-1">
            <div className="shop">
              <h4>Shop</h4>
              <p>xxx items</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className={styles.shop}>
              <input type="text" className={styles.input} />
              <button className={styles.button}>Search</button>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="row mt-4 d-flex justify-content-between">
          <div className="col-sm-1">
            <button className={styles.button}>All</button>
          </div>
          <div className="col-sm-8 "> </div>
        </div>
        <div className="row mt-2 d-flex justify-content-center">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 d-flex justify-content-between">
            <div className="col-sm-2">
              <button className={` ${styles.width}`}>Living Room</button>
            </div>
            <div className="col-sm-2">
              <button className={` ${styles.width}`}>Bed Room</button>
            </div>
            <div className="col-sm-2">
              <button className={` ${styles.width}`}>Dining Room</button>
            </div>
            <div className="col-sm-2">
              <button className={` ${styles.width}`}>Kid’s Room</button>
            </div>
            <div className="col-sm-2">
              <button className={` ${styles.width}`}>Nursery</button>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="row mt-4 d-flex justify-content-center">
          <div className="col-sm-1"></div>
          <div className="col-sm-10 d-flex">
            <div className="col-sm-2">
              <select class={`${styles.width}`}>
                <option selected>Color...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-sm-2 " style={{ marginLeft: '40px' }}>
              <select class={`${styles.width}`}>
                <option selected>Sort By...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="row " style={{ marginTop: '100px' }}>
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="row d-flex">
              <ProductSmall imgPath="" name={'sdsgfdgdfgdfsgdf'} price="sdasdas" />
              <ProductSmall imgPath="" name={'sdsgfdgdfgdfsgdf'} price="sdasdas" />
              <ProductSmall imgPath="" name={'sdsgfdgdfgdfsgdf'} price="sdasdas" />
              <ProductSmall imgPath="" name={'sdsgfdgdfgdfsgdf'} price="sdasdas" />
              <ProductSmall imgPath="" name={'sdsgfdgdfgdfsgdf'} price="sdasdas" />
              <ProductSmall imgPath="" name={'sdsgfdgdfgdfsgdf'} price="sdasdas" />
              <ProductSmall imgPath="" name={'sdsgfdgdfgdfsgdf'} price="sdasdas" />
              <ProductSmall imgPath="" name={'sdsgfdgdfgdfsgdf'} price="sdasdas" />
              <ProductSmall imgPath="" name={'sdsgfdgdfgdfsgdf'} price="sdasdas" />
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </div>
  )
}
