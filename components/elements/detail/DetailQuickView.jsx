import useProduct from "~/hooks/useProduct";
import dynamic from 'next/dynamic'

const ModuleDetailTopInformation = dynamic(
    () => import("~/components/elements/detail/modules/ModuleDetailTopInformation"),
    {loading: ()=> <p>Loading...</p>}
  )
  const ModuleProductDetailDescription = dynamic(
    () => import("~/components/elements/detail/modules/ModuleDetailShoppingActions"),
    {loading: ()=> <p>Loading...</p>}
  )
  const ModuleDetailShoppingActions = dynamic(
    () => import("~/components/elements/detail/modules/ModuleDetailShoppingActions"),
    {loading: ()=> <p>Loading...</p>}
  )
  const ModuleProductDetailSharing = dynamic(
    () => import("~/components/elements/detail/modules/ModuleProductDetailSharing"),
    {loading: ()=> <p>Loading...</p>}
  )
  const ModuleDetailMeta = dynamic(
    () => import("~/components/elements/detail/modules/ModuleDetailMeta"),
    {loading: ()=> <p>Loading...</p>}
  )
  const ModuleDetailColors = dynamic(
    () => import("~/components/elements/detail/modules/ModuleDetailColors"),
    {loading: ()=> <p>Loading...</p>}
  )
  const ModuleDetailSizes = dynamic(
    () => import("~/components/elements/detail/modules/ModuleDetailSizes"),
    {loading: ()=> <p>Loading...</p>}
  )
  const ModuleDetailThumbnailSingle = dynamic(
    () => import("~/components/elements/detail/modules/ModuleDetailThumbnailSingle"),
    {loading: ()=> <p>Loading...</p>}
  )
  
const DetailQuickView = ({ product }) => {
    const { price } = useProduct();
    return (
        <>
            <div className="product--detail ps-product--detail ps-product--quickview">
                <div className="ps-product__header">
                    <ModuleDetailThumbnailSingle product={product} />
                    <div className="ps-product__info">
                        <p className="ps-product__log-status">Only 3 left in stock</p>
                        <ModuleDetailTopInformation product={product} />
                        <ModuleProductDetailDescription product={product} />
                        {price(product)}
                        <div className="ps-product__variants">
                            <ModuleDetailColors />
                            <ModuleDetailSizes />
                        </div>
                        <ModuleDetailShoppingActions product={product} />
                        <ModuleDetailMeta />
                        <ModuleProductDetailSharing />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailQuickView;
