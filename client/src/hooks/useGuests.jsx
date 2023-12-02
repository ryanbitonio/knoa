import axios from "axios";
import { useEffect, useState } from "react";

const useGuests = () => {
  const KNOA_API =
    import.meta.env.VITE_KNOA_API || "http://localhost:3000/guests";
  const [guests, setGuests] = useState();

  useEffect(() => {
    const fetchGuests = async () => {
      const response = await axios.get(KNOA_API);
      const guestsList = await response.data;
      setGuests(guestsList);
    };

    fetchGuests();
  }, []);

  return { guests };
};

export default useGuests;
