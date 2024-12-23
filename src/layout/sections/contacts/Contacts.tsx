import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Contacts_Styles";

type ContactsPropsType = {
  for?: string
}

export const Contacts: React.FC<ContactsPropsType> = (props: ContactsPropsType) => {
  return (
    <S.Contacts>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <S.StyledForm>
          <StyledLabel for={"username"}>Name</StyledLabel>
          <S.Field placeholder={"Name"} id="username" />
          <StyledLabel for={"email"}>Email</StyledLabel>
          <S.Field placeholder={"Email"} id="email" />
          <StyledLabel for="message">Message</StyledLabel>
          <S.Field placeholder={"Message"} as={"textarea"} id="message" />
          <FlexWrapper justify="end">
            <Button type={"submit"} btnType={'primary'}>Send</Button>
          </FlexWrapper>
        </S.StyledForm>
      </Container>
    </S.Contacts>
  );
}

const StyledLabel = styled.label<ContactsPropsType>`
  font-family: "Nunito", serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.82px;
  color: ${theme.colors.font};
  margin-bottom: 8px;
`