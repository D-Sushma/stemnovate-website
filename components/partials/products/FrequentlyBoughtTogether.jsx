/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react"
import { useSession } from "next-auth/react"
import useGetProducts from "~/hooks/useGetProducts"
import useProductGroup from "~/hooks/useProductGroup"
import AddResourcesModule from "~/components/elements/products/modules/AddResourcesModule"

const FrequentlyBoughtTogether = ({ pType, type, resources_id }) => {
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
      // console.log(session);
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
        // console.log("Session", data);
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
                        <a
                          href={`/resources/details/${data.resources_category_resourcesToresources_category.slug}/${data.resources_id}/${data.access_type}`}
                        >
                          <img
                            src={`${process.env.AWS_S3BUCKET_URL}${data.resources_preview}`}
                            className="rounded-lg"
                            alt={data.resources_name}
                          />
                        </a>
                        <a
                          href={`/resources/details/${data.resources_category_resourcesToresources_category.slug}/${data.resources_id}/${data.access_type}`}
                        >
                          <p className="text-center my-2">
                            {data.resources_name}
                          </p>
                          <p className="ps-product__price sale text-center">
                            <span>£</span> {data.resources_price}
                          </p>
                        </a>

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
