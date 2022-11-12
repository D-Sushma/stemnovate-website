import React from "react";
import Image from "next/image";
import { baseUrlProduct } from "~/repositories/Repository";

// Change your Pluripotency content here
const ModuleDetailPluripotency = ({ Pluripotency }) => {
    const images= Pluripotency.Pluripotencyimages.split(',');
    console.log('images',images);
    const myLoader = ({ src, width, quality }) => {
        return `${baseUrlProduct}${src}?w=${width}&q=${quality || 75}`
      }
    return (
        <div
            className="tab-pane fade active show"
            id="specification-content"
            role="tabpanel"
            aria-labelledby="specification-tab">
            <div className="col-12 col-md-12">
            {Pluripotency.Pluripotencyimages && images.map((data,key)=>
                 
                       <div key={key} className="col-12 col-md-4">
                     <Image
      loader={myLoader}
      src={data}
      alt="Picture of the author"
      width={500}
      height={500}
    />
   
                    </div>
                   )
                      
                }
                {Pluripotency.Pluripotency != "" && (
                    <>
                        <h2 className="ps-title mt-5">Pluripotency</h2>
                        <div
                            className="mt-5"
                            dangerouslySetInnerHTML={{
                                __html: Pluripotency.Pluripotency,
                            }}
                        />
                    </>
                )}
               
                
            </div>
        </div>
    );
};

export default ModuleDetailPluripotency;
