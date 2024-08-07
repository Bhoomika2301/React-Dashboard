import { Typography, Box , useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Outlet } from "react-router-dom";

const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <Typography variant="h5" sx={{ p: "10px", color: colors.grey[100] }}>
                    ADMINISTRATOR
                </Typography>
            </Box>
            <Outlet />
        </Box>
    );
};
export default Header;