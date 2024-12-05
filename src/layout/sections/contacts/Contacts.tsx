import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact me</SectionTitle>
      <StyledForm>
        <Field placeholder={"Name"}/>
        <Field placeholder={"Email"}/>
        <Field placeholder={"Message"} as={"textarea"}/>
        <Button type={"submit"}>Send</Button>
      </StyledForm>
    </StyledContacts>
  );
}

const StyledContacts = styled.section`
  padding-left: 120px;
  padding-right: 120px;
  min-height: 50vh;
  background-color: #fabcfa;
`

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Field = styled.input`
  
`
