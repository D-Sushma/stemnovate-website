import prisma from "../../../lib/prisma"
export default async function handle(req, res) {
  res.setHeader('Cache-Control', 's-maxage=86400')
  const setmenu = async (data) => {
    const menu1 = []
    for (let index = 0; index < data.length; index++) {
      const element = data[index]
      const subcat1 = await prisma.category.findMany({
        where: {
          deleted_at: null,
          is_perent: 0,
          status: 1,
          parentcategory: element.id
        },
        select: {
          id: true,
          category_name: true,
          is_page: true,
          parentcategory: true,
          slug: true
        }
      })
      const isMenu = JSON.parse(element.is_page)
      const urllink = element.urllink
      const modules1 = {
        name: element.category_name,
        key: element.category_name,
        url: isMenu ? "/" + urllink : "/" + element.slug,
        color: "#999494",
        is_page: isMenu,
        icon: "fa-angle-right"
      }
      if (element.id == element.parentcategory) {
        modules1.modules = []
      } else {
        modules1.modules = await setmenu(subcat1)
      }
      menu1.push(modules1)
    }
    return menu1
  }
  const result = await prisma.category.findMany({
    where: {
      deleted_at: null,
      is_perent: 1,
      status: 1
    },
    select: {
      id: true,
      category_name: true,
      is_page: true,
      parentcategory: true,
      urllink: true,
      slug: true
    }
  })
  const menu = []
  for (let index = 0; index < result.length; index++) {
    const element = result[index]
    const subcat = await prisma.category.findMany({
      where: {
        deleted_at: null,
        is_perent: 0,
        status: 1,
        parentcategory: element.id
      },
      select: {
        id: true,
        category_name: true,
        parentcategory: true,
        is_page: true,
        urllink: true,
        slug: true
      }
    })
    const isMenu = JSON.parse(element.is_page)
    const urllink = element.urllink
    const modules = {
      name: element.category_name,
      key: element.category_name,
      url: isMenu ? "/" + urllink : "/" + element.slug,
      color: "#ccccc",
      is_page: isMenu,
      icon: "fa-angle-down"
    }
    if (element.id !== element.parentcategory) {
      modules.modules = []
    } else {
      modules.modules = await setmenu(subcat)
    }
    menu.push(modules)
  }
  res.json(menu)
}
