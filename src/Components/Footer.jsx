import { Box } from '@chakra-ui/layout'
import React from 'react'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
    return(
        <Box className="footer">
             <p className="footer-line">We stand with everyone fighting on the frontlines. <br></br>
            Please wear a mask and stay at home. </p>
            <p></p>
            <p className="attribute">Made in <strong>Bengaluru</strong> with ❤️ <br></br>
            This is an open source project.</p>
            <p></p>
            <a  href="https://github.com/shashankbhat2/Remdesivir-Sellers" rel="noreferrer" target="_blank">
                <FaGithub size="20px"></FaGithub>
            </a>
        </Box>
    )
}

export default Footer;