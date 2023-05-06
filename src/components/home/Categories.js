import React from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow , styled} from '@mui/material'
import { categories } from '../../constants/data.js'

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;
const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #DA0A2D;
    color: #fff;
    text-decoration: none;
    
    
`;

const Categories = () => {
    return (
        <>
            <StyledButton  variant="contained" color="error">Create Blog</StyledButton>

            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            All Categories
                        </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            categories.map(category => (
                                <TableRow key={category.id}>
                                    <TableCell>
                                        {category.type}
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories