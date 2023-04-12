import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "./firebase";

const handleSubmit = () => {
  const ref = collection(firestore, "test_data"); // Firebase creates this automatically
  let data = {
    testData: {
      name: "Sunil",
      isWorking: true,
    },
  };
  try {
    addDoc(ref, data);
    console.log("it is working");
  } catch (err) {
    console.log(err);
  }
};
export default handleSubmit;
