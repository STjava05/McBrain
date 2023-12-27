import React from 'react'
import './content.css'
import { Link } from 'react-router-dom'


function Content() {
  return (
    <div className='content'>
      <img className='contentImg'
        src="https://tribuneonlineng.com/wp-content/uploads/2020/12/OONI1.jpg" alt="" />

      <div className="contentInfo">
        <div className="contentCats">
          <span className="contentCat">Music</span>
          <span className="contentCat">Life</span>
        </div>
       
        <Link to="/blog/1" className="contentTitle">Ooni of Ife unveils</Link>
        <span className="contentDate">1 hour ago</span>
        <p className='contentDesc'>
          It was an evening of tradition, pomp and ceremony as the Ooni of Ife, Oba Enitan Ogunwusi, on Tuesday, formally unveiled his new son, Prince Adesoji Aderemi, at his palace in Ile Ife, Osun State.

          It would be recalled that the Ooni of Ife on November 18 announced the birth of his son with his wife, Olori Naomi Silekunola Ogunwusi, after two years of marriage, saying both the mother and child were in good condition.
        </p>
      </div>


      <img className='contentImg'
        src="https://www.worldatlas.com/r/w1200/upload/18/1e/72/shutterstock-142905706.jpg" alt="" />

      <div className="contentInfo">
        <div className="contentCats">
          <span className="contentCat">Music</span>
          <span className="contentCat">Life</span>
        </div>
        
        <Link to="/blog/2" className="contentTitle">Traditions and Culture Egungun</Link>
        <span className="contentDate">1 hour ago</span>
        <p className='contentDesc'>
          People who originate from Nigeria are called Nigerians. They hail from an area that is home to more than hundreds of dialects and ethnic groups, which have been commingled as a result of economic circumstances. As tribal states have given way to a modern nation, the shift has propelled the groups to settle down in regions well outside of their own religious, linguistic, and racial backgrounds.

        </p>
      </div>
      <img className='contentImg'
        src="https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-04.jpg" alt="" />

      <div className="contentInfo">
        <div className="contentCats">
          <span className="contentCat">Music</span>
          <span className="contentCat">Life</span>
        </div>
        
        <Link to="/blog/:3" className="contentTitle">Traditional Dishes</Link>
        <span className="contentDate">1 hour ago</span>
      </div>
      <p className='contentdesc'>
        Comprised of age-old recipes and techniques from hundreds of different ethnic groups, Nigerian food is packed with so many different colors, flavors, and ingredients.

        Rife with hearty staples and infused with many different herbs and spices, Nigerian cuisine is a feast for both the eyes and the stomach.

        Get ready for lavish decoration, gorgeous colors, and yummy fusions, as a native Nigerian takes us on a culinary journey through West Africa. Here are 16 traditional Nigerian foods you simply have to try.

      </p>


    </div>



  )
}

export default Content
