import { CommonCreativeCardHeaderProp } from "@/Types/BonusUi";
import React, { Fragment } from "react";
import { CardHeader } from "reactstrap";

const CommonCreativeCardHeader:React.FC<CommonCreativeCardHeaderProp> = ({ headerClass, titleClass, title, subTitle }) => {
  return (
    <CardHeader className={headerClass}>
      <h2 className={titleClass}>{title}</h2>
      {subTitle && (
        <p className="mt-1 f-m-light">
          {subTitle.map((data, index) => (
            <Fragment key={index}>
              {data?.text} {data.code && <code>{data.code}</code>}
            </Fragment>
          ))}
        </p>
      )}
    </CardHeader>
  );
};

export default CommonCreativeCardHeader;
