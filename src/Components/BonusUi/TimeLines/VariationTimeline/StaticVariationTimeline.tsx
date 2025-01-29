import { UpdatedProduct } from "@/Constants";

export const StaticVariationTimeline=()=> {
  return (
    <li className="d-flex">
      <div className="activity-dot-primary"></div>
      <div className="w-100 ms-3">
        <p className="d-flex justify-content-between">
          <span className="date-content light-background">8th March, 2024 </span>
          <span>1 day ago</span>
        </p>
        <h6>{UpdatedProduct}<span className="dot-notification"></span></h6>
        <p className="f-light">Quisque a consequat ante sit amet magna...</p>
      </div>
    </li>
  );
}
