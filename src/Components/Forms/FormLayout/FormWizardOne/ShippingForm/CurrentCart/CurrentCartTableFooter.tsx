import { CurrentCartFooter } from "@/Data/Forms";

const CurrentCartTableFooter = () => {
  return (
    <tfoot>
      {CurrentCartFooter.map((data, index) => (
        <tr key={index}>
          <td>{data.footerTittle}</td>
          <td colSpan={2}>${data.price} </td>
        </tr>
      ))}
    </tfoot>
  );
};

export default CurrentCartTableFooter;
