import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';

function Login() {
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const [inputIdValue, setInputIdValue] = useState('');
  const [inputPwValue, setInputPwValue] = useState('');

  const onValidationCheck = useCallback(() => {
    !inputValue.id.length ? setInputIdValue('아이디를 입력해주세요') : setInputIdValue('');
    !inputValue.pw.length ? setInputPwValue('비밀번호를 입력해주세요') : setInputPwValue('');
  }, [inputValue]);

  useEffect(() => {
    const onKeyPressEvent = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onValidationCheck();
      }
    };
    window.addEventListener('keyup', onKeyPressEvent, false);

    return () => {
      window.removeEventListener('keyup', onKeyPressEvent, false);
    };
  }, [onValidationCheck]);

  useEffect(() => {
    if (inputValue.id.length !== 0) {
      setInputIdValue('');
    }
    if (inputValue.pw.length !== 0) {
      setInputPwValue('');
    }
  }, [inputValue]);

  return (
    <Wrap>
      <StyledLogin>
        <Title>paper</Title>
        <SubTitle>document management</SubTitle>
        <InputWrap marginTop>
          <InputId
            name="id"
            value={inputValue.id}
            onChange={onInputChange}
            autoComplete="off"
            placeholder="아이디 입력"
          />
          <Validation>{inputIdValue}</Validation>
        </InputWrap>
        <InputWrap>
          <InputPw name="pw" value={inputValue.pw} onChange={onInputChange} placeholder="비밀번호 입력" />
          <Validation>{inputPwValue}</Validation>
        </InputWrap>
        <StyledButton type="primary" onClick={onValidationCheck}>
          로그인
        </StyledButton>
      </StyledLogin>
    </Wrap>
  );
}

export default Login;

const Wrap = styled.div`
  width: 100%;
  min-width: 400px;
  height: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 140px;
`;

const StyledLogin = styled.div`
  background-color: white;
  font-family: 'Montserrat';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  width: 400px;
  min-width: 400px;
  height: 500px;
  min-height: 500px;
  padding: 40px 60px;
`;

const Title = styled.div`
  font-family: inherit;
  font-weight: 700;
  font-size: 26px;
  color: #ff066b;
  letter-spacing: -0.4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &::selection {
    background-color: #ff066b;
  }
`;

const SubTitle = styled.div`
  font-family: inherit;
  font-size: 16px;
`;

const InputWrap = styled.div<{ marginTop?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => (props.marginTop ? '24px' : '0')};
`;

const Validation = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 300;
  height: 28px;
  display: flex;
  align-items: center;
  color: #ff066b;
  position: relative;
  left: 2px;
`;

const InputId = styled(Input)`
  height: 42px;
`;

const InputPw = styled(Input.Password)`
  height: 42px;
`;

const StyledButton = styled(Button)`
  font-size: 12px;
  align-self: flex-end;
`;
