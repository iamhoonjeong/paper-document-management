import React, { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setCreateTitleInput } from '../../../store/library';

import PageSubTitle from '../../../components/PageSubTitle';

type TitleAreaProps = {
  title: string;
  documentCreate?: JSX.Element;
};

const TitleArea = ({ title, documentCreate }: TitleAreaProps) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onCreateTitleInputChange = useCallback(
    (value: string) => {
      dispatch(setCreateTitleInput(value));
    },
    [dispatch],
  );

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onCreateTitleInputChange(e.target.value);
    },
    [onCreateTitleInputChange],
  );

  return (
    <SetTitleArea>
      <PageSubTitle title={`${title} 이름`} />
      <StyledInput placeholder={`${title} 이름 입력`} value={inputValue} onChange={onInputChange} />
      {documentCreate && documentCreate}
    </SetTitleArea>
  );
};

export default TitleArea;

const SetTitleArea = styled.div`
  width: 100%;
  background-color: #fff;
  margin: 20px 0;
  padding: 20px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  overflow: scroll;
`;

const StyledInput = styled(Input)`
  font-size: 12px;
  margin-left: 12px;
  width: 40%;
  max-width: 460px;
  &::placeholder {
    font-size: 12px;
  }
`;
