import Link from "next/link"
import dynamic from "next/dynamic"

const Image = dynamic(() => import("~/components/elements/Image"), {
  loading: () => <p>Loading...</p>
})

const OurService = (props) => {
  return (
    <>
      {props?.serviceDetails?.map((data, key) => (
        <div
          key={key}
          className={
            data?.section == 1 || data?.section == "1"
              ? "about-section"
              : "plus-section"
          }
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="row">
                  <h2
                    className={
                      data?.section == 1 || data?.section == "1"
                        ? "heading-services m-4"
                        : "text-white m-4 font-weight-bolder"
                    }
                  >
                    {data?.title1}
                  </h2>
                  <p
                    className={
                      data?.section == 1 || data?.section == "1"
                        ? "mx-4 font-weight-bolder"
                        : "mx-4 text-white font-weight-bolder"
                    }
                    dangerouslySetInnerHTML={{
                      __html: data?.content1
                    }}
                  ></p>
                  <div
                    className={
                      data?.section == 1 || data?.section == "1"
                        ? "mx-4 d-flex flex-column mt-4 flex-md-row-reverse"
                        : "mx-4 d-flex flex-column mt-2 flex-md-row-reverse"
                    }
                  >
                    <div className="overflow-hidden link-hover-thumb-shape image-box-container mx-2">
                      <Image
                        className="zoom-in"
                        src={`${process.env.AWS_S3BUCKET_URL}${data?.image1}`}
                        width={386}
                        height={218}
                        alt={data?.title1}
                      />
                    </div>
                    <p
                      className={
                        data?.section == 1 || data?.section == "1"
                          ? "font-weight-bolder content-services"
                          : "text-white font-weight-bolder content-services"
                      }
                      dangerouslySetInnerHTML={{
                        __html: data?.content2
                      }}
                    ></p>
                  </div>
                </div>
                <div className="row">
                  <Link href={data?.btn_url1} prefetch={false}>
                    <div className="mx-4 button button-services">
                      {data?.btn_text1}
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="row">
                  <h2
                    className={
                      data?.section == 1 || data?.section == "1"
                        ? "heading-services m-4"
                        : "text-white m-4 font-weight-bolder"
                    }
                  >
                    {data?.title2}
                  </h2>
                  <p
                    className={
                      data?.section == 1 || data?.section == "1"
                        ? "mx-4 font-weight-bolder"
                        : " mx-4 text-white font-weight-bolder"
                    }
                    dangerouslySetInnerHTML={{
                      __html: data?.content3
                    }}
                  ></p>
                  <div
                    className={
                      data?.section == 1 || data?.section == "1"
                        ? "mx-4 d-flex flex-column mt-4 flex-md-row-reverse"
                        : "mx-4 d-flex flex-column mt-2 flex-md-row-reverse"
                    }
                  >
                    <div className="overflow-hidden link-hover-thumb-shape image-box-container mx-2">
                      <Image
                        className="zoom-in"
                        src={`${process.env.AWS_S3BUCKET_URL}${data?.image2}`}
                        width={386}
                        height={218}
                        alt={data?.title2}
                      />
                    </div>
                    <p
                      className={
                        data?.section == 1 || data?.section == "1"
                          ? "font-weight-bolder content-services"
                          : "text-white font-weight-bolder content-services"
                      }
                      dangerouslySetInnerHTML={{
                        __html: data?.content4
                      }}
                    ></p>
                  </div>
                </div>
                <div className="row">
                  <Link href={data?.btn_url2} prefetch={false}>
                    <div className="mx-4 button button-services">
                      {data?.btn_text2}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default OurService
