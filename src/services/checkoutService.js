import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

export async function createOrder({
  userId,
  phoneNumber,
  items,
  delivery,
  payment,
  amount,
}) {
  const ref = await addDoc(collection(db, "orders"), {
    userId,
    phoneNumber,
    items,
    deliveryMethod: delivery,
    paymentMethod: payment,
    amount,
    status: "pending",
    transactionId: null,
    createdAt: serverTimestamp(),
  });

  return ref.id;
}

export async function createTransaction({
  userId,
  phoneNumber,
  orderId,
  amount,
}) {
  const ref = await addDoc(collection(db, "transactions"), {
    userId,
    phoneNumber,
    orderId,
    amount,
    method: "mpesa",
    status: "pending",
    mpesaRef: null,
    createdAt: serverTimestamp(),
  });

  return ref.id;
}

export async function completeTransaction(txId, orderId, mpesaRef) {
  await updateDoc(doc(db, "transactions", txId), {
    status: "successful",
    mpesaRef,
  });

  await updateDoc(doc(db, "orders", orderId), {
    status: "paid",
    transactionId: txId,
  });
}
