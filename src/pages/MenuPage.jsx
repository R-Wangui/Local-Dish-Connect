import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import NavigationBar from "../components/layout/NavigationBar";
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
            //   className="h-auto m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {menuItems.map((item) => (
              <div className="p-4 border rounded shadow" key={item.id}>
                <img src="" alt="" />
                <h5>{item.name}</h5>
                <p>{item.category}</p>
                <p>{item.price}</p>
              </div>
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
