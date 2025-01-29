import SvgIcon from "@/CommonComponents/CommonIcons/CommonSvgIcons";

const InvoiceRightSide = () => {
  return (
    <ul className="simple-list flex-row" style={{ listStyle: "none", display: "flex", alignItems: "center", background: "linear-gradient(291deg, #009DB5 21.2%, #3fcbe1 83.92%)", padding: "31px 80px", borderBottomLeftRadius: 100, gap: 28 }}>
      <li>
        <SvgIcon className="stroke-icon" iconId="call" style={{ height: "14px", width: "14px", fill: "#fff", marginRight: "10px" }} />
        <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>(239) 555-0108</span>
      </li>
      <li style={{ borderLeft: "1px solid rgba(255, 255, 255, 0.3)", borderRight: "1px solid rgba(255, 255, 255, 0.3)", padding: "0 22px" }}>
        <SvgIcon className="stroke-icon" iconId="email-box" style={{ height: "14px", width: "14px", fill: "#fff", marginRight: "10px" }} />
        <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>yuri@themesforest.com</span>
      </li>
      <li>
        <SvgIcon className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="web" />
        <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: 16 }}>{"Website"}: www.yurithemes.com</span>
      </li>
    </ul>
  );
};
export default InvoiceRightSide