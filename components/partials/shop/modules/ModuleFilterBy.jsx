import React, { useRef } from "react"
import { useRouter } from "next/router"

const ModuleFilterBy = () => {
  const router = useRouter()
  const { query } = router
  const pathname = router.pathname
  const myFilter = useRef()

  React.useEffect(() => {
    console.log("sort by", router.query)
  }, [query])

  const sortByItems = [
    {
      id: 3,
      text: "Male",
      type: "gender",
      url: "Male"
    },
    {
      id: 4,
      text: "Female",
      type: "gender",
      url: "Female"
    },
    {
      id: 5,
      text: "Frozen",
      type: "Delivery_Type",
      url: "Frozen"
    },
    {
      id: 6,
      text: "Live",
      type: "Delivery_Type",
      url: "Live"
    },
    {
      id: 7,
      text: "Human",
      type: "pType",
      url: "13"
    },
    {
      id: 8,
      text: "Animal",
      type: "pType",
      url: "14"
    }
  ]
  const handleRedirect = () => {
    const myInputs = myFilter.current.querySelectorAll("input")
    let queryString = "?"
    myInputs.forEach((node) => {
      if (node.checked) {
        queryString += `${node.name}=${node.id}&`
      }
    })
    console.log(queryString)
    router.push(`${pathname}${queryString}`)
  }

  return (
    <div>
      <h3>Filter By</h3>
      <div className="ps-shop__sortby" ref={myFilter}>
        {sortByItems.map((item) => (
          <div style={{ width: "45%" }} key={item.id}>
            <input
              className="m-2"
              onClick={handleRedirect}
              type="radio"
              id={item.url}
              name={item.type}
            />
            <label htmlFor={item.url}>{item.text} </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModuleFilterBy
