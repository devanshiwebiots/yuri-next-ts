import { CartTableHeader } from "@/Constants";

export const CartTableHead = () => {
  return (
    <thead>
      <tr>
        {CartTableHeader.map((items, i) => (
          <th key={i}>{items}</th>
        ))}
      </tr>
    </thead>
  );
};
