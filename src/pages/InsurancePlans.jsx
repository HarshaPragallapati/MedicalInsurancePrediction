import React, { useState } from 'react';

const InsurancePlans = () => {
    // State to manage which plan's details are shown
    const [selectedPlan, setSelectedPlan] = useState(null);

    // Data for the plans
    const plans = [
        {
            name: 'Individual Health Insurance',
            description: 'Individual health insurance offering personalized coverage for your unique healthcare needs.'
            ,
            features: [
                'Personal healthcare coverage',
                'Doctor visits',
                'Emergency medical services',
                'Hospitalization and surgeries',
            ],
            price: '$XX/month',
            details: 'An Individual Health Insurance plan is meant for a single person. As the name suggests, it can be bought by a single individual. The individual who gets himself insured with this plan is compensated for the expenses incurred for illness and medical expenses. Such types of medical insurance plan cover all the hospitalisation, surgical, pre and post medication expenditures till the insured limit is reached.The premium of the plan is decided on the basis of the buyers age and medical history. Moreover, the insured individual can cover his spouse, his children, and parents, too by paying an extra premium under the same plan. However, if you get insured for any existing illness, there is a waiting period of 2-3 years for claiming the benefits.' +
                'Features of Individual Health Insurance Policy' +


                "Designed for a single person." +

                "The sum assured is separate for each beneficiary." +

                "Covers hospitalisation expenses such as surgery, daycare treatment, room rent, doctors consultation, and prescription medicines." +
                "Applicable to individuals aged 18 to 65.",

        },
        {
            name: 'Family Health Insurance',
            description: 'Comprehensive coverage for your entire family, including self, spouse, children, and parents.',
            features: [
                'Coverage for self, spouse, children, and parents',
                'Routine checkups for all family members',
                'Emergency hospitalization',
                'Maternity care and pediatric care',
            ],
            price: '$XX/month',
            details: "Popularly known as the Family Floater Plan, Family Health Insurance Policy secures your entire family under a single cover. Health insurance plans for family covers all the members of your family including your spouse, kids, and elders. Only one member of the family has to pay the premium, and the entire family gets insured in a single premium." +

                "            In case two family members are getting simultaneous treatment, you can claim the insurance for both of them till the limit is reached. The premium is decided on the basis of the age of the eldest member to be covered up in the plan. So, try to avoid adding the members who are above 60 years in your family health insurance plan as they are more prone to illness, and thus, the premium will get impacted.",
        },
        {
            name: 'Critical Illness Insurance',
            description: 'Provides financial support for critical medical conditions like cancer, heart attack, etc.',
            features: [
                'Cancer treatment coverage',
                'Heart disease care',
                'Surgical procedures for critical illnesses',
                'Organ transplants and dialysis',
            ],
            price: '$XX/month',
            details: 'Critical Illness Insurance is designed to cover the costs associated with serious medical conditions like cancer, heart disease, and other life-threatening diseases. The plan provides financial support during expensive treatments, helping you cover hospitalization, surgery, and medication costs when dealing with critical illnesses.',
        },
        {
            name: 'Senior Citizen Health Insurance',
            description: 'Health insurance specifically for citizens aged 65 and above.',
            features: [
                'Coverage for senior citizens (age 65+)',
                'Routine medical checkups',
                'Emergency care and hospitalization',
                'Age-specific treatment coverage',
            ],
            price: '$XX/month',
            details: 'Senior Citizen Health Insurance provides specialized coverage for people over the age of 65, including age-specific medical treatments, hospitalization, and emergency care. It helps senior citizens manage healthcare costs associated with aging, making it a must-have for older individuals who require more frequent medical attention.',
        },
        {
            name: 'Personal Accident Insurance',
            description: 'Covers loss or injury resulting from accidents involving the policyholder or driver.',
            features: [
                'Accidental injury coverage',
                'Death benefit in case of accident',
                'Disability and medical treatments',
                'Cover for both owner and driver',
            ],
            price: '$XX/month',
            details: 'Personal Accident Insurance provides financial protection in case of an accident that leads to injury, disability, or death. It covers medical expenses, surgeries, hospitalization, and compensation in case of permanent disability or death resulting from an accident.',
        },
        {
            name: 'Disease-Specific Insurance (M-Care, Corona Kavach, etc.)',
            description: 'Insurance focused on specific diseases, like COVID-19 or other pandemic-related conditions.',
            features: [
                'Coverage for disease-specific treatments',
                'Emergency hospitalization for specific conditions',
                'Pre and post-treatment care',
                'Treatment for critical stages of the disease',
            ],
            price: '$XX/month',
            details: 'Disease-Specific Insurance is tailored to cover the treatment costs of specific diseases like COVID-19, malaria, or other pandemic-related conditions. It includes coverage for hospitalization, emergency treatment, and care related to the specific disease, ensuring that you are financially protected against these targeted illnesses.',
        },
    ];

    // Function to handle clicking the "Learn More" button
    const handleLearnMoreClick = (index) => {
        if (selectedPlan === index) {
            setSelectedPlan(null); // Toggle off if the same plan is clicked
        } else {
            setSelectedPlan(index); // Set the selected plan
        }
    };

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Medical Insurance Plans</h2>

            {/* Plans Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                        <div className={`p-6 ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-green-600' : index === 2 ? 'bg-red-600' : index === 3 ? 'bg-indigo-600' : 'bg-teal-600'} text-white`}>
                            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                            <p className="text-lg mb-4">{plan.description}</p>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-2 text-gray-700">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <p className="mt-6 font-semibold text-xl">Premium: {plan.price}</p>

                            {/* Learn More Button */}
                            <button
                                onClick={() => handleLearnMoreClick(index)}
                                className={`mt-6 ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-green-600' : index === 2 ? 'bg-red-600' : index === 3 ? 'bg-indigo-600' : 'bg-teal-600'} cursor-pointer text-white px-6 py-3 rounded-lg w-full hover:bg-opacity-80 transition duration-300`}
                            >
                                {selectedPlan === index ? 'Show Less' : 'Learn More'}
                            </button>

                            {/* Detailed Plan Info */}
                            {selectedPlan === index && (
                                <div className="mt-6 text-gray-700">
                                    <p>{plan.details}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InsurancePlans;
