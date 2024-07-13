import React, { useEffect } from "react"
import useGetPost from "~/hooks/useGetPost"
import usePostGroup from "~/hooks/usePostGroup"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

const Container = dynamic(() => import("~/components/layouts/Container"), {
  loading: () => <p>Loading...</p>
})
const BreadCrumb = dynamic(() => import("~/components/elements/BreadCrumb"), {
  loading: () => <p>Loading...</p>
})
const CustomPagination = dynamic(
  () => import("~/components/elements/basic/CustomPagination"),
  { loading: () => <p>Loading...</p> }
)

const BlogGridScreen = () => {
  const { getPosts, postItems, loading } = useGetPost()
  const { withGrid } = usePostGroup()
  const { router } = useRouter()

  useEffect(() => {
    router.push("/blog-news")
    getPosts({ _limit: 12 })
  }, [])

  const breadcrumb = [
    {
      text: "Home",
      url: "/"
    },
    {
      text: "Blog Grid"
    }
  ]

  const postsView = withGrid(postItems, loading, 3)
  return (
    <Container title="Blog">
      <div className="ps-page ps-page--inner">
        <div className="container">
          <div className="ps-page__header">
            <BreadCrumb breacrumb={breadcrumb} />
            <h3 className="ps-page__heading">Latest news from Stemnovate</h3>
          </div>
          <div className="ps-page__content">
            <div className="ps-blog">
              {postsView}
              <CustomPagination />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BlogGridScreen
