import React, { useEffect } from "react";
import ModuleDetailDescription from "~/components/elements/detail/modules/ModuleDetailDescription";
import ModuleDetailSpecification from "~/components/elements/detail/modules/ModuleDetailSpecification";
import { Tabs } from "antd";
import ModuleDetailViralScreening from "./ModuleDetailViralScreening";
import ModuleDetailPluripotency from "./ModuleDetailPluripotency";
import ModuleDetailDifferentiation from "./ModuleDetailDifferentiation";

const { TabPane } = Tabs;
const ModuleDetailTabs = ({ product }) => {
    useEffect(() => {
        console.log(product);
    }, []);

    return (
        <Tabs defaultActiveKey="1" className="ps-product__tabs">
            {JSON.parse(product.description_tab) && (
                <TabPane tab="Description" key="1">
                    <ModuleDetailDescription type={product.type} description={product.productdescription} />
                </TabPane>
            )}
            {JSON.parse(product.specification_tab) && (
                <TabPane tab="Specification" key="2">
                    <ModuleDetailSpecification type={product} Specification={product.productspecification} />
                </TabPane>
            )}
            {JSON.parse(product.ViralScreening_tab) && (
                <TabPane tab="Quality Assurance" key="3">
                    <ModuleDetailViralScreening type={product} ViralScreening={product.microbiology_viralscreening} />
                </TabPane>
            )}
            {JSON.parse(product.Pluripotency_tab) && (
                <TabPane tab="Pluripotency" key="4">
                    <ModuleDetailPluripotency type={product.type} Pluripotency={product.microbiology_viralscreening} />
                </TabPane>
            )}
            {JSON.parse(product.Differentiation_tab) && (
                <TabPane tab="Differentiation" key="5">
                    <ModuleDetailDifferentiation Differentiation={product.microbiology_viralscreening} />
                </TabPane>
            )}
        </Tabs>
    );
};

export default ModuleDetailTabs;
