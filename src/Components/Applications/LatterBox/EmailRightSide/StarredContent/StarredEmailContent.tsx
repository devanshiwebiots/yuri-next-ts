import SVG from '@/CommonComponents/CommonIcons/CommonSvgIcons';
import { ImagePath } from '@/Constants';
import { useAppDispatch, useAppSelector } from '@/ReduxToolkit/Hooks';
import { handleEnvelope, handleInterview, removeFromFavorite } from '@/ReduxToolkit/Reducers/LetterBoxSlice';
import { CommonDataType } from '@/Types/LetterBox';
import Image from 'next/image';
import { Badge, Input, Label } from 'reactstrap';

const StarredEmailContent :React.FC<CommonDataType> = ({data,ids}) => {
    const {faIcon } = useAppSelector((state) => state.letterBox);
    const dispatch = useAppDispatch()
    const handleValue= ()=> dispatch(handleInterview(true))
    return (
      <>
        <div className="inbox-user">
          <div className="form-check form-check-inline m-0">
            <Input className={`checkbox-${data.color}`} name="emailCheckbox" id={`emailCheckbox${ids}`} type="checkbox" />
            <Label check for={`emailCheckbox${ids}`} />
          </div>
          <div onClick={() => dispatch(removeFromFavorite(data))} >
            <SVG className={`important-mail ${data.star ? "active" : ""}`} iconId="fill-star" />
          </div>
          <div className="rounded-border">
          {data.image && <Image width={38} height={38} src={`${ImagePath}/user/${data.image}`} alt="user" />}
            {data.shortName && <div className={data.color === "success" ? "circle-success" : ""}>
              <p className={`txt-${data.color}`}>{data.shortName}</p>
            </div>}
          </div>
          <p>{data.name}</p>
        </div>
        <div className="inbox-message">
          <div className="email-data" onClick={handleValue}>
            <span>
              {data.message}
              <span>{data.subMessage}</span>
            </span>
            <div className="inbox-width d-flex gap-2 justify-content-start">
              {data.badge &&
                data.badge.map((item, i) => (
                  <div key={i} className="inbox-width">
                    <Badge color="" className={`m-0 badge-light-${item.color} text-${item.color === "light" ? "light-dark" : item.color }`} key={i}> {item.title} </Badge>
                  </div>
                ))}
            </div>
          </div>
          <div className="email-timing">
            <span>{data.time}</span>
          </div>
          <div className="email-options">
            <i className={`fa fa-envelope-o envelope-1 ${!faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(true))}/>
            <i className={`fa fa-envelope-open-o envelope-2 ${ faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
            <i className="fa fa-trash-o trash-3" />
            <i className="fa fa-print" />
          </div>
        </div>
      </>
    );
}

export default StarredEmailContent