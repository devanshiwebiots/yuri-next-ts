import { ImagePath } from "@/Constants";
import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { LoginFormProp } from "@/Types/Others";
import Image from "next/image";
import Link from "next/link";

const CommonLogo =({ logoClass }: LoginFormProp)=> {
  return (
    <Link className={`logo ${logoClass}`} href={`/dashboard/default`}>
      <img className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="looginpage" />
      <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt="looginpage" />
    </Link>
  );
}

export default CommonLogo