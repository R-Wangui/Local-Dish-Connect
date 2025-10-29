import { useState } from "react";
import Footer from "../components/layout/Footer";
import NavigationBar from "../components/layout/NavigationBar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  useState(() => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-amber-400">
            {menuItems.map((item) => (
                <div className="p-4 border rounded shadow" key={item.id}>
                    <img src="" alt="" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
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
