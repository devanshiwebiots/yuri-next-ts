import React from 'react'
import { Table } from 'reactstrap'

export default function InvoiceTwoBilling() {
    return (
        <td style={{padding:0}}>
            <Table style={{ width: "100%" }} borderless>
                <tbody>
                    <tr style={{ padding: "28px 0", display: "block" }}>
                        <td style={{ width: "63%", padding:0 }}>
                            <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontSize: 16, fontWeight: 500 }}>
                                {'BILLING ADDRESS'}
                            </span>
                            <h4 style={{ fontWeight: 500, margin: "12px 0 6px 0", fontSize: 18 }} >
                                {'Brooklyn Simmons'}
                            </h4>
                            <span style={{ width: "54%", display: "block", lineHeight: "1.5", color: "var(--normal-gray)", opacity: "0.8", fontSize: 16, fontWeight: 400 }} >
                                {'2118 Thornridge Cir. Syracuse, Connecticut 35624, United State'}
                            </span>
                            <span style={{ lineHeight: "2.6", color: "var(--normal-gray)", opacity: "0.8", fontSize: 16, fontWeight: 400 }} >
                                {'Phone : (239) 555-0108'}
                            </span>
                        </td>
                        <td style={{padding:0}}>
                            <span style={{ color: "var(--normal-gray)", opacity: "0.8", fontSize: 16, fontWeight: 500 }} >
                                {'SHIPPING ADDRESS'}
                            </span>
                            <h4 style={{ fontWeight: 500, margin: "12px 0 6px 0", fontSize: 18, }} >
                                {'Cameron Williamson'}
                            </h4>
                            <span style={{ width: "95%", display: "block", lineHeight: "1.5",color: "var(--normal-gray)", opacity: "0.8", fontSize: 16, fontWeight: 400 }}>
                                {'2972 Westheimer Rd. Santa Ana, Illinois 85486'}
                            </span>
                            <span style={{ lineHeight: "2.6",color: "var(--normal-gray)", opacity: "0.8", fontSize: 16, fontWeight: 400 }}>
                                {'Phone : (219) 555-0114'}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    )
}

