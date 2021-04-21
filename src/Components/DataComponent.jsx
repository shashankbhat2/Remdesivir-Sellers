import React, { useEffect, useState } from 'react'
import ReactGoogleSheets from 'react-google-sheets';
import distributorData from '../data.json'
import {States} from '../constants'
import DataCard from './DataCard';
import { Select, SimpleGrid, Box, Button  } from "@chakra-ui/react"
const DataComponent = () => {
    const [data, setData] = useState(distributorData)
    const [selectedState, setSelectedState] = useState("All States")
    const [limit, setLimit] = useState(8)
    const [count, setCount] = useState(data.length)

    const handleChange = (e) => {
        setSelectedState(e.target.value)
    }

    useEffect(() => {
            if(selectedState){
                let newData = distributorData.filter((distributor) => distributor.state === selectedState);
                setCount(newData.length)
                setData(newData)    
            }
            if(selectedState === "All States"){
                setData(distributorData)
                setCount(distributorData.length)
            }
    }, [selectedState])

    return(
        <div className="data-div">
            <Select className="select" width="xs" variant="filled" onChange={handleChange}>
                {States.map((state, i) => (
                    <option value={state} key={i}>{state}</option>
                ))}
            </Select>
            <p className="info-text-small">State: <span>{selectedState}</span></p>
            <p className="info-text-small">found <span>{count}</span> results</p>
            <SimpleGrid columns={[1, null, 3]} marginTop="20px" spacing="5">
                    {
                       data.length !== 0 ? data.slice(0, limit).map((distributor,i) => (
                            <DataCard distributor={distributor} key={i}></DataCard>
                        )) : (
                            <Box>
                                <p className="info-text" style={{textAlign:'center'}}>No Data Available for this State</p>
                            </Box>
                        )
                    }
            </SimpleGrid>
            {
                       count <= limit ? undefined : <Button className="button" onClick={() => setLimit(limit + 8)}>Load More</Button>
            }
        </div>
    )
}

export default ReactGoogleSheets.connect(DataComponent);
