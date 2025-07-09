import "./index.css";

const TabItem = ({ categories, activeCategory, onTabClick }) => {
  return (
    <div className="tab-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`tab-btn ${
            category === activeCategory ? "active-tab" : ""
          }`}
          onClick={() => onTabClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default TabItem;
