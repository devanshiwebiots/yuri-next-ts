import { ImagePath } from '@/Constants';
import Image from 'next/image';

const HeaderProfile = () => {
  return (
    <div className="d-flex">
      <div className="media-size-email">
        <Image width={50} height={50} className= 'me-3 rounded-circle' src={`${ImagePath}/user/user.png`} alt= "Image"  />
      </div>
      <div className="flex-grow-1">
        <h4>MARK JENCO</h4>
        <p>Markjecno@gmail.com</p>
      </div>
    </div>
  );
};

export default HeaderProfile; 