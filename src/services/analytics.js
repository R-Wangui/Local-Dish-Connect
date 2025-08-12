import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore"
import { db } from "./firebase";

// Analytics for each visit
export const logVisit = async (userId) => {
  try { 
      await addDoc(collection(db, "analytics/visits"), {
        userId,
        timestamp: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error logging visit:", error);
    }
};

export const visitCount = async () => {
    const snapshot = await getDocs(collection(db, "analytics/visits"));
    return snapshot.size
};

export const getVisitCountPerDay = async () => {
  const snapshot = await getDocs(collection(db, "analytics/visits/entries"));
  const visits = snapshot.docs.map(doc => doc.data());

  const grouped = {};

  visits.forEach((v) => {
    const dateStr = v.timestamp.toDate().toISOString().split("T")[0]; // e.g. "2025-08-06"
    if (!grouped[dateStr]) {
      grouped[dateStr] = 0;
    }
    grouped[dateStr]++;
  });

  const graphData = Object.entries(grouped).map(([date, count]) => ({
    date,
    visits: count,
  }));
  return graphData.sort((a, b) => a.date.localeCompare(b.date));
};

// Analytics for each food click
export const logFoodClick = async (foodId, userId) => {
  try {
    await addDoc(collection(db, "analytics/clicks"), {
    foodId,
    userId,
    timestamp: Timestamp.now(),
  });
  } catch (error) {
    console.error("Error logging food click:", error);
  }
};

export const getClicksPerFood = async () => {
  const snapshot = await getDocs(collection(db, "analytics/clicks"));
  const clicks = snapshot.docs.map(doc => doc.data());

  const grouped = {};
  clicks.forEach(click => {
    const foodId = click.foodId;
    grouped[foodId] = (grouped[foodId] || 0) + 1;
  });

  return Object.entries(grouped).map(([foodId, count]) => ({
    foodId,
    clicks: count
  }));
}

// Analytics for top food order
export const topFoodOrder = async (foodId, quantity, userId) => {
  try {
    await addDoc(collection(db, "analytics/foodOrders"), {
      foodId,
      quantity,
      userId,
      timestamp: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error logging food order:", error);
  }
};

export const getTopFoods = async () => {
  const snapshot = await getDocs(collection(db, "analytics/foodOrders"));
  const orders = snapshot.docs.map((doc) => doc.data());

  const grouped = {};
  orders.forEach((order) => {
    const { foodId, quantity } = order;
    grouped[foodId] = (grouped[foodId] || 0) + quantity;
  });

  return Object.entries(grouped).map(([foodId, totalOrders]) => ({
    foodId,
    totalOrders,
  }));
};

