import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../firebase/firebaseFirestore";
import { useQuery } from "react-query";

export default function useMotorsApi() {
  const listMotor = useQuery("motorsData", () => {
    return fetchMotors();
  });

  const fetchMotors = async () => {
    try {
      const querySnapshot = await getDocs(collection(dbFirestore, "motors"));
      const data = querySnapshot?.docs?.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data;
    } catch (error) {
      console.log({ error });
    }
  };

  return { listMotor };
}
