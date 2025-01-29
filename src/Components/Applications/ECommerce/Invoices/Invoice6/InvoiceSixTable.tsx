import { Table } from "reactstrap";

import { invoiceSixTable } from "@/Data/Ecommerce";
import InvoiceFooter from "./InvoiceFooter";
import InvoiceSixTableBody from "./InvoiceSixTableBody";

export default function InvoiceSixTable() {
  return (
    <div>
      <div className="table-responsive invoice-table" id="table">
        <Table bordered striped>
          <tbody>
            <tr>
              {invoiceSixTable.map((data, i) => (
                <td className="item" key={i}>
                  <h6 className="p-2 mb-0">{data}</h6>
                </td>
              ))}
            </tr>
            <InvoiceSixTableBody />
            <tr>
              <td />
              <td />
              <td className="Rate">
                <h6 className="mb-0 p-2">{"Total"}</h6>
              </td>
              <td className="payment">
                <h6 className="mb-0 p-2">{"$3,644.25"}</h6>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <InvoiceFooter />
    </div>
  );
}
