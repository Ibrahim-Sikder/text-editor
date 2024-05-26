/* eslint-disable react/no-unescaped-entities */
"use client";

import INTForm from "@/components/Forms/Form";
import INTInput from "@/components/Forms/Input";

import {
  Box,
  Button,
  Checkbox,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const validationSchema = z.object({
  user: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const Login = () => {
  const router = useRouter();
  const isLargeDevice = useMediaQuery("(min-width:960px)");
  const isSmallDevice = useMediaQuery("(max-width:600px)");

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#059669",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#059669",
      },
      color: "#059669",
    },
    "& .MuiInputLabel-root": {
      color: "#059669", // Label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#059669",
    },
    "& .MuiInputBase-input": {
      color: "#059669",
    },
  };



  const handleSubmit = async (data: FieldValues) => {
   
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-[#f8f8f8] "
      style={{
        background: isLargeDevice
          ? "linear-gradient(to left , #059669 50%, white 50%)"
          : "",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "60%",
            xl: "50%",
          },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: isLargeDevice ? "600px" : "100%",
            height: isLargeDevice ? "700px" : "auto",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#059669",
            justifyItems: "center",
            color: "#fff",
            padding: "0px 50px",
            display: isLargeDevice ? "flex" : "none",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Welcome To Indiano Travel Agency
          </Typography>
          <Typography component="p" sx={{ marginTop: "10px", color: "#fff" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </Typography>
        </Box>
        <Box className="bg-[#fff] shadow-md px-5 py-16  md:p-20 mx-3 md:m-aut0 lg:m-0 lg:mx-0 rounded-md md:rounded-none  w-full md:w-[600px]  flex items-center text-[#059669] ">
          <INTForm
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              user: '',
              password: ''
            }}
          >
            <Box>
              <Typography
                fontWeight="semibold"
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "10px" }}
              >
                Login to Indiano Travel !
              </Typography>
              <Box>
                <INTInput
                  label="User"
                  sx={textFieldStyles}
                  name="user"
                  fullWidth={true}
                />
                <INTInput
                  label="Password"
                  name="password"
                  sx={textFieldStyles}
                  fullWidth={true}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#059669",
                  }}
                >
                  <Checkbox
                    sx={{
                      "& .MuiIconButton-root": {
                        color: "#fff",
                        borderColor: "#059669",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "#059669",
                      },
                      "& .MuiCheckbox-indeterminate": {
                        color: "#059669",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#059669",
                      fontSize: isSmallDevice ? "12px" : "inherit",
                    }}
                    component="small"
                  >
                    Remember me
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#059669",
                    fontSize: isSmallDevice ? "12px" : "inherit",
                  }}
                  component="small"
                >
                  Forgot password
                </Typography>
              </Box>

              <Button
                type="submit"
                sx={{
                  borderRadius: "50px",
                  padding: "10px",
                  marginTop: "15px",
                  borderColor: "#fff",
                  background: "#059669",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#059669",
                    backgroundColor: "#fff",
                    color: "#059669",
                  },
                }}
                fullWidth
                variant="outlined"
                color="primary"
              >
               
              </Button>
              {/* {isError && (
                <Typography color="error" sx={{ mt: 2 }}>
                  {error?.data?.message || 'An error occurred. Please try again.'}
                </Typography>
              )} */}
            </Box>
          </INTForm>
        </Box>
      </Stack>
    </div>
  );
};

export default Login;
