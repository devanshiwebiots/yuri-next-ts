import { ImagePath } from "@/Constants";
import { VariationTimeLineDataList } from "@/Data/BonusUi/Timeline";
import Image from "next/image";
import { Fragment } from "react";

export const DynamicVariationTimeline = () => {
  return (
    <Fragment>
      {VariationTimeLineDataList.map((data, index) => (
        <li className={`d-flex ${data.className}`} key={index}>
          <div className={`activity-dot-${data.color}`}></div>
          <div className="w-100 ms-3">
            <p className="d-flex justify-content-between">
              <span className="date-content light-background">{data.date}</span>
              <span>{data.time}</span>
            </p>
            <h6>
              {data.title}
              <span className="dot-notification"></span>
            </h6>
            <span className={data.subTitleClass ? data.subTitleClass : ""}>{data.subTitle}</span>
            {data.image && (
              <div className="recent-images mb-2">
                <ul>
                  {data.image.map((item, index) => (
                    <li key={index}>
                      <div className="recent-img-wrap">
                        <Image width={32} height={34} src={`${ImagePath}/${item}`} className="me-0" alt="chair" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </li>
      ))}
    </Fragment>
  );
};
