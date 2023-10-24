import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

function MainAppBar({ theme }: any) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [age, setAge] = useState("");
  const router = useRouter();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const goToLink = (url: string) => {
    router.push(url, { scroll: false });
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
      }}
      elevation={1}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            color: "transparent",
          }}
        >
          <IconButton sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Box
            component="img"
            sx={{ display: { xs: "none", md: "flex", width: 120, height: 90 } }}
            src="/blacklogo.png"
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#494949" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} href={"/offer"}>
                <Button variant="outlined">Tv</Button>
              </MenuItem>
            </Menu>
          </Box>
          <IconButton sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Avatar
            sx={{
              display: { xs: "flex", md: "none" },
              width: 70,
              height: 30,
            }}
            alt="Remy Sharp"
            src="./blacklogo.png"
          />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              color: "#B60046",
            }}
          >
            <Link href="/shows">Tv through link</Link>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "#B60046",
              }}
              onClick={() => goToLink("/shows")}
            >
              Tv with Router
            </Button>
            <Link href="/top">Top list through link</Link>
            <Button
              sx={{
                textTransform: "capitalize",
                color: "#B60046",
                borderColor: "#B60046",
              }}
              onClick={() => goToLink("/top")}
            >
              Top list with Router
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainAppBar;
