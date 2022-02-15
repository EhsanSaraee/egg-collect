import ImageOne from '../Images/egg.jpg';
import ImageTwo from '../Images/egg-2.jpg';

const Content = () => {
   return (
      <>
         <section className="menu-card">
            <img src={ImageOne} alt="egg" className="image-card" />
            <div className="center-content">
               <h2 className="text-2xl mb-2">Egg Muffins</h2>
               <p className="mb-2">Cripsy, delicious, and nutritious</p>
               <span>$16</span>
            </div>
         </section>
         <section className="menu-card">
            <img src={ImageTwo} alt="egg" className="image-card" />
            <div className="center-content">
               <h2 className="text-2xl mb-2">Egg Muffins</h2>
               <p className="mb-2">Cripsy, delicious, and nutritious</p>
               <span>$18</span>
            </div>
         </section>
      </>
   );
};

export default Content;
