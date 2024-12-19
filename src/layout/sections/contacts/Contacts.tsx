import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

type ContactsPropsType = {
  for?: string
}

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <StyledForm>
          <StyledLabel for={"username"}>Name</StyledLabel>
          <Field placeholder={"Name"} id="username" />
          <StyledLabel for={"email"}>Email</StyledLabel>
          <Field placeholder={"Email"} id="email" />
          <StyledLabel for={"message"}>Message</StyledLabel>
          <Field placeholder={"Message"} as={"textarea"} id="message" />
          <FlexWrapper justify="end">
            <Button type={"submit"} btnType={'primary'}>Send</Button>
          </FlexWrapper>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
}

const StyledContacts = styled.section`
  z-index: 0;
`

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  ${Button} {
    min-width: 89px;
  }

  ${FlexWrapper} {
    width: 100%;
  }

  textarea {
    resize: none;
    height: 160px;
  }

  @media ${theme.media.mobile} {
    max-width: 100%;
  }
`

const Field = styled.input`
  margin-bottom: 24px;
  font-family: "Nunito", serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 36px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.white};
  padding: 7px 15px;
  color: ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.gray.light};
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.accent};
  }
`

const StyledLabel = styled.label<ContactsPropsType>`
  font-family: "Nunito", serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.82px;
  color: ${theme.colors.font};
  margin-bottom: 8px;
`
