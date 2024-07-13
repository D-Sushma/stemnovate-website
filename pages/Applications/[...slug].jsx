import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { baseUrl } from "~/repositories/Repository"
import { connect } from "react-redux"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const Subscribe = dynamic(
  () => import("~/components/shared/sections/Subscribe"),
  { loading: () => <p>Loading...</p> }
)

const Applications = ({ ProductData }) => {
  const Router = useRouter()
  const { slug } = Router.query
  const [breadcrumb, setbreadcrumb] = React.useState([])

  useEffect(() => {
    var serarchdata = ""
    var serachurl = "/Applications"
    if (slug != undefined) {
      for (let index = 0; index < slug.length; index++) {
        const data = slug[index]
        if (index == slug.length - 1) {
          var serarchdata = data
        }
        serachurl = serachurl + "/" + data
      }

      slug && getcategoryListBySlug(serarchdata)
    }
  }, [slug])

  const getcategoryListBySlug = async () => {
    const newbreadcrumb = [
      {
        id: 1,
        text: "Home",
        url: "/"
      },
      {
        id: 2,
        text: "Applications",
        url: "/Applications"
      }
    ]
    var urldata = "/Applications"
    for (let index = 0; index < slug.length; index++) {
      const element = slug[index]
      if (index <= slug.length) {
        var urldata = urldata + "/" + element
      } else {
        var urldata = urldata + "/#"
      }
      var bdc = {
        id: 3 + index,
        text: element,
        url: urldata
      }
      newbreadcrumb.push(bdc)
    }
    setbreadcrumb(newbreadcrumb)
  }

  return (
    <Container title={ProductData ? ProductData.categoryList_name : slug}>
      <main className="ps-page ps-page--inner">
        <div className="ps-page__header  breadcrumb-h application-breadcrumb-bg">
          <div className="container ">
            <BreadCrumb breacrumb={breadcrumb} />
            <h1 className="text-center  text-white ">{slug}</h1>
          </div>
        </div>

        <div className="ps-page__content">
          <div className="ps-about">
            <div className=" about-section ">
              <div className="container">
                {ProductData != "" ? (
                  <div
                    className="mt-5"
                    dangerouslySetInnerHTML={{
                      __html: ProductData.short_description
                    }}
                  />
                ) : (
                  <p>No Records Found</p>
                )}
              </div>
            </div>

            <Subscribe />
          </div>
        </div>
      </main>
    </Container>
  )
}

export async function getServerSideProps({ query }) {
  const slug = query.slug
  var ProductData = []
  var data = ""
  if (slug != undefined) {
    data = slug[slug.length - 1]
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    var raw = JSON.stringify({
      slug: data
    })

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    const res = await fetch(baseUrl + "/api/products/catbyname", requestOptions)
    const myProductData = await res.json()
    ProductData = myProductData
  }

  return { props: { ProductData } }
}

export default connect((state) => state)(Applications)
