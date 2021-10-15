import React from "react";
import { Box } from "@mui/system";
import styled from "styled-components";
import abdou from "../../../../assets/images/jpg/abdou.png";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { TYPO_COLORS } from "../../../../assets";
import CostumeButton from "../../../../components/CostumeButton/CostumeButton";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageHeader src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoverfiles.alphacoders.com%2F502%2F50210.jpg&f=1&nofb=1" />
        <AvatarWrapper>
          <Avatar
            src={abdou}
            alt="Aoufi abderahmane"
            sx={{ width: 64, height: 64 }}
          />
        </AvatarWrapper>
      </ImageWrapper>
      <Typography
        sx={{ mt: 4, color: TYPO_COLORS.balck, fontWeight: "bold" }}
        component="h5"
        variant="h6"
      >
        Aoufi Abderahmane
      </Typography>
      <TextWrapper>
        <Typography
          sx={{ color: TYPO_COLORS.lessBlack, fontWeight: "400" }}
          variant="body2"
        >
          Creator of MiniRead
        </Typography>
        <Typography
          paragraph
          sx={{ maxWidth: "300px", mt: 1, color: TYPO_COLORS.lessBlack }}
        >
          I'm full-stach freelance javascript developer with 3 years of
          experience in working and building web applications.
        </Typography>
        <a href="https://portfolio-abdouaoufi.vercel.app/">
          <CostumeButton> Contact me </CostumeButton>{" "}
        </a>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #eeeeee;
  margin-top: 12px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
`;

const ImageHeader = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const AvatarWrapper = styled.div`
  position: absolute;
  bottom: -28px;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 4px;
`;
