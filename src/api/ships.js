import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  doc,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "@/firebase";

const getAllShips = async () => {
  const shipsRef = collection(firestore, "ships");
  const shipsSnapshot = await getDocs(shipsRef);
  const ships = shipsSnapshot.docs.map((doc) => doc.data());
  return ships;
};

export function useGetAllShips() {
  return useQuery("ships", getAllShips);
}

const getShipById = async (id) => {
  const shipRef = doc(firestore, "ships", id);
  const shipSnapshot = await getDoc(shipRef);

  if (!shipSnapshot.exists()) {
    throw new Error("No document found.");
  }

  return shipSnapshot.data();
};

export function useGetShipById(id) {
  return useQuery(["ship", id], () => getShipById(id));
}

export function useDeleteShipById() {
  const queryClient = useQueryClient();
  return useMutation(
    async (id) => {
      return deleteDoc(doc(firestore, "ships", id));
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("ships");
      },
    }
  );
}
