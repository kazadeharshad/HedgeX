import {useState} from "react";
import AccordionItem from "./AccordionItem";

const CreateTicket = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const ticketCategories = [
        {
            title: "Account Opening",
            points: [
                "Resident Individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary",
            ],
        },
        {
            title: "Your Account",
            points: [
                "Your Profile",
                "Account modification",
                "Client Master Report (CMR) and Depository Participant (DP)",
                "Nomination",
                "Transfer and conversion of securities",
            ],
        },
        {
            title: "Funds",
            points: ["Add Funds", "Withdraw Funds", "Add bank accounts", "eMandates"],
        },
        {
            title: "Console",
            points: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"],
        },
        {
            title: "Coin",
            points: [
                "Mutual funds",
                "National Pension Scheme (NPS)",
                "Fixed Deposit (FD)",
                "Features on Coin",
                "Payments and Orders",
                "General",
            ],
        },
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        // <div className="container">
        <div className="row">
            <div className="col-9 accordion-col">
                <div className="accordion">
                    {ticketCategories.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            points={item.points}
                            isOpen={activeIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="col-3 mt-4 d-flex flex-column orange-col" style={{maxHeight: "8rem"}}>
                <div className="d-flex mt-3">
						<span className="" style={{backgroundColor: "orange"}}>
                    &nbsp;&nbsp;{" "}
                </span>
                <div className="p-2 orange  me-0 ">
                    <p>
                        Due to high volume, <span className="links">reactivation</span> requests may take an extra 24-48
                        business hours to process.
                    </p>
                </div>
                <span className="" style={{backgroundColor: "white"}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
					 </div>
                
                <div className="d-flex flex-column mt-4 me-4">

						<table>
							<tr className=" border" style={{backgroundColor:"#efeded"}} >
								<th><p className ='ps-3 pt-2'>Quick links</p></th>
							</tr>
							<tr className=" border">
								<td><p className ='ps-3 pt-2 links'>1. Track account opening</p></td>
							</tr>
							<tr className=" border" >
								<td><p className ='ps-3 pt-2 links'>2. Track segment activation</p></td>
							</tr>
							<tr className=" border" >
								<td><p className ='ps-3 pt-2 links'>3. Intraday margins</p></td>
							</tr>
							<tr className=" border" >
								<td><p className ='ps-3 pt-2 links'>4. Kite user manual</p></td>
							</tr>
							<tr className=" border" >
								<td><p className ='ps-3 pt-2 links'>5. Learn how to create a ticket</p></td>
							</tr>
						</table>
                </div>
					 
            </div>
        </div>
        // </div>
    );
};

export default CreateTicket;
