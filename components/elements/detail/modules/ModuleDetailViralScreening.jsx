import React from "react";

const ModuleDetailViralScreening = ({ ViralScreening, type }) => {
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
        myInputBoxes = ["Base_Formulation", "Serum", "Cryopreservedvolume", "Storage", "CellType", "Target_Species", "Glutamine", "Buffer", "Indicator", "Growth_Factors", "Sterility", "Mycoplasma", "Fungi", "Adherence", "Antibiotics_Added"];
    } else if (Type === "Diagnostic") {
        myInputBoxes = ["Target", "Detection_method", "Reaction_Mix_1", "Reaction_Mix_2", "Internal_Control", "Positive_Control_Templates", "Validation", "Specificity", "Positive_Controls", "Biosafety_and_Handling"];
    } else {
        myInputBoxes = [];
    }
    return (
        <div className="tab-pane fade active show" id="ViralScreening-content" role="tabpanel" aria-labelledby="ViralScreening-tab">
            <div className="ps-table__name">Quality Assurance</div>
            <table className="table ps-table ps-table--oriented">
                <tbody>
                    {myInputBoxes.includes("HIV1") && (
                        <tr>
                            <th className="ps-table__th">HIV-1</th>
                            <td>{ViralScreening.HIV_1 !== "" ? ViralScreening.HIV_1 : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("HIV2") && (
                        <tr>
                            <th className="ps-table__th">HIV-2</th>
                            <td>{ViralScreening.HIV_2 !== "" ? ViralScreening.HIV_2 : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("HepatitisA") && (
                        <tr>
                            <th className="ps-table__th">Hepatitis A</th>
                            <td>{ViralScreening.HepatitisA !== "" ? ViralScreening.HepatitisA : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("HepatitisB") && (
                        <tr>
                            <th className="ps-table__th">Hepatitis B</th>
                            <td>{ViralScreening.HepatitisB !== "" ? ViralScreening.HepatitisB : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("HepatitisC") && (
                        <tr>
                            <th className="ps-table__th">Hepatitis C</th>
                            <td>{ViralScreening.HepatitisC !== "" ? ViralScreening.HepatitisC : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Mycoplasma") && (
                        <tr>
                            <th className="ps-table__th">Mycoplasma</th>
                            <td>{ViralScreening.Mycoplasma !== "" ? ViralScreening.Mycoplasma : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Inoculationformicrobiologicalgrowth") && (
                        <tr>
                            <th className="ps-table__th">Inoculation for microbiological Mycoplasma</th>
                            <td>{ViralScreening.Inoculationformicrobiologicalgrowth !== "" ? ViralScreening.Inoculationformicrobiologicalgrowth : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("TissueSource") && (
                        <tr>
                            <th className="ps-table__th">Tissue Source</th>
                            <td>{type.productspecification.TissueSource !== "" ? type.productspecification.TissueSource : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("CellNumbers") && (
                        <tr>
                            <th className="ps-table__th">Cell Numbers</th>
                            <td>{type.productspecification.CellNumbers !== "" ? type.productspecification.CellNumbers : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Viability") && (
                        <tr>
                            <th className="ps-table__th">Viability</th>
                            <td>{type.productspecification.Viability !== "" ? type.productspecification.Viability : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("PostFreezeViability") && (
                        <tr>
                            <th className="ps-table__th">Post Freeze Viability</th>
                            <td>{ViralScreening.PostFreezeViability !== "" ? ViralScreening.PostFreezeViability : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Adherence") && (
                        <tr>
                            <th className="ps-table__th">Cell Adherence</th>
                            <td>{type.productspecification.Adherence !== "" ? type.productspecification.Adherence : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Sterility") && (
                        <tr>
                            <th className="ps-table__th">Sterility</th>
                            <td>{ViralScreening.Sterility !== "" ? ViralScreening.Sterility : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Fungi") && (
                        <tr>
                            <th className="ps-table__th">Fungi</th>
                            <td>{ViralScreening.Fungi !== "" ? ViralScreening.Fungi : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Antibiotics_Added") && (
                        <tr>
                            <th className="ps-table__th">Antibiotics Added</th>
                            <td>{ViralScreening.Antibiotics_Added !== "" ? ViralScreening.Antibiotics_Added : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Validation") && (
                        <tr>
                            <th className="ps-table__th">Validation</th>
                            <td>{ViralScreening.Validation !== "" ? ViralScreening.Validation : "-"}</td>
                        </tr>
                    )}

                    {myInputBoxes.includes("Specificity") && (
                        <tr>
                            <th className="ps-table__th">Specificity</th>
                            <td>{ViralScreening.Specificity !== "" ? ViralScreening.Specificity : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Positive_Controls") && (
                        <tr>
                            <th className="ps-table__th">Positive Controls</th>
                            <td>{ViralScreening.Positive_Controls !== "" ? ViralScreening.Positive_Controls : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Biosafety_and_Handling") && (
                        <tr>
                            <th className="ps-table__th">Biosafety and Handling</th>
                            <td>{ViralScreening.Biosafety_and_Handling !== "" ? ViralScreening.Biosafety_and_Handling : "-"}</td>
                        </tr>
                    )}
                    {myInputBoxes.includes("Passage_Number") && (
                        <tr>
                            <th className="ps-table__th">Passage Number</th>
                            <td>{type.productspecification.Passage_Number !== "" ? type.productspecification.Passage_Number : "-"}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ModuleDetailViralScreening;
