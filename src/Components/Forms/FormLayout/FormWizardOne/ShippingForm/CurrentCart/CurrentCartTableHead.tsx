import { Price, Product, ProductDetails } from "@/Constants";

const CurrentCartTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">{Product}</th>
        <th scope="col">{ProductDetails}</th>
        <th scope="col">{Price}</th>
      </tr>
    </thead>
  );
};

export default CurrentCartTableHead;
