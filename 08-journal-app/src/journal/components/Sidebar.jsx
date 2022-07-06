import { Box, Drawer, Toolbar, Divider, Typography, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"

export const Sidebar = ({drawerWidth = 240}) => {
  return (
    <Box component='nav' sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
        <Drawer 
            variant='permanent' 
            open 
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Jimmy McGill
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'sdjkl hgkjl sdhgj kdshgk jdshg jksdhg ksjd'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
