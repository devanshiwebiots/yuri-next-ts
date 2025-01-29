import {
  H1Tag,
  H2Tag,
  H3Tag,
  H4Tag,
  H5Tag,
  H6Tag,
  Heading1MEGA,
  Heading2XL,
  Heading3LARGE,
  Heading4MEDIUM,
  Heading5SMALL,
  Heading6,
  Rem0875,
  Rem0938,
  Rem1,
  Rem1125,
  Rem125,
  Rem1375,
} from "../../../../Constants";

const HeadingBody = () => {
  return (
    <tbody>
      <tr>
        <td>
          <code>{H1Tag}</code>
        </td>
        <td>
          <h1 className="mb-0">{Rem1375}</h1>
        </td>
        <td>
          <h1>
            <span>{Heading1MEGA}</span>
          </h1>
        </td>
      </tr>
      <tr>
        <td>
          <code>{H2Tag}</code>
        </td>
        <td>
          <h2 className="mb-0">{Rem125}</h2>
        </td>
        <td>
          <h2>
            <span> {Heading2XL}</span>
          </h2>
        </td>
      </tr>
      <tr>
        <td>
          <code>{H3Tag}</code>
        </td>
        <td>
          <h3 className="mb-0">{Rem1125}</h3>
        </td>
        <td>
          <h3>
            <span> {Heading3LARGE}</span>
          </h3>
        </td>
      </tr>
      <tr>
        <td>
          <code>{H4Tag}</code>
        </td>
        <td>
          <h4 className="mb-0">{Rem1}</h4>
        </td>
        <td>
          <h4>
            <span> {Heading4MEDIUM}</span>
          </h4>
        </td>
      </tr>
      <tr>
        <td>
          <code>{H5Tag}</code>
        </td>
        <td>
          <h5 className="mb-0">{Rem0938}</h5>
        </td>
        <td>
          <h5>
            <span> {Heading5SMALL}</span>
          </h5>
        </td>
      </tr>
      <tr>
        <td className="pb-0">
          <code>{H6Tag}</code>
        </td>
        <td className="pb-0">
          <h6 className="mb-0">{Rem0875}</h6>
        </td>
        <td className="pb-0">
          <h5>
            <span>{Heading6}</span>
          </h5>
        </td>
      </tr>
    </tbody>
  );
};

export default HeadingBody;
