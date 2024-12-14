import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <StyledForm>
          <Field placeholder={"Name"} />
          <Field placeholder={"Email"} />
          <Field placeholder={"Message"} as={"textarea"} />
          <Button type={"submit"} btnType={'primary'}>Send</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
}

const StyledContacts = styled.section`
  
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
