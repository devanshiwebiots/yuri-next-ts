import { ImagePath } from "@/Constants";
import { stepperHorizontalData } from "@/Data/Others";
import { RegisterWizardProp } from "@/Types/Others";
import Image from "next/image";
import CommonLogo from "../Common/CommonLogo";

export default function RegisterWizardList({ level }: RegisterWizardProp) {
  return (
    <ul className="simple-list anchor">
      <li>
        <CommonLogo logoClass="text-start ps-0" />
      </li>
      {stepperHorizontalData.map((item) => (
        <li key={item.id}>
          <div className="progresscont">
            <div className="circleblocks">
              <div className="user-profile">
                <div className={item.divClass}>
                  <div className={`circulo text-center ${level === item.id ? "activecirculo" : level > item.id ? "activecirculo" : ""}`}>
                    <i className={`icofont icofont-${item.icon}`}></i>
                  </div>
                  <div className="user-content">
                    <h3 className="font-primary">{item.title}</h3>
                    <span className="f-light">{item.detail}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
      <li>
        <Image height={240} width={320} className="img-fluid w-100" src={`${ImagePath}/login/icon.png`} alt="loogin page" />
      </li>
    </ul>
  );
}
