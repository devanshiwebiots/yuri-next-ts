import React from 'react'
import { H1Tag, H2Tag, H3Tag, H4Tag, H5Tag, H6Tag, Heading1, SubHeading } from '../../../../Constants'


const ColoredHeadBody =() =>{
    return (
        <tbody>
            <tr>
                <td><code>{H1Tag}</code></td>
                <td>
                    <h1><span className="txt-primary"> {Heading1}</span>{SubHeading}</h1>
                </td>
            </tr>
            <tr>
                <td><code>{H2Tag}</code></td>
                <td>
                    <h2><span className="txt-secondary"> {Heading1}</span>{SubHeading}</h2>
                </td>
            </tr>
            <tr>
                <td><code>{H3Tag}</code></td>
                <td>
                    <h3><span className="txt-success"> {Heading1}</span>{SubHeading}</h3>
                </td>
            </tr>
            <tr>
                <td><code>{H4Tag}</code></td>
                <td>
                    <h4><span className="txt-info"> {Heading1}</span>{SubHeading}</h4>
                </td>
            </tr>
            <tr>
                <td><code>{H5Tag}</code></td>
                <td>
                    <h5><span className="txt-warning"> {Heading1}</span>{SubHeading}</h5>
                </td>
            </tr>
            <tr>
                <td className="pb-0"><code>{H6Tag}</code></td>
                <td className="pb-0">
                    <h5><span className="txt-danger"> {Heading1}</span>{SubHeading}</h5>
                </td>
            </tr>
        </tbody>
    )
}

export default ColoredHeadBody;