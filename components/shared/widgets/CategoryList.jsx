import React, { useEffect, useState } from "react";
import Link from "next/link";

function CategoryList({ slug, getList, type }) {
    const [ShowM, setShowM] = useState([]);
    const [categoriesList, setcategoriesList] = useState(null);

    useEffect(() => {
        const getcategories = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_BASE_URL}api/products/getAllcategories?slug=${getList}`);

                const myCategory = await response.json();
                if (myCategory.status == "200") {
                    if (myCategory.result) {
                        setcategoriesList(myCategory.result);
                        const CatArray = myCategory.result;
                        var datafalse = [];
                        CatArray.forEach(() => {
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
                                    <div className={`div-link--line`}>
                                        <span className="h4 ml-5">{item.category_name.length > 20 ? item.category_name.slice(0, 20) + ".." : item.category_name}</span>
                                    </div>
                                </Link>
                            ) : (
                                <>
                                    {item.other_category.length > 0 && (
                                        <span className="m-3" onClick={() => setShowM({ ...ShowM, [key]: !ShowM[key] })}>
                                            {ShowM[key] ? <i onClick={() => setShowM({ ...ShowM, [key]: !ShowM[key] })} className="fa fa-minus"></i> : <i onClick={() => setShowM({ ...ShowM, [key]: !ShowM[key] })} className="fa fa-plus"></i>}
                                        </span>
                                    )}

                                    {/* set Open Menu */}
                                    {item.other_category.map((data) => {
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
                                            <span className={`div-link--line  ${slug && slug === item.category_name ? "active" : null}`}>
                                                <span className="h4">{item.category_name.length > 20 ? item.category_name.slice(0, 20) + ".." : item.category_name}</span>
                                            </span>
                                        </span>
                                    ) : (
                                        <Link href={`${type == "main" ? "#" : "/category/"}${item.slug}`}>
                                            <div className={`div-link--line  ${slug && slug === item.category_name ? "active" : null}`}>
                                                <span className="h4">{item.category_name.length > 20 ? item.category_name.slice(0, 20) + ".." : item.category_name}</span>
                                            </div>
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
