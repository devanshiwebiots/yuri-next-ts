import { ImagePath } from "@/Constants";
import { ContactWrapperData } from "@/Data/Chats";
import Image from "next/image";
import { Fragment } from "react";

export const ContactList = () => {
  return (
    <div className="contact-wrapper">
      <>
        {ContactWrapperData.map((data, index) => (
          <Fragment key={index}>
            <p>{data.mainLetter}</p>
            {data.contactData.map((item, i) => (
              <ul className="border-0" key={i}>
                <li className="common-space">
                  <div className="chat-time">
                    {item.image && <Image height={50} width={50} className="img-fluid rounded-circle" src={`${ImagePath}/${item.image}`} alt="user" />}
                    {item.imageUser && (
                      <div className={`custom-name bg-light-${item.color}`}>
                        <p className={`txt-${item.color} f-w-500`}>{item.imageUser}</p>
                      </div>
                    )}
                    <div>
                      <span>{item.name}</span>
                      <p>{item.phoneNumber}</p>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </Fragment>
        ))}
      </>
    </div>
  );
};
