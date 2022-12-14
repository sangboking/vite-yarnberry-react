import { addNumberSelector } from "@/store/buttonAtom";
import { useRecoilValue } from "recoil";
import { Icon } from "@/assets/svgs";

export default function Button() {
  const number = useRecoilValue(addNumberSelector);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {import.meta.env.VITE_TEST}
        {number}
        <Icon name="facebook" width="1.5rem" height="1.5rem" />
        <Icon name="vite" width="1.5rem" height="1.5rem" />
        <div>안녕하세요</div>
        <div>깃헙 액션 테스트</div>
        <div>s3 - ec2 배포성공</div>
      </div>

      <div>ec2 자동배포 마지막 테스트</div>
    </div>
  );
}
