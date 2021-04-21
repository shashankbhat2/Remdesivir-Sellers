import React from 'react'
import {Box, Button} from '@chakra-ui/react'

const DataCard = ({distributor}) => {
    return(
            <Box className="data-card">
                <p className="data-card-text"> Name: <span>{distributor.distributorName}</span></p>
                <p className="data-card-text"> State: <span>{distributor.state}</span></p>
                <p className="data-card-text"> Email: <span>{distributor.emailAddress || 'No Email Available'}</span></p>
                <p className="data-card-text"> Address: <span>{distributor.address}</span></p>
                <a href={`http://maps.google.com/?q=${distributor.address}`} rel="noreferrer"  target="_blank">
                    <Button className="loc-btn">
                        Location
                    </Button>
                </a>
            </Box>
    )
}

export default DataCard;
