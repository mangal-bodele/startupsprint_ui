import React, { useEffect, useState } from 'react';
import { getVerifiedCustomers } from './api';
import axios from 'axios';


const AccordionItem = ({ customer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [guarantors, setGuarantors] = useState([]);
    const [document, setDocument] = useState(null);
    const [family, setFamily] = useState(null);
    const [bank, setBank] = useState(null);
    const [showMoreDetails, setShowMoreDetails] = useState(false);


    useEffect(() => {
        fetchApplications();

    }, []);


    const fetchApplications = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/a1/application/');
            setApplications(response.data);
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    const handleMoreDetails = async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/a1/application/${id}/more_details/`);
            setSelectedApplication(response.data.application);
            setGuarantors(response.data.guarantors);
            setDocument(response.data.document);
            setFamily(response.data.family);
            setBank(response.data.bank);
            setShowMoreDetails(true);  
        } catch (error) {
            console.error('Error fetching application details:', error);
        }
    };

    const handleLessDetails = () => {
        setShowMoreDetails(false);  
        setSelectedApplication(null);
        setGuarantors([]);
        setDocument(null);
        setFamily(null);
        setBank(null);
    };

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">

            <h2 className="accordion-header" id={`heading${customer.id}`}>
                <button className="accordion-button" type="button" onClick={toggleAccordion}>
                    Customer ID: {customer.id} - {customer.business_title}
                </button>
            </h2>
            {isOpen && (
                <div className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        <ul>
                            <li><strong>User:</strong> {customer.user}</li>
                            <li><strong>Application No:</strong> {customer.id}</li>
                            <li><strong>Aadhaar Card:</strong> {customer.aadhaar_no != 0 ? <>{customer.aadhaar_no}</> : <>N/A</>}</li>
                            <li><strong>Pan No:</strong> {customer.pan_no != 0 ? <>{customer.pan_no}</> : <>N/A</>}</li>
                            <li><strong>Type of Employment:</strong> {customer.type_of_employment != 0 ? <>{customer.type_of_employment}</> : <>N/A</>}</li>
                            <li><strong>Business Title:</strong> {customer.business_title != 0 ? <>{customer.business_title}</> : <>N/A</>}</li>
                            <li><strong>Business Type:</strong> {customer.business_type != 0 ? <>{customer.business_type}</> : <>N/A</>}</li>
                            <li><strong>Business Address:</strong> {customer.business_address != 0 ? <>{customer.business_address}</> : <>N/A</>}</li>
                            <li><strong>GST Registration No:</strong> {customer.gst_registration_no != 0 ? <>{customer.gst_registration_no}</> : <>N/A</>}</li>
                            <li><strong>Business License No:</strong> {customer.business_license_no != 0 ? <>{customer.business_license_no}</> : <>N/A</>}</li>
                            <li><strong>Expected Average Annual Turnover:</strong> {customer.expected_average_annual_turnover != 0 ? <>{customer.expected_average_annual_turnover}</> : <>N/A</>}</li>
                            <li><strong>Years in Current Business:</strong> {customer.years_in_current_business != 0 ? <>{customer.years_in_current_business}</> : <>N/A</>}</li>
                            <li><strong>Collateral:</strong> {customer.collateral != 0 ? <>{customer.collateral}</> : <>N/A</>}</li>
                            <li><strong>Status:</strong> {customer.status != 0 ? <>{customer.status}</> : <>N/A</>}</li>
                            <li><strong>Application Timestamp:</strong> {customer.application_timestamp != 0 ? <>{customer.application_timestamp}</> : <>N/A</>}</li>
                            <li><strong>Remark:</strong> {customer.remark != 0 ? <>{customer.remark}</> : <>N/A</>}</li>
                            <li><strong>Credit Score:</strong> {customer.credit_score != 0 ? <>{customer.credit_score}</> : <>N/A</>}</li>
                        </ul>
                    </div>

                    {!showMoreDetails ? (
                        <button onClick={() => handleMoreDetails(customer.id)} className="d-grid gap-2 col-3 mx-auto btn btn-outline-primary mb-2">
                            Customer Id-{customer.id} More Details
                        </button>
                    ) : (
                        <>
                            <button onClick={handleLessDetails} className="d-grid gap-2 col-3 mx-auto btn btn-outline-primary mb-2">
                                Less Details
                            </button>

                            {selectedApplication && (
                                <div>
                                    <h3>Guarantors</h3>
                                    {guarantors.map((guarantor) => (
                                        <ul>
                                            <li>Guarantors Name : {guarantor.name}</li>
                                            <li>Application : {guarantor.application}</li>
                                            <li>Relation With Customer : {guarantor.relation_with_customer != 0 ? <>{guarantor.relation_with_customer}</> : <>N/A</>}</li>
                                            <li>Name : {guarantor.name}</li>
                                            <li>Date of Birth : {guarantor.dob != 0 ? <>{guarantor.dob}</> : <>N/A</>}</li>
                                            <li>Gender : {guarantor.gender}</li>
                                            <li>Email : {guarantor.email != 0 ? <>{guarantor.email}</> : <>N/A</>}</li>
                                            <li>Address : {guarantor.address != 0 ? <>{guarantor.address}</> : <>N/A</>}</li>
                                            <li>City : {guarantor.city != 0 ? <>{guarantor.city}</> : <>N/A</>}</li>
                                            <li>State : {guarantor.state != 0 ? <>{guarantor.state}</> : <>N/A</>}</li>
                                            <li>Country : {guarantor.country != 0 ? <>{guarantor.country}</> : <>N/A</>}</li>
                                            <li>Pin Code : {guarantor.pin_code != 0 ? <>{guarantor.pin_code}</> : <>N/A</>}</li>
                                            <li>Mobile No : {guarantor.mobile != 0 ? <>{guarantor.mobile}</> : <>N/A</>}</li>
                                            <li>Photo : {guarantor.photo && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${guarantor.photo}`} />}</li>
                                            <li>Profession : {guarantor.profession != 0 ? <>{guarantor.profession}</> : <>N/A</>}</li>
                                            <li>Income Certificate : {guarantor.income_certificate && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${guarantor.income_certificate}`} />}</li>
                                            <li>Bank Name : {guarantor.bank_name}</li>
                                            <li>Current Account No : {guarantor.current_account_no != 0 ? <>{guarantor.current_account_no}</> : <>N/A</>}</li>
                                            <li> Passbook copy : {guarantor.passbook_copy && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${guarantor.passbook_copy}`} />}</li>
                                            <li> IFSC code : {guarantor.ifsc_code != 0 ? <>{guarantor.ifsc_code}</> : <>N/A</>}</li>
                                        </ul>
                                    ))}

                                    <h3>Documents</h3>
                                    {document ? (
                                        <ul>
                                            <li>Aadhaar Card : {document.aadhaar_card && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.aadhaar_card}`} />}</li>
                                            <li>PAN Card : {document.pan_card && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.pan_card}`}/>}</li>
                                            <li>Application : {document.application && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.application}`}/>}</li>
                                            <li>Business Address Proof or rent Agreement : {document.business_address_proof_or_copy_of_rent_agreement && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.business_address_proof_or_copy_of_rent_agreement}`}/>}</li>
                                            <li>Electricity bill : {document.electricity_bill && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.electricity_bill}`}/>}</li>
                                            <li>msme_certificate : {document.msme_certificate && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.msme_certificate}`}/>}</li>
                                            <li>gst_certificate : {document.gst_certificate && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.gst_certificate}`}/>}</li>
                                            <li>udyog_aadhaar_registration : {document.udyog_aadhaar_registration && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.udyog_aadhaar_registration}`}/>}</li>
                                            <li>business_license : {document.business_license && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.business_license}`} />}</li>
                                            <li>business_plan_or_proposal : {document.business_plan_or_proposal  && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.business_plan_or_proposal}`} />}</li>
                                            <li>three_year_itr_with_balance_sheet : {document.three_year_itr_with_balance_sheet && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.three_year_itr_with_balance_sheet}`} />}</li>
                                            <li>collateral_document : {document.collateral_document && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${document.collateral_document}`} />}</li>
                                            <li>status : {document.status}</li>
                                            <li>response_timestamp : {document.response_timestamp}</li>
                                            <li>remark : {document.remark != 0 ? <>{document.remark}</> : <>N/A</>}</li>
                                        </ul>

                                    ) : (
                                        <p>No documents available</p>
                                    )}

                                    <h3>Family Details</h3>
                                    {family ? (
                                        <ul>
                                            <li> User : {family.user}</li>
                                            <li> Father Name : {family.father_name}</li>
                                            <li> Father Profession : {family.father_profession}</li>
                                            <li> Father Income : {family.father_income != 0 ? <>{family.father_income}</> : <>N/A</>}</li>
                                            <li> Father Contact : {family.father_contact != 0 ? <>{family.father_contact}</> : <>N/A</>}</li>
                                            <li> Mother Profession : {family.mother_profession}</li>
                                            <li> Mother Income : {family.mother_income != 0 ? <>{family.mother_income}</> : <>N/A</>}</li>
                                            <li> Mother Contact : {family.mother_contact != 0 ? <>{family.mother_contact}</> : <>N/A</>}</li>
                                            <li> Marital Status : {family.marital_status}</li>
                                            <li> Spouse Name : {family.spouse_name}</li>
                                            <li> Spouse Income : {family.spouse_income != 0 ? <>{family.spouse_income}</> : <>N/A</>}</li>
                                            <li> Spouse Profession : {family.spouse_profession}</li>
                                            <li> Spouse Contact : {family.spouse_contact != 0 ? <>{family.spouse_contact}</> : <>N/A</>}</li>
                                        </ul>
                                    ) : (
                                        <p>No documents available</p>
                                    )}

                                    <h3>Bank Details</h3>
                                    {bank ? (
                                        <ul>
                                            <li> User : {bank.user}</li>
                                            <li> Bank Name : {bank.bank_name}</li>
                                            <li> Account Number : {bank.account_number != 0 ? <>{bank.account_number}</> : <>N/A</>}</li>
                                            <li> IFSC Code : {bank.ifsc_code != 0 ? <>{bank.ifsc_code}</> : <>N/A</>}</li>
                                            <li> Passbook Copy : {bank.passbook_copy && <img className='img-fluid' style={{height:'200px', width:'200px'}} src={`http://localhost:8000${bank.passbook_copy}`} />}</li>
                                            <li> Bank Address : {bank.bank_address}</li>
                                        </ul>
                                    ) : (
                                        <p>No documents available</p>
                                    )}


                                </div>
                            )}
                    </>)}
                    </div>  
            )}
                </div>
            );
};

const VerifiedCustomerTable = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
                fetchVerifiedCustomers();
    }, []);

    const fetchVerifiedCustomers = async () => {
        try {
            const data = await getVerifiedCustomers();
            setCustomers(data);
        } catch (error) {
                console.error("Error fetching verified customers:", error);
        }
    };

            return (
            <div className="container mt-5">
                <h1 className="text-center "><u>Verified Customers</u></h1>
                <h4 className="font-monospace text-center">* Information of customers whose documents verification is completed...</h4>
                <div className="accordion">
                    {customers.map((customer, index) => (
                        <AccordionItem key={customer.id} customer={customer} />
                    ))}
                </div>

            </div>
            );
};

            export default VerifiedCustomerTable;



