/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react"
import { useSession } from "next-auth/react"
import useGetProducts from "~/hooks/useGetProducts"
import useProductGroup from "~/hooks/useProductGroup"
import Link from "next/link"
import dynamic from "next/dynamic"

const AddResourcesModule = dynamic(
  () => import("~/components/elements/products/modules/AddResourcesModule"),
  { loading: () => <p>Loading...</p> }
)
const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

const FrequentlyBoughtTogether = ({
  pType,
  type,
  resources_id,
  imp_notes,
  share_img
}) => {
  const {
    loading,
    relateProducts,
    getRelatedProducts,
    resources,
    getRelatedResources
  } = useGetProducts()

  const [userData, setUserData] = React.useState(null)

  const { data: session } = useSession()

  React.useEffect(() => {
    if (session) {
      if (userData !== null) {
        getUserData()
      }
    } else {
      // console.log("Not Session");
    }
  }, [session, userData])

  const getUserData = async () => {
    var raw = JSON.stringify({
      UserLoginId: session?.id
    })
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    }

    await fetch("/api/user/UserDetails", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.code == 200) {
          setUserData(data.result)
        }
      })
  }

  const { withCarousel } = useProductGroup()

  useEffect(() => {
    getRelatedProducts({ _limit: 6, type: type, pType: pType })
    getRelatedResources(resources_id)
  }, [pType, resources_id, type])

  const products = withCarousel(relateProducts, loading)
  return (
    <section className="ps-bought">
       {console.log("imp_notes", imp_notes== null, imp_notes=='null',imp_notes=="")}
      {imp_notes !== null ? (
        <div style={{ marginBottom: "5%" }}>
          <h3 className="ps-bought__title1">Important Notes</h3>
          <div className="ps-bought__wapper1 image-box-container">
            <div
              dangerouslySetInnerHTML={{
                __html: imp_notes
              }}
            ></div>
          </div>
        </div>
      ) : null}
      
      {resources && resources.length > 0 ? (
        <div>
          <h3 className="ps-bought__title">Recommended Resources</h3>
          <div className="my-5">
            <div className="container">
              <div className="row">
                {console.log("resources", resources)}
                {resources &&
                  resources.map((data, key) => (
                    <div key={key} className="col-md-2 border resources-Box">
                      <div>
                        <Link
                          href={`/resources/details/${data.resources_category_resourcesToresources_category.slug}/${data.resources_id}/${data.access_type}`}
                        >
                          <div>
                            <Image
                              src={`${process.env.AWS_S3BUCKET_URL}${data.resources_preview}`}
                              className="rounded-lg"
                              alt={data.resources_name}
                              width={1000}
                              height={563}
                            />
                          </div>
                        </Link>
                        <Link
                          href={`/resources/details/${data.resources_category_resourcesToresources_category.slug}/${data.resources_id}/${data.access_type}`}
                        >
                          <div className="link-hover-thumb-shape">
                            <p className="text-center my-2">
                              {data.resources_name}
                            </p>
                            <p className="ps-product__price sale text-center">
                              <span>£</span>{data.resources_price}
                            </p>
                          </div>
                        </Link>

                        <AddResourcesModule
                          userData={userData}
                          product={data}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <h3 className="ps-bought__title">Recommended Products</h3>
      <div className="ps-bought__wapper">
        <div className="container">
          <div className="ps-section__content">{products}</div>
        </div>
      </div>
    </section>
  )
}

export default FrequentlyBoughtTogether
