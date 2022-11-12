import React from "react";
import ModuleCheckoutSummary from "~/components/shared/forms/modules/ModuleCheckoutSummary";
import Countries from "~/public/static/data/AllCountries.json";

const FormCheckout = ({ billingDetails }) => {
    const [myBillingdetails, setMybillingDetails] = React.useState("");
    React.useEffect(() => {
        console.log("myBillingdetails.customer_address_details");
        setMybillingDetails(billingDetails.result);
    }, []);

    const handleUpdate = (index, name, todo) => {
        if (myBillingdetails[index] && myBillingdetails[index][name] != null) {
            const newDetails = { ...myBillingdetails };
            newDetails[index][name] = todo;
            console.log("newDetails exist", newDetails);
            setMybillingDetails(newDetails);
        } else {
            const newDetailsAdd = { ...myBillingdetails };
            newDetailsAdd[index] = {};
            newDetailsAdd[index][name] = todo;
            setMybillingDetails(newDetailsAdd);
            console.log("newDetails new", newDetailsAdd);
        }
    };

    return (
        <form className="ps-form--checkout" action="/" method="get">
            <div className="ps-form__billings">
                <h4 className="ps-form__heading">Billing Details</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                First Name <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                defaultValue={myBillingdetails.customer_address_details && myBillingdetails.customer_address_details.B_First}
                                onChange={(val) => {
                                    handleUpdate("customer_address_details", "B_First", val.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                Last Name <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                defaultValue={myBillingdetails.customer_address_details && myBillingdetails.customer_address_details.B_last}
                                onChange={(val) => {
                                    handleUpdate("customer_address_details", "B_last", val.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Company Name (optional)</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                defaultValue={myBillingdetails.customer_application_details && myBillingdetails.customer_application_details.Organization_Name}
                                onChange={(val) => {
                                    handleUpdate("customer_application_details", "Organization_Name", val.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>
                                Country <sup>*</sup>
                            </label>
                            <select
                                className="ps-select form-control"
                                onChange={(val) => {
                                    handleUpdate("customer_address_details", "B_Country", val.target.value);
                                }}
                                value={myBillingdetails.customer_address_details && myBillingdetails.customer_address_details.B_Country}>
                                {Countries.map((data) => (
                                    <option key={data.name} defaultValue={data.name}>
                                        {data.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>
                                Street address <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="House number and street name"
                                onChange={(val) => {
                                    handleUpdate("customer_address_details", "B_Address1", val.target.value);
                                }}
                                defaultValue={myBillingdetails.customer_address_details && myBillingdetails.customer_address_details.B_Address1}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Postcode / ZIP</label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Apartment, suite, unit etc. "
                                onChange={(val) => {
                                    handleUpdate("customer_address_details", "B_ZIP", val.target.value);
                                }}
                                defaultValue={myBillingdetails.customer_address_details && myBillingdetails.customer_address_details.B_ZIP}
                            />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>
                                Town / City <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={(val) => {
                                    handleUpdate("customer_address_details", "B_Town", val.target.value);
                                }}
                                defaultValue={myBillingdetails.customer_address_details && myBillingdetails.customer_address_details.B_Town}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                Email <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={(val) => {
                                    handleUpdate("customer_address_details", "B_Email", val.target.value);
                                }}
                                defaultValue={myBillingdetails.customer_address_details && myBillingdetails.customer_address_details.B_Email}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                Phone <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                                onChange={(val) => {
                                    handleUpdate("customer_address_details", "B_PhoneNumber", val.target.value);
                                }}
                                defaultValue={myBillingdetails.customer_address_details && myBillingdetails.customer_address_details.B_PhoneNumber}
                            />
                        </div>
                    </div>
                    {/*<div className="col-sm-12">
                        <div className="form-group create-account">
                            <div className="ps-checkbox">
                                <input
                                    className="form-control"
                                    type="checkbox"
                                    id="createAccount"
                                    name="createAccount"
                                />
                                <label htmlFor="createAccount">
                                    Create An account
                                </label>
                            </div>
                        </div>
                    </div>*/}
                    {/*<div className="col-sm-12">
                        <div className="form-group shipping">
                            <div className="ps-checkbox">
                                <input
                                    className="form-control"
                                    type="checkbox"
                                    id="shipping"
                                    name="shipping"
                                />
                                <label htmlFor="shipping">
                                    <strong>
                                        Shipping to different Address
                                    </strong>
                                </label>
                            </div>
                        </div>
                    </div>*/}
                    {/* <div className="col-sm-12">
                        <div className="form-group">
                            <label>Order notes (optional)</label>
                            <textarea
                                className="form-control"
                                rows="6"></textarea>
                        </div>
                    </div> */}
                </div>
            </div>
        </form>
    );
};

export default FormCheckout;
