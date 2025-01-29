import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import { ImagePath, WadeWarren } from "@/Constants";
import { profileHeaderData } from "@/Data/Layout/RightHeader";
import Cookies from "js-cookie";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProfileHeader = () => {
  const { data: session } = useSession();

  const logOut = () => {
    signOut();
  };
  return (
    <li className='profile-nav onhover-dropdown'>
      <div className='onhover-click'>
        <div className='sidebar-image'>
          <Image height={50} width={50} src={session?.user?.image || `${ImagePath}/user.png`} alt='profile' />
          <span className='status status-success'></span>
        </div>

        <div className='sidebar-content'>
          <h4>{session?.user?.email}</h4>
          <span className='f-12 f-w-600 f-light'>{session?.user?.name || "UI Designer"}</span>
        </div>
      </div>
      <ul className='profile-dropdown onhover-show-div simple-list'>
        {profileHeaderData.map((item) => (
          <li key={item.id}>
            <Link href={`${item.link}`}>
              <div className='profile-icon'>
                <SvgIcon iconId={item.icon} />
              </div>
              <span>{item.text} </span>
            </Link>
          </li>
        ))}
        <li>
          <a onClick={logOut}>
            <div className='profile-icon'>
              <SvgIcon iconId='login' />
            </div>
            <span>{"Log out"}</span>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default ProfileHeader;
