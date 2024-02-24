import Category from "../category/category.component";
import './directory.style.scss'

const Directory = ({ categories }) => (
    <div className='categories-container'>
      {categories.map(({ id, title, imageUrl }) => (
        <Category key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
  
  export default Directory;