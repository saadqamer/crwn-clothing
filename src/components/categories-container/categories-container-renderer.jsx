import "../categories-container/categories-container-styles.scss";
import CategoryItem from "../category-item/category-item-renderer";

const CategoriesContainer = (props) => {
  const { categories } = props;
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoriesContainer;
