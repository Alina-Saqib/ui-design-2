import { Box } from "@mui/material"
import Layout from "../../components/Layout"


function SettingPage() {
  return (
    <Layout>
         <Box
        component="main"
        sx={{
          maxWidth: "95%",
          margin: "0 auto",
          pb: "50px",
        }}
      >
        Settings
      </Box>
    </Layout>
  )
}

export default SettingPage
