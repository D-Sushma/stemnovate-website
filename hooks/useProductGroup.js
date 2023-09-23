import React from "react"
import { generateTempArray } from "~/utilities/common-helpers"
import { SwiperSlide } from "swiper/react"
import dynamic from 'next/dynamic'

const Product = dynamic(
  () => import("~/components/elements/products/Product"),
 { loading: ()=> <p>Loading...</p>}
)
const SkeletonProduct = dynamic(
  () => import("~/components/elements/skeletons/SkeletonProduct"),
 { loading: ()=> <p>Loading...</p>}
)
const ProductGridWithDetail = dynamic(
  () => import("~/components/elements/products/ProductGridWithDetail"),
  {loading: ()=> <p>Loading...</p>}
)
const ProductList = dynamic(
  () => import("~/components/elements/products/ProductList"),
 { loading: ()=> <p>Loading...</p>}
)
const SkeletonProductHorizontal = dynamic(
  () => import("~/components/elements/skeletons/SkeletonProductHorizontal"),
 { loading: ()=> <p>Loading...</p>}
)

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core"
// import SwiperCarousel from "~/components/elements/carousel/SwiperCarousel"
const SwiperCarousel = dynamic(
  () => import("~/components/elements/carousel/SwiperCarousel"),
 { loading: ()=> <p>Loading...</p>}
)
import { useSession } from "next-auth/react"

// install Swiper modules
SwiperCore.use([Navigation])

export default function useProductGroup() {
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

  return {
    withCarousel: (source, loading, setting) => {
      let carousel
      if (!loading) {
        // if (0) {
        if (source && source.length > 0) {
          const items = source.map((item) => (
            <SwiperSlide key={item.id}>
              <Product userData={userData} product={item} />
            </SwiperSlide>
          ))

          carousel = (
            <SwiperCarousel setting={setting ? setting : undefined}>
              {items}
            </SwiperCarousel>
          )
        } else {
          carousel = <p>No product(s) found.</p>
        }
      } else {
        const skeletons = generateTempArray(2).map((item) => (
          <div className=" col-6" key={item}>
            <SkeletonProduct />
          </div>
        ))
        carousel = <div className="row">{skeletons}</div>
      }
      return carousel
    },
    withGrid: (source, loading, columns = 5) => {
      let view
      if (!loading) {
        if (source && source.length > 0) {
          const items = source.map((item) => (
            <div className="ps-layout__item" key={item.id}>
              <Product userData={userData} product={item} />
            </div>
          ))
          view = (
            <div
              className="ps-layout--grid ps-shop-items"
              data-columns={columns}
            >
              {items}
            </div>
          )
        } else {
          view = <p>No product found.</p>
        }
      } else {
        const items = generateTempArray(columns * 2).map((item) => (
          <div key={item} className="ps-layout__item">
            <SkeletonProduct />
          </div>
        ))
        view = (
          <div
            className="ps-layout--grid ps-shop-items with-skeleton"
            data-columns={columns}
          >
            {items}
          </div>
        )
      }
      return view
    },
    withGridDetail: (source, loading, columns = 5) => {
      let view
      if (!loading) {
        if (source && source.length > 0) {
          const items = source.map((item) => (
            <div className="ps-layout__item" key={item.id}>
              <ProductGridWithDetail product={item} />
            </div>
          ))
          view = (
            <div
              className="ps-layout--grid ps-shop-items with-skeleton"
              data-columns={columns}
            >
              {items}
            </div>
          )
        } else {
          view = <p>No product found.</p>
        }
      } else {
        const items = generateTempArray(columns * 2).map((item) => (
          <div key={item} className="ps-layout__item" data-columns={columns}>
            <SkeletonProduct />
          </div>
        ))
        view = (
          <div
            className="ps-layout--grid ps-shop-items with-skeleton"
            data-columns={columns}
          >
            {items}
          </div>
        )
      }
      return view
    },
    withList: (source, loading, columns = 4) => {
      let view
      if (!loading) {
        if (source && source.length > 0) {
          const items = source.map((item) => (
            <div className="ps-layout__item" key={item.id}>
              <ProductList product={item} />
            </div>
          ))
          view = <div className="ps-layout--list ps-shop-items">{items}</div>
        } else {
          view = <p>No product found.</p>
        }
      } else {
        const items = generateTempArray(columns).map((item) => (
          <div key={item} className="ps-layout__item" data-columns={columns}>
            <SkeletonProductHorizontal />
          </div>
        ))
        view = (
          <div
            className="ps-layout--list ps-shop-items with-skeleton"
            data-columns={columns}
          >
            {items}
          </div>
        )
      }
      return view
    }
  }
}
