import Button from "@/components/Button";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useEffect, useState } from "react";

export default function Test() {
  const isMounted = useIsMounted();
  const [number, setNumber] = useState(0);
  console.log(isMounted);

  useEffect(() => {
    if (!isMounted) return;

    console.log("2 render");
  }, [isMounted]);
  return (
    <div
      onClick={() => {
        setNumber(number + 1);
      }}
    >
      <Button />
    </div>
  );
}
