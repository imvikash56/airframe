import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Card } from 'reactstrap'

export default function Projects() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        return (
         <Card>
          <ListItem>
            <ListItemButton>         
              <ListItemText primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
          </Card>
        );
      })}
    </List>
  );
}