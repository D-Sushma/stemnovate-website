import React from "react";

const ModuleDetailSpecification = ({ Specification, type }) => {
    var myInputBoxes = [];
    const Type = type.type;
    const Category = type.category_id;

    if (Type === "Primary Cells") {
        if (Category == "14") {
            myInputBoxes = ["LineHistory", "CellType", "Cryopreservedvolume", "Storage", "Growth", "Ethnicity", "Age", "Sex", "Passage_Number", "Mycoplasma", "Inoculationformicrobiologicalgrowth", "CellNumbers", "Viability", "TissueSource"];
        } else {
            myInputBoxes = ["HIV2", "HIV1", "HepatitisA", "HepatitisB", "HepatitisC", "LineHistory", "CellType", "Cryopreservedvolume", "Storage", "Growth", "Ethnicity", "Age", "Sex", "Passage_Number", "Mycoplasma", "Inoculationformicrobiologicalgrowth", "CellNumbers", "Viability", "TissueSource"];
        }
    } else if (Type === "Media") {
        myInputBoxes = ["Base_Formulation", "Serum", "volume", "Storage", "CellType", "Target_Species", "Glutamine", "Buffer", "Indicator", "Growth_Factors", "Sterility", "Mycoplasma", "Fungi", "Adherence", "Antibiotics_Added"];
    } else if (Type === "Diagnostic") {
        myInputBoxes = ["Target", "Detection_method", "Reaction_Mix_1", "Reaction_Mix_2", "Internal_Control", "Positive_Control_Templates", "Validation", "Specificity", "Positive_Controls", "Biosafety_and_Handling"];
    } else {
        myInputBoxes = [];
    }

    return (
        <div className="tab-pane fade active show" id="specification-content" role="tabpanel" aria-labelledby="specification-tab">
            <div className="ps-table__name">Product Specification</div>
            <table className="table ps-table ps-table--oriented">
                <tbody>
                    {myInputBoxes.includes("LineHistory") && (
                        <tr>
                            <th className="ps-table__th">Line History</th>
                            <td>{Specification.LineHistory !== "" ? Specification.LineHistory : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("CellType") && (
                        <tr>
                            <th className="ps-table__th">Cell Type</th>
                            <td>{Specification.CellType !== "" ? Specification.CellType : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Cryopreservedvolume") && (
                        <tr>
                            <th className="ps-table__th">Cryopreserved volume</th>
                            <td>{Specification.Cryopreservedvolume !== "" ? Specification.Cryopreservedvolume : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Storage") && (
                        <tr>
                            <th className="ps-table__th">Storage</th>
                            <td>{Specification.Storage !== "" ? Specification.Storage : "-"}</td>
                        </tr>
                    )}
                    {/* {myInputBoxes.includes("Growth_Factors") && (
                    <tr>
                        <th className="ps-table__th">Post Freeze Viability</th>
                        <td>{Specification.PostFreezeViability !== "" ? Specification.PostFreezeViability : "-"}</td>
                    </tr>)} */}
                    {myInputBoxes.includes("Growth") && (
                        <tr>
                            <th className="ps-table__th">Growth</th>
                            <td>{Specification.Growth !== "" ? Specification.Growth : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Ethnicity") && (
                        <tr>
                            <th className="ps-table__th">{Category == "14" ? "Breed" : "Ethnicity"}</th>
                            <td>{Specification.Ethnicity !== "" ? Specification.Ethnicity : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Age") && (
                        <tr>
                            <th className="ps-table__th">Age</th>
                            <td>{Specification.Age !== "" ? Specification.Age : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Sex") && (
                        <tr>
                            <th className="ps-table__th">Sex</th>
                            <td>{Specification.Sex !== "" ? Specification.Sex : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("TissueSource") && (
                        <tr>
                            <th className="ps-table__th">TissueSource</th>
                            <td>{Specification.TissueSource !== "" ? Specification.TissueSource : "-"}</td>
                        </tr>
                    )}
                    {/* {myInputBoxes.includes("Growth_Factors") && (
                    <tr>
                        <th className="ps-table__th">Cell Numbers</th>
                        <td>{Specification.CellNumbers !== "" ? Specification.CellNumbers : "-"}</td>
                    </tr>)} */}
                    {/* {myInputBoxes.includes("Growth_Factors") && (
                    <tr>
                        <th className="ps-table__th">Adherence</th>
                        <td>{Specification.Adherence !== "" ? Specification.Adherence : "-"}</td>
                    </tr>)} */}
                    {/* {myInputBoxes.includes("Viability") && (
                    <tr>
                        <th className="ps-table__th">Viability</th>
                        <td>{Specification.Viability !== "" ? Specification.Viability : "-"}</td>
                    </tr>
                    )} */}

                    {myInputBoxes.includes("Base_Formulation") && (
                        <tr>
                            <th className="ps-table__th">Base Formulation</th>
                            <td>{Specification.Base_Formulation !== "" ? Specification.Base_Formulation : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Serum") && (
                        <tr>
                            <th className="ps-table__th">Serum</th>
                            <td>{Specification.Serum !== "" ? Specification.Serum : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("volume") && (
                        <tr>
                            <th className="ps-table__th">Volume</th>
                            <td>{Specification.Cryopreservedvolume !== "" ? Specification.Cryopreservedvolume : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Storage") && (
                        <tr>
                            <th className="ps-table__th">Storage</th>
                            <td>{Specification.Storage !== "" ? Specification.Storage : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Target") && (
                        <tr>
                            <th className="ps-table__th">Target</th>
                            <td>{Specification.Target !== "" ? Specification.Target : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Target_Species") && (
                        <tr>
                            <th className="ps-table__th">Target Species</th>
                            <td>{Specification.Target_Species !== "" ? Specification.Target_Species : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Glutamine") && (
                        <tr>
                            <th className="ps-table__th">Glutamine</th>
                            <td>{Specification.Glutamine !== "" ? Specification.Glutamine : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Buffer") && (
                        <tr>
                            <th className="ps-table__th">Buffer</th>
                            <td>{Specification.Buffer !== "" ? Specification.Buffer : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Indicator") && (
                        <tr>
                            <th className="ps-table__th">Indicator</th>
                            <td>{Specification.Indicator !== "" ? Specification.Indicator : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Detection_method") && (
                        <tr>
                            <th className="ps-table__th">Detection Method</th>
                            <td>{Specification.Detection_method !== "" ? Specification.Detection_method : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Reaction_Mix_1") && (
                        <tr>
                            <th className="ps-table__th">Reaction Mix 1</th>
                            <td>{Specification.Reaction_Mix_1 !== "" ? Specification.Reaction_Mix_1 : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Reaction_Mix_2") && (
                        <tr>
                            <th className="ps-table__th">Reaction Mix 2</th>
                            <td>{Specification.Reaction_Mix_2 !== "" ? Specification.Reaction_Mix_2 : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Internal_Control") && (
                        <tr>
                            <th className="ps-table__th">Internal Control</th>
                            <td>{Specification.Internal_Control !== "" ? Specification.Internal_Control : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Positive_Control_Templates") && (
                        <tr>
                            <th className="ps-table__th">Positive Control Templates</th>
                            <td>{Specification.Positive_Control_Templates !== "" ? Specification.Positive_Control_Templates : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Growth_Factors") && (
                        <tr>
                            <th className="ps-table__th">Growth Factors</th>
                            <td>{Specification.Growth_Factors !== "" ? Specification.Growth_Factors : "-"}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ModuleDetailSpecification;
