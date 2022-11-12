import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

function CategoryList({ categories, slug, getList, type }) {
    const [ShowM, setShowM] = useState([]);
    const [categoriesList, setcategoriesList] = useState(null);

    useEffect(() => {
        // console.log("catList", catList);
        // console.log("slug", slug);
        const getcategories = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_BASE_URL}api/products/getAllcategories?slug=${getList}`);

                const myCategory = await response.json();
                if (myCategory.status == "200") {
                    if (myCategory.result) {
                        setcategoriesList(myCategory.result);
                        const CatArray = myCategory.result;
                        var datafalse = [];
                        CatArray.forEach((element, key) => {
                            //  console.log(key)
                            datafalse.push(false);
                        });
                        setShowM(datafalse);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        getcategories();
        return () => {
            setcategoriesList([]);
        };
    }, []);

    return (
        <>
            {categoriesList &&
                categoriesList.map((item, key) => (
                    <li className=" mb-2 mt-2" key={item.id}>
                        <div className="h4">
                            {item.slug == "Diagnostics-products" ? (
                                <Link href={`/category/${item.slug}`}>
                                    <a className={`ps-link--line`}>
                                        <span className="h4 ml-5">{item.category_name.length > 20 ? item.category_name.slice(0, 20) + ".." : item.category_name}</span>
                                    </a>
                                </Link>
                            ) : (
                                <>
                                    {/* {catList && (catList.length > 0 && catList[0].slug == slug ? setShowM({ ...ShowM, [key]: !ShowM[key] }) : null)} */}
                                    {item.other_category.length > 0 && (
                                        <span className="m-3" onClick={() => setShowM({ ...ShowM, [key]: !ShowM[key] })}>
                                            {ShowM[key] ? <i onClick={() => setShowM({ ...ShowM, [key]: !ShowM[key] })} className="fa fa-minus"></i> : <i onClick={() => setShowM({ ...ShowM, [key]: !ShowM[key] })} className="fa fa-plus"></i>}
                                        </span>
                                    )}

                                    {/* set Open Menu */}
                                    {item.other_category.map((data, k) => {
                                        {
                                            data.slug == slug ? "true -" + data.slug : null;
                                        }
                                    })}

                                    {type == "main"
                                        ? item.other_category.length < 1 && (
                                              <span className="m-3">
                                                  <i className="fa fa-minus"></i>
                                              </span>
                                          )
                                        : null}

                                    {type === "main" ? (
                                        <span
                                            onClick={() => {
                                                type == "main" ? setShowM({ ...ShowM, [key]: !ShowM[key] }) : null;
                                            }}>
                                            <a className={`ps-link--line  ${slug && slug === item.category_name ? "active" : null}`}>
                                                <span className="h4">{item.category_name.length > 20 ? item.category_name.slice(0, 20) + ".." : item.category_name}</span>
                                            </a>
                                        </span>
                                    ) : (
                                        <Link href={`${type == "main" ? "#" : "/category/"}${item.slug}`}>
                                            <a className={`ps-link--line  ${slug && slug === item.category_name ? "active" : null}`}>
                                                <span className="h4">{item.category_name.length > 20 ? item.category_name.slice(0, 20) + ".." : item.category_name}</span>
                                            </a>
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>
                        {ShowM[key] || (slug && slug === item.category_name) ? (
                            <ul className="ml-5">
                                <li className="ml-4">
                                    {item.other_category.map((myItem, k) => (
                                        <CategoryList key={k} getList={myItem.slug} type="sub" categories={myItem.category_name} slug={slug} />
                                    ))}
                                </li>
                            </ul>
                        ) : null}
                    </li>
                ))}
        </>
    );
}

export default CategoryList;
