import { Description1, Description2, Description3, Description4 } from "@/Data/Ecommerce";
import { ClothsDetailsTabContentProp } from "@/Types/EcommerceType";
import { TabContent, TabPane } from "reactstrap";

const ClothsDetailsTabContent: React.FC<ClothsDetailsTabContentProp> = ({ activeTab }) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1}>
        <p className="mb-0 m-t-20">{Description1}</p>
        <p className="mb-0 m-t-20">{Description2}</p>
      </TabPane>
      <TabPane tabId={2}>
        <p className="mb-0 m-t-20">{Description3}</p>
      </TabPane>
      <TabPane tabId={3}>
        <p className="mb-0 m-t-20"> {Description4}</p>
      </TabPane>
      <TabPane tabId={4}>
        <p className="mb-0 m-t-20">
          Product Dimensions : 18 x 18 x 4 cm <br />
          Date First Available : 31 March 2024 <br />
          Manufacturer : Tee Stores <br />
          Item part number : TS-WT721-XS-WHITE <br />
        </p>
      </TabPane>
    </TabContent>
  );
};

export default ClothsDetailsTabContent;
