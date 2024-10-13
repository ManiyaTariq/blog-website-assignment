 import Navbar from "./navbar/page";
 import home from "./home/page";
 import About from "./about/page";
 import image from "next/image";
 import Card from "./card/page";
 import Link from "next/link";
 import Card1 from "./card1/page";
 import footer from "./footer/page";
 import Card2 from "./card2/page";
 import Card3 from "./card3/page";
 

//         Hero Section
     export default function Hero (){
      return(<>
            <div className="bg-gradient-to-r from-orange-600 to-yellow-400 py-20 text-center">
               <h1 className="text-5xl font-extrabold text-white">Cook Up Delicious Memories</h1>
               <p className="text-3xl text-grey-100 mt-4 font-sans">Easy, delicious and inspiring recipes for every meal</p>
               <p className="text-2xl text-grey-100 mt-2 font-sans">Explore the World of Cuisine</p>
            </div>

          {/*About section*/}

            <About/>

         {/* recipe section */}

            <section className="recipes">
               <h1>Featured Recipes</h1>
               <div className="recipe-section">
                  <div className="recipe-card">
                      <img src={"dish 11.jpg"} alt="Dish 1"/>
                      <h2>Strawbery Cake</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quae cum veritatis laudantium 
                        inventore officiis quibusdam minus.</p>
                       <Link href={"/card"}> View Recipe</Link>
                  </div>
                  

                  <div className="recipe-card">
                      <img src={"dish 2.jpg"} alt="Dish 2"/>
                      <h2>Vanilla Custard</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quae cum veritatis laudantium 
                        inventore officiis quibusdam minus.</p>
                       <Link href={"/card1"}> View Recipe</Link>
                  </div>
                  
                  <div className="recipe-card">
                      <img src={"dish 3.jpg"} alt="Dish 2"/>
                      <h2>Pizza</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quae cum veritatis laudantium 
                        inventore officiis quibusdam minus.</p>
                       <Link href={"/card2"}> View Recipe</Link>
                  </div>
                     
                  <div className="recipe-card">
                      <img src={"dish 4.jpg"} alt="Dish 2"/>
                      <h2>Burger</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quae cum veritatis laudantium 
                        inventore officiis quibusdam minus.</p>
                       <Link href={"/card3"}> View Recipe</Link>
                  </div>     
               </div>    
            </section>

            

       
      </>
        
       
        
        
        
      )
     }