import PropTypes from "prop-types";
import Buttons from '../components/layout/Buttons'
import Aside from '../components/vendors dashboard/Aside'
import VendorsDashboardNavbar from '../components/vendors dashboard/VendorsDashboardNavbar'
import { FaEdit, FaPlus, FaRegTrashAlt, FaToggleOff, FaToggleOn } from 'react-icons/fa'
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./../services/firebase";



function MenuManagement() {
  const menuManagementBtn = {
    backgroundColor: "#006B61",
    border: "none",
    marginRight: "12px"
  }
  const menuManagement = {
    color: "#006B61",
    border: "1px solid #006B61",
    backgroundColor: "white"
  }

  const [showForm, setShowForm] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    rank: "",
    name: "",
    image: "",
    price: "",
    available: "",
  });

  const menuCollection = collection(db, "menu");

  //Fetch items
  const fetchMenu = async () => {
    const snapshot = await getDocs(menuCollection);
    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMenuItems(items);
  };
  const handleDisplayForm = () => {
    setShowForm(true);
  }
  // Add items to the form
  const addMenuItems = async (e) => {
    e.preventDefault();
    console.log("Sending data:", newItem);
    await addDoc(menuCollection, {
      ...newItem,
      rank: Number(newItem.rank),
      price: Number(newItem.price),
      available: Boolean(newItem.available),
      image: newItem.image || null,
    });
    setNewItem({
      rank: "",
      name: "",
      image: "",
      price: "",
      category: "",
      available: true,
    });
    fetchMenu();
    setShowForm(false);
  };
  // Toggle availability
  const toggleAvailability = async (id, available) => {
    const itemRef = doc(db, "menu", id);
    await updateDoc(itemRef, { available: !available });
    fetchMenu();
  };
  //Delete item
  const deleteMenuItem = async (id) => {
    await deleteDoc(doc(db, "menu", id));
    fetchMenu();
  };
  //Load data when component mounts
  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <>
      <VendorsDashboardNavbar />
      <Aside />
      <div id="menuManagement">
        <div className="menuTitle">
          <h4>Menu Management</h4>
          <div>
            <Buttons style={menuManagementBtn} onClick={handleDisplayForm}>
              {" "}
              <FaPlus></FaPlus> Add Food
            </Buttons>
            <Buttons style={menuManagement}>
              {" "}
              <FaEdit></FaEdit> Edit
            </Buttons>
          </div>
        </div>
        {showForm && (
          <form action="" onSubmit={addMenuItems} className="menuForm">
            <input
              type="text"
              placeholder="Rank"
              value={newItem.rank}
              onChange={(e) => setNewItem({ ...newItem, rank: e.target.value })}
              // className="border p-2"
              required
            />
            <input
              type="text"
              placeholder="Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              // className="border p-2"
              required
            />
            <input
              type="text"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
              // className="border p-2"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={newItem.category}
              onChange={(e) =>
                setNewItem({ ...newItem, category: e.target.value })
              }
              // className="border p-2"
              required
            />
            <input
              type="text"
              placeholder="Available"
              value={newItem.available}
              onChange={(e) =>
                setNewItem({ ...newItem, available: e.target.value })
              }
              // className="border p-2"
              required
            />
            <Buttons type="submit" className="button">
              Add
            </Buttons>
          </form>
        )}
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>Ksh {item.price}</td>
                <td>{item.category}</td>
                <td>
                  {/* <input
                    type="checkbox"
                    checked={item.available}
                    onChange={() => toggleAvailability(item.id, item.available)}
                  /> */}
                  <FaToggleOn
                    // type="checkbox"
                    checked={item.available}
                    onChange={() => toggleAvailability(item.id, item.available)}
                  ></FaToggleOn>
                  <FaToggleOff></FaToggleOff>
                </td>
                <td>
                  <FaRegTrashAlt
                    onClick={() => deleteMenuItem(item.id)}
                  ></FaRegTrashAlt>
                  {/* <button
                    onClick={() => deleteMenuItem(item.id)}
                    // className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button> */}
                  {/* You can later add an Edit button with a modal */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <div className="menuDetails">
          <div>
            <div className="menuEntry">
              <h6>Rank</h6>
              <h6>Image</h6>
              <h6>Name</h6>
              <h6>Category</h6>
              <h6>Price</h6>
              <h6>Available</h6>
              <h6>Action</h6>
            </div>
            <hr />
            <div className="menuItem">
              <p>1</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Egusi soup</p>
              <p>Soup</p>
              <p>1,500</p>
              <FaToggleOn className="menuOn"></FaToggleOn>
              <span>
                <span className="menuInactive">
                  <FaEdit></FaEdit>
                </span>
                <span className="menuActive">
                  <FaRegTrashAlt></FaRegTrashAlt>
                </span>
              </span>
            </div>
            <hr />
            <div className="menuItem">
              <p>2</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Afang soup</p>
              <p>Soup</p>
              <p>2,000</p>
              <FaToggleOff className="menuOff"></FaToggleOff>
              <span>
                <span className="menuInactive">
                  <FaEdit></FaEdit>
                </span>
                <span className="menuActive">
                  <FaRegTrashAlt></FaRegTrashAlt>
                </span>
              </span>
            </div>
            <hr />
            <div className="menuItem">
              <p>3</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Pounded yam</p>
              <p>Swallow</p>
              <p>3,000</p>
              <FaToggleOff className="menuOff"></FaToggleOff>
              <span>
                <span className="menuActive">
                  <FaEdit></FaEdit>
                </span>
                <span className="menuInactive">
                  <FaRegTrashAlt></FaRegTrashAlt>
                </span>
              </span>
            </div>
            <hr />
            <div className="menuItem">
              <p>4</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Ofada Rice</p>
              <p>Rice</p>
              <p>2,500</p>
              <FaToggleOn className="menuOn"></FaToggleOn>
              <span>
                <span className="menuActive">
                  <FaEdit></FaEdit>
                </span>
                <span className="menuInactive">
                  <FaRegTrashAlt></FaRegTrashAlt>
                </span>
              </span>
            </div>
            <hr />
            <div className="menuItem">
              <p>5</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Coconut Rice</p>
              <p>Rice</p>
              <p>3,500</p>
              <FaToggleOn className="menuOn"></FaToggleOn>
              <span>
                <span className="menuActive">
                  <FaEdit></FaEdit>
                </span>
                <span className="menuInactive">
                  <FaRegTrashAlt></FaRegTrashAlt>
                </span>
              </span>
            </div>
            <hr />
            <div className="menuItem">
              <p>6</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Jollof Rice</p>
              <p>Rice</p>
              <p>2,000</p>
              <FaToggleOn className="menuOn"></FaToggleOn>
              <span>
                <span className="menuInactive">
                  <FaEdit></FaEdit>
                </span>
                <span className="menuActive">
                  <FaRegTrashAlt></FaRegTrashAlt>
                </span>
              </span>
            </div>
            <hr />
            <div className="menuItem">
              <p>7</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Ogbono soup</p>
              <p>Soup</p>
              <p>2,000</p>
              <FaToggleOff className="menuOff"></FaToggleOff>
              <span>
                <span className="menuInactive">
                  <FaEdit></FaEdit>
                </span>
                <span className="menuActive">
                  <FaRegTrashAlt></FaRegTrashAlt>
                </span>
              </span>
            </div>
            <hr />
            <div className="menuItem">
              <p>8</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Ofe Nsala</p>
              <p>Soup</p>
              <p>3,500</p>
              <FaToggleOn className="menuOn"></FaToggleOn>
              <span>
                <span className="menuInactive">
                  <FaEdit></FaEdit>
                </span>
                <span className="menuActive">
                  <FaRegTrashAlt></FaRegTrashAlt>
                </span>
              </span>
            </div>
            <hr />
            <div className="menuItem">
              <p>9</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Banga Soup</p>
              <p>Soup</p>
              <p>2,500</p>
              <FaToggleOn className="menuOn"></FaToggleOn>
              <span>
                <span className="menuInactive">
                  <FaEdit></FaEdit>
                </span>
                <span className="menuActive">
                  <FaRegTrashAlt></FaRegTrashAlt>
                </span>
              </span>
            </div>
            <hr />
            <div className="menuItem">
              <p>10</p>
              <img src="\images\menumanagementfoodimage.png" alt="food image" />
              <p>Eba</p>
              <p>Swallow</p>
              <p>2,500</p>
              <FaToggleOn className="menuOn"></FaToggleOn>
              <span>
                <span className="menuInactive">
                  <FaEdit></FaEdit>
                </span>
                <span className="menuActive">
                  <FaRegTrashAlt></FaRegTrashAlt>
                </span>
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

MenuManagement.propTypes = {
    children: PropTypes.node.isRequired,
}
export default MenuManagement