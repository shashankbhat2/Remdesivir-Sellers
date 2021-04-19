import { Box } from '@chakra-ui/layout'
import React from 'react'

const Info = () => {
    return(
        <Box className="info-block">
            <h3 className="ref-heading">What is <span>Remdesivir?</span></h3>
            <p className="remdesivir-info">
            Remdesivir, sold under the brand name Veklury, is a broad-spectrum antiviral medication developed by the biopharmaceutical company Gilead Sciences. It is administered via injection into a vein
            <sup> <a className="ref-links" href="https://en.wikipedia.org/wiki/Remdesivir" rel="noreferrer" target="_blank"> [source] </a></sup>
            </p>
            <ul>
               <h3 className="ref-heading">More info on Remdesivir</h3> 
            <li>
                <a className="ref-links" href="https://www.news18.com/news/india/where-to-look-for-remdesivir-and-how-the-drug-works-for-covid-an-expert-answers-all-your-faqs-3650123.html" rel="noreferrer" target="_blank">
                    Where to Look for Remdesivir and How it Works Against Covid-19: All Your FAQs Answered
                </a>
            </li>
            <li>
                <a className="ref-links" href="https://www.medscape.com/answers/2500114-197451/what-is-the-role-of-the-antiviral-drug-remdesivir-in-the-treatment-of-coronavirus-disease-2019-covid-19" rel="noreferrer" target="_blank">
                What is the role of the antiviral drug remdesivir in the treatment of coronavirus disease 2019 (COVID-19)?
                </a>
            </li>
            </ul>
        </Box>
    )
}

export default Info