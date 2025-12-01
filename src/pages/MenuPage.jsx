import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import NavigationBar from "../components/layout/NavigationBar";
import { RecommendedRestaurantCard } from "../components/layout/RecommendedRestaurantsCard"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const menuRef = collection(db, "menu");

    let isMounted = true;
    const unsubscribe = onSnapshot(menuRef, (snapshot) => {
      if (isMounted) {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenuItems(items);
      }
    });
    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);
  return (
    <>
      <NavigationBar />
      <div></div>
      <div className="p-4">
        <h3 className="text-center">Available Foods</h3>
        {menuItems.length > 0 ? (
          <div
            id="menus"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12"
          >
            {menuItems.map((item) => (
              <RecommendedRestaurantCard
                key={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        ) : (
          <h3>No Items to Display Yet</h3>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MenuPage;
