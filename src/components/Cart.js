import '../styles/Cart.css'


function Cart (){
    const monsteraPrice = 8
    const lierrePrice = 10
    const fleursPrice = 15
    return (<div className='lmj-cart'>
      <h2>Mon panier :</h2>
    <ul>
      <li>Monstera : {monsteraPrice}</li>
       <li>Lierre : {lierrePrice}</li>
       <li>Fleurs Coupées : {fleursPrice}</li>
    </ul>
    <h2>Total du panier = {(monsteraPrice + lierrePrice + fleursPrice )}€</h2>
    </div>
  )
  }

  export default Cart