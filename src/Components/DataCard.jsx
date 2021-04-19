import React from 'react'
import {Box, Button} from '@chakra-ui/react'
// "state": "Andra Pradesh",
// "distributorName": "BALAJI MEDICAL CORPORATION",
// "address": "9-10-51A, D.S BUILDINGSNAAZ CENTREGUNTUR 522 001,GUNTUR,522001",
// "emailAddress": "bmcguntur1@gmail.com",
// "telephone": 9849828896

const DataCard = ({distributor}) => {
    return(
            <Box className="data-card">
                <p className="data-card-text"> Name: <span>{distributor.distributorName}</span></p>
                <p className="data-card-text"> State: <span>{distributor.state}</span></p>
                <p className="data-card-text"> Email: <span>{distributor.emailAddress || 'No Email Available'}</span></p>
                <p className="data-card-text"> Email: <span>{distributor.address || 'No Email Available'}</span></p>
                <a href={`http://maps.google.com/?q=${distributor.address}`} rel="noreferrer"  target="_blank">
                    <Button className="loc-btn">
                        Location
                    </Button>
                </a>
            </Box>
    )
}

export default DataCard;