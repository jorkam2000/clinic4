import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';




export default function ProfileCard({ userInfo} ) {
    console.log(userInfo)
  return (
    <Card sx={{ maxWidth: 345, border: '1px solid black' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userInfo.name[0].toUpperCase()}
          </Avatar>
        }
       
        title={userInfo.name}
        subheader={userInfo.email}
      />
      
    </Card>
  );
}
