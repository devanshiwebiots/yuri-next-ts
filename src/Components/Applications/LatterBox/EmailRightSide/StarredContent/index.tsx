import { useAppSelector } from "@/ReduxToolkit/Hooks";
import { Fragment } from "react";
import { TabPane } from "reactstrap";
import StarredEmailContent from "./StarredEmailContent";
import EmptyData from "@/Components/Applications/Contacts/RightContactAside/Common/EmptyData";

const StarredContent = () => {
  const { inboxEmail } = useAppSelector((state) => state.letterBox);
  let starBadges = inboxEmail.filter((data) => data.star === true && 1);

  return (
    <TabPane tabId="3">
      <div className="mail-body-wrapper">
        <ul>
          {starBadges.length > 0 ? (
            inboxEmail.map((data, i) => (
              <Fragment key={i}>
                {data.star && (
                  <li className="inbox-data">
                    <StarredEmailContent data={data} ids={i} />
                  </li>
                )}
              </Fragment>
            ))
          ) : (
            <EmptyData title="Email" />
          )}
        </ul>
      </div>
    </TabPane>
  );
};

export default StarredContent;
