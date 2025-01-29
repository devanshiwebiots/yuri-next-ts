import ProductGallery from "./ProductGallery";
import { useState } from "react";
// import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { useAppDispatch } from "@/ReduxToolkit/Hooks";
import { setFormValue } from "@/ReduxToolkit/Reducers/AddProductSlice";
import SVG from "@/CommonComponents/CommonIcons/CommonSvgIcons";
import Link from "next/link";
import { Href } from "@/Constants";

const ProductTwo = () => {

  return (
    <div className="sidebar-body">
      <div className="product-upload">
        <p>Product Image<span className="txt-danger"> *</span> </p>
        {/* <Dropzone className="dropzone" onChange={(files)=>updateFiles(files)} value={files} maxFiles={1} header={false} footer={false} minHeight="80px" name="fileName">
          {files.map((file: ExtFile) => (
            <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
          ))}
          {files.length === 0 && (
            <div className="dz-message needsclick">
              <SVG iconId="file-upload" />
              <h5>Drag your image here, or
                <Link className="txt-primary" href={Href}>&nbsp;browser</Link>
              </h5>
              <span className="note needsclick">SVG,PNG,JPG or GIF</span>
            </div>
          )}
        </Dropzone> */}
      </div>
      <ProductGallery />
    </div>
  );
};

export default ProductTwo;
